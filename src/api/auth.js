import { request, uploadFile } from '@/utils/request'

// 登陆
export function login(data) {
  return request('/applets/api.Appletslogin/appletslogin', {
    method: 'post',
    data: data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 学生个人信息
export function studentInfo(data) {
  return request('/applets/api.Userinfo/studentinfo', {
    method: 'post',
    data: data,
    header: {
    	'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 教师个人信息
export function teacherInfo(data) {
  return request('/applets/api.Userinfo/teacherinfo', {
    method: 'post',
    data: data,
    header: {
    	'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 活动列表
export function activityList(data) {
  return request('/applets/api.Activity/activity', {
    method: 'post',
    data: data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 活动详情
export function activityInfo(data) {
  return request('/applets/api.Activity/activityinfo', {
    method: 'post',
    data: data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 活动发起
export function activityAdd(data) {
  return request('/applets/api.Activity/activityadd', {
    method: 'post',
    data: data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 上传图片
export function upload(data) {
  return uploadFile('/applets/api.Upload/upload', {
    method: 'post',
    name: 'img',
    filePath: data,
    header: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

// 活动状态列表
export function getActivityStateList(data) {
  return request('/applets/api.Activity/activitystatus', {
    method: 'post',
    data: data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 证书提交
export function certAdd(data) {
  return request('/applets/api.Certificate/certificateadd', {
    method: 'post',
    data: data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 竞赛提交
export function competitionAdd(data) {
  return request('/applets/api.Competition/competitionadd', {
    method: 'post',
    data: data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 证书列表
export function certList(data) {
  return request('/applets/api.Certificate/certificate', {
    method: 'post',
    data: data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 竞赛列表
export function competitionList(data) {
  return request('/applets/api.Competition/competition', {
    method: 'post',
    data: data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 教师 证数/竞赛 列表
export function teachList(data) {
  return request('/applets/api.Zsjslist/zsjslist', {
    method: 'post',
    data: data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 修改学生个人信息
export function editStudent(data) {
  return request('/applets/api.Userinfo/studentinfoedit', {
    method: 'post',
    data: data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 修改学生个人信息
export function editTeach(data) {
  return request('/applets/api.Userinfo/teacherinfoedit', {
    method: 'post',
    data: data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 学生报名活动
export function signUp (data) {
  return request('/applets/api.Activity/activitystudentadd', {
    method: 'post',
    data: data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 取消报名
export function signDel (data) {
  return request('/applets/api.Activity/activitystudentdel', {
    method: 'post',
    data: data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 证书竞赛详细内容
export function cerAndActInfo (data) {
  return request('/applets/api.Zsjslist/zsjsinfo', {
    method: 'post',
    data: data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 证书审核
export function certExamine (data) {
  return request('/applets/api.Zsjslist/shenhe', {
    method: 'post',
    data: data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 获取签到二维码
export function codeImg (data) {
  return request('/applets/api.Signpage/signpage', {
    method: 'post',
    data: data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 签到
export function signIn (data) {
  return request('/applets/api.Activity/activitystudentqd', {
    method: 'post',
    data: data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
