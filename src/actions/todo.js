

import {REQUEST, SUCCESS, FAILURE } from './constants';
import { createRequestTypes, action } from './index';

export const LOAD_TODOS = 'LOAD_TODOS';
export const CREATE_TODO = 'CREATE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const TODO = createRequestTypes(LOAD_TODOS);
export const C_TODO = createRequestTypes(CREATE_TODO);
export const D_TODO = createRequestTypes(DELETE_TODO)
export const E_TODO = createRequestTypes(EDIT_TODO);



export const todo = {
  request: () => action(TODO[REQUEST], {}),
  success: (todo, response) => action(TODO[SUCCESS], {todo, response}),
  failure: (fullName, error) => action(TODO[FAILURE], {fullName, error}),
}

export const cTodo = {
  request: (todo) => action(C_TODO[REQUEST], {}),
  success: (todo, response) => action(C_TODO[SUCCESS], {todo, response}),
  failure: (todo, error) => action(C_TODO[FAILURE], {todo, error})
}

export const dTodo = {
  request: (todo) => action(D_TODO[REQUEST], {id: todo}),
  success: (todo, response) => action(D_TODO[SUCCESS], {entity: {type: 'todos', id: todo}, response}),
  failure: (todo, error) => action(D_TODO[FAILURE], {todo, error})
}

export const eTodo = {
  request: (todo) => action(E_TODO[REQUEST], {}),
  success: (todo, response) => action(E_TODO[SUCCESS], {todo, response}),
  failure: (todo, error) => action(E_TODO[FAILURE], {todo, error})
}

export const createTodo = todo => action(CREATE_TODO, {todo});
export const loadTodos = todo => action(LOAD_TODOS, {todo})
export const removeTodo = id => action(DELETE_TODO, {id});
export const editTodo = data => action(EDIT_TODO, {data});


