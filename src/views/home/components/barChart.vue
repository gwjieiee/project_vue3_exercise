<template>
  <chart class="chart" :option="option" />
</template>
<script setup>
import { ref } from 'vue';
import chart from '@/components/chart.vue'

const option = ref({
  //标题
  title: {
    text: '柱状图',//标题文本
    textStyle: {
      //标题样式
      color: '#666',
      fontSize: 15
    },
    left: 'left',
    top: 'top'
  },
  legend: {
    top: 'bottom',
    textStyle: {
      color: 'auto'
    },
    selectedMode:false
  },
  tooltip: {
    trigger: 'axis',//坐标轴触发
  },
  dataset: {
    source: [
      ['product', '2015', '2016', '2017'],
      ['Matcha', 43.3, 85.8, 93.7],
      ['Milk', 83.1, 73.4, 55.1],
      ['Cheese', 86.4, 65.2, 82.5],
      ['Walnut', 72.4, 53.9, 39.1]
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
})

</script>

<style scoped>
.chart {
  width: 95%;
  height: 220px;
  background: white;
  padding: 10px;
  border-radius: 10px;
}
</style>
