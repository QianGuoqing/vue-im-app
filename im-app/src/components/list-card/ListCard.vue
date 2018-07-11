<template>
  <div class="list-card">
    <div class="card-header">
      <div class="avatar-name">
        <img :src="avatar" class="avatar" alt="">
        <div class="username">{{ username }}</div>
      </div>
      <div class="title">{{ title }}</div>
    </div>
    <div class="card-body">
      <div class="description" v-for="(desc, index) in description" :key="index">{{ desc }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ListCard',
    props: {
      avatar: {
        type: String,
        default: ''
      },
      username: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      description: {
        type: Array,
        default: ''
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .list-card
    border-radius 5px
    border 1px solid #ddd
    background-color #fff
    padding 15px
    min-height 96px
    margin 5px
    .card-header
      display flex
      justify-content space-between
      align-items center
      padding-bottom 10px
      border-bottom 1px solid #ddd
      .avatar-name
        display flex
        justify-content space-between
        align-items center
        .avatar
          width 32px
          height 32px
        .username
          font-size 16px
          font-weight 700
          margin-left 10px
      .title
        font-size 16px
        font-weight 400
        color #888
    .card-body
      font-size 17px
      padding 15px 0
      .description
        line-height 1.5
</style>