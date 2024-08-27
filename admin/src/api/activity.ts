import request from '@/utils/request'

// 活动列表
export function apiActivityLists(params: any) {
    return request.get({ url: '/activity/lists', params })
}

// 添加活动
export function apiActivityAdd(params: any) {
    return request.post({ url: '/activity/add', params })
}

// 编辑活动
export function apiActivityEdit(params: any) {
    return request.post({ url: '/activity/edit', params })
}

// 删除活动
export function apiActivityDelete(params: any) {
    return request.post({ url: '/activity/delete', params })
}

// 活动详情
export function apiActivityDetail(params: any) {
    return request.get({ url: '/activity/detail', params })
}