import request from '@/utils/request'

// 第三方收款接口列表
export function apiPaySetDsfLists(params: any) {
    return request.get({ url: '/pay_set_dsf/lists', params })
}

// 添加第三方收款接口
export function apiPaySetDsfAdd(params: any) {
    return request.post({ url: '/pay_set_dsf/add', params })
}

// 编辑第三方收款接口
export function apiPaySetDsfEdit(params: any) {
    return request.post({ url: '/pay_set_dsf/edit', params })
}

// 删除第三方收款接口
export function apiPaySetDsfDelete(params: any) {
    return request.post({ url: '/pay_set_dsf/delete', params })
}

// 第三方收款接口详情
export function apiPaySetDsfDetail(params: any) {
    return request.get({ url: '/pay_set_dsf/detail', params })
}