import api  from '@redux/api';
//  Constants here
const SET = 'SET_TASKS';
const CLEAR = 'CLEAR_TASKS';
const FAIL = 'FAIL_TASKS';

// API URLS 
const FETCH_TEST_URL = '/dummyurl';

const initialState = {
  tasks: [],
  error: null
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET:
      return {
        ...state,
        tasks: action.payload
      };
    case FAIL: 
      return {
        ...state,
        error: action.payload
      }
    case CLEAR:
      return {
        ...state,
        tasks: []
      };
    default:
      return state;
  }
}

export function setTasks(payload) {
  return {
    type: SET,
    payload
  }
}

export function clear() {
  return {
    type: CLEAR
  }
}

export function fail(data) {
  const payload = data.statusText;
  return {
    type: FAIL,
    payload
  }
}

export function getTasks() {
  return api.getAjax(FETCH_TEST_URL, clear, fail);
}

