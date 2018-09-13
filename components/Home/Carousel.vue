<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="(item,index) in images" :key="index">
      <img :src="item.src"/>  
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
    data() {
        return {
            images: [{src: 'https://pic.dushu.com/201608/13/201608131655316393.jpg', title: '中国', link: '/'},
            {src: 'https://pic.dushu.com/201608/13/201608131653003491.png', title: '美国', link: '/'},
            {src: 'https://pic.dushu.com/201608/13/201608131654472126.jpg', title: '日本', link: '/'},
            {src: 'https://pic.dushu.com/201608/13/201608131654472126.jpg', title: '加拿大', link: '/'}]
        }
    },
    methods: {

    },
    computed: {

    },
    mounted() {

    }
}
</script>

<style>
  .el-carousel__item img {
        width: 100%;
        height: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>