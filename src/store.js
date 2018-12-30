import Vue from 'vue';
import Vuex from 'vuex';
import { isAuthenticated } from './helpers/auth/route';
import auth from './store/auth';
import actions from './store/actions';
import mutations from './store/mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    auth,
  },
  state: {
    isAuthenticated: isAuthenticated(),
  },
  actions,
  mutations,
});
