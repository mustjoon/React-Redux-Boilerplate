
const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

export function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
		acc[type] = `${base}_${type}`
		return acc
	}, {})
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

export function action(type, payload = {}) {
  return {type, ...payload}
}

export const resetErrorMessage = () => action(RESET_ERROR_MESSAGE)
