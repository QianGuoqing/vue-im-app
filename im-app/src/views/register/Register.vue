<template>
  <div class="register">
    <logo></logo>
    <div class="form-section">
      <mt-field label="账户" placeholder="在此输入账户" v-model="account.username"></mt-field>
      <mt-field label="密码" placeholder="在此输入密码" type="password" v-model="account.password"></mt-field>
      <mt-field label="确认密码" placeholder="在此确认密码" type="password" v-model="account.confirmPassword"></mt-field>
      <mt-radio
        v-model="account.optionValue"
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
          optionValue: ''
        },
      }
    },
    methods: {
      onRegister() {
        console.dir(this.account)
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