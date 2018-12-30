import { setToken } from '../../services/auth';

export default {
  requestingAuth(state, isRequesting) {
    state.isRequestingAuthentication = isRequesting;
  },
  failedAuth(state) {
    state.isSignInError = true;
  },
  doneAuth(state, authToken) {
    state.isAuthenticated = true;
    setToken(authToken.token, authToken.refreshToken);
  },
  creatingUser(state, isCreating) {
    state.isCreating = isCreating;
  },
  failedCreatingUser(state) {
    state.isSignUpError = true;
  },
  doneCreatingUser(state) {
    state.isUserCreated = true;
  },
};
