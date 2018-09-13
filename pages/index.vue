<template>
  <section class="">
    <Myheader></Myheader>
    <Navbar :indexclass="allparentinfo.indexclass"></Navbar>
    <div class="basicbox book-gallery">
      <carousel class="Homecar"></carousel>
      <TabCat class="Homecat"></TabCat>
      <NewsBar></NewsBar>
      <el-row><NewBooks class="NewBooks"></NewBooks>
      <TopList class="TopList"></TopList>
      </el-row>
      <BookGallery></BookGallery>
    </div>
    <MyFooter></MyFooter>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Myheader from '~/components/Home/Myheader.vue'
import Navbar from '~/components/Home/Navbar.vue'
import BookGallery from '~/components/Home/BookGallery.vue'
import MyFooter from '~/components/Home/MyFooter.vue'
import carousel from '~/components/Home/Carousel.vue'
import TabCat from '~/components/Home/TabCat.vue'
import NewsBar from '~/components/Home/NewsBar.vue'
import NewBooks from '~/components/Home/NewBooks.vue'
import TopList from '~/components/Home/TopList.vue'
export default {
  data () {
    return {
      allparentinfo: {indexclass: [{id: "1", title: '首页', url: "/"},
                                  {id: "2", title: "test2", url: "/test2"},
                                  {id: "3", title: "test3", url: "/test3"}],
                      indexUrl: ['/','/test2','/test3']}
    }
  },
  created () {
    //console.log(allparentinfo.indexclass)
  },
  components: {
    AppLogo,
    Myheader,
    Navbar,
    BookGallery,
    carousel,
    TabCat,
    NewsBar,
    NewBooks,
    TopList,
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
.Homecar {
  display: inline-block;
  width: 50%
}
.Homecat {
  display: inline-block;
  padding: 0 0 0 2%;
  width: 50%;
  height: 100%
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
.NewBooks {
  display: inline-block;
  width: 65%
}
.TopList {
  display: inline-block;
  width: 35%
}
</style>

