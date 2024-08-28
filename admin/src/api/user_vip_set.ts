import request from '@/utils/request'

// 会员等级配置列表
export function apiUserVipSetLists(params: any) {
    return request.get({ url: '/user_vip_set/lists', params })
}

// 添加会员等级配置
export function apiUserVipSetAdd(params: any) {
    return request.post({ url: '/user_vip_set/add', params })
}

// 编辑会员等级配置
export function apiUserVipSetEdit(params: any) {
    return request.post({ url: '/user_vip_set/edit', params })
}

// 删除会员等级配置
export function apiUserVipSetDelete(params: any) {
    return request.post({ url: '/user_vip_set/delete', params })
}

// 会员等级配置详情
export function apiUserVipSetDetail(params: any) {
    return request.get({ url: '/user_vip_set/detail', params })
}