import {
    book_PARAMS,
    book_ARR,
    TOUCHEND,
    book_ID,
    book_TYPE,
    book_SORT,
    book_DETAIL,
    CART,
    ORDERDATA
  } from './mutation-type.js'
  import {setStore} from '../config/common.js'
  export default {
    [book_PARAMS] (state, value) {
      state.bookname = value
    },
    // 如果不是第一次请求 就不要在累加了 好把～
    [book_ARR] (state, array) {
      if (parseInt(array.offset) !== 0) {
        state.bookArr = [...state.bookArr, ...array.data]
      } else {
    // 只有在第一次请求的时候在累加  好吧
        state.bookArr = array.data
      }
    },
    // 是否限时暂无更多
    [TOUCHEND] (state, value) {
      state.touchend = value
    },
    // 当前课程列表请求参数 课程id
    [book_ID] (state, value) {
      state.bookId = value
    },
    // 当前课程列表请求的 级别
    [book_TYPE] (state, value) {
      state.booktype = value
    },
    // 当前课程列表排序方式
    [book_SORT] (state, value) {
      state.bookSort = value
    },
    // 课程详情
    [book_DETAIL] (state, value) {
      state.bookDetail = value
      // 存入locaStore
      setStore('bookDetail', value)
    },
    [CART] (state, value) {
      state.cart = value
    },
    // 订单信息
    [ORDERDATA] (state, value) {
      state.orderData = value
    }
  }