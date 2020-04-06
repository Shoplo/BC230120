<template>
  <div class="page-list">
    <VPageTitle>Your product list</VPageTitle>
    <VTable :elements="products" :headers="headers" :action="onEditClick" action-name="edit" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { Product } from '@/types';
import VTable from '@/components/VTable.vue';
import VPageTitle from '@/components/VPageTitle.vue';

const products = namespace('Products');

@Component({
  components: {
    VTable,
    VPageTitle,
  },
})
export default class ListView extends Vue {
  @products.State
  private products!: Product[];

  private headers: string[] = ['name', 'description', 'price', 'category'];

  private onEditClick(product: Product) {
    this.$router.push({ name: 'editForm', params: { id: product.id } });
  }
}
</script>
