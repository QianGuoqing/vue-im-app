<template>
  <div class="avatar-item">
    <img class="avatar" :src="avatar" alt="">
    <div class="name">{{ username }}</div>
    <div class="company" v-if="company.length > 0">{{ company }}</div>
  </div>
</template>

<script>
  export default {
    name: 'AvatarItem',
    props: {
      avatar: {
        type: String,
        default: ''
      },
      username: {
        type: String,
        default: ''
      },
      company: {
        type: String,
        default: ''
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .avatar-item
    width 100%
    border-bottom 1px solid #ddd
    text-align center
    box-shadow 0 2px 2px #f5f5f5
    .avatar
      padding 20px 0
      width 50px
    .name
      padding-bottom 15px
      font-size 16px
    .company
      padding-bottom 15px
      font-size 16px
      font-weight 700
      color #888
</style>