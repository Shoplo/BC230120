<template>
  <label :for="htmlFor" class="input-label">
    <slot></slot>
  </label>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({})
  export default class VInputLabel extends Vue {
    @Prop({ required: true }) private readonly htmlFor!: string;
  }
</script>

<style lang="scss">
  .input-label {
    font-size: 16px;

    &:hover {
      cursor: pointer;
    }
  }
</style>
