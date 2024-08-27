import request from '@/utils/request'

// 代理商提现表列表
export function apiDlTxLists(params: any) {
    return request.get({ url: '/dl_tx/lists', params })
}

// 添加代理商提现表
export function apiDlTxAdd(params: any) {
    return request.post({ url: '/dl_tx/add', params })
}

// 编辑代理商提现表
export function apiDlTxEdit(params: any) {
    return request.post({ url: '/dl_tx/edit', params })
}

// 删除代理商提现表
export function apiDlTxDelete(params: any) {
    return request.post({ url: '/dl_tx/delete', params })
}

// 代理商提现表详情
export function apiDlTxDetail(params: any) {
    return request.get({ url: '/dl_tx/detail', params })
}