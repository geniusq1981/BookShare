<template>
  <header id="header" class="all_nav_zone">
      <div class="top_bar">分享图书，分享快乐
      <span class="right">
        <nuxt-link to="" class="">注册|</nuxt-link>
        <nuxt-link to="" class="">登录</nuxt-link>
      </span>
      </div>
      <el-row class="header_bar">
      <el-col :span="6"><nuxt-link to="/" class="header_logo">书享</nuxt-link></el-col>
      <el-col :span="12"><el-input class="" v-model="input" placeholder="请输入内容"></el-input></el-col>
      </el-row>
  </header>
</template>
<script>
//import {getStore} from '../../config/common.js'
export default {
  data () {
    return {
      islogin: true
    }
  },
  methods: {
    search () {
      //this.$router.push({path: '/search/searchPage'})
    }
  },
  mounted () {
  
  }
}
</script>
<style lang="sass">
    header
        width: 100%
        height: 20%
        .top_bar
          color: #999
          height: 10%
          background-color: #f5f5f5
          padding: 15px
        .header_bar
          height: 30%
          background-color: #ff0000
          padding: 15px
        .right
          float: right
        .header_logo
          padding: 10px
          width: 500px
          height: 100px
          font-size: 30pt 
        .input_box
          padding: 15px
          height: 25px
          line-height: 25px
          margin: auto
        .index_sear_inp
          font-size: 20pt
        .search
          width: 50%
          margin-left： 30px
</style>