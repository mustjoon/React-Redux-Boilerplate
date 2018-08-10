import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './redux/create';


import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {  BrowserRouter as Router,  } from 'react-router-dom';

import './index.css';
import Routes from './Routes';

import api from './redux/api';

//export const store = createStore(window.__INITIAL_STATE__);
console.log(store)

if(process.env.NODE_ENV !== 'development') {
  console.log = function(){};
}


// Init api service
api.setStore(store);



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
