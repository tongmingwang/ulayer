import type { App, Plugin } from 'vue';
import UButtonGroup from './src/Main.vue';

UButtonGroup.install = (app: App) => {
  app.component(UButtonGroup.name!, UButtonGroup);
};
const UiButtonGroup: Plugin = {
  install(app: App) {
    app.component(UButtonGroup.name!, UButtonGroup);
  },
};

export { UButtonGroup };
export * from './src/types';

export default UiButtonGroup;
