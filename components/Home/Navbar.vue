<template>
  <div id="Navbar" class="basicbox" style="background-color: #34495e;">
      <el-menu :default-active="activeIndex" class="main-nav" text-color="#fff" background-color="#34495e" active-text-color="#ffd04b" mode="horizontal"  @select="handleSelect">
           <el-menu-item class="nav-item" v-for="(value,index) in indexclass" :key="value.id" :index="index">
             <nuxt-link :to="value.url" >{{value.title}}
             </nuxt-link>
           </el-menu-item>
      </el-menu>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  data () {
    return {
      islogin: true,
      activeIndex: '1'
    }
  },
  props: ['indexclass'],
  methods: {
    search () {
      //this.$router.push({path: '/search/searchPage'})
    },
    handleSelect (key, keyPath) {
      console.log(key,keyPath)
    }
  },
  created () {
    console.log(this.indexclass)
  },
  mounted () {
    console.log(this.indexclass)
      
  }
}
</script>
<style lang="sass">
    #Navbar
      .main-nav
        border-bottom: solid 2px #5c5050
        .nav-item
          height: 60px
          line-height: 60px
          width: 15%
          text-align: center
          font-size: 1.8rem
</style>