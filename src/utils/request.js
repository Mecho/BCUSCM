// 请求封装库 2020/09/16 18:25 @wanghao

import wepy from '@wepy/core'

const host = "https://bcuscm.mauac.com"	//f服务器接口地址

// 普通请求
const request = async (url, options = {}, showLoading = true) => {
	// 显示加载中
	if (showLoading) {
		wx.showLoading({'title': '加载中'})
	}

	// 发起请求
	options.url = host + url
	let response = await wepy.wx.request(options)

	// 隐藏加载
	if (showLoading) {
		wx.hideLoading()
	}

	// 返回消息
	if (response.statusCode >= 200 && response.statusCode < 300) {
		return response
	}

	// 错误提示
	if (response.statusCode === 429) {
		wx.showModal({
		  title: '提示',
		  content: '请求太频繁，请稍后再试'
		})
	}

	if (response.statusCode === 500) {
		wx.showModal({
		  title: '提示',
		  content: '服务器错误，请联系管理员或重试'
		})
	}

	// 返回转promies对象的 Error
	const error = new Error(err.response.data.message)
	error.response = response
	return Promise.reject(error)
}

// 图片请求
const uploadFile = async (url, options = {}, showLoading = true) => {

  // 显示加载中
  if (showLoading) {
    wx.showLoading({title: '上传中'})
  }

  // 拼接请求地址
  options.url = host + url

  let response = await wepy.wx.uploadFile(options)

  if (showLoading) {
    // 隐藏加载中
    wx.hideLoading()
  }

  if (response.statusCode >= 200 && response.statusCode < 300) {
    return response
  }

  wx.showModal({
    title: '提示',
    content: '服务器错误，请联系管理员或重试'
  })

  const error = new Error(response.data.message)
  error.response = response
  return Promise.reject(error)
}


export {
	request,
	uploadFile
}