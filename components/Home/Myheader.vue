<template>
  <header id="header" class="all_nav_zone">
      <nuxt-link to="/" class="header_logo">Logo</nuxt-link>
      <nuxt-link to="/coursehome" class="city_change new">北京</nuxt-link>
        <nuxt-link v-show="this.islogin" to="/login" class="hed_login hed_fz">登录</nuxt-link>
        <!-- 输入框 -->
        <div class="input_box word_2">
            <input type="text" @click="search()" class="index_sear_inp" placeholder="搜索：课程、机构">
        </div>
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
        padding: 15px
        .header_logo
            
</style>