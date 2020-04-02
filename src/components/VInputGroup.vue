<template>
  <div class="input-group">
    <div class="input-group__label" v-if="hasLabel">
      <slot name="label"></slot>
    </div>
    <div class="input-group__label">
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
