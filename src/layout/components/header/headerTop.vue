<template>
  <div class="header-top">
    <headerBreadCrumb></headerBreadCrumb>
    <div class="flex">
      <headerOperation></headerOperation>
      <headerUser></headerUser>
    </div>
  </div>
</template>
<script setup>
import headerBreadCrumb from './headerBreadCrumb.vue';
import headerOperation from './headerOperation.vue';
import headerUser from './headerUser.vue';
</script>
<style lang="scss" scoped>
.header-top {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #eee;
}
.flex{
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
}
</style>