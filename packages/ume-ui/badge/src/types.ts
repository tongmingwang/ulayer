export interface BadgeProps {
  color?: 'primary' | 'success' | 'warning' | 'error';
  variant?: 'dot' | 'text';
  showBadge?: boolean;
  count?: number;
  max?: number;
}
