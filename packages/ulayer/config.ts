export const SIZE_MAP = {
  small: '28px',
  medium: '36px',
  large: '48px',
};

export function getSize(key: keyof typeof SIZE_MAP) {
  return SIZE_MAP[key] || SIZE_MAP.medium;
}
