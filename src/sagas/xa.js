
  import { take, call, fork } from 'redux-saga/effects'

  import { fetchEntity } from './index';
  import { xaService as api } from '../services'
  import * as actions from  '@redux/modules/xa/actions';

  const { xa, xas, cXa, dXa, eXa } = actions;

  export const fetchXa = fetchEntity.bind(null, xa, api.fetchOne);
  export const fetchXas = fetchEntity.bind(null, xas, api.fetchAll)
  export const fetchPostXas = fetchEntity.bind(null, cXa, api.create)
  export const fetchDeleteXa = fetchEntity.bind(null, dXa, api.remove);
  export const fetchEditXa = fetchEntity.bind(null, eXa, api.edit);

  function* loadXa(id) {
    yield call(fetchXa, id);
  }

  function* loadXas(xa, requiredFields) {
    yield call(fetchXa)
  }

  function* createXa(xa) {
    yield call(fetchPostXas, xa)
  }

  function* removeXa(id) {
    yield call(fetchDeleteXa, id);
  }

  function* editXa(data) {
    yield call(fetchEditXa, data);
  }

  /******************************************************************************/
  /******************************* WATCHERS *************************************/
  /******************************************************************************/

  export function* watchLoadXa() {
    while(true) {
      const { id } = yield take(actions.LOAD_SINGLE_XA)
      yield fork(loadXa, id);
    }
  }

  export function* watchLoadXas() {
    while(true) {
      const { xas } = yield take(actions.LOAD_XAS)
      yield fork(loadXas, xas);
    }
  }

  export function* watchCreateXa() {
    while(true) {
      const { xa } = yield take(actions.CREATE_XA)
      yield fork(createXa, xa);
    }
  }

  export function* watchEditXa() {
    while(true) {
      const {data} = yield take(actions.EDIT_XA);
      yield fork(editXa, data)
    }
  }

  export function* watchRemoveXa() {
    while(true) {
      const { id } = yield take(actions.DELETE_XA);
      yield fork(removeXa, id);
    }
  }
