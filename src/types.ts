import Products from '@/store/modules/products';

export interface NavItem {
  text: string;
  route: string;
}

export enum CustomInputType {
  HIDDEN,
  TEXT,
  TEXTAREA,
  PRICE,
  SELECT,
}

export interface SelectOption {
  text: string;
  value: string;
}

export interface Field {
  id: string;
  name: string;
  placeholder?: string;
  label?: string;
  validators?: ValidatorType[];
  type: CustomInputType;
  options?: SelectOption[];
}

export interface FieldState {
  value: string;
  error: ValidatorMessage;
}

export interface InitialData {
  [key: string]: string;
}

export interface FieldsState {
  [key: string]: FieldState;
}

export interface Form {
  fields: FieldsState;
  isValid: boolean;
}

export interface ProductsStore {
  products: Products[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
}

export type ValidatorMessage = string | null;

export type ValidatorType = (input: string) => ValidatorMessage;
export type ProductByIdGetter = (id: string) => Product | undefined;
