<template>
  <VBasicInputWrapper
    :error="error"
    :id="id"
    :label="label"
  >
    <textarea
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @blur="$emit('blur')"
      @change="$emit('change', $event.target.value)"
      @focus="$emit('focus')"
      ref="textarea"
      rows="1"
      class="input"
    />
  </VBasicInputWrapper>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator';
  import VBasicInputWrapper from '@/components/VBasicInputWrapper.vue';
  import BaseInput from '@/components/VBaseInput';
  import autosize from 'autosize';

  @Component({
    components: {
      VBasicInputWrapper,
    },
  })
  export default class VTextareaInput extends BaseInput {
    private mounted(): void {
      autosize(this.$refs.textarea as Element);
    }

    private beforeDestroy(): void {
      autosize.destroy(this.$refs.textarea as Element);
    }
  }
</script>
<style lang="scss">
  @import "@/style";

  .input {
    @include input
  }
</style>
