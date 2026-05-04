export interface UInputPropsType {
  modelValue: string | number;
  type?:
    | 'text'
    | 'password'
    | 'number'
    | 'email'
    | 'url'
    | 'tel'
    | 'search'
    | 'month'
    | 'week'
    | 'date'
    | 'datetime'
    | 'datetime-local'
    | 'time'
    | 'color';
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  clearable?: boolean;
  size?: 'large' | 'medium' | 'small';
  prefixIcon?: string;
  suffixIcon?: string;
}
