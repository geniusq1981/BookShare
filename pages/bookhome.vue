<template>
  <section class="">
    <Myheader></Myheader>
    <Carousel></Carousel>
    <Navbar :indexClass="allparentinfo.indexclass"></Navbar>
    <div class="basicbox book-gallery">
      <BookShow></BookShow>
    </div>
    <MyFooter></MyFooter>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Myheader from '~/components/Home/Myheader.vue'
import Navbar from '~/components/Home/Navbar.vue'
import BookShow from '~/components/Body/BookShow.vue'
import MyFooter from '~/components/Home/MyFooter.vue'
export default {
  data () {
    return {
      allparentinfo: {indexclass: ['首页', "test2", "test3"]}
    }
  },
  created () {
    //console.log(allparentinfo.indexclass)
  },
  components: {
    AppLogo,
    Myheader,
    Navbar,
    BookShow,
    MyFooter
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.book-gallery {
  margin-top: 20px;
}
</style>

