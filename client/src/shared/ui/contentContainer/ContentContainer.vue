<template>
  <div class="content-container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import '@shared/styles/index';

.content-container {
  display: block;
  margin: 0 auto;
  width: rem(375);
}
</style>