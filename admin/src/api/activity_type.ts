import request from '@/utils/request'

// 活动类型列表
export function apiActivityTypeLists(params: any) {
    return request.get({ url: '/activity_type/lists', params })
}

// 添加活动类型
export function apiActivityTypeAdd(params: any) {
    return request.post({ url: '/activity_type/add', params })
}

// 编辑活动类型
export function apiActivityTypeEdit(params: any) {
    return request.post({ url: '/activity_type/edit', params })
}

// 删除活动类型
export function apiActivityTypeDelete(params: any) {
    return request.post({ url: '/activity_type/delete', params })
}

// 活动类型详情
export function apiActivityTypeDetail(params: any) {
    return request.get({ url: '/activity_type/detail', params })
}