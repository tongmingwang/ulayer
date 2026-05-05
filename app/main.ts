import { createApp } from 'vue';
import App from './App.vue';
import ume, { UIcon } from '../packages/ume-ui';
import router from './router/index';
import '../packages/global/index';

const app = createApp(App);
app.use(ume);
app.component('UIcon', UIcon);
app.use(router);

app.mount('#app');
