<template>
  <form @submit.prevent="onSubmit">
    <div :key="field.id" v-for="field in model">
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
  import modelToFieldsState from '@/transformers/modelToFieldsState';
  import customInputTypeToComponentNameMapper from '@/transformers/customInputTypeToComponentNameMapper';
  import { CustomInputType, Field, FieldsState, Form, InitialData, ValidatorMessage } from '@/types';
  import VTextInput from '@/components/VTextInput.vue';
  import VTextareaInput from '@/components/VTextareaInput.vue';
  import VPriceInput from '@/components/VPriceInput.vue';
  import VSingleSelectInput from '@/components/VSingleSelectInput.vue';
  import VHiddenInput from '@/components/VHiddenInput.vue';

  @Component({
    components: {
      VTextInput,
      VTextareaInput,
      VPriceInput,
      VSingleSelectInput,
      VHiddenInput,
    },
  })
  export default class VForm extends Vue {
    @Prop({ required: true }) private readonly model!: Field[];
    @Prop({ default: () => ({}) }) private readonly initialData!: InitialData;
    private fields: FieldsState = {};
    private isValid: boolean = false;

    public clear(): void {
      Vue.set(this, 'fields', modelToFieldsState(this.model, this.initialData));
    }

    @Emit('submit')
    private onSubmit(): Form {
      this.validateAll();
      return {
        fields: this.fields,
        isValid: this.isValid,
      };
    }

    private getFieldDataByName(fieldName: string): Field | undefined {
      return this.model.find((field: Field) => field.name === fieldName);
    }

    private validateAll(): void {
      this.isValid = true;
      Object.keys(this.fields).forEach((fieldName: string): void => {
        const validationMessage: ValidatorMessage = this.validateField(fieldName, this.fields[fieldName].value);

        if (validationMessage !== null) {
          this.isValid = false;
        }
      });
    }

    private validateField(fieldName: string, value: string): ValidatorMessage {
      const fieldData: Field | undefined = this.getFieldDataByName(fieldName);
      this.fields[fieldName].error = null;

      if (fieldData && fieldData.validators) {
        for (const validator of fieldData.validators) {
          const validatorMessage: ValidatorMessage = validator(value);
          if (validatorMessage) {
            this.fields[fieldName].error = validatorMessage;
          }
        }
      }

      return this.fields[fieldName].error;
    }

    private inputTypeToComponent(fieldType: CustomInputType): string | null {
      return customInputTypeToComponentNameMapper(fieldType);
    }

    private onFieldChange(fieldName: string, value: string): void {
      this.fields[fieldName].value = value;
    }

    private onFieldBlur(fieldName: string): void {
      this.validateField(fieldName, this.fields[fieldName].value);
    }

    private onFieldFocus(fieldName: string): void {
      this.fields[fieldName].error = null;
    }

    private created(): void {
      this.clear();
    }
  }
</script>
