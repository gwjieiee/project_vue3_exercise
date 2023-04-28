import layout from '@/layout/index.vue'

const routes = [
  {
    path: '/',
    component: layout,
    redirect: '/home',
    meta: {
      title: '首页',
      icon: 'sfont system-home',
    },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          icon: 'sfont system-home',
        },
      },
    ],
  },
  {
    path: '/login',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/login/index.vue'),
  },
]

export default routes
