import { normalize, schema } from 'normalizr'
import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'

// Extracts the next page URL from Github API response.
function getNextPageUrl(response) {
  const link = response.headers.get('link')
  if (!link) {
    return null
  }

  const nextLink = link.split(',').find(s => s.indexOf('rel="next"') > -1)
  if (!nextLink) {
    return null
  }

  return nextLink.split(';')[0].slice(1, -1)
}

const API_ROOT = 'https://jsonplaceholder.typicode.com/'

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi(endpoint, schema, options = {method: 'GET'}) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
  
  if(options && options.body) {
    options.body = JSON.stringify(options.body);
  }

  options.headers ={
    "Content-type": "application/json; charset=UTF-8"
  }

  return fetch(fullUrl, options)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }

      const camelizedJson = camelizeKeys(json)
      const nextPageUrl = getNextPageUrl(response)
      
      return Object.assign({},
        normalize(camelizedJson, schema),
        { nextPageUrl }
      )
    })
    .then(
      response => ({response}),
      error => ({error: error.message || 'Something bad happened'})
    )

}

// We use this Normalizr schemas to transform API responses from a nested form
// to a flat form where repos and users are placed in `entities`, and nested
// JSON objects are replaced with their IDs. This is very convenient for
// consumption by reducers, because we can easily build a normalized tree
// and keep it updated as we fetch more data.

// Read more about Normalizr: https://github.com/gaearon/normalizr


const todo = new schema.Entity('todos', {
});

const singleTodo = new schema.Entity('todos');
const todoSchema = [todo]

const mockCreateData = {
  title: 'tester',
  body: 'bar',
  userId: 1
}
export const fetchTodos = todo => callApi(`posts/`, todoSchema)
export const createTodo = data => callApi('posts',singleTodo, Object.assign({method: 'POST'},{body: mockCreateData}));
export const removeTodo = id => callApi(`posts/${id}`, todo, Object.assign({method: 'DELETE'}));
export const editTodo = data => callApi(`posts/${data.id}`, singleTodo,Object.assign({method: 'PUT'},{body: mockCreateData}));