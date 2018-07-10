<template>
  <div class="boss-info">
    <mt-header title="Boss完善信息页"></mt-header>
    <div class="selected-section">
      <div v-if="!avatar.name" class="select-text">选择如下头像</div>
      <div v-else class="select-avatar">
        <div>已选择头像</div>
        <img style="width: 20px" :src="avatar.path" alt="">
      </div>
    </div>
    <div class="avatars-section">
      <ul class="avatars-list">
        <li class="avatar-item" v-for="avatar in avatarArray" :key="avatar.path" @click="chooseAvatar(avatar)">
          <img :src="avatar.path" alt="" class="icon">
          <div class="text">{{ avatar.name }}</div>
        </li>
      </ul>
    </div>
    <div class="field-section">
      <mt-field label="招聘职位" v-model="title"></mt-field>
      <mt-field label="公司名称" v-model="company"></mt-field>
      <mt-field label="职位薪资" v-model="money"></mt-field>
      <mt-field label="职位要求" type="textarea" rows="4" v-model="description"></mt-field>
    </div>
    <mt-button type="primary" size="large" class="save-button">保存</mt-button>
  </div>
</template>

<script>
  import { Header } from 'mint-ui'
  export default {
    name: 'BossInfo',
    data() {
      return {
        avatar: {},
        title: '',
        company: '',
        money: '',
        description: '',
        avatarList: 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
      }
    },
    computed: {
      avatarArray() {
        return this.avatarList.split(',').map(avatar => {
          return {
            path: `../../../static/img/${avatar}.png`,
            name: avatar
          }
        })
      }
    },
    methods: {
      chooseAvatar(avatar) {
        this.avatar = avatar
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .boss-info
    height 100%
    background-color #f5f5f5
    .selected-section
      font-size 14px
      padding 15px
      .select-avatar
        display flex
        align-items center
        img
          margin-left 10px
    .avatars-section
      .avatars-list
        background-color #fff
        display flex
        justify-content space-between
        flex-flow wrap
        border-top 1px solid #ccc
        border-bottom 1px solid #ccc
        .avatar-item
          width 20%
          text-align center
          border-bottom 1px solid #f5f5f5
          border-right 1px solid #f5f5f5
          padding 15px 0
          &:active
            background-color #ddd
          .icon
            width 25px
          .text
            margin-top 5px
            font-size 12px
    .field-section
      margin-top 10px
    .save-button 
      margin-top 10px
</style>