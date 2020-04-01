<template>
  <VBasicInputWrapper
    :label="label"
    :id="id"
    :error="error"
  >
    <input
      type="number"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @change="onInputChange"
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
  export default class PriceInput extends BaseInput {
    @Emit('change')
    private onInputChange(event: InputEvent) {
      const value = (event.target as HTMLInputElement).value;
      return toFixed(value, 2);
    }
  }
</script>
