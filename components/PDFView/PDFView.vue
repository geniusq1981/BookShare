<template>
    <div>
        <div class="pdfViewMask">
        <div class="contor">
        <el-button @click="prev">上一页</el-button>
        <el-button @click="next">下一页</el-button>    
        <span>Page: <span v-text="page_num"></span> / <span v-text="page_count"></span></span>
          
        <el-button @click="addscale" icon="plus"></el-button>
        <el-button @click="minus" icon="minus"></el-button>
        <el-button id="prev" @click="closepdf">关闭</el-button>
        </div>
        <canvas class="canvasstyle" id="the-canvas"></canvas>
        <canvas class="rightpage" id="canvas-right"></canvas>
        </div>
    </div>
</template>
<script>
import pdfjs from "pdfjs-dist"
export default {
    props: ['pdfurl'],
    data() {
        return {
            pdfDoc: null,
            pageNum: 1,
            page_num: 0,
            page_count: 0,
            pageRendering: false,
            pageNumPending: null,
            scale: 1.2,
            maxscale: 2,
            minscale: 0.8
        }
    },
    methods: {
        renderPage(num) { //渲染pdf
            let vm = this
            this.pageRendering = true;
            let canvas = document.getElementById('the-canvas')
            let canvas_right = document.getElementById('canvas-right')
            // Using promise to fetch the page
            this.pdfDoc.getPage(num).then(function (page) {
                var viewport = page.getViewport(vm.scale);
                //alert(vm.canvas.height)
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                canvas_right.height = viewport.height;
                canvas_right.width = viewport.width;

                // Render PDF page into canvas context
                var renderContext = {
                    canvasContext: vm.ctx,
                    viewport: viewport
                };
                var renderTask = page.render(renderContext);

                // Wait for rendering to finish
                renderTask.promise.then(function () {
                    vm.pageRendering = false;
                    if (vm.pageNumPending !== null) {
                        // New page rendering is pending
                        vm.renderPage(vm.pageNumPending);
                        vm.pageNumPending = null;
                    }
                });
            });
            vm.page_num = vm.pageNum;

        },
        addscale() {//放大
            if (this.scale >= this.maxscale) {
                return
            }
            this.scale += 0.1;
            this.queueRenderPage(this.pageNum)
        },
        minus() {//缩小
            if (this.scale <= this.minscale) {
                return
            }
            this.scale -= 0.1;
            this.queueRenderPage(this.pageNum)
        },
        prev() {//上一页
            let vm = this
            if (vm.pageNum <= 1) {
                return;
            }
            vm.pageNum--;
            vm.queueRenderPage(vm.pageNum);
        },
        next() {//下一页
            let vm = this
            if (vm.pageNum >= vm.page_count) {
                return;
            }
            vm.pageNum++;
            vm.queueRenderPage(vm.pageNum);
        },
        queueRenderPage(num) {
            if (this.pageRendering) {
                this.pageNumPending = num;
            } else {
                this.renderPage(num);
            }
        },
        closepdf() {//关闭PDF
            this.$emit('closepdf')
        },
    },
    computed: {
        ctx() {
            let id = document.getElementById('the-canvas')
            return id.getContext('2d');
        }
    },
    mounted() {
        let vm = this
        vm.pdfurl = "http://cdn.mozilla.net/pdfjs/tracemonkey.pdf"
        pdfjs.getDocument(vm.pdfurl).then(function (pdfDoc_) {
            vm.pdfDoc = pdfDoc_
            vm.page_count = vm.pdfDoc.numPages
            console.log(vm.page_count)
            console.log(vm.pageNum)
            vm.renderPage(vm.pageNum)
        })
    }
}
</script>
<style lang="sass">
    .pdfViewMask
        position: absolute
        top: 0
        left: 0
        background-color: #aaaaaa
        padding: 20px 20px 20px 20px
    .canvasstyle
        top: 0
        left: 0
        width: 100%
        height: 100%
    .rightpage
        top: 0
        left: 50%
        width: 50%
</style>
