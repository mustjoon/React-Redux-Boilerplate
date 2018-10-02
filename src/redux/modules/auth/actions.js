import {REQUEST, SUCCESS, FAILURE } from '@redux/constants';
import { createRequestTypes, action } from '@redux/actions';

export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';

export const REGISTER_ACTION = createRequestTypes(REGISTER);
export const LOGIN_ACTION = createRequestTypes(LOGIN); 

export const loginAction = {
  request: (data) => action(LOGIN_ACTION[REQUEST], data),
  success: (data, response) => action(LOGIN_ACTION[SUCCESS], {data, response}),
  failure: (data, error) => action(LOGIN_ACTION[FAILURE], {data, error}),
}

export const registerAction = {
  request: (data) => action(REGISTER_ACTION[REQUEST], data),
  success: (data, response) => action(REGISTER_ACTION[SUCCESS], {data, response}),
  failure: (data, error) => action(REGISTER_ACTION[FAILURE], {data, error}),
}

export const login = data => action(LOGIN, {data});
export const register = data => action(REGISTER, {data});
