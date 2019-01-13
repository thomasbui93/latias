<template>
  <div class="generic-list__container" :class="{[className]: true}">
    <slot name="loader" v-if="isLoading" />
    <slot name="error" v-if="isError" />
    <slot name="empty" v-if="isEmpty" />
    <ul class="generic-list" v-if="!isLoading && !isEmpty && !isError">
      <slot
        v-for="(item, index) in items"
        :key="index"
        v-bind="item"
      />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LoadingList',
  props: {
    isLoading: {
      required: true,
      default: false,
      type: Boolean,
    },
    isError: {
      type: Boolean,
      required: true,
      default: false,
    },
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    isEmpty() {
      return this.items.length === 0;
    },
  },
};
</script>
