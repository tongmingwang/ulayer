import type { ButtonProps } from '../../button/src/types';

export type UButtonGroupSize = ButtonProps['size'];
export type UButtonGroupColor = ButtonProps['color'];
export type UButtonGroupVariant = ButtonProps['variant'];

export interface UButtonGroupProps {
  size?: UButtonGroupSize;
  color?: UButtonGroupColor;
  variant?: UButtonGroupVariant;
  vertical?: boolean;
}
