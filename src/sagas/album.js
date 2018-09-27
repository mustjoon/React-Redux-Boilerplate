import { take, call, fork } from 'redux-saga/effects'

import { fetchEntity } from './index';
import { albumService as api } from '../services'
import * as actions from '../actions/album'

const { album, albums, cAlbum, dAlbum, eAlbum } = actions;

export const fetchOne = fetchEntity.bind(null, album, api.fetchOne);
export const fetchAll = fetchEntity.bind(null, albums, api.fetchAll)
export const fetchPost = fetchEntity.bind(null, cAlbum, api.create)
export const fetchDelete = fetchEntity.bind(null, dAlbum, api.Remove);
export const fetchEdit = fetchEntity.bind(null, eAlbum, api.edit);

function* loadOne(id) {
  yield call(fetchOne, id);
}

// load Albums
function* loadAll(Album, requiredFields) {
  yield call(fetchAll)
}

function* create(Album) {
  yield call(fetchPost)
}

function* remove(id) {
  yield call(fetchDelete, id);
}

function* edit(data) {
  yield call(fetchEdit, data);
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

export function* watchLoadAlbum() {
  while(true) {
    const { id } = yield take(actions.LOAD_SINGLE_ALBUM)
    yield fork(loadOne, id);
  }
}

export function* watchLoadAlbums() {
  while(true) {
    const { Albums } = yield take(actions.LOAD_ALBUMS)
    yield fork(loadAll, Albums);
  }
}

export function* watchCreateAlbum() {
  while(true) {
    const { Album } = yield take(actions.CREATE_ALBUM)
    yield fork(create, Album);
  }
}

export function* watchEditAlbum() {
  while(true) {
    const {data} = yield take(actions.EDIT_ALBUM);
    yield fork(edit, data)
  }
}

export function* watchRemoveAlbum() {
  while(true) {
    const { id } = yield take(actions.DELETE_ALBUM);
    yield fork(remove, id);
  }
}