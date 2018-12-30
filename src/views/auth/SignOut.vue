<template>
  <div>
    <h1>
      You have been logout.
      Browser will automatically redirect to home page in <Timeout :timeout="timeLeft"/> second(s).
    </h1>
    <p>Click <router-link to="/">here</router-link> if browser is not redirecting.</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Timeout from '@/components/core/utils/Timeout.vue';
import { signOut } from '@/services/auth';

export default {
  components: {
    Timeout,
  },
  watch: {
    timeLeft(val) {
      if (val === 0) {
        this.$router.push('/');
      }
    },
  },
  data() {
    return {
      timeLeft: 10,
    };
  },
  methods: mapActions({
    authenticate: 'authenticate',
  }),
  mounted() {
    signOut();
    this.authenticate(false);
  },
};
</script>
