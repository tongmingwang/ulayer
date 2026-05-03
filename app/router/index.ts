import { createRouter, createWebHistory } from 'vue-router';

const rootPath = '../../packages/ulayer';
// 读取路由文件
const demoPages = import.meta.glob(`../../packages/ulayer/**/Test.vue`);

console.log(demoPages, 'demoPages');
const routes = Object.keys(demoPages).map((key) => {
  const path = key.replace(rootPath, '').replace('/Test.vue', '');
  console.log(path);

  return {
    path,
    component: demoPages[key],
  };
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
