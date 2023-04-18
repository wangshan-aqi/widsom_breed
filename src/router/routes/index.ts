import type { RouteRecordRaw } from 'vue-router';
import homeRoutes from './home';

export const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'layout',
    meta: {
      title: '首页',
    },
    component: () => import('@/layout/index.vue'),
    children: [...homeRoutes],
    redirect: '/home',
  },
];
