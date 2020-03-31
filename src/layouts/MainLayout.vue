<template>
  <div class="page">
    <VNav />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VNav from '@/components/VNav.vue';
@Component({
  components: {
    VNav,
  },
})
export default class MainLayout extends Vue {}
</script>
