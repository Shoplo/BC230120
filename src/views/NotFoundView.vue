<template>
  <div>
    <h1>Page not found</h1>
    <div>
      Return to <router-link :to="{name: 'list'}">home</router-link>.
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class NotFoundView extends Vue {}
</script>
