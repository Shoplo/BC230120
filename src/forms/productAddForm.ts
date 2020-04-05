import isRequired from '@/validators/isRequired';
import { CustomInputType, Field } from '@/types';

export default Object.freeze([
  {
    id: 'name',
    name: 'productName',
    placeholder: 'Product name',
    label: 'Product name',
    validators: [isRequired],
    type: CustomInputType.TEXT,
  },
  {
    id: 'description',
    name: 'productDescription',
    placeholder: 'Product description',
    label: 'Product description',
    validators: [isRequired],
    type: CustomInputType.TEXTAREA,
  },
  {
    id: 'price',
    name: 'productPrice',
    placeholder: 'Product price',
    label: 'Product price',
    validators: [isRequired],
    type: CustomInputType.PRICE,
  },
  {
    id: 'category',
    name: 'productCategory',
    placeholder: 'Product category',
    label: 'Product category',
    validators: [isRequired],
    type: CustomInputType.SELECT,
    options: [
      { text: 'category 1', value: 'cat1' },
      { text: 'category 2', value: 'cat2' },
      { text: 'category 3', value: 'cat3' },
      { text: 'category 4', value: 'cat4' },
    ],
  },
]) as Field[];
