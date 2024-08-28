import request from '@/utils/request'

// 支付方式列表
export function apiPayTypesLists(params: any) {
    return request.get({ url: '/pay_types/lists', params })
}

// 添加支付方式
export function apiPayTypesAdd(params: any) {
    return request.post({ url: '/pay_types/add', params })
}

// 编辑支付方式
export function apiPayTypesEdit(params: any) {
    return request.post({ url: '/pay_types/edit', params })
}

// 删除支付方式
export function apiPayTypesDelete(params: any) {
    return request.post({ url: '/pay_types/delete', params })
}

// 支付方式详情
export function apiPayTypesDetail(params: any) {
    return request.get({ url: '/pay_types/detail', params })
}