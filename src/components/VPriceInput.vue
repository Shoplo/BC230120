<template>
  <VBasicInputWrapper
    :error="error"
    :id="id"
    :label="label"
  >
    <input
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @blur="$emit('blur')"
      @change="onInputChange"
      @focus="$emit('focus')"
      type="number"
      step="0.01"
    />
  </VBasicInputWrapper>
</template>

<script lang="ts">
  import { Component, Emit } from 'vue-property-decorator';
  import VBasicInputWrapper from '@/components/VBasicInputWrapper.vue';
  import BaseInput from '@/components/VBaseInput';
  import toFixed from '@/filters/toFixed';

  @Component({
    components: {
      VBasicInputWrapper,
    },
  })
  export default class VPriceInput extends BaseInput {
    @Emit('change')
    private onInputChange(event: InputEvent): string {
      const value = (event.target as HTMLInputElement).value || 0;
      return toFixed(value, 2);
    }
  }
</script>
