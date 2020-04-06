<template>
    <MainLayout>
      <router-view></router-view>
    </MainLayout>
</template>

<script lang="ts">
import 'reflect-metadata';
import { Component, Vue } from 'vue-property-decorator';
import MainLayout from '@/layouts/MainLayout.vue';
import { namespace } from 'vuex-class';
import { Product } from '@/types';
const products = namespace('Products');

@Component({
  components: {
    MainLayout,
  },
})
export default class App extends Vue {
  @products.Mutation
  private setFromStorage!: () => void;

  private created() {
    this.setFromStorage();
  }
}
</script>
