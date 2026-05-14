import { withInstallComponent } from '@/utils/install';

import UMenu from './src/UMenu.vue';
import UMenuItem from './src/UMenuItem.vue';
import USubMenu from './src/SubMenu.vue';

export const Menu = withInstallComponent(UMenu);
export const MenuItem = withInstallComponent(UMenuItem);
export const SubMenu = withInstallComponent(USubMenu);

export { UMenu, UMenuItem, USubMenu };
