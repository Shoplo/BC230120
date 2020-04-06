<template>
  <div class="page-form">
    <h1>This is form page</h1>
    <VProductAddForm @form-submitted="onFormSubmitted"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VProductAddForm from '@/components/VProductAddForm.vue';

@Component({
  components: {
    VProductAddForm,
  },
})
export default class FormView extends Vue {
  private onFormSubmitted(): void {
    alert('product added');
  }
}
</script>
