<template>
  <div class="nav-tip-carousel">
    <nav-tip v-for="(nav, index) in navItems" :key="index"
      :path="nav.path"
      :backgroundImage="nav.backgroundImage"
      :name="nav.name"/>
  </div>
</template>

<style lang="scss" scoped>
.nav-tip-carousel{
  display: flex;
  justify-content: center;
}
</style>

<script>
import NavTip from './NavTip.vue';
import navTips from '@/services/constants/nav';

export default {
  components: {
    NavTip,
  },
  data() {
    return {
      navItems: navTips,
    };
  },
};
</script>
