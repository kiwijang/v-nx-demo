import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/Button',
    name: 'Button',
    component: async () => await import('../views/Button.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: async () => await import('../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
