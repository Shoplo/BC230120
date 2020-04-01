<template>
  <label :for="htmlFor" class="input-for">
    <slot></slot>
  </label>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({})
  export default class BaseInput extends Vue {
    @Prop({ required: true }) private readonly htmlFor!: string;
  }
</script>
