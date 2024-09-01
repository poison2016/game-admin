import request from '@/utils/request'

// 会员交易流水列表
export function apiUserAccountLogLists(params: any) {
    return request.get({ url: '/user_account_log/lists', params })
}

// 添加会员交易流水
export function apiUserAccountLogAdd(params: any) {
    return request.post({ url: '/user_account_log/add', params })
}

// 编辑会员交易流水
export function apiUserAccountLogEdit(params: any) {
    return request.post({ url: '/user_account_log/edit', params })
}

// 删除会员交易流水
export function apiUserAccountLogDelete(params: any) {
    return request.post({ url: '/user_account_log/delete', params })
}

// 会员交易流水详情
export function apiUserAccountLogDetail(params: any) {
    return request.get({ url: '/user_account_log/detail', params })
}