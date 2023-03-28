<template>
  <el-container style="height: 100vh;">
    <el-aside>
      <layoutLeft/>
    </el-aside>
    <el-container class="main">
      <el-header>
        <headerVue></headerVue>
      </el-header>
      <el-main>
        <!-- <el-scroll> -->
          <router-view></router-view>
        <!-- </el-scroll> -->
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import layoutLeft from './components/layoutLeft/layoutLeft.vue';
import headerVue from './components/header/index.vue';
</script>
<style scoped>
.el-aside{
  width: 250px;
  background: gray;
  overflow-y: auto;
}
.main{
  width: calc(100vw - 250px);
  flex-direction: column;
}

.el-header{
  width: 100%;
  height: auto;
  padding: 0;
}
.el-main{
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 15px;
  background: #f0f2f5;
}
</style>