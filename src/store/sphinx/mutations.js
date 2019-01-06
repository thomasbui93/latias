export default {
  searchInProgress(state, isInProgress) {
    state.isError = false;
    state.isInProgress = isInProgress;
  },
  searchUpdate(state, documents) {
    state.documents = documents;
  },
  searchError(state, isError) {
    state.isError = isError;
  },
};
