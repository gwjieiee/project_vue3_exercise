<script setup>
import layout from './layout/index.vue'
</script>

<template>
  <!-- <layout/> -->
  <router-view></router-view>
</template>

<style>
/* 进度条颜色设置 */
#nprogress .bar{
  background: #4ca164;
}
</style>
