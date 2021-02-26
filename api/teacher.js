import request from '@/utils/request'
export default {
  //分页查询讲师的方法
  getTeacherPageList(page,limit) {
    return request({
      url: `/eduService/psychologistFront/getPsychologistFrontList/${page}/${limit}`,
      method: 'post',
    })
  },

  //讲师详情的方法
  getTeacherDetailInfo(teacherId) {
    return request({
      url: `/eduService/psychologistFront/getPsychologistInfo/${teacherId}`,
      method: 'get',
    })
  },
}
