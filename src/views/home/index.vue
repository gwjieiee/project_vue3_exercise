<template>
  <h4>qrcode.vue</h4>
  <Qrcode :value="content" :size="size"></Qrcode><br/>
</template>
<script setup>
import { onMounted,ref } from 'vue'
import Qrcode from 'qrcode.vue'

const content = ref('http://actorlixian.com')

const size = ref(100)

onMounted(() => {
  //
})

</script>