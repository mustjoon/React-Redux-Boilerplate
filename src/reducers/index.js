import * as ActionTypes from '../actions'
import merge from 'lodash/object/merge'
import { combineReducers } from 'redux'
import update from 'immutability-helper';


const CREATE = 'CREATE';
const LOAD = 'LOAD';
const EDIT = 'EDIT';
const DELETE = 'DELETE';

function actionType(action) {
  
  var { type } = action;

  if (type.indexOf(CREATE) !== -1) {
    return CREATE;
  } else if(type.indexOf(LOAD) !== -1 ) {
    return LOAD
  }  else if(type.indexOf(EDIT) !== -1 ) {
    return EDIT
  } else if(type.indexOf(DELETE) !== -1) {
    return DELETE;
  }
  return null;
}


function hasEntries(action) {
  return action.response && action.response.entities;
}

// Updates an entity cache in response to any action with response.entities.
function entities(state = { users: {}, repos: {} }, action) {
  if (actionType(action) === LOAD && hasEntries(action)) {
    return merge({}, state, action.response.entities)
  } else if (actionType(action) === CREATE && hasEntries(action)) {
    return merge({}, state, action.response.entities)
  } else if(actionType(action) === EDIT && hasEntries(action)) {
    return merge({}, state, action.response.entities)
  } else if(actionType(action) === DELETE ) {
    
    if(action.entity) {
      /*
      const newState = Object.assign({}, state);
     // delete newState[action.entity.type][action.entity.id];
      

      const { [parentKey]: { childKey, ...c } } = state // generates a new 'c' without 'y'

      /*
      console.log(state[parentKey][childKey])
      console.log(parentKey, childKey);
      console.log("STATE", state);
      const { [parentKey]: parentValue, ...noChild } = state;

      const { [childKey]: removedValue, ...childWithout } = parentValue;
      const withoutThird = { ...noChild, [parentKey]: childWithout };
      console.log(withoutThird);
      return withoutThird;
      */
     const parentKey = action.entity.type;
      const childKey = action.entity.id;
      
     const updatedState = update(state, {
     [parentKey]: {
        $unset: [childKey]
      }
    });    
    return updatedState;
     return Object.assign({}, state, {
      items: [...state.items.filter(item => item.id !== action.id)],
    });
    }
  }
  return state
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



/*
function router(state = { pathname: '/' }, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_ROUTER_STATE:
      return action.state
    default:
      return state
  }
}
*/

const rootReducer = combineReducers({
  entities,
  errorMessage,
})

export default rootReducer
