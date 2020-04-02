<template>
  <VBasicInputWrapper
    :error="error"
    :id="id"
    :label="label"
  >
    <select
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @blur="$emit('blur')"
      @change="$emit('change', $event.target.value)"
      @focus="$emit('focus')"
    >
      <option disabled value="">
        Please select
      </option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </VBasicInputWrapper>
</template>

<script lang="ts">
  import { Component, Prop } from 'vue-property-decorator';
  import VBasicInputWrapper from '@/components/VBasicInputWrapper.vue';
  import BaseInput from '@/components/VBaseInput';
  import { SelectOption } from '@/types';

  @Component({
    components: {
      VBasicInputWrapper,
    },
  })
  export default class VSingleSelect extends BaseInput {
    @Prop({ required: true }) private readonly options!: SelectOption[];
  }
</script>
