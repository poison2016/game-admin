import request from '@/utils/request'

// 电子闯关活动配置列表
export function apiActivityDzSetLists(params: any) {
    return request.get({ url: '/activity_dz_set/lists', params })
}

// 添加电子闯关活动配置
export function apiActivityDzSetAdd(params: any) {
    return request.post({ url: '/activity_dz_set/add', params })
}

// 编辑电子闯关活动配置
export function apiActivityDzSetEdit(params: any) {
    return request.post({ url: '/activity_dz_set/edit', params })
}

// 删除电子闯关活动配置
export function apiActivityDzSetDelete(params: any) {
    return request.post({ url: '/activity_dz_set/delete', params })
}

// 电子闯关活动配置详情
export function apiActivityDzSetDetail(params: any) {
    return request.get({ url: '/activity_dz_set/detail', params })
}