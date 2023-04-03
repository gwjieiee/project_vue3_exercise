<template>
  <div class="login-main">
    <div class="login-contain">
      <div class="login-left">
        <img src="@/assets/images/login-left.png" alt="123" />
      </div>
      <div class="login-right">
        <el-form class="login-form" ref="loginFormRef" :model="loginForm" :rules="loginRules">
          <el-form-item>
            <h2 class="center w-100">运营平台</h2>
          </el-form-item>
          <el-form-item prop="account">
            <el-input class="h-40" :prefix-icon="User" v-model="loginForm.account" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" class="h-40" :prefix-icon="Lock" v-model="loginForm.password"
              placeholder="请输入密码" @keyup.enter.native="login_btn"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="login-button" @click="login_btn">登录</div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive,ref } from 'vue';
import {useRoute,useRouter} from 'vue-router'
import {ElMessage} from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import {globalStore} from '@/store/index'

const loginForm = reactive({
  account: '',
  password: ''
})

const loginRules = reactive({
  account: [
    { required: true, trigger: 'blur', message: '请输入账号' },
    { min: 4, max: 10, trigger: 'blur', message: '账号的字符长度在4-10之间' }
  ],
  password: [
    { required: true, trigger: 'blur', message: '请输入密码' },
    { min: 6, max: 10, trigger: 'blur', message: '密码的字符长度在4-10之间' }
  ]
})

const loginFormRef = ref()

const global = globalStore()

const router = useRouter()

const login_btn = () => {
  loginFormRef.value.validate((valid)=>{
    if(valid){
      global.setToken('gwjieiee')
      ElMessage.success('登录成功！')
      setTimeout(()=>{
        router.push('/')
      },1000)
    }else{
      console.error('err')
    }
  })
}

</script>
<style lang="scss" scoped>
.login-main {
  width: 100vw;
  height: 100vh;
  background: url('@/assets/images/background.svg') no-repeat;
  background-size: cover;
  background-position: 80%;
  display: flex;
  align-items: center;
}

.login-contain {
  width: 85%;
  height: 70%;
  padding: 5%;
  margin: 0 auto;
  background: rgba(171, 168, 168, .15);
  border-radius: 10px;
  display: flex;
  align-items: center;
}

@media screen and (min-width: 1200px) {
  .login-left {
    width: 40%;
    height: 100%;
    position: relative;

    img {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .login-right {
    width: 45%;
    height: 85%;
    position: relative;
    background: #fff;
    border-radius: 10px;
    margin-left: 10%;
    box-shadow: #ddd 0 5px 8px 5px;
  }
}

@media screen and (min-width: 650px) and (max-width:1200px) {
  .login-left {
    width: 45%;
    height: 100%;
    position: relative;

    img {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .login-right {
    width: 45%;
    height: 90%;
    position: relative;
    background: #fff;
    border-radius: 10px;
    margin-left: 10%;
    box-shadow: #ddd 0 5px 8px 5px;
  }
}

@media screen and (max-width: 650px) {
  .login-left {
    width: 0;

    img {
      width: 0;
    }
  }

  .login-right {
    width: 100%;
    height: 100%;
    position: relative;
  }
}

.login-form {
  width: 70%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login-button {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #4ca164;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
}
</style>