import { createApp } from 'vue';
import App from './App.vue';
import ulayer from '../packages/ulayer';
import router from './router/index';
import '../packages/global/index';

const app = createApp(App);
app.use(ulayer);
app.use(router);

app.mount('#app');
