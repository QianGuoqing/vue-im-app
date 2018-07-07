<template>
  <div class="register">
    <logo></logo>
    <div class="form-section">
      <mt-field label="账户" placeholder="在此输入账户"></mt-field>
      <mt-field label="密码" placeholder="在此输入密码" type="password"></mt-field>
      <mt-field label="确认密码" placeholder="在此确认密码" type="password"></mt-field>
      <mt-radio
        v-model="optionValue"
        :options="['牛人', 'BOSS']">
      </mt-radio>
    </div>
    <div class="buttons-section">
      <mt-button type="primary" size="large">注册</mt-button>
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
        optionValue: ''
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