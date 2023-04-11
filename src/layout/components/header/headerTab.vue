<template>
  <el-tabs v-model="currentTab" type="card" @tab-click="changeTab" @tab-remove="closeTab">
    <el-tab-pane v-for="(item, index) in tabList" :key="item.name" :label="item.title" :name="item.name" :closable="item.close">
    </el-tab-pane>
  </el-tabs>
</template>
<script setup>
import { ref,watch } from 'vue'
import { useRoute,useRouter } from 'vue-router';

const tabList = ref([
  { name: 'home', title: '首页',close:false}
])

const currentTab = ref('home')

const closeTab = (val) => {
  tabList.value.splice(val, 1)
  if (currentTab.value == val) {
    currentTab.value--
  }
}

const changeTab = (val) => {
  console.log('change', val)
}

const route = useRoute()
const router = useRouter()

const addTab = (route)=>{
  //先判断标签页是否已经存在
  let index = tabList.value.findIndex(item=>item.name === route.name)
  if(index == -1){
    tabList.value.push({
      close:true,
      title:route.meta.title,
      name:route.name
    })
  }
  currentTab.value = route.name
  console.log('current',currentTab.value,route.name)
}

watch(
  ()=>route.path,
  (newV,old)=>{
    // console.log('newV',newV)
    currentTab.value = route.name
    addTab(route)
  },
  {deep:true}
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
.el-tabs--card>.el-tabs__header .el-tabs__item:hover{
  color: rgba(76,161,100,.6);
}

/* 当前tab的样式 */
.el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
  color: rgb(76, 161, 100);
  border-bottom: 2px solid rgb(76, 161, 100);
}
</style>