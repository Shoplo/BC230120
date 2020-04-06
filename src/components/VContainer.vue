<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})
  export default class VContainer extends Vue {}
</script>

<style lang="scss">
  @import "@/style";

  .container {
    width: 100%;
    padding: 0 size(1);

    @include respond-to('large') {
      width: 1200px;
      padding: 0 size(2);
      margin: 0 auto;
    }
  }
</style>
