export default {
  requestingAuth(state, isRequesting) {
    state.isRequestingAuthentication = isRequesting;
  },
  failedAuth(state) {
    state.isSignInError = true;
  },
  doneAuth(state, authToken) {
    state.isAuthenticated = true;
    sessionStorage.setItem('x-token', authToken.token);
    sessionStorage.setItem('x-refreshToken', authToken.refreshToken);
  },
  creatingUser(state, isCreating) {
    state.isCreating = isCreating
  },
  failedCreatingUser(state) {
    state.isSignUpError = true;
  },
  doneCreatingUser(state) {
    state.isUserCreated = true;
  }
};
