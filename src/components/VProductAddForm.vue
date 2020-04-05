<template>
   <VForm :model="productAddForm" @submit="onFormSubmit" ref="form"/>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import VForm from '@/components/VForm.vue';
  import productAddFormFactory from '@/forms/productAddForm';
  import { Field, Form, Product } from '@/types';
  import { namespace } from 'vuex-class';
  import productAddFormFieldsToProduct from '@/utils/productAddFormFieldsToProduct';

  const products = namespace('Products');

  @Component({
    components: {
      VForm,
    },
  })
  export default class FormView extends Vue {
    private productAddForm: Field[] = productAddFormFactory;

    @products.Mutation
    private add!: (product: Product) => void;

    private onFormSubmit(formData: Form): void {
      if (formData.isValid) {
        const formObject: VForm = this.$refs.form as VForm;
        const product: Product = productAddFormFieldsToProduct(formData.fields);
        this.add(product);
        formObject.clear();

        this.$emit('product-added');
      }
    }
  }
</script>
