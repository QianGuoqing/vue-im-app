<template>
  <div class="login">
    <logo></logo>
    <div class="login-info">按照如下信息登陆</div>
    <div class="form-section">
      <mt-field label="账户" placeholder="在此输入账户"></mt-field>
      <mt-field label="密码" placeholder="在此输入密码" type="password"></mt-field>
    </div>
    <div class="buttons-section">
      <mt-button type="primary" size="large">登陆</mt-button>
      <mt-button @click="toRegister" class="register-button" type="primary" size="large">注册</mt-button>
    </div>
  </div>
</template>

<script>
  import Logo from '../../components/logo/Logo.vue'
  import { requestUserInfoByGet } from '../../common/js/request.js'
  export default {
    name: 'Login',
    components: {
      Logo
    },
    created() {
      requestUserInfoByGet().then(res => {
        res = res.data
        if (res.code === 0) {

        } else {
          
        }
      }).catch(err => {
        console.log(err)
      })
    },
    methods: {
      toRegister() {
        this.$router.push({
          path: '/register'
        })
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .login
    background-color #f5f5f5
    height 100%
    padding 10px
    .login-info
      text-align center
      font-weight 700
      font-size 20px
      padding 20px
    .form-section
      margin-top 10px
    .buttons-section
      margin-top 20px
      .register-button
        margin-top 15px
</style>