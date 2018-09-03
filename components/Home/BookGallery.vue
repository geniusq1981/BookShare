<template>
    <el-row>
        <el-col :span="3" v-for="(val, index) in books" :key="val" :offset="index==0?0:1" :index="index">
            <el-card class="card" :body-style="{padding: '0px'}">
                <nuxt-link :to="val.unid">
                <img :src="val.img" class="image">
                </nuxt-link>
                <div style="padding: 14px;text-algin:center">
                    <nuxt-link to="/bookhome" class="bookname">
                    {{val.title}}
                    </nuxt-link>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>
<script>
export default {
    data() {
        return {
            books:[{title: "诸子百家", img: "http://www.bookshare.cn/d/file/tushufenlei/dongmanhuiben/2012-07-18/8f0213c297b5ee7d4c4b3ad79b9c540a.jpg", unid: "00001", url: "/"},
                   {title: "三字经", img: "http://www.bookshare.cn/d/file/tushufenlei/dongmanhuiben/2012-07-18/8f0213c297b5ee7d4c4b3ad79b9c540a.jpg", unid: "", url: "/"},
                   {title: "四库全书", img: "http://www.bookshare.cn/d/file/tushufenlei/dongmanhuiben/2012-07-18/8f0213c297b5ee7d4c4b3ad79b9c540a.jpg", unid: "", url: "/"},
                   {title: "忠门英烈转", img: "http://www.bookshare.cn/d/file/tushufenlei/dongmanhuiben/2012-07-18/8f0213c297b5ee7d4c4b3ad79b9c540a.jpg", unid: "", url: "/"},
                   {title: "四字文", img: "http://www.bookshare.cn/d/file/tushufenlei/dongmanhuiben/2012-07-18/8f0213c297b5ee7d4c4b3ad79b9c540a.jpg", unid: "", url: "/"},
                   {title: "金刚经", img: "http://www.bookshare.cn/d/file/tushufenlei/dongmanhuiben/2012-07-18/8f0213c297b5ee7d4c4b3ad79b9c540a.jpg", unid: "", url: "/"}]
        }
    }
}
</script>
<style lang="sass">
    .card
      margin-top: 20px
      text-align: center
      .image
        width: 100%
        height: 100%
      .bookname
        color: #4c4c4c;
        margin-top: 10px;
        font-size: 16px;
        font-weight: bold;
        line-height: 22px;
        padding-left: 8px;
</style>