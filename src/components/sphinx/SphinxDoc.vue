<template>
  <div class="sphinx-doc">
    <div class="sphinx-doc__title">{{question}}</div>
    <div class="sphinx-doc__content">
      <div class="sphinx-doc__keywords">
        <div class="sphinx-tag"
        v-for="(keyword, index) in keywords" :key="index" @click="toggleKeyword(keyword)">
          {{keyword}}
        </div>
      </div>
      <div class="sphinx-doc__category">
        <strong>Category: </strong><span>{{categories}}</span>
      </div>
      <div class="sphinx-doc__level">
        <strong>Level: </strong><span class="is-lowercase" @click="toggleLevel">{{level}}</span>
      </div>
      <div class="sphinx-doc__description">
        <strong>Answer: </strong>{{answer}}
      </div>
      <div class="sphinx-doc__meta">
        Added: {{ createdAt | dateNormalized }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.sphinx-doc {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &__title {
    position: relative;
    width: 100%;
    border-bottom: 1px solid $grey-light;
    padding: 0.75rem;
    font-weight: bold;
  }
  &__content {
    padding: 0.75rem;
  }
}
</style>

<script>
export default {
  props: {
    question: {
      type: String,
      default: '',
    },
    keywords: {
      type: Array,
      default: () => [],
    },
    answer: {
      type: String,
      default: '',
    },
    level: {
      type: String,
      default: '',
    },
    createdAt: {
      type: String,
      default: '',
    },
    categories: {
      type: String,
      default: '',
    },
  },
  methods: {
    toggleKeyword(keyword) {
      this.$emit('toggleKeyword', keyword);
    },
    toggleLevel() {
      this.$emit('toggleLevel', this.level);
    },
  },
};
</script>
