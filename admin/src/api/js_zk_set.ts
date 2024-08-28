import request from '@/utils/request'

// 急速转卡账号设置列表
export function apiJsZkSetLists(params: any) {
    return request.get({ url: '/js_zk_set/lists', params })
}

// 添加急速转卡账号设置
export function apiJsZkSetAdd(params: any) {
    return request.post({ url: '/js_zk_set/add', params })
}

// 编辑急速转卡账号设置
export function apiJsZkSetEdit(params: any) {
    return request.post({ url: '/js_zk_set/edit', params })
}

// 删除急速转卡账号设置
export function apiJsZkSetDelete(params: any) {
    return request.post({ url: '/js_zk_set/delete', params })
}

// 急速转卡账号设置详情
export function apiJsZkSetDetail(params: any) {
    return request.get({ url: '/js_zk_set/detail', params })
}