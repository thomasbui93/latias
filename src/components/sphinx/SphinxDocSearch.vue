<template>
  <div class="sphinx-doc__container">
    <sphinx-filter
      v-model="searchState"
      @input="performSearch"
      @toggleKeyword="onToggleKeyword"
      @toggleLevel="onToggleLevel"
    />
    <loading-list
      :className="sphinx-doc__list-container"
      :isLoading="isInProgress"
      :isError="isError"
      :items="documents"
    >
      <template slot="error">
        <p>Error happened while showing the documents. Please try again!.</p>
      </template>
      <template slot="empty">
        <p>No result is matched with the query. Please try again!.</p>
      </template>
      <template slot="loader">
        <div>
          <p>Please wait a minute while we fetching the data.</p>
          <Loading/>
        </div>
      </template>
      <template slot-scope="{ item }">
        <sphinx-doc v-bind="item" @toggleKeyword="onToggleKeyword" @toggleLevel="onToggleLevel"/>
      </template>
    </loading-list>
  </div>
</template>
<style lang="scss">
.sphinx-search {
  margin-top: 1rem;
}

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
import LoadingList from '../core/list/LoadingList.vue';

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
        page: 1,
      },
    };
  },
  computed: mapState({
    documents: state => state.sphinx.documents,
    isError: state => state.sphinx.isError,
    isInProgress: state => state.sphinx.isInProgress,
  }),
  components: {
    SphinxFilter,
    SphinxDoc,
    LoadingList,
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
  created() {
    this.performSearch();
  },
};
</script>
