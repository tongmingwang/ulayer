import type { App, Plugin } from 'vue';
import UButton from './button';
import UInput from './input';
import UButtonGroup from './button-group';

const components: Plugin[] = [UButton, UInput, UButtonGroup];

export const install = (app: App) => {
  components.forEach((component) => {
    app.use(component);
  });
};

export { UButton, UInput, UButtonGroup };

export * from './button';
export * from './input';
export * from './button-group';

export default {
  install,
};
