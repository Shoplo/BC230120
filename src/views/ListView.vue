<template>
  <div class="page-list">
    <h1>This is list page</h1>
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Category</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>
            <button @click="onEditClick(product.id)">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { Product } from '@/types';
const products = namespace('Products');

@Component({})
export default class ListView extends Vue {
  @products.State
  private products!: Product[];

  private onEditClick(productId: string) {
    this.$router.push({ name: 'editForm', params: { id: productId } });
  }
}
</script>
