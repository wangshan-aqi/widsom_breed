import type { RouteRecordRaw } from 'vue-router';

const homeRoutes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
    },
    component: () => import('@/views/home/HomeView.vue'),
  },
  {
    name: 'about',
    path: '/about',
    meta: {
      title: '关于',
    },
    component: () => import('@/views/users/TailWindCss.vue'),
    children: [
      {
        name: 'test',
        path: 'test',
        meta: {
          title: '测试',
        },
        component: () => import('@/views/users/tailwindChild.vue'),
      },
    ],
  },
];
export default homeRoutes;
