import request from '@/utils/request'

// 代理流水佣金策略列表
export function apiDlLsYjLists(params: any) {
    return request.get({ url: '/dl_ls_yj/lists', params })
}

// 添加代理流水佣金策略
export function apiDlLsYjAdd(params: any) {
    return request.post({ url: '/dl_ls_yj/add', params })
}

// 编辑代理流水佣金策略
export function apiDlLsYjEdit(params: any) {
    return request.post({ url: '/dl_ls_yj/edit', params })
}

// 删除代理流水佣金策略
export function apiDlLsYjDelete(params: any) {
    return request.post({ url: '/dl_ls_yj/delete', params })
}

// 代理流水佣金策略详情
export function apiDlLsYjDetail(params: any) {
    return request.get({ url: '/dl_ls_yj/detail', params })
}