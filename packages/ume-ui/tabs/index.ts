import { withInstallComponent } from '@/utils/install';
import UTabs from './src/UTabs.vue';
import UTabPane from './src/UTabPane.vue';

const Tabs = withInstallComponent(UTabs);
const TabPane = withInstallComponent(UTabPane);

export { UTabs, UTabPane, Tabs, TabPane };
export * from './src/types';
