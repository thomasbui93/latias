import actions from './actions';
import mutations from './mutations';

const state = {
  isAuthenticated: false,
  isRequestingAuthentication: false,
  isSignInError: false,
  isUserCreated: false,
  isCreatingUser: false,
  isSignUpError: false
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
