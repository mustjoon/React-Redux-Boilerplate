/* eslint-disable no-constant-condition */
import { put, call, fork, all } from 'redux-saga/effects'
import { watchLoadTodo, watchLoadTodos, watchCreateTodo, watchEditTodo, watchRemoveTodo } from './todo';
import { watchLoadAlbum, watchLoadAlbums, watchCreateAlbum, watchEditAlbum, watchRemoveAlbum } from './album';
import { watchLogin, watchRegister } from './auth';
/***************************** Subroutines ************************************/

// resuable fetch Subroutine
// entity :  user | repo | starred | stargazers
// apiFn  : api.fetchUser | api.fetchRepo | ...
// id     : login | fullName
// url    : next page url. If not provided will use pass id to apiFn
export function* fetchEntity(entity, apiFn, id, url) {
  yield put( entity.request(id) )
  const {response, error} = yield call(apiFn, url || id)
  if(response) {
    yield put( entity.success(id, response) )
    return response;
  }
  
  else
    yield put( entity.failure(id, error) )
}

export default function* root() {
  yield all([
    fork(watchLoadTodos),
    fork(watchCreateTodo),
    fork(watchRemoveTodo),
    fork(watchEditTodo),
    fork(watchLoadTodo),
    
    fork(watchLoadAlbums),
    fork(watchCreateAlbum),
    fork(watchRemoveAlbum),
    fork(watchEditAlbum),
    fork(watchLoadAlbum),

    fork(watchLogin),
    fork(watchRegister)
  ])
}
