<template>
  <h3>home</h3>
  <h3>home</h3>
  <h3>home</h3>
  <h3>home</h3>
  <h3 v-if="global.isexpand">响应</h3>
  <el-button @click="change_btn">切换</el-button>
  <el-button @click="login_btn">前往登录</el-button>
</template>
<script setup>
import {onMounted} from 'vue'
import {useRoute,useRouter} from 'vue-router'
import {globalStore} from '@/store'

const global = globalStore()

const change_btn = ()=>{
  global.changeExpand()
  console.log(global.isexpand)
}

const router = useRouter()

const login_btn = ()=>{
  router.push('/login')
}

onMounted(()=>{
  // console.log('global',global.isexpand)
})

</script>