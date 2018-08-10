

import axios from 'axios';

var instance = axios.create({
  baseURL: '/'
});

export class Api {
  constructor() {
    console.log("init Api");
    this.axios = instance;
  }

  setStore(store) {
    if(!this.store) {
      this.store = store;
      this.dispatch = store.dispatch;
    }
  }

  get(url, params, urlParams,  after, fail) {

    const { axios } = this;
    this.setHeaders();
    this.handleParams(url, params, urlParams);
    
    if(params) {
      url = this.makeQueryString(url, params);
    }
   
    return ( dispatch ) => (axios.get(url)
      .then(data => dispatch(after(data)))
      .catch(err => dispatch(fail(err.response)))); 
  }

  

  post(url, after, fail, params = {}) {
    this.setHeaders();

    return ( dispatch ) => (axios.post(url, params)
      .then(data => dispatch(after(data)))
      .catch(err => dispatch(fail(err.response)))); 
  }

  patch(url, after, fail, params = {}) {
    this.setHeaders();
    return ( dispatch ) => (axios.patch(url, params)
      .then(data => dispatch(after(data)))
      .catch(err => dispatch(fail(err.response)))); 
  }

  put(url, after, fail, params = {}) {
    this.setHeaders();
    return ( dispatch ) => (axios.put(url, params)
      .then(data => dispatch(after(data)))
      .catch(err => dispatch(fail(err.response)))); 
  }

  delete(url, after, fail, params = {}) {
    this.setHeaders();
    return ( dispatch ) => (axios.delete(url, params)
      .then(data => dispatch(after(data)))
      .catch(err => dispatch(fail(err.response)))); 
  }

  setHeaders() {
    const { axios } = this;
    axios.headers = {
      Authorization: 'JWT'+ window.localStorage.get('jwt')  // or whatevr auth you use
    }
  }


  makeQueryString(url, params) {
    let queryString = '';
    for ( var key in params) {
      queryString += '&'+key+'='+params[key];
    }
   return url + '?' + queryString;
  }

  handleParams(params, ) {

  }

}

const api = new Api();
export default api;