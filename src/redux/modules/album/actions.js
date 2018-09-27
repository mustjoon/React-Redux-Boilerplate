

import {REQUEST, SUCCESS, FAILURE } from '../../constants';
import { createRequestTypes, action } from '../../actions';

export const LOAD_ALBUMS = 'LOAD_ALBUMS';
export const CREATE_ALBUM = 'CREATE_ALBUM';
export const EDIT_ALBUM = 'EDIT_ALBUM';
export const DELETE_ALBUM = 'DELETE_ALBUM';
export const LOAD_SINGLE_ALBUM = 'LOAD_SINGLE_ALBUM';

const ENTITY_NAME = 'album';

export const ALBUMS = createRequestTypes(LOAD_ALBUMS);
export const ALBUM = createRequestTypes(LOAD_SINGLE_ALBUM);
export const C_ALBUM = createRequestTypes(CREATE_ALBUM);
export const D_ALBUM = createRequestTypes(DELETE_ALBUM)
export const E_ALBUM = createRequestTypes(EDIT_ALBUM);


export const album = {
  request: (album) => action(ALBUM[REQUEST], {id: album}),
  success: (album, response) => action(ALBUM[SUCCESS], {id: album, response, entity: ENTITY_NAME}),
  failure: (fullName, error) => action(ALBUM[FAILURE], {fullName, error}),
}

export const albums = {
  request: () => action(ALBUMS[REQUEST], {}),
  success: (album, response) => action(ALBUMS[SUCCESS], {album, response}),
  failure: (fullName, error) => action(ALBUMS[FAILURE], {fullName, error}),
}

export const cAlbum = {
  request: (album) => action(C_ALBUM[REQUEST], {}),
  success: (album, response) => action(C_ALBUM[SUCCESS], {album, response}),
  failure: (album, error) => action(C_ALBUM[FAILURE], {album, error})
}

export const dAlbum = {
  request: (album) => action(DELETE_ALBUM[REQUEST], {id: album}),
  success: (album, response) => action(DELETE_ALBUM[SUCCESS], {entity: {type: 'albums', id: album}, response}),
  failure: (album, error) => action(DELETE_ALBUM[FAILURE], {album, error})
}

export const eAlbum = {
  request: (album) => action(E_ALBUM[REQUEST], {}),
  success: (album, response) => action(E_ALBUM[SUCCESS], {album, response}),
  failure: (album, error) => action(E_ALBUM[FAILURE], {album, error})
}

export const createAlbum = album => action(CREATE_ALBUM, {album});
export const loadAlbum = (id) => action(LOAD_SINGLE_ALBUM, {id});
export const loadAlbums = album => action(LOAD_ALBUMS, {album})
export const removeAlbum = id => action(DELETE_ALBUM, {id});
export const editAlbum = data => action(EDIT_ALBUM, {data});


