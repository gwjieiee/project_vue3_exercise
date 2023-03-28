import layout from '@/layout/index.vue'

const routes = [
  {
    path:'/',
    component:layout,
    redirect:'/home',
    meta:{
      title:'首页',
      icon:'sfont system-home'
    },
    children:[
      {
        path:'home',
        component:()=> import ('@/views/home/index.vue'),
        meta:{
          title:'首页',
          icon:'sfont system-home'
        }
      }
    ]
  },
  {
    path:'/login',
    meta:{
      title:'登录'
    },
    component:()=> import ('@/views/login/index.vue')
  },
  {
    path:'/systemManage',
    component:layout,
    meta:{
      title:'系统管理',
      icon:''
    },
    children:[
      {
        path:'role',
        component:()=> import ('@/views/systemManage/role/index.vue'),
        meta:{
          title:'角色管理'
        }
      },
      {
        path:'user',
        component:()=> import ('@/views/systemManage/user/index.vue'),
        meta:{
          title:'用户管理'
        }
      }
    ]
  }
]

export default routes