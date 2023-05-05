<template>
  <template v-for="menu in menuList" :key="menu.path">
    <el-sub-menu v-if="menu.children" :index="menu.path">
      <template #title>
        <el-icon v-if="!menu.pid">
          <component :is="menu.meta.icon"></component>
        </el-icon>
        <span>{{ menu.meta.title }}</span>
      </template>
      <menuItem :menuList="menu.children">
      </menuItem>
    </el-sub-menu>
    <el-menu-item v-else :index="menu.path">
      <template #title>
        <span>{{ menu.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>
<script setup>
const props = defineProps({
  menuList: Object
})

const menuList = props.menuList

</script>
<style>
.el-menu-item.is-active {
  background: rgba(76, 161, 100, .3);
  border-left: 4px solid #4ca164;
}

.el-menu-item:hover {
  background: rgba(76, 161, 100, .1);
  color: #4ca164;
}
</style>