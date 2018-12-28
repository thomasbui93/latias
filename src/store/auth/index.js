import actions from './actions';
import mutations from './mutations';

const state = {
  isAuthenticated: false,
  isRequestingAuthentication: false,
  isError: false,
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
