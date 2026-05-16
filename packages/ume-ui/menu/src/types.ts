import type { Ref } from 'vue';
import type { UColorType } from '@/types/ume';

export interface UMenuProps {
  modelValue: string | number;
  color?: UColorType | '';
}
export interface UMenuEmits {
  (e: 'update:modelValue', value: string | number): void;
  (e: 'change', value: string | number): void;
}

export interface UMenuItemProps {
  value?: string | number;
  disabled?: boolean;
  color?: UColorType | '';
  radius?: '0px';
  height?: string;
}

export interface USubMenuProps {
  title?: string;
  align?: 'left' | 'right';
  disabled?: boolean;
  opened?: boolean;
  radius?: '0px';
}

export type UMenuProvider = {
  active: Ref<string>;
  setActive: (value: string | number) => void;
  level: number;
  registerItem?: (value: string | number) => void;
} | null;
