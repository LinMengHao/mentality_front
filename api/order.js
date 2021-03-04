import request from '@/utils/request'

export default {
  //生成订单
  createOrders(courseId) {
    return request({
      url: `/eduOrder/t-order/createOrder/${courseId}`,
      method: 'post'
    })
  },

  //根据订单id查询订单信息
  getOrdersInfo(orderId) {
    return request({
      url: `/eduOrder/t-order/getOrderInfo/${orderId}`,
      method: 'get'
    })
  },

  //生成二维码的方法
  createQRcode(orderNo) {
    return request({
      url: '/eduOrder/t-pay-log/createNative/' + orderNo,
      method: 'get'
    })
  },

  //查询订单状态的方法
  queryPayStatus(orderNo) {
    return request({
      url: '/eduOrder/t-pay-log/queryPayStatus/' + orderNo,
      method: 'get'
    })
  },

  //获取用户所有订单
  getOrderList(){
    return request({
      url: `/eduOrder/t-order/orderList`,
      method: 'get'
    })
  },

  //根据订单id删除订单
  removeOrderById(orderId){
    return request({
      url: `/eduOrder/t-order/removeOrder/${orderId}`,
      method: 'delete'
    })
  },

  //查询订单表中订单的状态 判断课程是否购买
  isBought(courseId) {
    return request({
      url: `/eduOrder/t-order/isBought/${courseId}`,
      method: 'get'
    })
  },
}
