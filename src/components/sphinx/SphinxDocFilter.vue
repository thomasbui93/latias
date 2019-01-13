<template>
  <div class="sphinx-search">
    <div class="sphinx-search__field-group">
      <div class="sphinx-search__field">
        <input class="input" type="text" v-model="text" placeholder="What are you searching for?">
      </div>
      <div class="sphinx-search__field">
        <div class="select">
          <select v-model="sortType">
            <option value="ASC">A-Z</option>
            <option value="DESC">Z-A</option>
          </select>
        </div>
        <div class="select">
          <select v-model="sortBy">
            <option value="createdAt">Date</option>
            <option value="question">Question</option>
            <option value="level">Level</option>
          </select>
        </div>
      </div>
    </div>
    <div class="sphinx-search__field" v-if="value.level || keywords.length > 0">
      <div
        class="sphinx-tag"
        v-for="(keyword, index) in keywords"
        :key="index"
        @click="toggleKeyword(keyword)"
      >
        {{keyword}}
        <span class="sphinx-tag__close">-</span>
      </div>
      <span
        class="sphinx-tag sphinx-level"
        v-if="value.level"
        @click="toggleLevel"
        >
        {{value.level}}
      </span>
    </div>
    <div class="sphinx-search__field-action">
      <button class="button is-primary" @click="triggerChange">Search</button>
    </div>
  </div>
</template>

<style lang="scss">
.sphinx-search {
  &__field {
    display: flex;
    margin: 0.5rem 0;
  }

  &__field-action button {
    width: 100%;
  }

  .select {
    width: 50%;

    &:first-child {
      margin-right: 0.5rem;
    }

    &:last-child {
      margin-left: 0.5rem;
    }

    select {
      width: 100%;
    }
  }
}

@include from($tablet) {
  .sphinx-search {
    margin-bottom: 0.5rem;

    &__field-group {
      display: flex;
      justify-content: space-between;
    }

    &__field-group &__field {
      &:first-child {
        width: calc(75% - 0.25rem);
      }

      &:last-child {
        width: calc(25% - 0.25rem);
      }
    }

    &__field-action {
      display: flex;
      justify-content: flex-end;

      .button {
        width: auto;
      }
    }
  }
}
</style>

<script>
import toggleFilter from '@/mixins/sphinx/toggleFilter';

export default {
  name: 'SphinxDocFilter',
  props: {
    value: {
      type: Object,
      default: () => ({
        text: '',
        keywords: [],
        sortType: 'ASC',
        sortBy: 'createdAt',
        level: '',
      }),
      validator(data) {
        return (
          ['ASC', 'DESC'].indexOf(data.sortType) > -1
          && ['createdAt', 'question', 'level'].indexOf(data.sortBy) > -1
        );
      },
    },
  },
  data() {
    const {
      text, keywords, sortType, sortBy,
    } = this.value;
    return {
      text,
      keywords,
      sortType,
      sortBy,
    };
  },
  methods: {
    triggerChange() {
      this.$emit('input', {
        text: this.text,
        keywords: this.keywords,
        sortType: this.sortType,
        sortBy: this.sortBy,
        level: this.value.level,
      });
    },
    toggleKeyword(keyword) {
      this.$emit('toggleKeyword', keyword);
    },
    toggleLevel() {
      this.$emit('toggleLevel', this.value.level);
    },
  },
  mixins: [toggleFilter],
};
</script>
