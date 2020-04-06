<template>
  <header class="page-header">
    <h1 class="page-header__title">
      <slot></slot>
    </h1>
  </header>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})
  export default class VContainer extends Vue {}
</script>

<style lang="scss">
  @import "@/style";

  .page-header {
    margin-bottom: size(3);

    &__title {
      font-size: 28px;
    }
  }
</style>
