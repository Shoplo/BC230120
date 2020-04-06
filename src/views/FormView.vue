<template>
  <div class="page-form">
    <h1>This is form page</h1>
    <VProductEditForm
      @form-submitted="onFormSubmitted"
      :initial-product="this.product"
      v-if="isEdit"
    />
    <VProductAddForm
      @form-submitted="onFormSubmitted"
      v-else
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VProductAddForm from '@/components/VProductAddForm.vue';
import VProductEditForm from '@/components/VProductEditForm.vue';
import { Product, ProductByIdGetter } from '@/types';
import { namespace } from 'vuex-class';

const products = namespace('Products');

@Component({
  components: {
    VProductAddForm,
    VProductEditForm,
  },
})
export default class FormView extends Vue {
  private product?: Product;

  @products.Getter
  private getProductById!: ProductByIdGetter;

  private get isEdit(): boolean {
    if (this.$route.name === 'editForm') {
      this.product = this.getProductById(this.$route.params.id);
      return Boolean(this.product);
    }

    return false;
  }

  private onFormSubmitted(): void {
    this.$router.push({ name: 'list' });
  }
}
</script>
