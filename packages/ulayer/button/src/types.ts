export interface ButtonProps {
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info' | '';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  variant?: 'outlined' | 'text' | 'contained' | 'tonal' | ''; // text
  shape?: 'round' | 'circle' | ''; // round circle
  height?: string;
  width?: string;
}