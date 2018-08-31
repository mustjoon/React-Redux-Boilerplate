/* eslint-disable no-constant-condition */
import { take, put, call, fork, select, all } from 'redux-saga/effects'
import { api } from '../services'
import * as actions from '../actions/todo'

// each entity defines 3 creators { request, success, failure }
const { todo, cTodo, dTodo, eTodo } = actions

/***************************** Subroutines ************************************/

// resuable fetch Subroutine
// entity :  user | repo | starred | stargazers
// apiFn  : api.fetchUser | api.fetchRepo | ...
// id     : login | fullName
// url    : next page url. If not provided will use pass id to apiFn
function* fetchEntity(entity, apiFn, id, url) {
  yield put( entity.request(id) )
  const {response, error} = yield call(apiFn, url || id)
  if(response)
    yield put( entity.success(id, response) )
  else
    yield put( entity.failure(id, error) )
}

export const fetchTodos = fetchEntity.bind(null, todo, api.fetchTodos)
export const fetchPostTodos = fetchEntity.bind(null, cTodo, api.createTodo)
export const fetchDeleteTodo = fetchEntity.bind(null, dTodo, api.removeTodo);
export const fetchEditTodo = fetchEntity.bind(null, eTodo, api.editTodo);

// load todos
function* loadTodos(todo, requiredFields) {
  yield call(fetchTodos)
}

function* createTodo(todo) {
  yield call(fetchPostTodos)
}

function* removeTodo(id) {
  yield call(fetchDeleteTodo, id);
}

function* editTodo(data) {
  yield call(fetchEditTodo, data);
}


/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

function* watchLoadTodos() {
  while(true) {
    const { todos } = yield take(actions.LOAD_TODOS)
    yield fork(loadTodos, todos);
  }
}

function* watchCreateTodo() {
  while(true) {
    const { todo } = yield take(actions.CREATE_TODO)
    yield fork(createTodo, todo);
  }
}

function* watchEditTodo() {
  while(true) {
    const {data} = yield take(actions.EDIT_TODO);
    yield fork(editTodo, data)
  }
}

function* watchRemoveTodo() {
  while(true) {
    const { id } = yield take(actions.DELETE_TODO);
    yield fork(removeTodo, id);
  }
}


export default function* root() {
  yield all([
    fork(watchLoadTodos),
    fork(watchCreateTodo),
    fork(watchRemoveTodo),
    fork(watchEditTodo)
  ])
}
