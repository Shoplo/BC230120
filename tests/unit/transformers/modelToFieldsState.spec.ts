import { CustomInputType, Field, FieldsState, InitialData, } from '@/types';
import modelToFieldsState from '@/transformers/modelToFieldsState.ts';

describe('modelToFieldsState', () => {
  it('returns empty object on empty fields array', () => {
    const fields: Field[] = [];
    const expectedResult: FieldsState = {};

    expect(modelToFieldsState(fields)).toMatchObject(expectedResult);
  });
  it('maps fields to fields state without initial values', () => {
    const fieldsMock: Field[] = [
      {
        id: 'first-test-field-id',
        name: 'first-test-field-name',
        type: CustomInputType.TEXT,
      },
      {
        id: 'second-test-field-id',
        name: 'second-test-field-name',
        type: CustomInputType.TEXT,
      },
      {
        id: 'third-test-field-id',
        name: 'third-test-field-name',
        type: CustomInputType.TEXT,
      },
    ];

    const expectedResult: FieldsState = {
      'first-test-field-name': {
        value: '',
        error: null,
      },
      'second-test-field-name': {
        value: '',
        error: null,
      },
      'third-test-field-name': {
        value: '',
        error: null,
      },
    };

    expect(modelToFieldsState(fieldsMock)).toMatchObject(expectedResult);
  });
  it('maps fields to fields state with initial values', () => {
    const fieldsMock: Field[] = [
      {
        id: 'first-test-field-id',
        name: 'first-test-field-name',
        type: CustomInputType.TEXT,
      },
      {
        id: 'second-test-field-id',
        name: 'second-test-field-name',
        type: CustomInputType.TEXT,
      },
      {
        id: 'third-test-field-id',
        name: 'third-test-field-name',
        type: CustomInputType.TEXT,
      },
    ];

    const initialValuesMock: InitialData = {
      'first-test-field-name': 'first-initial-value',
      'second-test-field-name': 'second-initial-value',
      'third-test-field-name': 'third-initial-value',
    };

    const expectedResult: FieldsState = {
      'first-test-field-name': {
        value: 'first-initial-value',
        error: null,
      },
      'second-test-field-name': {
        value: 'second-initial-value',
        error: null,
      },
      'third-test-field-name': {
        value: 'third-initial-value',
        error: null,
      },
    };

    expect(modelToFieldsState(fieldsMock, initialValuesMock)).toMatchObject(expectedResult);
  });
  it('maps fields to fields state with non matching initial values', () => {
    const fieldsMock: Field[] = [
      {
        id: 'first-test-field-id',
        name: 'first-test-field-name',
        type: CustomInputType.TEXT,
      },
      {
        id: 'second-test-field-id',
        name: 'second-test-field-name',
        type: CustomInputType.TEXT,
      },
      {
        id: 'third-test-field-id',
        name: 'third-test-field-name',
        type: CustomInputType.TEXT,
      },
    ];

    const initialValuesMock: InitialData = {
      'first-test-field-name': 'first-initial-value', // Matching
      'test-test-field-name': 'test-initial-value', // Non matching
      'third-test-field-name': 'third-initial-value', // Matching
      'second-test-test-field-name': 'second-test-initial-value', // Non matching
    };

    const expectedResult: FieldsState = {
      'first-test-field-name': {
        value: 'first-initial-value',
        error: null,
      },
      'second-test-field-name': {
        value: '',
        error: null,
      },
      'third-test-field-name': {
        value: 'third-initial-value',
        error: null,
      },
    };

    expect(modelToFieldsState(fieldsMock, initialValuesMock)).toMatchObject(expectedResult);
  });
});




