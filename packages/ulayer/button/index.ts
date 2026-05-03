import type { App, Plugin } from 'vue';
import Button from './src/button.vue';

export const UiButton: Plugin = {
  install(app: App) {
    app.component(Button.name!, Button);
  },
};

export { Button as UButton };
export * from './src/types';

export default UiButton;
