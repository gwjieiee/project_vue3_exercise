<template>
  <el-scrollbar>
    <el-menu :default-active="activeMenu" :collapse="isCollapse" text-color="#555"
      active-text-color="rgb(76, 161, 100)" :collapse-transition="false" @select="handleSelect">
      <menuItem :menuList="menuList">
      </menuItem>
    </el-menu>
  </el-scrollbar>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useRoute,useRouter } from 'vue-router';
import { globalStore } from '@/store';

import menuItem from './menuItem.vue';

const route = useRoute()

const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path));

const global = globalStore()

const isCollapse = computed(()=> global.isexpand)

const router = useRouter()

const handleSelect = (val)=>{
  router.push(val)
}

const menuList = ref([
  {
    path: '/',
    meta: {
      title: '首页',
      icon: 'HomeFilled'
    },
    component:'layout',
    children: [
      {
        path: '/home',
        name:'home',
        meta: {
          title: '首页',
          icon: ''
        }
      }
    ]
  },
  {
    path: '/systemManage',
    meta: {
      title: '系统管理',
      icon: 'Tools',
    },
    component: 'layout',
    children: [
      {
        path: '/systemManage/user',
        name:'user',
        meta: {
          title: '用户管理',
        },
      },
      {
        path: '/systemManage/role',
        name:'role',
        meta: {
          title: '角色管理',
        },
      },
    ],
  },
])

</script>
<style>
.el-menu{
  border: none;
}
.el-sub-menu__title:hover{
  background: rgba(76, 161, 100,.1);
  color: #4ca164 !important;
}
</style>