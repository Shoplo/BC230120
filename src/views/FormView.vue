<template>
  <div class="page-form">
    <h1>This is form page</h1>
    <VForm :form-data="productAddForm" @submit="onFormSubmit"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VForm from '@/components/VForm.vue';
import productAddFormFactory from '@/forms/productAddForm';
import { FieldsState } from '@/types';

@Component({
  components: {
    VForm,
  },
})
export default class FormView extends Vue {
  private productAddForm = productAddFormFactory();

  private onFormSubmit(formData: FieldsState) {
    // Todo handle error
    // Todo save data to store
  }
}
</script>
