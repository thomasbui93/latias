<script>
export default {
  name: 'ListPagination',
  props: {
    value: {
      required: true,
      type: Number,
      default: 1,
    },
    lastPage: {
      required: true,
      type: Number,
      default: 1,
    },
  },
  computed: {
    isLastPage() {
      return this.value === this.lastPage;
    },
    isFirstPage() {
      return this.value === 1;
    },
  },
  methods: {
    setPage(page) {
      this.$emit('input', page);
    },
  },
  render() {
    return this.$scopedSlots.default({
      setPage: this.setPage,
      lastPage: this.lastPage,
      isLastPage: this.isLastPage,
      isFirstPage: this.isFirstPage,
      page: this.page,
    });
  },
};
</script>
