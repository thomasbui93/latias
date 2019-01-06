<template>
  <div class="sphinx-doc">
    <div class="sphinx-doc__title">{{question}}</div>
    <div class="sphinx-doc__keywords">
      <span v-for="(keyword, index) in keywords" :key="index" @click="toggleKeyword(keyword)">
        {{keyword}}
      </span>
      <span @click="toggleLevel">{{level}}</span>
    </div>
    <div class="sphinx-doc__description">{{answer}}</div>
    <div class="sphinx-doc__meta">
      {{ createdAt }}
    </div>
  </div>
</template>

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
