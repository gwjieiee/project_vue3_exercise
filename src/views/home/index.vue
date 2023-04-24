<template>
  <div>
    <h4>qrcode.vue</h4>
    <Qrcode :value="content" :size="size"></Qrcode><br />
  </div>
  <el-row :gutter="20">
    <el-col :lg="6" :sm="12" :xs="24">
      <barChart class="m-t-20" />
    </el-col>
    <el-col :lg="6" :sm="12" :xs="24">
      <lineChart class="m-t-20" />
    </el-col>
    <el-col :lg="6" :sm="12" :xs="24">
      <pieChart class="m-t-20" />
    </el-col>
    <el-col :lg="6" :sm="12" :xs="24">
      <radarChart class="m-t-20" />
    </el-col>
  </el-row>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import Qrcode from 'qrcode.vue'
import barChart from './components/barChart.vue'
import lineChart from './components/lineChart.vue'
import pieChart from './components/pieChart.vue'
import radarChart from './components/radarChart.vue'


const content = ref('http://actorlixian.com')

const size = ref(80)

onMounted(() => {
  //
})

</script>