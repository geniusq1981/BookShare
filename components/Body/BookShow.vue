<template>
    <div>
    <el-row>
        <el-col :span="16" class="left_area">
    <el-row>当前位置：{{book.category}}>>{{book.title}}</el-row>
    <el-row class="title_1">{{book.title}}</el-row>
    <el-row>
        <el-card class="post" :body-style="{padding: '20px'}">
        <img :src="book.img" class="image">
    </el-card>
    <div class="info">
        <li>作 者：{{book.author}}</li>
        <li>出版社：{{book.store}}</li>
        <li>页 数：{{book.pages}}</li>
        <li>上传者：{{book.uploader}}</li>
    <li class="clickbutton">
    <el-button type="primary" class="">下 &nbsp; &nbsp; &nbsp; 载</el-button>
    <el-button type="primary" class="righttwo">在线阅读</el-button>
    </li>
    </div>
    </el-row>
    <el-row>
        <div class="title_2">内容简介</div>
        <div class="content_box">123</div>
    </el-row>
     <el-row>
        <div class="title_2">作者简介</div>
        <div class="content_box">123</div>
    </el-row>
     <el-row>
        <div class="title_2">目录</div>
        <div class="content_box">123</div>
     </el-row>
     </el-col>
    <el-col :span="6" offset="2" class="right_area">
        <div class="Ad"></div>
        <div class="RecommendList">  
            <div class="title_2">读书推荐</div>
            <div class="content_box">123</div>
        </div>
    </el-col>
    </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            book:{title: "诸子百家", uploader: "geniusq1981", category: "history", img: "http://www.bookshare.cn/d/file/tushufenlei/dongmanhuiben/2012-07-18/8f0213c297b5ee7d4c4b3ad79b9c540a.jpg", unid: "00001", url: "/"}
        }
    }
}
</script>
<style lang="sass">
    .el-row
      margin-top: 20px
    .left_area
      margin-top: 20px     
    .right_area
      margin-top: 50px
    .margintwo
      margin-top: 20px
      margin-left: 50px
    .title_1
      font: bold 20pt arial 
      margin-top: 20px
      padding: 10px
      border-bottom: 2px dashed #aaa
    .title_2
      font: bold 15pt arial 
    .content_box
      margin-top: 10px
      border: 1px solid #aaa
    .post
      width: 25%
      margin-top: 20px
      float: left
      .image
        width: 100%
        height: 100%
    .info
      display: inline-block
      margin-top: 20px
      margin-left: 50px
      font: 2rem arial
      li
        padding: 10px
        button
         margin-top: 30px
         font-size: 2rem arial
         &.righttwo
           margin-left: 50px
    .Ad
      width: 100%
      height: 250px
      border: 1px solid #999
    .RecommendList
      margin-top: 50px
      width: 100%
      height: 500px
</style>