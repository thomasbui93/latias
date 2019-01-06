<template>
  <div class="sphinx-search">
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
    <div class="sphinx-search__field">
      <button class="button is-primary" @click="triggerChange">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({
        text: '',
        keywords: [],
        sortType: 'ASC',
        sortBy: 'createdAt',
      }),
      validator(data) {
        return ['ASC', 'DESC'].indexOf(data.sortType) > -1
          && ['createdAt', 'question', 'level'].indexOf(data.sortBy) > -1;
      },
    },
  },
  computed: {
    keywordList() {
      return this.keywords.split(',');
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
      });
    },
  },
};
</script>
