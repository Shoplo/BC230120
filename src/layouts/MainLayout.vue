<template>
  <div class="page">
    <h1>This is main layout</h1>
    <slot></slot>
  </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class MainLayout extends Vue {}
</script>
