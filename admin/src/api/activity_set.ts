import request from '@/utils/request'

// 首存活动配置表列表
export function apiActivitySetLists(params: any) {
    return request.get({ url: '/activity_set/lists', params })
}

// 添加首存活动配置表
export function apiActivitySetAdd(params: any) {
    return request.post({ url: '/activity_set/add', params })
}

// 编辑首存活动配置表
export function apiActivitySetEdit(params: any) {
    return request.post({ url: '/activity_set/edit', params })
}

// 删除首存活动配置表
export function apiActivitySetDelete(params: any) {
    return request.post({ url: '/activity_set/delete', params })
}

// 首存活动配置表详情
export function apiActivitySetDetail(params: any) {
    return request.get({ url: '/activity_set/detail', params })
}