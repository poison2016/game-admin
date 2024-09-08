import request from '@/utils/request'

// 用户提现表列表
export function apiUserWithdrawLists(params: any) {
    return request.get({ url: '/user_withdraw/lists', params })
}

// 添加用户提现表
export function apiUserWithdrawAdd(params: any) {
    return request.post({ url: '/user_withdraw/add', params })
}

// 编辑用户提现表
export function apiUserWithdrawEdit(params: any) {
    return request.post({ url: '/user_withdraw/edit', params })
}

// 删除用户提现表
export function apiUserWithdrawDelete(params: any) {
    return request.post({ url: '/user_withdraw/delete', params })
}

// 用户提现表详情
export function apiUserWithdrawDetail(params: any) {
    return request.get({ url: '/user_withdraw/detail', params })
}