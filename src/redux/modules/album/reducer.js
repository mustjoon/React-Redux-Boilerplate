import { ALBUM, ALBUMS, E_ALBUM, D_ALBUM, CLEAR_ALBUM_REDIRECT } from './actions';
import {REQUEST, SUCCESS, FAILURE, CLEAR_ACTIVE } from '../../constants';
import update from 'immutability-helper';
import merge from 'lodash/object/merge'

const initialState = {
  isLoading: false,
  redirect: false,
  redirectURL: ''
}

const hideLoadingActions = [
  ALBUM[SUCCESS],
  ALBUM[FAILURE],
  ALBUMS[SUCCESS],
  ALBUMS[FAILURE],
]

export function albumReducer(state = initialState, action) {
  switch (action.type) {
    case hideLoadingActions.indexOf(action.type) !== -1:
      return merge({}, state, { isLoading: true });
    case ALBUM[SUCCESS]:
      return merge({}, state, { isLoading: false });
    case ALBUM[FAILURE]:
      return merge({}, state, { isLoading: false });
    case E_ALBUM[SUCCESS]:
      return merge({}, state, { redirect: true, redirectURL: `/album/${action.album.id}` });
    case CLEAR_ALBUM_REDIRECT:
      return merge({}, state, { redirect: false });
    case D_ALBUM[SUCCESS]:
      return merge({}, state, { redirect: true, redirectURL: '/albums' });
    default:
      return state
  }
}