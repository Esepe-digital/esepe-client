import { z } from 'zod';
import { step2Schema, step3Schema } from '../schemas/validation';

export type Step2FormData = z.infer<typeof step2Schema>;
export type Step3FormData = z.infer<typeof step3Schema>;

export type TextFieldType = {
  onChange: (value: string) => void;
  onBlur: () => void;
  value: string;
  name: string;
  ref?: React.Ref<HTMLInputElement>;
};

export type CheckboxFieldType = {
  onChange: (checked: boolean) => void;
  onBlur: () => void;
  value: boolean;
  name: string;
  ref?: React.Ref<HTMLInputElement>;
};

export type SelectFieldType = {
  onChange: (value: string) => void;
  onBlur: () => void;
  value: string;
  name: string;
  ref?: React.Ref<HTMLSelectElement>;
};
