<template>
  <div class="input-group">
    <div class="input-group__label" v-if="hasLabel">
      <slot name="label"></slot>
    </div>
    <div class="input-group__content">
      <slot name="input"></slot>
    </div>
    <div class="input-group__error" v-if="hasError">
      <slot name="error"></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})
  export default class VInputGroup extends Vue {
    private get hasLabel(): boolean {
      return Boolean(this.$slots.label);
    }

    private get hasError(): boolean {
      return Boolean(this.$slots.error);
    }
  }
</script>

<style lang="scss">
  @import "@/style";

  .input-group {

    & + & {
      margin-top: size(1);
    }

    &__label {
      margin-bottom: size(0.5);
    }

    &__content {

    }

    &__error {
      margin-top: size(0.5);
    }
  }
</style>
