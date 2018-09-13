<template>
    <div class="tab">
	<div class="tab-head">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item v-for="(item,index) in data" :key="index" @click="changeCat(item.id)">{{item.nav}}</el-menu-item>
    </el-menu>
	</div>
	<div class="tab-body">
	<div class="tab-panel" id="tab1" style="display: block;">
	<div class="class-nav">
        <nuxt-link v-for="(item,index) in cat_cur" :key="index" :to="item.t">{{item.t}}</nuxt-link>
	</div>
	</div>
	</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [{ id: '0', nav: '图书分类', cat: [{ t: '国学经典' }, { t: '考试图书' }, { t: '文学史' },
                  { t: '国学经典' }, { t: '考试图书' }, { t: '文学史' },
                  { t: '国学经典' }, { t: '考试图书' }, { t: '文学史' },
                  { t: '国学经典' }, { t: '考试图书' }, { t: '文学史' },
                  { t: '国学经典' }, { t: '考试图书' }, { t: '文学史' },
                  { t: '国学经典' }, { t: '考试图书' }, { t: '文学史' },
                  { t: '国学经典' }, { t: '考试图书' }, { t: '文学史' },
                  { t: '国学经典' }, { t: '考试图书' }, { t: '计算机' }] },
            { id: '1', nav: '国学经典', cat: [{ t: '红楼梦' }, { t: '西游记' }, { t: '三国演义' }] },
            { id: '2', nav: '读书导航', cat: [{ t: '庄子' }] }],
            nav_cur: '图书分类',
            cat_cur: [{ t: '国学经典' }, { t: '考试图书' }, { t: 'Web之友' }]
        }
    },
    methods: {
        changeCat(input) {
            console.log(input)
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
    .tab-nav 
        list-style: none;
        font-size: 16px;
        padding-left: 0;
        li 
            display: inline
    .tab-body
        border-top: solid 1px #ddd
        margin-top: -1px
        padding-top: 15px
        a
            border: 1px solid #ddd
            display: inline-block;
            float: left
            font-size: 2rem
            height: 40px
            line-height: 40px
            margin-left: -1px
            margin-top: -1px
            overflow: hidden
            position: relative
            text-align: center
            width: 200px
    .class-nav
        overflow: hidden;
        padding-left: 1px;
        padding-top: 1px;
        margin-top: 7px;
</style>

