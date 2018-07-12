<template>
  <div class="genius">
    <router-view></router-view>
    <genius-tab></genius-tab>
  </div>
</template>

<script>
  import { requestUserInfoByGet } from '../../common/js/request.js'
  import { Toast } from 'mint-ui'
  import GeniusTab from '../../components/genius-tab/GeniusTab.vue'
  export default {
    name: 'Boss',
    components: {
      GeniusTab
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
</style>