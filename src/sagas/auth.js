import { take, call, fork, put } from 'redux-saga/effects'
import { fetchEntity } from './index';
import * as actions from  '@redux/modules/auth/actions';
import { authService as api } from '../services'

import {  action } from '@redux/actions';

const { loginAction, registerAction } = actions;

export const fetchLogin = fetchEntity.bind(null, loginAction, api.login);
export const fetchRegister = fetchEntity.bind(null, registerAction, api.register);

function* login(data) {
  yield call(fetchLogin, data);
}

function* register(data) {
  const resp = yield call(fetchRegister, data);
  if(resp) {
    yield put(action(actions.LOGIN, {data}))
  }
}

export function* watchLogin() {
  while(true) {
    const { id } = yield take(actions.LOGIN)
    yield fork(login, id);
  }
}

export function* watchRegister() {
 
  while(true) {
    const { data } = yield take(actions.REGISTER)
    yield fork(register, data);
  }
}
