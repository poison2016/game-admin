import request from '@/utils/request'

// 会员等级-每周红包配置列表
export function apiUserVipHbLists(params: any) {
    return request.get({ url: '/user_vip_hb/lists', params })
}

// 添加会员等级-每周红包配置
export function apiUserVipHbAdd(params: any) {
    return request.post({ url: '/user_vip_hb/add', params })
}

// 编辑会员等级-每周红包配置
export function apiUserVipHbEdit(params: any) {
    return request.post({ url: '/user_vip_hb/edit', params })
}

// 删除会员等级-每周红包配置
export function apiUserVipHbDelete(params: any) {
    return request.post({ url: '/user_vip_hb/delete', params })
}

// 会员等级-每周红包配置详情
export function apiUserVipHbDetail(params: any) {
    return request.get({ url: '/user_vip_hb/detail', params })
}