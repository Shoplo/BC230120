<template>
  <div class="page-form">
    <h1>This is form page</h1>
    <div>{{inputValue}}</div>
    <div>{{inputValue1}}</div>
    <div>{{inputValue2}}</div>
    <hr>
    <form action="">
      <VTextInput name="test" id="test1" label="label" v-model="inputValue" />
      <VTextareaInput name="test1" id="test2" label="label1" v-model="inputValue1" />
      <VPriceInput name="test2" id="test3" label="label2" v-model="inputValue2" />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VTextInput from '@/components/VTextInput.vue';
import VTextareaInput from '@/components/VTextareaInput.vue';
import VPriceInput from '@/components/VPriceInput.vue';
@Component({
  components: {
    VTextInput,
    VTextareaInput,
    VPriceInput
  },
})
export default class FormView extends Vue {
  private inputValue = 'test';
  private inputValue1 = 'test1';
  private inputValue2 = 'test2';
}
</script>
