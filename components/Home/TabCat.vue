<template>
    <div class="tab">
	<div class="tab-head">
        <el-menu :default-active="activeIndex" mode="horizontal">
    <el-menu-item v-for="(item,index) in data" :key="index" @click="changeCat(item.id)">
        {{item.nav}}
        </el-menu-item>
    </el-menu>
	</div>
	<div class="tab-body">
	<div class="tab-panel" id="tab1" style="display: block;">
	<div class="class-nav">
        <nuxt-link v-for="(item,index) in cat_cur" :key="index" to="/">
            <img v-if="nav_cur==1" :src="item.s"/>
            <div>{{item.t}}</div></nuxt-link>
	</div>
	</div>
	</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [{id: '0',
                nav: '图书分类',
                cat: [{ t: '国学经典', u: '/' }, { t: '考试图书', u: '/' }, { t: '文学史', u: '/' },
                { t: '国学经典', u: '/' }, { t: '考试图书', u: '/' }, { t: '文学史', u: '/' },
                { t: '国学经典', u: '/' }, { t: '考试图书', u: '/' }, { t: '文学史', u: '/' },
                { t: '国学经典', u: '/' }, { t: '考试图书', u: '/' }, { t: '文学史', u: '/' },
                { t: '国学经典', u: '/' }, { t: '考试图书', u: '/' }, { t: '文学史', u: '/' },
                { t: '国学经典', u: '/' }, { t: '考试图书', u: '/' }, { t: '文学史', u: '/' },
                { t: '国学经典', u: '/' }, { t: '考试图书', u: '/' }]            },
            {id: '1', 
            nav: '读书导航', 
            cat: [{ t: '新浪读书', s: 'https://pic.dushu.com/201607/19/201607191316136967.png_50.jpg', u: '/' },
            { t: '新浪读书', s: 'https://pic.dushu.com/201607/19/201607191316136967.png_50.jpg', u: '/' },
            { t: '新浪读书', s: 'https://pic.dushu.com/201607/19/201607191316136967.png_50.jpg', u: '/' },
            { t: '新浪读书', s: 'https://pic.dushu.com/201607/19/201607191316136967.png_50.jpg', u: '/' },
            { t: '新浪读书', s: 'https://pic.dushu.com/201607/19/201607191316136967.png_50.jpg', u: '/' },
            { t: '新浪读书', s: 'https://pic.dushu.com/201607/19/201607191316136967.png_50.jpg', u: '/' },
            { t: '新浪读书', s: 'https://pic.dushu.com/201607/19/201607191316136967.png_50.jpg', u: '/' },
            { t: '新浪读书', s: 'https://pic.dushu.com/201607/19/201607191316136967.png_50.jpg', u: '/' }]}],
            nav_cur: '图书分类',
            cat_cur: [{ t: '国学经典' }, { t: '考试图书' }, { t: 'Web之友' }],
            activeIndex: 1
        }
    },
    methods: {
        changeCat(input) {
            console.log(input)
            this.nav_cur = input
            this.cat_cur = this.data[input].cat
        }
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this.cat_cur = this.data[0].cat
    }
}
</script>
<style lang="sass">
    .tab-head
        list-style: none
        padding: 0
        li 
            display: inline
            font-size: 1.8rem
    .tab-body
        border-top: solid 1px #ddd
        padding-top: 2px
        a
            border: 1px solid #ddd
            display: inline-block;
            float: left
            font-size: 1.5rem
            line-height: 40px
            margin-left: -1px
            margin-top: -1px
            overflow: hidden
            position: relative
            text-align: center
            width: 25%
    .class-nav
        overflow: hidden;
        padding-left: 1px;
        padding-top: 1px;
        margin-top: 7px;
</style>

