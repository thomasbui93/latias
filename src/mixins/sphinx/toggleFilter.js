export default {
  methods: {
    toggleKeyword(keyword) {
      this.$emit('toggleKeyword', keyword);
    },
    toggleLevel() {
      this.$emit('toggleLevel', this.level);
    },
  },
};
