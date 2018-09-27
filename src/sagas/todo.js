import { take, call, fork } from 'redux-saga/effects'

import { fetchEntity } from './index';
import { todoService as api } from '../services'
import * as actions from '../actions/todo'

const { todo, todos, cTodo, dTodo, eTodo } = actions;

export const fetchTodo = fetchEntity.bind(null, todo, api.fetchOne);
export const fetchTodos = fetchEntity.bind(null, todos, api.fetchAll)
export const fetchPostTodos = fetchEntity.bind(null, cTodo, api.create)
export const fetchDeleteTodo = fetchEntity.bind(null, dTodo, api.Remove);
export const fetchEditTodo = fetchEntity.bind(null, eTodo, api.Edit);

function* loadTodo(id) {
  yield call(fetchTodo, id);
}

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

export function* watchLoadTodo() {
  while(true) {
    const { id } = yield take(actions.LOAD_SINGLE_TODO)
    yield fork(loadTodo, id);
  }
}

export function* watchLoadTodos() {
  while(true) {
    const { todos } = yield take(actions.LOAD_TODOS)
    yield fork(loadTodos, todos);
  }
}

export function* watchCreateTodo() {
  while(true) {
    const { todo } = yield take(actions.CREATE_TODO)
    yield fork(createTodo, todo);
  }
}

export function* watchEditTodo() {
  while(true) {
    const {data} = yield take(actions.EDIT_TODO);
    yield fork(editTodo, data)
  }
}

export function* watchRemoveTodo() {
  while(true) {
    const { id } = yield take(actions.DELETE_TODO);
    yield fork(removeTodo, id);
  }
}