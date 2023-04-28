<template>
  <el-container style="height: 100vh;">
    <el-aside :style="{ width: isExpand ? '65px' : '220px' }">
      <layoutLeft />
    </el-aside>
    <el-container class="main" :style="{ width: isExpand ? 'calc(100vw - 65px)' : 'calc(100vw - 220px)' }">
      <el-header>
        <headerVue></headerVue>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import layoutLeft from './components/layoutLeft/layoutLeft.vue';
import headerVue from './components/header/index.vue';
import { useDebounceFn } from "@vueuse/core";
import { globalStore } from '@/store';
import { ref, computed, onBeforeUnmount } from 'vue';

const global = globalStore()

const isExpand = computed(() => global.isexpand)

//监听页面大小，折叠侧边栏
const screenWidth = ref(0)

const listeningWindow = useDebounceFn(() => {
  screenWidth.value = document.body.clientWidth
  if (screenWidth.value < 900) global.setExpand(true)
  if (screenWidth.value > 900) global.setExpand(false)
}, 100);

window.addEventListener("resize", listeningWindow, false)

onBeforeUnmount(() => {
  window.removeEventListener("resize", listeningWindow)
});

</script>
<style scoped>
.el-aside {
  overflow-y: auto;
}

.main {
  width: calc(100vw - 220px);
  flex-direction: column;
}

.el-header {
  width: 100%;
  height: auto;
  padding: 0;
}

.el-main {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 15px;
  background: #f0f2f5;
}
</style>