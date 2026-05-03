import { SIZE_MAP } from '@/ulayer/config';

export function useSize(size: keyof typeof SIZE_MAP) {
  return SIZE_MAP[size];
}
