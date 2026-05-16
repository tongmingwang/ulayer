import type { Ref } from 'vue';
import type { UColorType } from '@/types/ume';

export type UDropdownTrigger = 'hover' | 'click' | 'contextmenu';

export type UDropdownPlacement =
  | 'bottom'
  | 'top'
  | 'bottom-start'
  | 'top-start';

export type UDropdownTriggers = UDropdownTrigger | UDropdownTrigger[];

export interface UDropdownItemOption {
  label: string;
  value?: string | number;
  disabled?: boolean;
  divided?: boolean;
  icon?: string;
}

export interface UDropdownProps {
  trigger?: UDropdownTriggers;
  disabled?: boolean;
  placement?: UDropdownPlacement;
  showArrow?: boolean;
  bgColor?: string;
  width?: string | number;
  offsetY?: number;
  closeOnClick?: boolean;
  delay?: number;
  items?: UDropdownItemOption[];
  modelValue?: string | number;
}

export interface UDropdownItemProps {
  value?: string | number;
  disabled?: boolean;
  color?: UColorType | '';
  divided?: boolean;
  icon?: string;
}

export type UDropdownProvider = {
  active: Ref<string | number>;
  setActive: (value: string | number) => void;
  close: () => void;
} | null;
