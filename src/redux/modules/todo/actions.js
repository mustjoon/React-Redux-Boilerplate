

import {REQUEST, SUCCESS, FAILURE, CLEAR_ACTIVE } from '../../constants';
import { createRequestTypes, action } from '../../actions';

export const LOAD_TODOS = 'LOAD_TODOS';
export const CREATE_TODO = 'CREATE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const LOAD_SINGLE_TODO = 'LOAD_SINGLE_TODO';

const ENTITY_NAME = 'todo';

export const TODOS = createRequestTypes(LOAD_TODOS);
export const TODO = createRequestTypes(LOAD_SINGLE_TODO);
export const C_TODO = createRequestTypes(CREATE_TODO);
export const D_TODO = createRequestTypes(DELETE_TODO)
export const E_TODO = createRequestTypes(EDIT_TODO);


export const todo = {
  request: (todo) => action(TODO[REQUEST], {id: todo}),
  success: (todo, response) => action(TODO[SUCCESS], {id: todo, response, entity: ENTITY_NAME}),
  failure: (fullName, error) => action(TODO[FAILURE], {fullName, error}),
}

export const todos = {
  request: () => action(TODOS[REQUEST], {}),
  success: (todo, response) => action(TODOS[SUCCESS], {todo, response}),
  failure: (fullName, error) => action(TODOS[FAILURE], {fullName, error}),
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
export const loadTodo = (id) => action(LOAD_SINGLE_TODO, {id});
export const loadTodos = todo => action(LOAD_TODOS, {todo})
export const removeTodo = id => action(DELETE_TODO, {id});
export const editTodo = data => action(EDIT_TODO, {data});
export const clearActiveTodo = () => action(CLEAR_ACTIVE, {entity: ENTITY_NAME});

