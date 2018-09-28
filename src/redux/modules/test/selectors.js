

  export const getActiveTest = (state) => {
    if(state.entities.albums && state.entities.albumId) {
      return state.entities.albums[state.entities.albumId]
    }
    return {};
  }

  export const getTests = (state) => state.entities.tests ? Object.values(state.entities.tests) : [];
  export const getTestLoading = (state) => state.test.isLoading;
  export const getRedirect = (state) => state.test.redirect;
  export const getRedirectURL = (state) => state.test.redirectURL;

