import request from '@/utils/request'

// 虚拟比取款活动配置列表
export function apiActivityXnbSetLists(params: any) {
    return request.get({ url: '/activity_xnb_set/lists', params })
}

// 添加虚拟比取款活动配置
export function apiActivityXnbSetAdd(params: any) {
    return request.post({ url: '/activity_xnb_set/add', params })
}

// 编辑虚拟比取款活动配置
export function apiActivityXnbSetEdit(params: any) {
    return request.post({ url: '/activity_xnb_set/edit', params })
}

// 删除虚拟比取款活动配置
export function apiActivityXnbSetDelete(params: any) {
    return request.post({ url: '/activity_xnb_set/delete', params })
}

// 虚拟比取款活动配置详情
export function apiActivityXnbSetDetail(params: any) {
    return request.get({ url: '/activity_xnb_set/detail', params })
}