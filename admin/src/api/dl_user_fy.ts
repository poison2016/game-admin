import request from '@/utils/request'

// 代理用户充值返佣比例列表
export function apiDlUserFyLists(params: any) {
    return request.get({ url: '/dl_user_fy/lists', params })
}

// 添加代理用户充值返佣比例
export function apiDlUserFyAdd(params: any) {
    return request.post({ url: '/dl_user_fy/add', params })
}

// 编辑代理用户充值返佣比例
export function apiDlUserFyEdit(params: any) {
    return request.post({ url: '/dl_user_fy/edit', params })
}

// 删除代理用户充值返佣比例
export function apiDlUserFyDelete(params: any) {
    return request.post({ url: '/dl_user_fy/delete', params })
}

// 代理用户充值返佣比例详情
export function apiDlUserFyDetail(params: any) {
    return request.get({ url: '/dl_user_fy/detail', params })
}