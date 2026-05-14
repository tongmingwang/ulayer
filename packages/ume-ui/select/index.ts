import { withInstallComponent } from '@/utils/install';

import USelect from './src/USelect.vue';
import UOption from './src/UOption.vue'
const Select = withInstallComponent(USelect);
const Option = withInstallComponent(UOption);
export default Select;
export { Select,USelect,Option,UOption };
