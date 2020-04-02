<template>
  <form @submit.prevent="onSubmit">
    <div :key="field.id" v-for="field in formData.fields">
      <component :error="fields[field.name].error"
                 :id="field.id"
                 :is="inputTypeToComponent(field.type)"
                 :label="field.label"
                 :name="field.name"
                 :value="fields[field.name].value"
                 :options="field.options"
                 @blur="onFieldBlur(field.name)"
                 @change="onFieldChange(field.name, $event)"
                 @focus="onFieldFocus(field.name)"
      />
    </div>
    <button type="submit">submit</button>
  </form>
</template>

<script lang="ts">
  import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
  import fieldsToFieldsState from '@/utils/fieldsToFieldsState';
  import customInputTypeToComponentNameMapper from '@/utils/customInputTypeToComponentNameMapper';
  import { CustomInputType, Field, FieldsState, Form, ValidatorMessage } from '@/types';
  import VTextInput from '@/components/VTextInput.vue';
  import VTextareaInput from '@/components/VTextareaInput.vue';
  import VPriceInput from '@/components/VPriceInput.vue';
  import VSingleSelectInput from '@/components/VSingleSelectInput.vue';

  @Component({
    components: {
      VTextInput,
      VTextareaInput,
      VPriceInput,
      VSingleSelectInput,
    },
  })
  export default class VForm extends Vue {
    @Prop({ required: true }) private readonly formData!: Form;
    private fields: FieldsState = {};

    @Emit('submit')
    private onSubmit() {
      this.validateAll();
      return this.fields;
    }

    private getFieldDataByName(fieldName: string) {
      return this.formData.fields.find((field: Field) => field.name === fieldName);
    }

    private validateAll() {
      Object.keys(this.fields).forEach((fieldName: string): void => {
        this.validateField(fieldName, this.fields[fieldName].value);
      });
    }

    private validateField(fieldName: string, value: string) {
      const fieldData = this.getFieldDataByName(fieldName);
      this.fields[fieldName].error = null;

      if (fieldData && fieldData.validators) {
        for (const validator of fieldData.validators) {
          const validatorMessage: ValidatorMessage = validator(value);
          if (validatorMessage) {
            this.fields[fieldName].error = validatorMessage;
          }
        }
      }
    }

    private inputTypeToComponent(fieldType: CustomInputType): string | null {
      return customInputTypeToComponentNameMapper(fieldType);
    }

    private onFieldChange(fieldName: string, value: string) {
      this.fields[fieldName].value = value;
    }

    private onFieldBlur(fieldName: string) {
      this.validateField(fieldName, this.fields[fieldName].value);
    }

    private onFieldFocus(fieldName: string) {
      this.fields[fieldName].error = null;
    }

    private created() {
      this.fields = fieldsToFieldsState(this.formData.fields);
    }
  }
</script>
