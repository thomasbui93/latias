<template>
  <span>{{ timeLeft }}</span>
</template>
<script>
export default {
  props: {
    timeout: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      timeLeft: this.timeout,
    };
  },
  mounted() {
    const self = this;
    const countdown = setInterval(() => {
      if (self.timeLeft > 0) {
        self.timeLeft -= 1;
      } else {
        clearInterval(countdown);
      }
    }, 1000);
  },
};
</script>
