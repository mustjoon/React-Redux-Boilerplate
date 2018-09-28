
export const getUser = (state, login) => state.entities.users[login]
export const getRepo = (state, fullName) => state.entities.repos[fullName]
export const getStarredByUser = (state, login) => state.pagination.starredByUser[login] || {}
export const getStargazersByRepo = (state, fullName) => state.pagination.stargazersByRepo[fullName] || {}
export const getTodos = (state) => state.entities.todos ? Object.values(state.entities.todos) : []
export const getActiveTodo = (state) => {
  if(state.entities.todos && state.entities.todoId) {
    return state.entities.todos[state.entities.todoId]
  }
  return {};
}

export const getActiveAlbum = (state) => {
  if(state.entities.albums && state.entities.albumId) {
    return state.entities.albums[state.entities.albumId]
  }
  return {};
}

export const getAlbums = (state) => state.entities.albums ? Object.values(state.entities.albums) : [];

export const getAlbumLoading = (state) => state.album.isLoading;
export const getRedirect = (state) => state.album.redirect;
export const getRedirectURL = (state) => state.album.redirectURL;
