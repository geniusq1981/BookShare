<template>
  <header id="header" class="all_nav_zone">
      <div class="basicbox top_bar">分享图书，分享快乐
      <span class="right">
        <nuxt-link to="" class="">注册|</nuxt-link>
        <nuxt-link to="" class="">登录</nuxt-link>
      </span>
      </div>
      <el-row class="basicbox header_bar">
      <el-col :span="6" class="header_logo"><nuxt-link to="/"><div class="logo"></div></nuxt-link></el-col>
      <el-col :span="12"><el-input class="header_search" v-model="input" placeholder="请输入内容"><el-button slot="append" icon="el-icon-search"></el-button></el-input></el-col>
      </el-row>
  </header>
</template>
<script>
//import {getStore} from '../../config/common.js'
export default {
  data () {
    return {
      islogin: true,
      input: ""
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
          height: 40px
          line-height: 40px
          background-color: #f5f5f5
          border-bottom: 1px solid #ddd
          font-size: 1.4rem
        .header_bar
          height: 30%
        .right
          float: right
        .header_logo
          font-size: 36pt 
          height: 100%
          .logo
            width: 70%
            height: 150px
            background: url('~/static/images/logo1.jpg') no-repeat center
            background-size: 100% 100%
        .input_box
          padding: 15px
          height: 25px
          line-height: 25px
          margin: auto
        .index_sear_inp
          font-size: 20pt
        .header_search
          height: 100%
          font-size: 1.8rem
          margin-top: 50px
          .el-input__inner
            height: 100%
            padding: 15px
</style>