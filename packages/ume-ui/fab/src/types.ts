export interface FabProps {
  color?: 'primary' | 'success' | 'warning' | 'error' | '';
  size?: 'small' | 'medium' | 'large' | 'extended' | 'mini' | '';
  disabled?: boolean;
  loading?: boolean;
  fixed?: boolean;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  shadow?: boolean;
  ripple?: boolean;
  height?: string;
  width?: string;
  label?: string;
}
