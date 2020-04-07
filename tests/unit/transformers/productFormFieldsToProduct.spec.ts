import { FieldsState, Product } from '@/types';

import productFormFieldsToProduct from '@/transformers/productFormFieldsToProduct';

describe('productFormFieldsToProduct', () => {
  it('creates empty product on empty fieldsState', () => {
    const fieldsStateMock: FieldsState = {};

    const expectedResult: Product = {
      id: '',
      name: '',
      description: '',
      price: '',
      category: '',
    };

    expect(productFormFieldsToProduct(fieldsStateMock)).toMatchObject(expectedResult);
  });
  it('transforms complete FieldsState to product', () => {
    const fieldsStateMock: FieldsState = {
      'id': {
        value: 'test-product-id',
        error: null,
      },
      'name': {
        value: 'test-product-name',
        error: null,
      },
      'description': {
        value: 'test-product-description',
        error: null,
      },
      'price': {
        value: 'test-product-price',
        error: null,
      },
      'category': {
        value: 'test-product-category',
        error: null,
      },
    };

    const expectedResult: Product = {
      id: 'test-product-id',
      name: 'test-product-name',
      description: 'test-product-description',
      price: 'test-product-price',
      category: 'test-product-category',
    };

    expect(productFormFieldsToProduct(fieldsStateMock)).toMatchObject(expectedResult);
  });
  it('transforms incomplete FieldsState to product', () => {
    const fieldsStateMock: FieldsState = {
      'id': {
        value: 'test-product-id',
        error: null,
      },
      'description': {
        value: 'test-product-description',
        error: null,
      },
      'category': {
        value: 'test-product-category',
        error: null,
      },
    };

    const expectedResult: Product = {
      id: 'test-product-id',
      name: '',
      description: 'test-product-description',
      price: '',
      category: 'test-product-category',
    };

    expect(productFormFieldsToProduct(fieldsStateMock)).toMatchObject(expectedResult);
  });
});
