<template>
    <div>
        <el-row class="tit">读书资讯</el-row>
        <el-row class="content">
            <nuxt-link v-for="(item,index) in newsdata" :key="index" to="/">
                <img :src="item.src"/>
                <div class="t">{{item.t}}</div>
                <div class="d">{{item.d}}</div>
                <span class="w">{{item.w}}</span>
                <span class="z">{{item.z}}</span>
            </nuxt-link>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return{
            newsdata: [{src: 'https://pic.dushu.com/201809/12/537.jpg_256.jpg', t: '著名评书大师单田芳病逝！', d:'北京青年报记者从北京单田芳文化传播有限责任公司经理肖建陆处获悉，著名评书艺术家', w:'0',z:'1'},
                       {src: 'https://pic.dushu.com/201809/11/147.jpg_256.jpg', t: '非西方经验与建筑的在地化', d:'雷姆库哈斯（Rem Koolhaas）无疑是当今世界最为重要，同时也是知名度最高的建筑师', w:'0',z:'1'},
                        {src: 'https://pic.dushu.com/201809/11/916.jpg_256.jpg', t: '敦煌壁画里的教师节', d:'“古之学者必有师。师者，所以传道受业解惑也。人非生而知之者，孰能无惑？惑而不从', w:'0',z:'1'},
                        {src: 'https://pic.dushu.com/201809/11/41.jpg_256.jpg', t: '古代王朝那么多，为何明朝的皇', d:'有人说，明代的历史充满了专制、独裁和暴力，明代特务政治把社会变成了人间地狱；有…', w:'0',z:'1'}]
        }
    }
}
</script>
<style lang="sass">
    .tit
        margin-top: 20px
        font-size: 2.5rem
    .content
        padding: 20px 20px 20px 20px
        margin-top: 20px
        height: 20%
        border: 1px solid #ddd
        img 
            width: 100%
            height: 75%
        a
            display: inline-block
            width: 25%
            padding: 0px 20px 0px 20px
            .t
                margin-top: 10px
                white-space: nowrap
                overflow: hidden
                font-size: 2.0rem
            .d
                font-size: 1.2rem
            .w
                font-size: 1.2rem
            .z
                font-size: 1.0rem
</style>
