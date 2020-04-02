export interface NavItem {
  text: string;
  route: string;
}

export enum CustomInputType {
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

export interface FieldsState {
  [key: string]: FieldState;
}

export interface Form {
  fields: Field[];
}

export type ValidatorMessage = string | null;

export type ValidatorType = (input: string) => ValidatorMessage;
