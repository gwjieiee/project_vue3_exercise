import layout from '@/layout/index.vue'

const routes = [
  {
    path: '/systemManage',
    component: layout,
    meta: {
      title: '系统管理',
      icon: '',
    },
    children: [
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/systemManage/role/index.vue'),
        meta: {
          title: '角色管理',
        },
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/systemManage/user/index.vue'),
        meta: {
          title: '用户管理',
        },
      },
    ],
  },
]

export default routes
