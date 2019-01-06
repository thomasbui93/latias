<template functional>
  <router-link :to="props.path">
    <div class="nav-tip">
      <div class="nav-tip__background">
        <img :src="props.backgroundImage"/>
      </div>
      <div class="nav-tip__text">
        <span>{{props.name}}</span>
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
  $navTipHeight: 100px!default;

  .router-link-exact-active > .nav-tip .nav-tip__text {
    background-color: rgba(0,0,0,0.7)
  }

  .nav-tip {
    display: inline-block;
    width: $navTipHeight;
    height: $navTipHeight;
    position: relative;
    border-radius: 30px;
    overflow: hidden;
    margin: 0 .5rem;

    & > div {
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }

    &__background {
      position: relative;
      border-radius: 10px;
    }

    &__text {
      text-align: center;
      position: absolute;
      background-color: rgba(0,0,0,0.3);
      color: white;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
