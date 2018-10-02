

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

  