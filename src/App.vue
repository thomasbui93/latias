<template>
  <div id="app">
    <NavBar/>
    <router-view/>
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
import NavBar from '@/components/core/navbar/Navbar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>
