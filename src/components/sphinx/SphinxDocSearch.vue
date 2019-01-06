<template>
  <div class="sphinx-doc__container">
    <sphinx-filter v-model="searchState" @input="performSearch"/>
    <div class="sphinx-doc__list-container">
      <div v-if="isError">Error happened!</div>
      <Loading v-if="isLoading"/>
      <div v-if="isEmpty">There is no result related to your search.</div>
      <div class="sphinx-doc__list" v-if="!isError">
        <sphinx-doc
          v-for="(doc, index) in documents" :key="index"
          v-bind="doc"
          @toggleKeyword="onToggleKeyword"
          @toggleLevel="onToggleLevel"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import SphinxFilter from './SphinxDocFilter.vue';
import SphinxDoc from './SphinxDoc.vue';

export default {
  data() {
    return {
      searchState: {
        text: '',
        keywords: [],
        sortBy: 'createdAt',
        sortType: 'ASC',
      },
    };
  },
  computed: {
    ...mapState({
      documents: state => state.sphinx.documents,
      isError: state => state.sphinx.isError,
      isLoading: state => state.sphinx.isInProgress,
    }),
    isEmpty() {
      return this.documents.length === 0 && !this.isLoading;
    },
  },
  components: {
    SphinxFilter,
    SphinxDoc,
  },
  methods: {
    ...mapActions({
      search: 'sphinx/search',
    }),
    performSearch() {
      this.search(this.searchState);
    },
    onToggleKeyword(keyword) {
      console.log(keyword);
    },
    onToggleLevel(level) {
      console.log(level);
    },
  },
  async mounted() {
    await this.performSearch();
  },
};
</script>
