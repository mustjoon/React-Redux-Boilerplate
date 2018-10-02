
  import { take, call, fork } from 'redux-saga/effects'

  import { fetchEntity } from './index';
  import { testService as api } from '../services'
  import * as actions from  '@redux/modules/test/actions';

  const { test, tests, cTest, dTest, eTest } = actions;

  export const fetchTest = fetchEntity.bind(null, test, api.fetchOne);
  export const fetchTests = fetchEntity.bind(null, tests, api.fetchAll)
  export const fetchPostTests = fetchEntity.bind(null, cTest, api.create)
  export const fetchDeleteTest = fetchEntity.bind(null, dTest, api.remove);
  export const fetchEditTest = fetchEntity.bind(null, eTest, api.edit);

  function* loadTest(id) {
    yield call(fetchTest, id);
  }

  function* loadTests(test, requiredFields) {
    yield call(fetchTest)
  }

  function* createTest(test) {
    yield call(fetchPostTests, test)
  }

  function* removeTest(id) {
    yield call(fetchDeleteTest, id);
  }

  function* editTest(data) {
    yield call(fetchEditTest, data);
  }

  /******************************************************************************/
  /******************************* WATCHERS *************************************/
  /******************************************************************************/

  export function* watchLoadTest() {
    while(true) {
      const { id } = yield take(actions.LOAD_SINGLE_TEST)
      yield fork(loadTest, id);
    }
  }

  export function* watchLoadTests() {
    while(true) {
      const { tests } = yield take(actions.LOAD_TESTS)
      yield fork(loadTests, tests);
    }
  }

  export function* watchCreateTest() {
    while(true) {
      const { test } = yield take(actions.CREATE_TEST)
      yield fork(createTest, test);
    }
  }

  export function* watchEditTest() {
    while(true) {
      const {data} = yield take(actions.EDIT_TEST);
      yield fork(editTest, data)
    }
  }

  export function* watchRemoveTest() {
    while(true) {
      const { id } = yield take(actions.DELETE_TEST);
      yield fork(removeTest, id);
    }
  }
