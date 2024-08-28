import request from '@/utils/request'

// 代理盈亏佣金策略列表
export function apiDlYjLists(params: any) {
    return request.get({ url: '/dl_yj/lists', params })
}

// 添加代理盈亏佣金策略
export function apiDlYjAdd(params: any) {
    return request.post({ url: '/dl_yj/add', params })
}

// 编辑代理盈亏佣金策略
export function apiDlYjEdit(params: any) {
    return request.post({ url: '/dl_yj/edit', params })
}

// 删除代理盈亏佣金策略
export function apiDlYjDelete(params: any) {
    return request.post({ url: '/dl_yj/delete', params })
}

// 代理盈亏佣金策略详情
export function apiDlYjDetail(params: any) {
    return request.get({ url: '/dl_yj/detail', params })
}