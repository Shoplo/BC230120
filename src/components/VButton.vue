<template>
  <button class="button">
    <slot></slot>
  </button>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})
  export default class VButton extends Vue {}
</script>
<style lang="scss">
  @import "@/style";

  .button {
    transition: border-color 250ms ease-in-out;
    border-radius: 0;
    padding: size(1) size(2);
    border: 2px solid $color-gray;

    &:hover {
      border-color: $color-border;
      cursor: pointer;
    }

    &:focus,
    &:active {
      outline: none;
      border-color: $color-main;
    }
  }
</style>
