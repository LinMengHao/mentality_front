import request from '@/utils/request'
export default {
  getBannerList() {
    return request({
      url: `/cms/bannerFront/getAllBanner`,
      method: 'get'
    })
  },
}
