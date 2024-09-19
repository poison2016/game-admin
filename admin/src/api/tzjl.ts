import request from '@/utils/request'

// 用户投注记录列表
export function apiTzjlLists(params: any) {
    return request.get({ url: '/tzjl/lists', params })
}

// 添加用户投注记录
export function apiTzjlAdd(params: any) {
    return request.post({ url: '/tzjl/add', params })
}

// 编辑用户投注记录
export function apiTzjlEdit(params: any) {
    return request.post({ url: '/tzjl/edit', params })
}

// 删除用户投注记录
export function apiTzjlDelete(params: any) {
    return request.post({ url: '/tzjl/delete', params })
}

// 用户投注记录详情
export function apiTzjlDetail(params: any) {
    return request.get({ url: '/tzjl/detail', params })
}