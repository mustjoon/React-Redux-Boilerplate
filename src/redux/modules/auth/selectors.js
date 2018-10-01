export const getUser = (state) => state.auth.user;
export const getIsLogged = (state) => state.auth.user ? true : false;
export const getIsAuthenticating = (state) => state.auth.isAuthenticating;
export const getIsRegistering = (state) => state.auth.isRegistering;