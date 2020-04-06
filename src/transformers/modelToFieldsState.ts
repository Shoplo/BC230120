import { Field, FieldsState, InitialData } from '@/types';

export default (fields: Field[], values?: InitialData): FieldsState => {
  return fields.reduce((acc: FieldsState, cur: Field): FieldsState => {
    return {
      ...acc,
      [cur.name]: {
        value: (values && values[cur.name]) || '',
        error: null,
      },
    };
  }, {});
};
