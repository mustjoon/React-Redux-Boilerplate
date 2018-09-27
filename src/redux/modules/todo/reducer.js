import { TODO, TODOS } from './actions';
import {REQUEST, SUCCESS, FAILURE, CLEAR_ACTIVE } from '../../constants';
import update from 'immutability-helper';
import merge from 'lodash/object/merge'

const initialState = {
  isLoading: false
}

const hideLoadingActions = [
  TODO[SUCCESS],
  TODO[FAILURE],
  TODOS[SUCCESS],
  TODOS[FAILURE],
]


export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case hideLoadingActions.indexOf(action.type) !== -1:
    console.log()
      return merge({}, state, { isLoading: true });
    case TODO[SUCCESS]:
      return merge({}, state, { isLoading: false });
    case TODO[FAILURE]:
      return merge({}, state, { isLoading: false });
    default:
      return state
  }
}