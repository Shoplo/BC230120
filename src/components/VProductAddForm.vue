<template>
  <VForm :model="productAddFormModel" :initial-data="initialProduct" @submit="onFormSubmit" ref="form"/>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import VForm from '@/components/VForm.vue';
  import productFormModel from '@/forms/productForm';
  import { Field, Form, InitialData, Product } from '@/types';
  import { namespace } from 'vuex-class';
  import productAddFormFieldsToProduct from '@/transformers/productFormFieldsToProduct';
  import Uuid from '@/classes/Uuid';

  const products = namespace('Products');

  @Component({
    components: {
      VForm,
    },
  })
  export default class VProductAddForm extends Vue {
    private productAddFormModel: Field[] = productFormModel;
    private initialProduct: InitialData = {};

    @products.Mutation
    private add!: (product: Product) => void;

    private onFormSubmit(formData: Form): void {
      if (formData.isValid) {
        const formObject: VForm = this.$refs.form as VForm;
        const product: Product = productAddFormFieldsToProduct(formData.fields);

        this.$set(this.initialProduct, 'id', Uuid.getInstance().getUuid());
        this.add(product);
        formObject.clear();
        this.$emit('form-submitted');
      }
    }

    private created() {
      this.initialProduct = { id: Uuid.getInstance().getUuid() };
    }
  }
</script>
