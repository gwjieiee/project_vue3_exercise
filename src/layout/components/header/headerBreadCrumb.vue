<template>
  <div class="breadcrumb">
    <el-icon size="22px" color="#555" @click="changeExpand">
      <component :is="isExpand ? 'expand' : 'fold'"></component>
    </el-icon>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in levelList" :key="item.path">{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup>
import {globalStore} from '@/store'
import {computed,ref} from 'vue'
import { useRoute } from 'vue-router'

const global = globalStore()
const isExpand = computed(()=> global.isexpand)
const changeExpand = ()=>{
  global.changeExpand()
}

const route = useRoute()

const levelList = computed(()=> route.matched)

</script>
<style scoped>
.breadcrumb{
  padding: 0 10px;
  display: flex;
  align-items: center;
}
.el-icon{
  cursor: pointer;
  margin-right: 10px;
}
</style>