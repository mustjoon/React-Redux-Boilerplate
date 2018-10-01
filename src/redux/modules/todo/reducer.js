import { TODO, TODOS, E_TODO, D_TODO, CLEAR_TODO_REDIRECT } from './actions';
import { SUCCESS, FAILURE } from '../../constants';
import merge from 'lodash/object/merge'

const initialState = {
  isLoading: false,
  redirect: false,
  redirectURL: ''
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
      return merge({}, state, { isLoading: true });
    case TODO[SUCCESS]:
      return merge({}, state, { isLoading: false });
    case TODO[FAILURE]:
      return merge({}, state, { isLoading: false });
    case E_TODO[SUCCESS]:
      return merge({}, state, { redirect: true, redirectURL: `/item/${action.todo.id}` });
    case CLEAR_TODO_REDIRECT:
      return merge({}, state, { redirect: false });
    case D_TODO[SUCCESS]:
      return merge({}, state, { redirect: true, redirectURL: '/items' });
    default:
      return state
  }
}