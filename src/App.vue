<template>
  <div id="app">
    <nav-bar v-bind:is-authenticated="isAuthenticated"/>
    <nav-carousel/>
    <div class="container page is-fluid">
      <router-view/>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          KhoaLab Inc.
        </p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
</style>
<script>
import { mapState } from 'vuex';
import NavCarousel from '@/components/core/nav/NavCarousel.vue';
import NavBar from '@/components/core/navbar/Navbar.vue';

export default {
  components: {
    NavBar,
    NavCarousel,
  },
  computed: mapState({
    isAuthenticated: state => state.isAuthenticated,
  }),
};
</script>
