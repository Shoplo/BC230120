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

<style lang="scss">
  @import "~reset-css/sass/_reset.scss";
  @import "@/style";
  :root {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    color: $color-gray-deep-dark;
    * {
      &,
      &:before,
      &:after {
        box-sizing: inherit;
      }
    }
  }
</style>
