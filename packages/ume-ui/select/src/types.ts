import type { Ref } from 'vue';

export interface USelectProps {
  modelValue: string | number;
  disabled?: boolean;
  items?: Array<string | number>;
  placeholder?: string;
  bgColor?: string
}

export interface UOptionProps {
  value?: string | number;
  disabled?: boolean;
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info';
  radius?: '0px';
  height?: string;
}

export type USelectProviderProps = {
  active: Ref<string>;
  setActive: (value: string | number) => void;
} | null;
