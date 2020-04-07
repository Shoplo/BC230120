import { FieldsState, Product } from '@/types';
const PRODUCT_KEYS = ['id', 'name', 'description', 'price', 'category'];

export default (fieldsState: FieldsState): Product => {
  return PRODUCT_KEYS.reduce((accumulator: object, productFieldName: string): object => {
    return {
      ...accumulator,
      [productFieldName]: (fieldsState[productFieldName] && fieldsState[productFieldName].value) || '',
    };
  }, {}) as Product;
};
