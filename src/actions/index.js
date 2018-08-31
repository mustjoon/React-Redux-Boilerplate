
const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

export function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
		acc[type] = `${base}_${type}`
		return acc
	}, {})
}

export const TODO = createRequestTypes('LOAD_TODOS');
export const C_TODO = createRequestTypes('CREATE_TODO');
export const D_TODO = createRequestTypes('DELETE_TODO')
export const E_TODO = createRequestTypes('EDIT_TODO');


export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

export const LOAD_TODOS = 'LOAD_TODOS';
export const CREATE_TODO = 'CREATE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';


export function action(type, payload = {}) {
  return {type, ...payload}
}

export const resetErrorMessage = () => action(RESET_ERROR_MESSAGE)
