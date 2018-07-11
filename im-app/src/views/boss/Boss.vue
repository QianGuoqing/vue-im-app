<template>
  <div class="boss">
    <router-view></router-view>
    <boss-tab></boss-tab>
  </div>
</template>

<script>
  import { requestUserInfoByGet } from '../../common/js/request.js'
  import { Toast } from 'mint-ui'
  import BossTab from '../../components/boss-tab/BossTab.vue'
  export default {
    name: 'Boss',
    components: {
      BossTab
    },
    created() {
      this._validateLoginStatus()
    },
    methods: {
      _validateLoginStatus() {
        requestUserInfoByGet().then(res => {
          res = res.data
          if (res.code === 1) {
            Toast({
              message: '尚未登陆',
              position: 'top',
              duration: 2000,
            })
            this.$router.push('/login')
          }
        })
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .boss
    height 100%
    background-color #f5f5f5
</style>