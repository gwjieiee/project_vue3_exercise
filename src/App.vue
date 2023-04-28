<script>
import { ref, provide, nextTick } from 'vue'

export default {
  setup () {
    const isRouterAlive = ref(true)
    
    const reload = () => {
      isRouterAlive.value = false
      nextTick(() => {
        isRouterAlive.value = true
      })
    }

    provide('reload', reload)
    return {
      isRouterAlive,
      reload
    }
  }
}


</script>

<template>
  <router-view v-if="isRouterAlive"></router-view>
</template>

<style>
/* 进度条颜色设置 */
#nprogress .bar {
  background: #4ca164;
}
</style>
