import { withInstallComponent } from '@/utils/install';

import UDropdown from './src/UDropdown.vue';
import UDropdownItem from './src/UDropdownItem.vue';

const Dropdown = withInstallComponent(UDropdown);
const DropdownItem = withInstallComponent(UDropdownItem);

export default Dropdown;
export { Dropdown, UDropdown, DropdownItem, UDropdownItem };