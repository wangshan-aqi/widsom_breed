import type { RouteRecordRaw } from 'vue-router';

const homeRoutes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
    },
    component: () => import('@/views/HomeView.vue'),
  },
  {
    name: 'about',
    path: '/about',
    meta: {
      title: '关于',
    },
    component: () => import('@/views/TailWindCss.vue'),
    children: [
      {
        name: 'test',
        path: 'test',
        meta: {
          title: '测试',
        },
        component: () => import('@/views/tailwindChild.vue'),
        children: [
          {
            path: 'temp',
            name: 'temp',
            meta: {
              title: '临时',
            },
            component: () => import('@/views/tailwindChild2.vue'),
          },
        ],
      },
    ],
  },
];
export default homeRoutes;
