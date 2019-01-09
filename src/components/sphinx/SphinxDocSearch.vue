<template>
  <div class="sphinx-doc__container">
    <sphinx-filter
      v-model="searchState"
      @input="performSearch"
      @toggleKeyword="onToggleKeyword"
      @toggleLevel="onToggleLevel"
    />
    <div class="sphinx-doc__list-container">
      <div v-if="isError" class="has-text-danger">Error happened!</div>
      <Loading v-if="isInProgress"/>
      <div v-if="isEmpty">There is no result related to your search.</div>
      <div class="sphinx-doc__list" v-if="!isError && !isInProgress">
        <sphinx-doc
          v-for="(doc, index) in documents"
          :key="index"
          v-bind="doc"
          @toggleKeyword="onToggleKeyword"
          @toggleLevel="onToggleLevel"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.sphinx-tag {
  background-color: $primary;
  padding: 0.25rem;
  border-radius: $global-radius;
  color: $primary-invert;
  display: inline-block;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &__close {
    display: none;
  }

  &:hover {
    background-color: darken($color: $primary, $amount: 2);
  }

  &:hover &__close {
    display: inline-block;
  }
}
</style>

<script>
import { mapActions, mapState } from 'vuex';
import SphinxFilter from './SphinxDocFilter.vue';
import SphinxDoc from './SphinxDoc.vue';

export default {
  name: 'SphinxDocSearch',
  data() {
    return {
      searchState: {
        text: '',
        keywords: [],
        sortBy: 'createdAt',
        sortType: 'ASC',
        level: '',
      },
    };
  },
  computed: {
    ...mapState({
      documents: state => state.sphinx.documents,
      isError: state => state.sphinx.isError,
      isInProgress: state => state.sphinx.isInProgress,
    }),
    isEmpty() {
      return this.documents.length === 0;
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
      const keywordIndex = this.searchState.keywords.indexOf(keyword);
      if (keywordIndex > -1) {
        this.searchState.keywords.splice(keywordIndex, 1);
      } else {
        this.searchState.keywords.push(keyword);
      }
      this.performSearch();
    },
    onToggleLevel(level) {
      this.searchState.level = this.searchState.level === level ? undefined : level;
      this.performSearch();
    },
  },
  async mounted() {
    await this.performSearch();
  },
};
</script>
