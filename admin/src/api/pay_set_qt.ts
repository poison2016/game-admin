import request from '@/utils/request'

// 其他方式收款设置列表
export function apiPaySetQtLists(params: any) {
    return request.get({ url: '/pay_set_qt/lists', params })
}

// 添加其他方式收款设置
export function apiPaySetQtAdd(params: any) {
    return request.post({ url: '/pay_set_qt/add', params })
}

// 编辑其他方式收款设置
export function apiPaySetQtEdit(params: any) {
    return request.post({ url: '/pay_set_qt/edit', params })
}

// 删除其他方式收款设置
export function apiPaySetQtDelete(params: any) {
    return request.post({ url: '/pay_set_qt/delete', params })
}

// 其他方式收款设置详情
export function apiPaySetQtDetail(params: any) {
    return request.get({ url: '/pay_set_qt/detail', params })
}