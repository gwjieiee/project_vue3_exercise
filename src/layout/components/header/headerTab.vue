<template>
  <el-tabs v-model="currentTab" type="card" @tab-click="changeTab" @tab-remove="closeTab">
    <el-tab-pane v-for="item in tabList" :key="item.name" :label="item.title" :name="item.name" :closable="item.close">
    </el-tab-pane>
  </el-tabs>
</template>
<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { globalStore } from '../../../store';

const route = useRoute()
const router = useRouter()

onMounted(() => {
  initTab()
})

const store = globalStore()

const tabList = computed(() => store.tabList)

const initTab = () => {
  if (tabList.value.findIndex(item => item.title === '首页') === -1) {
    tabList.value.push({
      name: '/home', title: '首页', close: false, path: '/home'
    })
  }
}

const currentTab = ref(route.path)

const closeTab = (val) => {
  store.removeTab(val, currentTab.value == val)
}

const changeTab = (val) => {
  router.push(val.props.name)
}

const addTab = (route) => {
  store.addTab(route)
}

watch(
  () => route.path,
  (newV, old) => {
    currentTab.value = route.path
    addTab(route)
  },
  { deep: true }
)


</script>
<style>
/* 去除tab列表的border */
.el-tabs--card>.el-tabs__header .el-tabs__nav {
  border: none;
}

/* 去除tab标签的border */
.el-tabs--card>.el-tabs__header .el-tabs__item {
  color: #555;
  border: none;
}

/* tab标签hover样式 */
.el-tabs--card>.el-tabs__header .el-tabs__item:hover {
  color: rgba(76, 161, 100, .6);
}

/* 当前tab的样式 */
.el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
  color: rgb(76, 161, 100);
  border-bottom: 2px solid rgb(76, 161, 100);
}
</style>