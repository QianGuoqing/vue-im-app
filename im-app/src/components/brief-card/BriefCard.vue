<template>
  <div class="brief-card">
    <div class="brief-text">简介</div>
    <div class="brief-content">
      <div class="title">{{ title }}</div>
      <div class="description" v-for="(desc, index) in description" :key="index">{{ desc }}</div>
      <div class="money" v-if="money.length > 0">薪资: {{ money }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BriefCard',
    props: {
      title: {
        type: String,
        default: ''
      },
      description: {
        type: Array,
        default: []
      },
      money: {
        type: String,
        default: ''
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .brief-card
    border-top 1px solid #f5f5f5
    border-bottom 1px solid #f5f5f5
    box-shadow 0 2px 2px #f5f5f5
    .brief-text
      padding 15px
      font-size 14px
      background-color #f5f5f9
      color #888
    .brief-content
      padding 20px 15px
      .title
        font-size 17px
      .description
        margin-top 10px
        font-size 15px
        color #888
      .money
        margin-top 10px
        font-size 15px
        color #888
</style>