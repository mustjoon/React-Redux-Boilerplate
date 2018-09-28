
import { take, call, fork } from 'redux-saga/effects'

import { fetchEntity } from './index';
import { albumService as api } from '../services'
import * as actions from  '@redux/modules/album/actions';

const { album, albums, cAlbum, dAlbum, eAlbum } = actions;

export const fetchAlbum = fetchEntity.bind(null, album, api.fetchOne);
export const fetchAlbums = fetchEntity.bind(null, albums, api.fetchAll)
export const fetchPostAlbums = fetchEntity.bind(null, cAlbum, api.create)
export const fetchDeleteAlbum = fetchEntity.bind(null, dAlbum, api.remove);
export const fetchEditAlbum = fetchEntity.bind(null, eAlbum, api.edit);

function* loadAlbum(id) {
  yield call(fetchAlbum, id);
}

function* loadAlbums(album, requiredFields) {
  yield call(fetchAlbum)
}

function* createAlbum(album) {
  yield call(fetchPostAlbums, album)
}

function* removeAlbum(id) {
  yield call(fetchDeleteAlbum, id);
}

function* editAlbum(data) {
  yield call(fetchEditAlbum, data);
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

export function* watchLoadAlbum() {
  while(true) {
    const { id } = yield take(actions.LOAD_SINGLE_ALBUM)
    yield fork(loadAlbum, id);
  }
}

export function* watchLoadAlbums() {
  while(true) {
    const { albums } = yield take(actions.LOAD_ALBUMS)
    yield fork(loadAlbums, albums);
  }
}

export function* watchCreateAlbum() {
  while(true) {
    const { album } = yield take(actions.CREATE_ALBUM)
    yield fork(createAlbum, album);
  }
}

export function* watchEditAlbum() {
  while(true) {
    const {data} = yield take(actions.EDIT_ALBUM);
    yield fork(editAlbum, data)
  }
}

export function* watchRemoveAlbum() {
  while(true) {
    const { id } = yield take(actions.DELETE_ALBUM);
    yield fork(removeAlbum, id);
  }
}
  