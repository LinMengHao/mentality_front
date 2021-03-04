import axios from 'axios'
import cookie from 'js-cookie'
import {
  MessageBox,
  Message
} from 'element-ui'
const service=axios.create({
  baseURL:'http://localhost:9003',
  timeout: 20000
})
//创建拦截器 获取token 传递token到cookie中
service.interceptors.request.use(
  config => {
    //判断cookie里面是否有lmh_token数据
    if (cookie.get('lmh_token')) {
      //把获取到的token放入cookie
      config.headers['token'] = cookie.get('lmh_token');
    }
    return config
  },
  err => {
    return Promise.reject(err);
  });
// response interceptor

// // http response 拦截器
// service.interceptors.response.use(
//   response => {
//     if (response.data.code == 28004) {
//       console.log("response.data.resultCode是28004")
//       // 返回 错误代码-1 清除ticket信息并跳转到登录页面
//       window.location.href = "/login"
//       return
//     } else {
//       if (response.data.code !== 20000) {
//         //25000：订单支付中，不做任何提示
//         if (response.data.code != 25000) {
//           Message({
//             message: response.data.message || 'error',
//             type: 'error',
//             duration: 5 * 1000
//           })
//         }
//       } else {
//         return response;
//       }
//     }
//   },
//   error => {
//     return Promise.reject(error.response) // 返回接口返回的错误信息
//   });
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response

    // if the custom code is not 200, it is judged as an error.
    //如果返回状态码不是200，则报错
    if (res.data.code !== 200) {
      Message({
        message: res.data.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   // to re-login
      //   MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
      //     confirmButtonText: 'Re-Login',
      //     cancelButtonText: 'Cancel',
      //     type: 'warning'
      //   }).then(() => {
      //     store.dispatch('user/resetToken').then(() => {
      //       location.reload()
      //     })
      //   })
      // }
      return Promise.reject(new Error(res.data.message || 'Error'))
    } else {
      return res
    }
  },

)
export default service
