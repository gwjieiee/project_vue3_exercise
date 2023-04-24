<template>
  <chart class="chart" :option="option" />
</template>
<script setup>
import { ref } from 'vue';
import chart from '@/components/chart.vue'

const option = ref({
  //标题
  title: {
    text: '雷达图',//标题文本
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
    textStyle:{
      color:'auto'
    },
    selectedMode: false
  },
  tooltip: {},
  radar: {
    indicator: [
      { name: 'Sales', max: 6500 },
      { name: 'Administration', max: 16000 },
      { name: 'Information', max: 30000 },
      { name: 'Customer', max: 38000 },
      { name: 'Development', max: 52000 },
      { name: 'Marketing', max: 25000 }
    ],
    center: ['40%', '50%'],
    radius: ['0%', '60%']
  },

  series: [{
    type: 'radar',
    name: 'radar',
    data: [
      {
        value: [4200, 3000, 20000, 35000, 50000, 18000],
        name: 'Allocated'
      },
      {
        value: [5000, 14000, 28000, 26000, 42000, 21000],
        name: 'Actual'
      }
    ]
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
