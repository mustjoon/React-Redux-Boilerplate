import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import thunk from 'redux-thunk';

//import { routerMiddleware } from 'react-router-redux';

import reducer from './modules/reducer';

console.log("ALRIGHT");
export const wtf = 'teST';

const createStore = (initialState = {}) => {
  console.log("hmm?");
  // ======================================================
  // Middleware Configuration
  // ======================================================
 // const middleware = [thunk]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  let composeEnhancers = compose

  if (true) {   // DEV
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createReduxStore(
    reducer,
    initialState,
  //  applyMiddleware(thunk),
    composeEnhancers(
      applyMiddleware(thunk),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  //store.unsubscribeHistory = browserHistory.listen(updateLocation(store))

  if (module.hot) {
    module.hot.accept('./modules/reducer', () => {
      const reducers = require('./modules/reducer').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}

export const store = createStore();
export default store;