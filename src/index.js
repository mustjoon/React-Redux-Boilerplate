import React from 'react';
import ReactDOM from 'react-dom';



import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {  BrowserRouter as Router,  } from 'react-router-dom';

import './index.css';
import Routes from './Routes';



import configureStore from './store/configureStore'
import rootSaga from './sagas'

const store = configureStore(window.__INITIAL_STATE__)
store.runSaga(rootSaga)

//export const store = createStore(window.__INITIAL_STATE__);

/*
if(process.env.NODE_ENV !== 'development') {
  console.log = function(){};
}


// Init api service
api.setStore(store);
*/


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Routes/>
      </App>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
