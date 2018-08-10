import { combineReducers } from 'redux';


import task from './task';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

export default combineReducers({
  routing: routerReducer,
  task
});