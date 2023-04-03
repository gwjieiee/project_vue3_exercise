<template>
  <h3>home</h3>
  <h3>home</h3>
  <h3>home</h3>
  <h3>home</h3>
  <el-button @click="login_btn">前往登录</el-button>
</template>
<script setup>
import { onMounted } from 'vue'
import { globalStore } from '@/store'

const global = globalStore()

const login_btn = () => {
  // router.push('/login')
  global.logout()
  location.reload()
}

onMounted(() => {
  //
})

</script>