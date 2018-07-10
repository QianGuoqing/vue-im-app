<template>
  <div class="boss">
    boss页面
  </div>
</template>

<script>
  import { requestUserInfoByGet } from '../../common/js/request.js'
  import { Toast } from 'mint-ui'
  export default {
    name: 'Boss',
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