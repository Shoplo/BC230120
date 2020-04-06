import { FieldsState, FieldState, Product } from '@/types';

export default (fieldsState: FieldsState): Product => {
  return Object.keys(fieldsState).reduce((accumulator: object, fieldName: string): object => {
    const fieldState: FieldState = fieldsState[fieldName];
    return {
      ...accumulator,
      [fieldName]: fieldState.value,
    };
  }, {}) as Product;
};
