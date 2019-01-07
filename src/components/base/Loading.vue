<template>
  <div class="spinner">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  </div>
</template>

<style lang="scss">
$spinnerHeight: 70px!default;
.spinner {
  margin: auto;
  width: $spinnerHeight;
  height: $spinnerHeight;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: ($spinnerHeight - 4px)/3;
    height: ($spinnerHeight - 4px)/3;
    background-color: #333;

    border-radius: 100%;
    display: inline-block;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .bounce1 {
    animation-delay: -0.32s;
  }

  .bounce2 {
    animation-delay: -0.16s;
  }
}

@keyframes sk-bouncedelay {
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
}
</style>
