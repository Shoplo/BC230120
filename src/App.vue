<template>
    <MainLayout>
      <router-view></router-view>
    </MainLayout>
</template>

<script lang="ts">
import 'reflect-metadata';
import { Component, Vue } from 'vue-property-decorator';
import MainLayout from '@/layouts/MainLayout.vue';

@Component({
  components: {
    MainLayout,
  },
})
export default class App extends Vue {}
</script>
