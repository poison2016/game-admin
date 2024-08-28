import request from '@/utils/request'

// 虚拟币收款设置列表
export function apiXnbSkSetLists(params: any) {
    return request.get({ url: '/xnb_sk_set/lists', params })
}

// 添加虚拟币收款设置
export function apiXnbSkSetAdd(params: any) {
    return request.post({ url: '/xnb_sk_set/add', params })
}

// 编辑虚拟币收款设置
export function apiXnbSkSetEdit(params: any) {
    return request.post({ url: '/xnb_sk_set/edit', params })
}

// 删除虚拟币收款设置
export function apiXnbSkSetDelete(params: any) {
    return request.post({ url: '/xnb_sk_set/delete', params })
}

// 虚拟币收款设置详情
export function apiXnbSkSetDetail(params: any) {
    return request.get({ url: '/xnb_sk_set/detail', params })
}