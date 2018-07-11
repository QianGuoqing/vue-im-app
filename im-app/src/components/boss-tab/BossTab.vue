<template>
  <div class="boss-tab">
    <div class="tab-item" @click="toGeniusList">
      <img v-if="geniusTabIndex !== tabIndex" class="icon" src="./img/boss.png" alt="">
      <img v-else class="icon" src="./img/boss-active.png" alt="">
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
        case '/boss/genius-list':
          this.tabIndex = 1
          break
        case '/boss/message':
          this.tabIndex = 2
          break
        case '/boss/center':
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
          path: '/boss/genius-list'
        })
      },
      toBossMessage() {
        this.tabIndex = 2
        this.$router.push({
          path: '/boss/message'
        })
      },
      toBossCenter() {
        this.tabIndex = 3
        this.$router.push({
          path: '/boss/center'
        })
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .boss-tab
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
    .tab-item
      flex 1
      text-align center
      border-right 1px solid #ccc
      &:last-child
        border-right none
      .icon
        width 22px
</style>