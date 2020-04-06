<template>
  <input
    :id="id"
    :name="name"
    :value="value"
    type="hidden"
  />
</template>

<script lang="ts">
  import { Component, Prop } from 'vue-property-decorator';
  import Vue from 'vue';

  @Component({})
  export default class VHiddenInput extends Vue {
    @Prop({ required: true }) private readonly name!: string;
    @Prop({ required: true }) private readonly id!: string;
    @Prop({ default: null }) private readonly value!: string;
  }
</script>
