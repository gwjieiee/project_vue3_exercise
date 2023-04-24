<template>
  <chart class="chart" :option="option" />
</template>
<script setup>
import { ref } from 'vue';
import chart from '@/components/chart.vue'

const option = ref({
  //标题
  title: {
    text: '饼图',//标题文本
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
    left: 'right',
    orient: 'vertical',
    textStyle: {
      color: 'auto'
    },
    selectedMode: false
  },
  tooltip: {
    trigger: 'item',
  },
  series: [{
    name: 'Access from',
    type: 'pie',
    center: ['40%', '60%'],
    radius: ['0%', '65%'],
    data: [
      { value: 1048, name: 'Search Engine' },
      { value: 735, name: 'Direct' },
      { value: 580, name: 'Email' },
      { value: 484, name: 'Union Ads' },
      { value: 300, name: 'Video Ads' }
    ],
    label: {
      color: 'auto'
    },
    itemStyle: {
      borderColor: '#fff',
      borderWidth: 2
    },
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0,0,0,.5)',
        borderWidth: 2,
        borderColor: '#fff'
      }
    },
  }]
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
