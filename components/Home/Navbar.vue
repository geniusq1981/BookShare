<template>
  <div id="Navbar" class="basicbox">
      <el-menu :default-active="activeIndex" class="main-nav" text-color="#00ff00" active-text-color="#ffd04b" mode="horizontal"  @select="handleSelect">
          <el-menu-item class="nav-item" v-for="(value,index) in indexClass" :key="value.id" :index="index">{{value}}</el-menu-item>
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
  props: ['indexClass'],
  methods: {
    search () {
      //this.$router.push({path: '/search/searchPage'})
    },
    handleSelect (key, keyPath) {
      console.log(key,keyPath)
    }
  },
  created () {
    console.log(this.indexClass)
  },
  mounted () {
    console.log(this.activeIndex)
      
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