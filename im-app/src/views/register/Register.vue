<template>
  <div class="register">
    <logo></logo>
    <div class="form-section">
      <mt-field label="账户" placeholder="在此输入账户" v-model="account.username"></mt-field>
      <mt-field label="密码" placeholder="在此输入密码" type="password" v-model="account.password"></mt-field>
      <mt-field label="确认密码" placeholder="在此确认密码" type="password" v-model="account.confirmPassword"></mt-field>
      <mt-radio
        v-model="account.type"
        :options="['Genius', 'Boss']">
      </mt-radio>
    </div>
    <div class="buttons-section">
      <mt-button type="primary" size="large" @click="onRegister">注册</mt-button>
    </div>
  </div>
</template>

<script>
  import Logo from '../../components/logo/Logo.vue'
  import { postUserRegister } from '../../common/js/request.js'
  import { redirectToPath } from '../../common/js/utils.js'
  import { Toast } from 'mint-ui'
  import { mapState } from 'vuex'
  export default {
    name: 'Register',
    components: {
      Logo
    },
    data() {
      return {
        account: {
          username: '',
          password: '',
          confirmPassword: '',
          type: ''
        },
      }
    },
    computed: {
      ...mapState(['user'])
    },
    methods: {
      onRegister() {
        let { username, password, type, confirmPassword } = this.account
        if (!username || !password || !type || !confirmPassword) {
          Toast({
            message: '输入不能为空',
            position: 'middle',
            duration: 1000
          })
          return
        }
        if (username !== confirmPassword) {
          Toast({
            message: '两次密码输入不一致',
            position: 'middle',
            duration: 1000
          })
          return
        }
        this._postUserRegister(this.account)
      },
      _postUserRegister(account) {
        let { username, password, type } = account
        postUserRegister(username, password, type).then(res => {
          res = res.data
          if (res.code === 1) {
            Toast({
              message: res.msg,
              position: 'middle',
              duration: 1000
            })
          } else {
              Toast({
              message: res.msg,
              position: 'middle',
              duration: 1000
            })
          }

          let user = {
            username: this.account.username,
            password: this.account.password,
            type: this.account.type
          }
          this.$store.commit('setUser', user)
          let redirectUrl = redirectToPath(this.user.type, this.user.avatar)
          this.$router.push({
            path: redirectUrl
          })
        }).catch(err => {
          Toast({
            message: err.msg,
            position: 'middle',
            duration: 1000
          })
        })
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .register
    background-color #f5f5f5
    height 100%
    padding 10px
    .login-info
      text-align center
      font-weight 700
      font-size 20px
      padding 20px
    .form-section
      margin-top 20px
    .buttons-section
      margin-top 20px
</style>