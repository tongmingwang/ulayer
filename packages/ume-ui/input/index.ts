import type { App, Plugin } from 'vue';
import UInput from './src/input.vue';

UInput.install = (app: App) => {
  app.component(UInput.name!, UInput);
};
const UiInput: Plugin = {
  install(app: App) {
    app.component(UInput.name!, UInput);
  },
};

export { UInput };
export * from './src/types';

export default UiInput;
