<template>
  <el-scrollbar>
    <el-menu :default-active="activeMenu" :collapse="isCollapse" text-color="#555" active-text-color="rgb(76, 161, 100)"
      :collapse-transition="false" @select="handleSelect">
      <menuItem :menuList="menuList">
      </menuItem>
    </el-menu>
  </el-scrollbar>
</template>
<script setup>
import { ref, computed, inject, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { globalStore } from '@/store'

import menuItem from './menuItem.vue';

const route = useRoute()

const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path));

const global = globalStore()

const isCollapse = computed(() => global.isexpand)

const Router = useRouter()

const reload = inject('reload')

const handleSelect = (val) => {
  if (route.path !== val) {
    Router.push(val)
  } else {
    reload()
  }
}

const initMenu = ref([
  {
    path: '/',
    meta: {
      title: '首页',
      icon: 'HomeFilled'
    },
    component: 'layout',
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          icon: ''
        }
      }
    ]
  }
])

const menuList = computed(() => initMenu.value.concat(global.MenuList))

</script>
<style>
.el-menu {
  border: none;
}

.el-sub-menu__title:hover {
  background: rgba(76, 161, 100, .1);
  color: #4ca164 !important;
}
</style>