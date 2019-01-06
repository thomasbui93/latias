import actions from './actions';
import mutations from './mutations';

const state = {
  documents: [],
  isError: false,
  isInProgress: false,
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
