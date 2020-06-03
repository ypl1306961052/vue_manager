<template>
  <el-container class="main-container">
    <el-header class="main-head">
      <el-row :gutter="3" type="flex" justify="end" class="row-bg">
        <el-col :span="1">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                     v-if="isAvatarLoading"></el-avatar>
          <el-avatar icon="el-icon-user-solid" v-else></el-avatar>
        </el-col>
        <el-col :span="1">
          <el-badge :value="12" class="item">
            <el-button size="small">消息</el-button>
          </el-badge>
        </el-col>
        <el-col :span="1">
          <el-button type="primary" plain>退出</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px" class="main-aside">Aside</el-aside>
      <el-main class="main-ui">
        <!--主页面-->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>export default {
  name: 'Home',
  data () {
    return {
      home: '主页',
      isAvatarLoading: this.getAvatar(),
      avatar: window.sessionStorage.getItem('avatar')
    }
  },
  methods: {
    getAvatar () {
      var item = window.sessionStorage.getItem('avatar')
      if (item === '' || item === null || item === undefined) {
        return false
      }
      return true
    }
  }
}
</script>

<style lang="less" scoped>
  .main-container {
    height: 100%;
  }

  .main-head {
    background-color: #E6A23C;
  }

  .main-aside {
    background: rgb(250, 236, 216);
  }

  .main-ui {
    background: rgb(253, 246, 236);
  }

  .row-bg {
    padding: 10px 0;
  }
</style>
