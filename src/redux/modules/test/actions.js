
  import {REQUEST, SUCCESS, FAILURE } from '../../constants ';
  import { createRequestTypes, action } from '../../actions';  
  export const LOAD_TESTS = 'LOAD_TESTS' ; 
  export const CREATE_TEST = 'CREATE_TEST'; 
  export const EDIT_TEST = 'EDIT_TEST';  
  export const DELETE_TEST = 'DELETE_TEST';  
  export const LOAD_SINGLE_TEST = 'LOAD_SINGLE_TEST';  
  export const CLEAR_TEST_REDIRECT = 'CLEAR_TEST_REDIRECT';  
  export const TESTS = createRequestTypes(LOAD_TESTS);  
  export const TEST = createRequestTypes(LOAD_SINGLE_TEST); 
  export const C_TEST = createRequestTypes(CREATE_TEST);  
  export const D_TEST = createRequestTypes(DELETE_TEST) 
  export const E_TEST = createRequestTypes(EDIT_TEST);  

  const ENTITY_NAME = 'test';

  export const test = {
    request: (test) => action(TEST[REQUEST], {id: test}),
    success: (test, response) => action(TEST[SUCCESS], {id: test, response, entity: ENTITY_NAME}),
    failure: (fullName, error) => action(TEST[FAILURE], {fullName, error}),
  }

  export const tests = {
    request: () => action(TESTS[REQUEST], {}),
    success: (test, response) => action(TESTS[SUCCESS], {test, response}),
    failure: (fullName, error) => action(TESTS[FAILURE], {fullName, error}),
  }

  export const cTest = {
    request: (test) => action(C_TEST[REQUEST], {}),
    success: (test, response) => action(C_TEST[SUCCESS], {test, response}),
    failure: (test, error) => action(C_TEST[FAILURE], {test, error})
  }

  export const dTest = {
    request: (test) => action(D_TEST[REQUEST], {id: test}),
    success: (test, response) => action(D_TEST[SUCCESS], {entity: {type: 'test', id: test}, response}),
    failure: (test, error) => action(D_TEST[FAILURE], {test, error})
  }

  export const eTest = {
    request: (test) => action(E_TEST[REQUEST], {}),
    success: (test, response) => action(E_TEST[SUCCESS], {test, response}),
    failure: (test, error) => action(E_TEST[FAILURE], {test, error})
  }

  export const createTest = test => action(CREATE_TEST, {test});
  export const loaTest = (id) => action(LOAD_SINGLE_TEST, {id});
  export const loadTests = test => action(LOAD_TESTS, {test})
  export const removeTest = id => action(DELETE_TEST, {id});
  export const editTest = data => action(EDIT_TEST, {data});
  export const clearTestRedirect = () => action(CLEAR_TEST_REDIRECT);
