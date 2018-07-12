<template>
  <div class="boss-center">
    <mt-header title="Boss个人中心"></mt-header>
    <avatar-item
      :avatar="userDetail.avatar"
      :username="userDetail.username"
      :company="userDetail.company"></avatar-item>
    <brief-card
      :title="userDetail.title"
      :description="userDetail.description.split('\n')"
      :money="userDetail.money"></brief-card>
    <mt-button class="exit" type="danger" size="large">退出登录</mt-button>
  </div>
</template>

<script>
  import AvatarItem from '../../components/avatar-item/AvatarItem.vue'
  import BriefCard from '../../components/brief-card/BriefCard.vue'
  export default {
    name: 'BossCenter',
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
  }
</script>

<style lang="stylus" scoped>
  .exit
    margin-top 50px
</style>