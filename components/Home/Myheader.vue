<template>
  <header id="header" class="all_nav_zone">
      <div class="basicbox top_bar">分享图书，分享快乐
      <span class="right">
        <nuxt-link to="" class="">注册|</nuxt-link>
        <nuxt-link to="" class="">登录</nuxt-link>
      </span>
      </div>
      <el-row class="basicbox header_bar">
      <el-col :span="3" class="header_logo"><nuxt-link to="/"><div class="logo"></div></nuxt-link></el-col>
      <el-col :span="13" class="header_text">图书分享</el-col>
      <el-col :span="8"><el-input class="header_search" v-model="input" placeholder="请输入内容"><el-button slot="append" icon="el-icon-search"></el-button></el-input></el-col>
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
          background: url('~/static/images/banner.jpg') no-repeat center
          background-size: 100% 100%
        .right
          float: right
        .header_logo
          font-size: 36pt 
          height: 140px
          .logo
            position: absolute
            width: 100px
            height: 100px
            background: url('~/static/images/logo_1.png') no-repeat center
            border-radius: 50%
            background-size: 100% 100%
            top: 20px
            left: 5%
        .header_text
           font-size: 2rem
           height: 100%
           line-height: 100%
           vertical-align: middle
           font-color: #fff    
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