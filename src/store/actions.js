function authenticate({ commit }, isAuthenticated) {
  commit('authenticate', isAuthenticated);
}

export default {
  authenticate,
};
