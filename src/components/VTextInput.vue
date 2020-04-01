<template>
  <VBaseInput
    :label="label"
    :id="id"
    :error="error"
  >
    <input
      type="text"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </VBaseInput>
</template>

<script lang="ts">
  import { Component, Model, Prop, Vue } from 'vue-property-decorator';
  import VBaseInput from '@/components/VBaseInput.vue';

  @Component({
    components: {
      VBaseInput,
    },
  })
  export default class TextInput extends Vue {
    @Prop({ required: true }) private readonly label!: string;
    @Prop({ default: null }) private readonly error!: string;
    @Prop({ required: true }) private readonly id!: string;
    @Prop({ required: true }) private readonly name!: string;
    @Prop({ default: '' }) private readonly placeholder!: string;
    @Model('input') private readonly value!: string;
  }
</script>
