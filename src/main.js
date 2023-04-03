import { createApp } from 'vue'
import './style.css'
import '@/assets/index.css'

import ElementPlus from 'element-plus'
import * as Icons from "@element-plus/icons-vue";
import 'element-plus/theme-chalk/display.css' // 引入基于断点的隐藏类
import 'element-plus/dist/index.css'

import 'nprogress/nprogress.css'//引入进度调样式，否则不显示

import router from './router'
import pinia from './store'

import App from './App.vue'


const app = createApp(App)

// 注册element Icons组件
Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key]);
});

app.use(ElementPlus)
app.use(router)
app.use(pinia)

app.mount('#app')
