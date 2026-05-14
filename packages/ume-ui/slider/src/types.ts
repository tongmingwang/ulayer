import type { UColorType } from '@/types/ume';

export interface USliderProps {
  modelValue: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  color?: UColorType;
  vertical?: boolean;
  // 手柄宽度
  thumbSize?: string;
  // 滑块进度宽度
  trackSize?: string;
}

// 组件 emits 类型定义
export interface Emits {
  (e: 'update:modelValue', value: number): void;
  (e: 'change', value: number): void;
}
