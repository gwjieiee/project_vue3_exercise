<template>
  <div ref="chart" class="chart"></div>
</template>
<script setup>
import * as echarts from 'echarts'
import { ref, onMounted, watch } from 'vue'
import { useEventListener } from '@vueuse/core'

const chart = ref(null)

const props = defineProps({
  option: Object
})

onMounted(() => {
  initChart()
})

const initChart = () => {
  const dom = chart.value
  if (dom) {
    let option = props.option
    // 需要在页面Dom元素加载后再初始化echarts对象
    let myChart = echarts.init(dom)
    myChart.setOption(option)
    // 自动监听加自动销毁
    useEventListener('resize', () => myChart.resize())

    watch(
      () => props.option,
      (newV, old) => {
        myChart.setOption(newV)
      },
      {
        deep: true
      }
    )
  }
}

</script>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>