
  import { take, call, fork } from 'redux-saga/effects'

  import { fetchEntity } from './index';
  import { xa,removeService as api } from '../services'
  import * as actions from  '@redux/modules/xa,remove/actions';

  const { xa,remove, xa,removes, cXa,remove, dXa,remove, eXa,remove } = actions;

  export const fetchXa,remove = fetchEntity.bind(null, xa,remove, api.fetchOne);
  export const fetchXa,removes = fetchEntity.bind(null, xa,removes, api.fetchAll)
  export const fetchPostXa,removes = fetchEntity.bind(null, cXa,remove, api.create)
  export const fetchDeleteXa,remove = fetchEntity.bind(null, dXa,remove, api.remove);
  export const fetchEditXa,remove = fetchEntity.bind(null, eXa,remove, api.edit);

  function* loadXa,remove(id) {
    yield call(fetchXa,remove, id);
  }

  function* loadXa,removes(xa,remove, requiredFields) {
    yield call(fetchXa,remove)
  }

  function* createXa,remove(xa,remove) {
    yield call(fetchPostXa,removes, xa,remove)
  }

  function* removeXa,remove(id) {
    yield call(fetchDeleteXa,remove, id);
  }

  function* editXa,remove(data) {
    yield call(fetchEditXa,remove, data);
  }

  /******************************************************************************/
  /******************************* WATCHERS *************************************/
  /******************************************************************************/

  export function* watchLoadXa,remove() {
    while(true) {
      const { id } = yield take(actions.LOAD_SINGLE_XA,REMOVE)
      yield fork(loadXa,remove, id);
    }
  }

  export function* watchLoadXa,removes() {
    while(true) {
      const { xa,removes } = yield take(actions.LOAD_XA,REMOVES)
      yield fork(loadXa,removes, xa,removes);
    }
  }

  export function* watchCreateXa,remove() {
    while(true) {
      const { xa,remove } = yield take(actions.CREATE_XA,REMOVE)
      yield fork(createXa,remove, xa,remove);
    }
  }

  export function* watchEditXa,remove() {
    while(true) {
      const {data} = yield take(actions.EDIT_XA,REMOVE);
      yield fork(editXa,remove, data)
    }
  }

  export function* watchRemoveXa,remove() {
    while(true) {
      const { id } = yield take(actions.DELETE_XA,REMOVE);
      yield fork(removeXa,remove, id);
    }
  }
