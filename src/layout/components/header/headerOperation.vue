<template>
  <div class="operation">
    <div class="notice pointer">
      <el-popover :width="300" trigger="click">
        <template #reference>
          <remind theme="outline" size="20" fill="#555" />
        </template>
        <template #default>
          <headerNoticeVue/>
        </template>
      </el-popover>
    </div>
    <div class="full-screen">
      <overall-reduction class="pointer" v-if="isFullscreen" theme="outline" size="20" fill="#555" @click="toggle" />
      <full-screen class="pointer" v-else theme="outline" size="20" fill="#555" @click="toggle" />
    </div>
  </div>
</template>
<script setup>
import { useFullscreen } from '@vueuse/core'
import { OverallReduction, FullScreen, Remind } from '@icon-park/vue-next'

import headerNoticeVue from './headerNotice.vue';

const { toggle, isFullscreen } = useFullscreen()


</script>
<style lang="scss" scoped>
.operation {
  display: flex;
  align-items: center;
  margin-right: 15px;

  span {
    display: flex;
  }

  .full-screen {
    margin-left: 15px;
  }
}
</style>