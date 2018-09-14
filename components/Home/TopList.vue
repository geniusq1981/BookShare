<template>
    <div>
        <el-row class="tit"><span>阅读排行</span><span style="font-size:1.0rem;float:right;margin-top:20px;">更多>></span></el-row>
        <div class="topContent">
            <el-row v-for="(item,index) in newsdata" :key="index" >
            <div class="top-list-item">
                <div class="numb">{{index}}</div>                
                <div class="image" v-if="imgShow"><nuxt-link to="/"><img src="item.src"/></nuxt-link></div>
                <div class="t"><nuxt-link to="/">{{item.t}}</nuxt-link></div>
                <div v-if="imgShow" class="a">{{item.a}} 著</div>
            </div>
            </el-row>
            <el-row><div class="top-list-item"><i class="el-icon-back center" style="transform:rotate(180deg);"></i>
查看更多</div></el-row>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            newsdata: [{src: 'https://img.dushu.com/2018/02/09/11420943874283050.jpg_142.jpg', t: '郑天挺西南联大日记（全2册', a:'郑天挺', d:'北京青年报记者从北京单田芳文化传播有限责任公司经理肖建陆处获悉，著名评书艺术家', w:'0',z:'1'},
                       {src: 'https://img.dushu.com/2018/02/03/2355339339384816.jpg_142.jpg', t: '郑天挺西南联大日记（全2册', a:'郑天挺', d:'雷姆库哈斯（Rem Koolhaas）无疑是当今世界最为重要，同时也是知名度最高的建筑师', w:'0',z:'1'},
                        {src: 'https://img.dushu.com/2018/02/03/23252485193843717.jpg_142.jpg', t: '郑天挺西南联大日记（全2册', a:'郑天挺',  d:'“古之学者必有师。师者，所以传道受业解惑也。人非生而知之者，孰能无惑？惑而不从', w:'0',z:'1'},
                        {src: 'https://img.dushu.com/2018/01/20/13105788117966544.jpg_142.jpg', t: '郑天挺西南联大日记（全2册',a:'郑天挺',  d:'有人说，明代的历史充满了专制、独裁和暴力，明代特务政治把社会变成了人间地狱；有…', w:'0',z:'1'},
                        {src: 'https://img.dushu.com/2018/01/20/13105788117966544.jpg_142.jpg', t: '郑天挺西南联大日记（全2册', a:'郑天挺', d:'有人说，明代的历史充满了专制、独裁和暴力，明代特务政治把社会变成了人间地狱；有…', w:'0',z:'1'},
                        {src: 'https://img.dushu.com/2018/02/03/23252485193843717.jpg_142.jpg', t: '郑天挺西南联大日记（全2册', a:'郑天挺',  d:'“古之学者必有师。师者，所以传道受业解惑也。人非生而知之者，孰能无惑？惑而不从', w:'0',z:'1'},
                        {src: 'https://img.dushu.com/2018/02/03/23252485193843717.jpg_142.jpg', t: '郑天挺西南联大日记（全2册', a:'郑天挺',  d:'“古之学者必有师。师者，所以传道受业解惑也。人非生而知之者，孰能无惑？惑而不从', w:'0',z:'1'},
                        {src: 'https://img.dushu.com/2018/02/03/23252485193843717.jpg_142.jpg', t: '郑天挺西南联大日记（全2册', a:'郑天挺',  d:'“古之学者必有师。师者，所以传道受业解惑也。人非生而知之者，孰能无惑？惑而不从', w:'0',z:'1'},
                        {src: 'https://img.dushu.com/2018/01/20/13105788117966544.jpg_142.jpg', t: '郑天挺西南联大日记（全2册',a:'郑天挺',  d:'有人说，明代的历史充满了专制、独裁和暴力，明代特务政治把社会变成了人间地狱；有…', w:'0',z:'1'}],
            imgShow: false
        
        }
    }
}
</script>
<style lang="sass">
    .tit
        margin-top: 20px
        font-size: 3rem
    .topContent
        margin-top: 20px
        height: 10%
        border: 1px solid #ddd
        .top-list-item
            border-bottom: 1px solid #aaa
            height: 40px
            line-height: 40px
            padding: 0px 0px 0px 10px
            .numb
                overflow: hidden
                vertical-align: middle
                text-align: center
                width: 10%
                float: left
            .center
                overflow: hidden
                vertical-align: middle
                text-align: center
                width: 10%
                height: 60px
                line-height: 60px
            .image 
                height: 104px
                overflow: hidden
                vertical-align: middle
                text-align: center
                width: 104px
                line-height: 104px
                display: table-cell
                float: left
                margin-left: 22px
                margin-right: 14px
            .t
                margin-top: 8px
                font-size: 1.5rem
                font-weight: bold
            .a
                font-size: 1.5rem
</style>
