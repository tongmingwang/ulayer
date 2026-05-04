import { createRouter, createWebHistory } from 'vue-router';

const rootPath = '../../packages/ume-ui';
//  @ts-ignore
const demoPages = import.meta.glob(`../../packages/ume-ui/**/Test.vue`);

console.log(demoPages, 'demoPages');
const routes = Object.keys(demoPages).map((key) => {
  const path = key.replace(rootPath, '').replace('/Test.vue', '');
  console.log(path);

  return {
    path,
    name: path.replace('/', ''),
    component: demoPages[key],
  };
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
export { routes };
