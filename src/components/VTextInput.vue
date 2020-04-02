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
      @change="$emit('change', $event.target.value)"
      @focus="$emit('focus')"
      type="text"
    />
  </VBasicInputWrapper>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator';
  import VBasicInputWrapper from '@/components/VBasicInputWrapper.vue';
  import BaseInput from '@/components/VBaseInput';

  @Component({
    components: {
      VBasicInputWrapper,
    },
  })
  export default class VTextInput extends BaseInput {}
</script>
