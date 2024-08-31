import request from '@/utils/request'

// 意见反馈管理列表
export function apiYyYjfkLists(params: any) {
    return request.get({ url: '/yy_yjfk/lists', params })
}

// 添加意见反馈管理
export function apiYyYjfkAdd(params: any) {
    return request.post({ url: '/yy_yjfk/add', params })
}

// 编辑意见反馈管理
export function apiYyYjfkEdit(params: any) {
    return request.post({ url: '/yy_yjfk/edit', params })
}

// 删除意见反馈管理
export function apiYyYjfkDelete(params: any) {
    return request.post({ url: '/yy_yjfk/delete', params })
}

// 意见反馈管理详情
export function apiYyYjfkDetail(params: any) {
    return request.get({ url: '/yy_yjfk/detail', params })
}