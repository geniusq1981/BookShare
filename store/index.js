import Vuex from 'vuex'
const state = {
    // 选中的参数
    bookname: '艺术',
    // 是否显示暂无更多数据
    touchend: false,
    // 课程列表组件容器
    bookArr: [],
    // 课程id
    bookId: '15963587',
    // 课程类型
    booktype: '1',
    // 当前的课程列表排序方式啊
    bookSort: '1',
    // 课程详情
    bookDetail: {},
    // 购物车
    cart: {},
    // 订单信息
    orderData: {}
}
const createStore = () => {
    return new Vuex.Store({
        state
    })
}
export default createStore 