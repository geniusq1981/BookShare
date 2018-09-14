<template>
    <div>
        <el-row class="newtit"><span>新书推荐</span><span style="font-size:1.0rem;float:right;margin-top:20px;">更多>></span></el-row>
        <el-row class="newcontent">
            <nuxt-link v-for="(item,index) in newsdata" :key="index" to="/">
                <img :src="item.src"/>
                <div class="t">{{item.t}}</div>
                <div class="a">{{item.a}} 著</div>
            </nuxt-link>
        </el-row>
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
                        {src: 'https://img.dushu.com/2018/01/20/13105788117966544.jpg_142.jpg', t: '郑天挺西南联大日记（全2册', a:'郑天挺', d:'有人说，明代的历史充满了专制、独裁和暴力，明代特务政治把社会变成了人间地狱；有…', w:'0',z:'1'},
                        {src: 'https://img.dushu.com/2018/02/09/11420943874283050.jpg_142.jpg', t: '郑天挺西南联大日记（全2册', a:'郑天挺', d:'北京青年报记者从北京单田芳文化传播有限责任公司经理肖建陆处获悉，著名评书艺术家', w:'0',z:'1'},
                       {src: 'https://img.dushu.com/2018/02/03/2355339339384816.jpg_142.jpg', t: '郑天挺西南联大日记（全2册', a:'郑天挺', d:'雷姆库哈斯（Rem Koolhaas）无疑是当今世界最为重要，同时也是知名度最高的建筑师', w:'0',z:'1'},
                        {src: 'https://img.dushu.com/2018/02/03/23252485193843717.jpg_142.jpg', t: '郑天挺西南联大日记（全2册', a:'郑天挺',  d:'“古之学者必有师。师者，所以传道受业解惑也。人非生而知之者，孰能无惑？惑而不从', w:'0',z:'1'},
                        {src: 'https://img.dushu.com/2018/01/20/13105788117966544.jpg_142.jpg', t: '郑天挺西南联大日记（全2册',a:'郑天挺',  d:'有人说，明代的历史充满了专制、独裁和暴力，明代特务政治把社会变成了人间地狱；有…', w:'0',z:'1'}]
        }
    }
}
</script>
<style lang="sass">
    .newtit
        margin-top: 20px
        font-size: 3rem
    .newcontent
        padding: 20px 20px 20px 20px
        margin-top: 20px
        height: 15%
        border: 1px solid #ddd
        img 
            width: 120%
            height: 120%
        a
            display: inline-block
            width: 20%
            padding: 0px 20px 0px 20px
            margin-top: 20px
            .t
                margin-top: 10px
                font-size: 1.5rem
                font-weight: bold
            .a
                font-size: 1.5rem
</style>
