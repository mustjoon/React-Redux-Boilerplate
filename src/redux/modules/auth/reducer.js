import { LOGIN_ACTION, REGISTER_ACTION } from './actions';
import { SUCCESS, FAILURE, REQUEST } from '../../constants';

import merge from 'lodash/object/merge'

const initialState = {
  isLogged: false,
  isRegistering: false,
  isAuthenticating: false,
  error: null,
  user: null
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_ACTION[REQUEST]:
      return merge({}, state, { isAuthenticating: true });
    case LOGIN_ACTION[SUCCESS]:
      return merge({}, state, { isLogged: true, user: action.response});
    case LOGIN_ACTION[FAILURE]:
      return merge({}, state, { isAuthenticating: false, error: action.error});
    case REGISTER_ACTION[REQUEST]:
      return merge({}, state, { isRegistering: true });
    case REGISTER_ACTION[SUCCESS]:
      return merge({}, state, { isRegistering: false});
    case REGISTER_ACTION[FAILURE]:
      return merge({}, state, { isRegistering: false, error: action.error});
    
    default:
      return state;
  }
}