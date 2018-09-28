import * as ActionTypes from './actions'
import merge from 'lodash/object/merge'
import { combineReducers } from 'redux'
import update from 'immutability-helper';
import { reducer as formReducer } from 'redux-form';

import { todoReducer } from './modules/todo/reducer';
import { albumReducer } from './modules/album/reducer';

const CLEAR_ACTIVE = 'CLEAR_ACTIVE';
const CREATE = 'CREATE';
const LOAD = 'LOAD';
const EDIT = 'EDIT';
const DELETE = 'DELETE';
const SINGLE = 'SINGLE';

function hasEntries(action) {
  return action.response && action.response.entities;
}

function actionType(action) {
  
  var { type } = action;

  if (type.indexOf(CREATE) !== -1 && hasEntries(action)) {
    return CREATE;
  } else if(type.indexOf(LOAD) !== -1 && hasEntries(action) ) {
    if(type.indexOf(SINGLE) !== -1) {
      return SINGLE;
    }
    return LOAD;
  }  else if(type.indexOf(EDIT) !== -1 && hasEntries(action) ) {
    return EDIT
  } else if(type.indexOf(DELETE) !== -1) {
    return DELETE;
  }
  return action.type;
}


// Updates an entity cache in response to any action with response.entities.
function entities(state = { users: {}, repos: {} }, action) {

  switch(actionType(action)) {
    case LOAD:
      return merge({}, state, action.response.entities)
    case SINGLE:
      const newState = action.response.entities;
      const type = `${action.entity}Id`;

      newState[type] = action.id;

      return merge({}, state, newState)
    case CREATE:
      return merge({}, state, action.response.entities)
    case EDIT:
      return merge({}, state, action.response.entities)
    case DELETE:
      if(action.entity) {
  
        const parentKey = action.entity.type;
        const childKey = action.entity.id;
        
        const updatedState = update(state, {
          [parentKey]: {
            $unset: [childKey]
          }
        });
      
        return updatedState;
      }
      return state;
    case CLEAR_ACTIVE:
        
      const tempState = update(state, {
        $unset: [`${action.entity}Id`]
      });
    
      return tempState;
    default:
      return state;
    
  }
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }

  return state
}


const rootReducer = combineReducers({
  entities,
  errorMessage,
  todo: todoReducer,
  album: albumReducer,
  form: formReducer
})

export default rootReducer
