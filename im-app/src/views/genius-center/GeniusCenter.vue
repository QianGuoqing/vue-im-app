<template>
  <div class="genius-center">
    <mt-header title="Genius个人中心"></mt-header>
    <avatar-item
      :avatar="userDetail.avatar"
      :username="userDetail.username"></avatar-item>
    <brief-card
      :title="userDetail.title"
      :description="userDetail.description.split('\n')"></brief-card>
    <mt-button @click="onLogout" class="exit" type="danger" size="large">退出登录</mt-button>
  </div>
</template>

<script>
  import AvatarItem from '../../components/avatar-item/AvatarItem.vue'
  import BriefCard from '../../components/brief-card/BriefCard.vue'
  import browserCookie from 'browser-cookies'
  export default {
    name: 'GeniusCenter',
    components: {
      AvatarItem,
      BriefCard
    },
    created() {
      this.userDetail = JSON.parse(localStorage.getItem('user_detail'))
    },
    data() {
      return {
        userDetail: {}
      }
    },
    methods: {
      onLogout() {
        browserCookie.erase('user_id')
        localStorage.clear()
        this.$router.push({
          path: '/login'
        })
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .exit
    margin-top 50px
</style>