<template>
  <!-- <h2>notice</h2>
  <message theme="outline" size="24" fill="#333"/> -->
  <el-scrollbar>
    <div class="notice-list">
      <div class="notice-li" v-for="notice in noticeList" :key="notice.title">
        <div class="notice-icon">
          <comment theme="outline" size="16" fill="#fff" />
        </div>
        <div class="notice-main">
          <div class="notice-title">{{ notice.title }}</div>
          <div class="notice-content">{{ notice.content }}</div>
          <div class="notice-time">{{ notice.time }}</div>
        </div>
      </div>
    </div>
  </el-scrollbar>
  <div>
  </div>
</template>
<script setup>
import { Comment } from '@icon-park/vue-next'
import { ref } from 'vue';

const noticeList = ref([
  { title: '通知1', content: '通知内容1111', time: '2023-4-20' },
  { title: '通知2', content: '通知内容2222', time: '2023-4-21' },
  { title: '通知3', content: '通知内容3333', time: '2023-4-22' },
  { title: '通知1', content: '通知内容1111', time: '2023-4-23' },
  { title: '通知2', content: '通知内容2222', time: '2023-4-24' },
  { title: '通知3', content: '通知内容3333', time: '2023-4-25' },
])

</script>
<style lang="scss" scoped>
.notice-list {
  height: 200px;

  .notice-li {
    display: flex;
    align-items: center;
    margin: 10px 0;

    .notice-icon {
      width: 30px;
      height: 30px;
      background: #4ca164;
      text-align: center;
      line-height: 35px;
      border-radius: 50%;
      margin: 0 20px 0 10px;
    }
    .notice-main{
      .notice-title{
        font-size: 16px;
        // font-weight: bold;
        padding: 5px 0;
      }
      .notice-content{
        color: #555;
        font-size: 13px;
      }
      .notice-time{
        color: #aaa;
        font-size: 12px;
        padding: 5px 0;
      }
    }
  }

}
</style>