import { withInstallComponent } from '@/utils/install';
import UBadge from './src/UBadge.vue';

const Badge = withInstallComponent(UBadge);
export default Badge;
export { UBadge };
export * from './src/types';