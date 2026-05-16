import type { UColorType } from '@/types/ume';

export interface FormProps {
  labelPosition?: 'left' | 'right' | 'top';
  labelWidth?: string;
  inline?: boolean;
  disabled?: boolean;
}

export interface FormItemProps {
  label?: string;
  labelWidth?: string;
  required?: boolean;
  color?: UColorType;
  message?: string;
  showMessage?: boolean;
}
