import { Field, FieldsState } from '@/types';

export default (fields: Field[]): FieldsState => {
  return fields.reduce((acc: FieldsState, cur: Field): FieldsState => {
    return {
      ...acc,
      [cur.name]: {
        value: '',
        error: null,
      },
    };
  }, {});
};
