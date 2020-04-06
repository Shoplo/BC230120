<template>
  <VForm :model="productFormModel" :initial-data="initialProduct" @submit="onFormSubmit" ref="form"/>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import VForm from '@/components/VForm.vue';
  import productFormModel from '@/forms/productForm';
  import { Field, Form, Product } from '@/types';
  import { namespace } from 'vuex-class';
  import productAddFormFieldsToProduct from '@/transformers/productAddFormFieldsToProduct';

  const products = namespace('Products');

  @Component({
    components: {
      VForm,
    },
  })
  export default class VProductEditForm extends Vue {
    @Prop({ required: true }) private readonly initialProduct!: Product;
    private productFormModel: Field[] = productFormModel;

    @products.Mutation
    private update!: (product: Product) => void;

    private onFormSubmit(formData: Form): void {
      if (formData.isValid) {
        const formObject: VForm = this.$refs.form as VForm;
        const product: Product = productAddFormFieldsToProduct(formData.fields);
        this.update(product);
        formObject.clear();

        this.$emit('form-submitted');
      }
    }
  }
</script>
