<template>
  <VBasicInputWrapper
    :label="label"
    :id="id"
    :error="error"
  >
    <textarea
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @change="$emit('change', $event.target.value)"
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
  export default class TextareaInput extends BaseInput {}
</script>
