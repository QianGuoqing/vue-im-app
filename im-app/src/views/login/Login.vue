<template>
  <div class="login">
    <logo></logo>
    <div class="login-info">按照如下信息登陆</div>
    <div class="form-section">
      <mt-field label="账户" placeholder="在此输入账户" v-model="account.username"></mt-field>
      <mt-field label="密码" placeholder="在此输入密码" type="password" v-model="account.password"></mt-field>
    </div>
    <div class="buttons-section">
      <mt-button type="primary" @click="onLogin" size="large">登陆</mt-button>
      <mt-button @click="toRegister" class="register-button" type="primary" size="large">注册</mt-button>
    </div>
  </div>
</template>

<script>
  import Logo from '../../components/logo/Logo.vue'
  import { postUserLogin } from '../../common/js/request.js'
  import { redirectToPath } from '../../common/js/utils.js'
  import { Toast } from 'mint-ui'
  import { mapState } from 'vuex'
  export default {
    name: 'Login',
    components: {
      Logo
    },
    data() {
      return {
        account: {
          username: '',
          password: ''
        }
      }
    },
    computed: {
      ...mapState(['user'])
    },
    methods: {
      toRegister() {
        this.$router.push({
          path: '/register'
        })
      },
      onLogin() {
        let { username, password } = this.account
        if (!username || !password) {
          Toast({
            message: '输入信息不能为空',
            position: 'middle',
            duration: 1000
          })
          return
        }
        postUserLogin(username, password).then(res => {
          res = res.data
          console.log('login', res)
          if (res.code === 1) {
            Toast({
              message: res.msg,
              position: 'middle',
              duration: 1000
            })
          } else if (res.code === 0) {
            res = res.data
            let { username, password, type } = res
            let user = {
              username: username,
              password: password,
              type: type
            }
            this.$store.commit('setUser', user)
            let typeLowercase = res.type.toLowerCase()
            let url = redirectToPath(typeLowercase, localStorage.getItem('avatar'))
            this.$router.push({
              path: url
            })
          }
        }).catch(err => {
          Toast({
            message: '网络错误',
            position: 'middle',
            duration: 1000
          })
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