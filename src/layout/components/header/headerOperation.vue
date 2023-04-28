<template>
  <div class="operation">
    <div class="notice pointer">
      <el-popover :width="300" trigger="click">
        <template #reference>
          <remind theme="outline" size="20" fill="#555" />
        </template>
        <template #default>
          <headerNoticeVue />
        </template>
      </el-popover>
    </div>
    <div class="full-screen pointer">
      <overall-reduction v-if="isFullscreen" theme="outline" size="20" fill="#555" @click="toggle" />
      <full-screen v-else theme="outline" size="20" fill="#555" @click="toggle" />
    </div>
    <!-- <div class="refresh-button pointer" @click="refresh_btn">
      <refresh theme="outline" size="20" fill="#555" />
    </div> -->
  </div>
</template>
<script setup>
import { useFullscreen } from '@vueuse/core'
import { OverallReduction, FullScreen, Remind, Refresh } from '@icon-park/vue-next'
import { inject } from 'vue';

import headerNoticeVue from './headerNotice.vue';

const { toggle, isFullscreen } = useFullscreen()

const reload = inject('reload')

const refresh_btn = () => {
  reload()
  // location.reload()
}


</script>
<style lang="scss" scoped>
.operation {
  display: flex;
  align-items: center;

  span {
    display: flex;
  }

  .full-screen {
    margin: 0 15px;
  }

  .refresh-button {
    margin-right: 15px;
  }
}
</style>