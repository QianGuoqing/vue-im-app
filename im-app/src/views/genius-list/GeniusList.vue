<template>
  <div class="genius-list">
    <mt-header title="Genius列表"></mt-header>
    <ul class="genius-ul">
      <router-link tag="li" :to="{ name: 'Chat', params: { username: genius.username }}" class="genius-item" v-for="genius in geniusList" :key="genius._id">
        <list-card
          :avatar="genius.avatar"
          :username="genius.username"
          :title="genius.title"
          :description="genius.description.split('\n')"></list-card>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import { getUserListByType } from '../../common/js/request.js'
  import { Toast } from 'mint-ui'
  import ListCard from '../../components/list-card/ListCard.vue'
  export default {
    name: 'GeniusList',
    components: {
      ListCard
    },
    created() {
      this._getUserList('genius')
    },
    data() {
      return {
        geniusList: []
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
          this.geniusList = res.filter(item => {
            return item.avatar
          })
          console.log('genius list', this.geniusList)
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
  .genius-list
    margin-bottom 50px
    .genius-ul
      padding 10px
      margin-top 20px
</style>