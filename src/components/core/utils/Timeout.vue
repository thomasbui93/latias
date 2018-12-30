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
    const countdown = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft = this.timeLeft - 1;
      } else {
        clearInterval(countdown);
      }
    }, 1000);
  },
};
</script>
