<template>
  <el-dropdown class="pointer">
    <span>
      超级管理员
      <el-icon><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="changePassword">修改密码</el-dropdown-item>
        <el-dropdown-item @click="logOut">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <el-dialog v-model="form.show" title="修改密码" width="600px" @close="resetDialog">
    <el-form :model="form" :rules="form.rules" ref="changeForm" label-width="150px">
      <el-form-item label="请输入新密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="请再次输入新密码" prop="rePassword">
          <el-input v-model="form.rePassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="confirmPassword">确认</el-button>
          <el-button @click="closePassword">取消</el-button>
        </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script setup>
import {reactive,ref} from 'vue'
import {ElMessage} from 'element-plus'
import { globalStore } from '@/store'

const global = globalStore()

const logOut = () => {
  global.logout()
  location.reload()
}


const form = reactive({
  show:false,
  password:'',
  rePassword:'',
  rules:{
    password: [
      { required: true, trigger: 'blur', message: '请输入密码' },
      { min: 6, max: 16, trigger: 'blur', message: '密码的字符长度应在6-16之间' }
    ],
    rePassword:[
      { required: true, trigger: 'blur', message: '请再次输入密码' },
      { min: 6, max: 16, trigger: 'blur', message: '密码的字符长度应在6-16之间' }
    ]
  }
})
const changeForm = ref()

const changePassword = () => {
  form.show = true
}

const confirmPassword = ()=>{
  changeForm.value.validate((valid)=>{
    if(valid){
      if(form.password !== form.rePassword){
        ElMessage.error('请确认两次密码输入一致')
        return;
      }
      ElMessage.success('密码修改成功！')
    }else{
      console.error('err')
    }
  })
}

const resetDialog = ()=>{
  form.password = ''
  form.rePassword = ''
  changeForm.value.resetFields()
}

const closePassword = ()=>{
  form.show = false
}

</script>
<style scoped></style>