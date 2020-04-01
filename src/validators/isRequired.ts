import { ValidatorType } from '@/types';

const isRequired: ValidatorType = (input) => {
  if (input && input.length > 0) {
    return null;
  }

  return 'This field is required';
};

export default isRequired;
