<template>
  <div class="boss-list">
    <mt-header title="Boss列表"></mt-header>
    <ul class="boss-ul">
      <router-link tag="li" :to="{ name: 'Chat', params: { username: boss.username }}" class="boss-item" v-for="boss in bossList" :key="boss._id">
        <list-card
          :avatar="boss.avatar"
          :username="boss.username"
          :title="boss.title"
          :description="boss.description.split('\n')"
          :company="boss.company"
          :money="boss.money"></list-card>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import ListCard from '../../components/list-card/ListCard.vue'
  import { Toast } from 'mint-ui'
  import { getUserListByType } from '../../common/js/request.js'
  export default {
    name: 'BossList',
    components: {
      ListCard
    },
    created() {
      this._getUserList('boss')
    },
    data() {
      return {
        bossList: []
      }
    },
    methods: {
      _getUserList(type) {
        getUserListByType(type).then(res => {
          res = res.data
          if (res.code === 1) {
            Toast({
              message: res.msg,
              position: 'middle',
              duration: 1000
            })
            return
          }
          res = res.data
          this.bossList = res.filter(item => {
            return item.avatar
          })
          console.log('boss list', this.bossList)
        }).catch(err => {
          Toast({
            message: '网络错误',
            position: 'middle',
            duration: 1000
          })
        })
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .boss-list
    margin-bottom 60px
    .boss-ul
      padding 10px
      margin-top 20px
</style>