<template>
  <div class="login_container">
    <div class="login_box">
      <!--头像-->
      <div class="avatar_box">
        <img src="../assets/logo.png"/>
      </div>
      <!--表单-->
      <el-form class="login_from" ref="loginFormRef" :model="loginModel" :rules="rules">
        <el-form-item prop="mobile">
          <el-input prefix-icon="iconfont icon-touxiang" v-model="loginModel.mobile"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" prefix-icon="iconfont icon-suo" v-model="loginModel.password"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="loginAction">登录</el-button>
          <el-button type="info" @click="restFormAction">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-cond-assign */
import api from '../api/api'
import ResultUtil from '../api/ResultHandleUtil.js'
export default {
  data () {
    return {
      loginModel: {
        mobile: '',
        password: ''
      },
      rules: {
        mobile: [
          {required: true, message: '请输入用户名字', trigger: 'blur'},
          {min: 3, max: 12, message: '长度在5~12个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请填写密码', trigger: 'blur'},
          {min: 5, max: 20, message: '密码长度在5~20个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    restFormAction () {
      this.$refs.loginFormRef.resetFields()
    },
    loginAction () {
      const that = this
      this.$refs.loginFormRef.validate(async function (isVa) {
        if (!isVa) {
          return
        }
        var body = 'mobile=' + that.loginModel.mobile + '&password=' + that.loginModel.password
        var result = await that.$http.post(api.Login, body, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).catch(er => {
          that.message.error('登录失败')
        })
        if (ResultUtil(result, that)) {
          window.sessionStorage.setItem('token', result.data.data.Token)
          window.sessionStorage.setItem('mobile', result.data.data.Mobile)
          window.sessionStorage.setItem('avatar', result.data.data.Avatar)
          window.sessionStorage.setItem('nickName', result.data.data.NickName)
          window.sessionStorage.setItem('sex', result.data.Sex)
          that.$message.success('登录成功')
          that.$router.push('/home')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .login_container {
    background-color: #fff;
    height: 100%;
  }

  .login_box {
    width: 400px;
    height: 300px;
    border-radius: 3px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .avatar_box {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 1px solid #eee;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      img {
        background-color: #eee;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }

  .login_from {
    width: 100%;
    padding: 0 10px;
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
  }

  .btns {
    display: flex;
    justify-content: flex-end;
  }
</style>
