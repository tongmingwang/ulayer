import type { App, Plugin } from 'vue';
import uButton from './button';

const components: Plugin[] = [uButton];

export const install = (app: App) => {
  components.forEach((component) => {
    app.use(component);
  });
};

export { uButton };

export * from './button';

export default {
  install,
};
