import { CustomInputType } from '@/types';

export default (fieldType: CustomInputType): string | null => {
  switch (fieldType as CustomInputType) {
    case CustomInputType.HIDDEN:
      return 'VHiddenInput';
    case CustomInputType.TEXT:
      return 'VTextInput';
    case CustomInputType.TEXTAREA:
      return 'VTextareaInput';
    case CustomInputType.PRICE:
      return 'VPriceInput';
    case CustomInputType.SELECT:
      return 'VSingleSelectInput';
    default:
      return null;
  }
};
