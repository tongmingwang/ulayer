export interface UInputPropsType {
  modelValue: string | number;
  type?: 'text' | 'number' | 'password' | 'textarea' | string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  clearable?: boolean;
  size?: 'large' | 'medium' | 'small';
  prefix?: string;
  suffix?: string;
  variant?: 'outlined' | 'contained' | 'tonal';
  rows?: number | string;
  name?: string;
  autocomplete?: string;
  autofocus?: boolean;
  maxlength?: number | string;
  minlength?: number | string;
  max?: number | string;
  min?: number | string;
  step?: number | string;
}
