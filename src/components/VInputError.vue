<template>
  <div class="input-error">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})
  export default class VInputError extends Vue {}
</script>

<style lang="scss">
  .input-error {
    color: red;
    font-size: 12px;
  }
</style>
