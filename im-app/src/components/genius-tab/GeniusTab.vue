<template>
  <div class="genius-tab">
    <div class="tab-item" @click="toGeniusList">
      <img v-if="geniusTabIndex !== tabIndex" class="icon" src="./img/job.png" alt="">
      <img v-else class="icon" src="./img/job-active.png" alt="">
    </div>
    <div class="tab-item" @click="toBossMessage">
      <img v-if="bossMessageTabIndex !== tabIndex" class="icon" src="./img/msg.png" alt="">
      <img v-else class="icon" src="./img/msg-active.png" alt="">
    </div>
    <div class="tab-item" @click="toBossCenter">
      <img v-if="bossCenterTabIndex !== tabIndex" class="icon" src="./img/user.png" alt="">
      <img v-else class="icon" src="./img/user-active.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BossTab',
    mounted() {
      console.log(this.$route.path)
      let path = this.$route.path
      switch (path) {
        case '/genius/boss-list':
          this.tabIndex = 1
          break
        case '/genius/message':
          this.tabIndex = 2
          break
        case '/genius/center':
          this.tabIndex = 3
          break
        default: 
          this.tabIndex = -1
      }
    },
    data() {
      return {
        tabIndex: -1,
        geniusTabIndex: 1,
        bossMessageTabIndex: 2,
        bossCenterTabIndex: 3
      }
    },
    methods: {
      toGeniusList() {
        this.tabIndex = 1
        this.$router.push({
          path: '/genius/boss-list'
        })
      },
      toBossMessage() {
        this.tabIndex = 2
        this.$router.push({
          path: '/genius/message'
        })
      },
      toBossCenter() {
        this.tabIndex = 3
        this.$router.push({
          path: '/genius/center'
        })
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .genius-tab
    width 100%
    display flex
    justify-content space-between
    align-items center
    flex-flow wrap
    background-color #fff
    padding 15px 0
    position fixed
    bottom 0
    left 0
    right 0
    border-top 1px solid #ccc
    .tab-item
      flex 1
      text-align center
      border-right 1px solid #ccc
      &:last-child
        border-right none
      .icon
        width 22px
        height 22px
</style>