export default {
  requestingAuth(state, isRequesting) {
    state.isRequestingAuthentication = isRequesting;
  },
  failedAuth(state) {
    state.isError = true;
  },
  doneAuth(state, authToken) {
    state.isAuthenticated = true;
    sessionStorage.setItem('x-token', authToken.token);
    sessionStorage.setItem('x-refreshToken', authToken.refreshToken);
  },
};
