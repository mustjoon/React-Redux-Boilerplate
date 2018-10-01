
import * as _api from './api'
import AlbumService from './album';
import TodoService from './todo';
import AuthService from './auth';
//import { browserHistory } from 'react-router'

export const api = _api
export const albumService = new AlbumService();
export const todoService  = new TodoService();
export const authService = new AuthService();

//export const history = browserHistory
