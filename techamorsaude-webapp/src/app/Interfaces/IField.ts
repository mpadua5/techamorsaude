import { EnumTypeField } from '../utils/EnumTypeField';

export interface IField {
  id: string,
  label: string;
  type?: EnumTypeField;
  required?: boolean;
}
