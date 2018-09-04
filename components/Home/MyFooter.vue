<template>
    <div class="bottom_tabs">        
        <div v-if='isMobile' class="tabs_list">
        <p class="top_line"></p>
        <ul>
         <li v-for='(value,index) in mobileNav' :class="value.cls" :key='value.id' :index='index'>
          <nuxt-link :to="{path:value.url}"></nuxt-link>
          <span>{{value.name}}</span>
        </li>
        
      </ul>
    </div>
    <footer v-else>
        <p class="top_line"></p>
        <div class="footarea">
            <p>Copyright © 2014-2018</p>
        </div>
    </footer>
  </div>
</template>
<script>
export default {
   data () {
       return {
           mobileNav: [{name: '首页', url: '/', cls: 'home'},
                       {name: '分类', url: '/cat', cls: 'category'},
                       {name: '购物车', url: '/cart', cls: 'shopping'},
                       {name: '我的', url:'/myself', cls: 'myself'}],
           isMobile: false
       }
   } 
}
</script>
<style lang="sass">
    .bottom_tabs
      margin-top: 50px
      .tabs_list
        position: fixed
        left: 0
        bottom: 0
        width: 100%
      .top_line
          height: 10px
          background: #eee
          border-bottom: 1px solid #ddd
      ul
        height: 60px
        background: #fff
        li
          width: 25%
          float: left
          position: relative
          a
            display: inline-block
            height: 50px
            width: 100%
            tap-highlight-color: transparent
          span
            display: inline-block
            width: 100% 
            position: absolute
            bottom: 0
            left: 0
            text-align: center
            &.on
              color: #f15757
        .home
          a
            background: url('~/images/icon_tab_home.png') no-repeat center
            background-size: 19px 20px
            &.nuxt-link-exact-active
              background: url('~/images/icon_tab_home_on.png') no-repeat center
              background-size: 19px 20px
        .category
          a
            background: url('~/images/icon_tab_class.png') no-repeat center
            background-size: 19px 20px
            &.nuxt-link-exact-active
              background: url('~/images/icon_tab_class_on.png') no-repeat center
              background-size: 19px 20px
        .shopping
          a
            background: url('~/images/icon_tab_cart.png') no-repeat center
            background-size: 19px 20px
            &.nuxt-link-exact-active
              background: url('~/images/icon_tab_cart_on.png') no-repeat center
              background-size: 19px 20px
        .myself
          a
            background: url('~/images/icon_tab_my.png') no-repeat center
            background-size: 19px 20px
            &.nuxt-link-exact-active
              background: url('~/images/icon_tab_my_on.png') no-repeat center 
              background-size: 19px 20px    
    footer
      .footarea
        left: 0
        padding: 10px
        width: 100%
        height: 50px
        color: #fff
        font-size: 1.5rem
        background: #34495e 
        text-align: center
        p
          height: 30px
          line-height: 30px
                      
</style>
