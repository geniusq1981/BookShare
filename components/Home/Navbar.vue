<template>
  <div id="Navbar">
      <el-menu :default-active="activeIndex" class="main-nav" background-color="#e5e5e5" text-color="#00ff00" active-text-color="#ffd04b" mode="horizontal"  @select="handleSelect">
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
            .nav-item
                height: 80px
                line-height: 80px
                width: 15%
                text-align: center
                font-size: 20pt
</style>