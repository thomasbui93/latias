<template>
  <div id="app">
    <NavBar v-bind:is-authenticated="isAuthenticated"/>
    <div class="container page is-fluid">
      <router-view/>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Latias Inc.
        </p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
</style>
<script>
import { mapState } from 'vuex';
import NavBar from '@/components/core/navbar/Navbar.vue';

export default {
  components: {
    NavBar,
  },
  computed: mapState({
    isAuthenticated: state => state.isAuthenticated,
  }),
};
</script>
