import type { App, Plugin } from 'vue';
import button, { UButton } from './button';
import input, { UInput } from './input';
import buttonGroup, { UButtonGroup } from './button-group';
import checkbox, { UCheckbox } from './checkbox';
import fab, { UFab } from './fab';
import { UIcon } from './icon';
import ripple from '@/directives/ripple';
import { useTheme } from '@/hooks/useTheme';

import icon from './icon';

const components: Plugin[] = [button, input, buttonGroup, checkbox, fab, icon];

export const install = (app: App) => {
  app.directive('ripple', ripple);
  components.forEach((component) => {
    app.use(component);
  });
};

export {
  UButton,
  UInput,
  UButtonGroup,
  UCheckbox,
  UFab,
  UIcon,
  ripple,
  useTheme,
};

export * from './button';
export * from './input';
export * from './button-group';
export * from './checkbox';
export * from './fab';

export default {
  install,
};
