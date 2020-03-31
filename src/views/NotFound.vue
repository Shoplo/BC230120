<template>
  <div>
    <h1>Page not found</h1>
    <div>
      Return to <router-link :to="{name: 'home'}">home</router-link>.
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>
