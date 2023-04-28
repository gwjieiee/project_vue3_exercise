import { createRouter, createWebHashHistory } from 'vue-router'
import nProgress from 'nprogress'
import { globalStore } from '../store'

import defaultRoutes from './modules/default'

import systemManage from './modules/system'

nProgress.configure({ showSpinner: false }) //隐藏右上角螺旋加载显示

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...defaultRoutes],
})

router.beforeEach((to, from, next) => {
  nProgress.start()

  //登录页不需要token，不设置的话，会陷入死循环
  if (to.path == '/login') {
    next()
  }

  //未登录，跳转登陆界面
  if (!globalStore().token) {
    next('/login')
  }

  next()
})

router.afterEach(() => {
  nProgress.done()
})

export default router
