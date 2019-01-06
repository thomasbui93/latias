import { searchService } from '@/services/sphinx/sphinxSearch';

export const search = async ({ commit }, searchState) => {
  commit('searchInProgress', true);
  try {
    const response = await searchService(searchState);
    if (response.error || typeof response.documents === 'undefined') {
      commit('searchError', true);
    } else {
      commit('searchUpdate', response.documents);
    }
  } catch (error) {
    commit('searchError', true);
  }
  commit('searchInProgress', false);
};

export default {
  search,
};
