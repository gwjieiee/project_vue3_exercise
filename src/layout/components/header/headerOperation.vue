<template>
  <div class="operation">
    <overall-reduction v-if="isFullscreen" theme="outline" size="22" fill="#555" @click="toggle"/>
    <full-screen v-else theme="outline" size="22" fill="#555" @click="toggle"/>
  </div>
</template>
<script setup>
import { useFullscreen } from '@vueuse/core'
import { OverallReduction,FullScreen } from '@icon-park/vue-next'

const { toggle, isFullscreen } = useFullscreen()


</script>
<style lang="scss">
.operation {
  display: flex;
  align-items: center;
  margin-right: 20px;
  span{
    display: flex;
  }
}
</style>