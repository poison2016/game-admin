import request from '@/utils/request'

// 支付方式通道配置列表
export function apiPayTdSetLists(params: any) {
    return request.get({ url: '/pay_td_set/lists', params })
}

// 添加支付方式通道配置
export function apiPayTdSetAdd(params: any) {
    return request.post({ url: '/pay_td_set/add', params })
}

// 编辑支付方式通道配置
export function apiPayTdSetEdit(params: any) {
    return request.post({ url: '/pay_td_set/edit', params })
}

// 删除支付方式通道配置
export function apiPayTdSetDelete(params: any) {
    return request.post({ url: '/pay_td_set/delete', params })
}

// 支付方式通道配置详情
export function apiPayTdSetDetail(params: any) {
    return request.get({ url: '/pay_td_set/detail', params })
}