import request from '@/utils/request'

// 会员等级活动配置列表
export function apiUserVipActivityLists(params: any) {
    return request.get({ url: '/user_vip_activity/lists', params })
}

// 添加会员等级活动配置
export function apiUserVipActivityAdd(params: any) {
    return request.post({ url: '/user_vip_activity/add', params })
}

// 编辑会员等级活动配置
export function apiUserVipActivityEdit(params: any) {
    return request.post({ url: '/user_vip_activity/edit', params })
}

// 删除会员等级活动配置
export function apiUserVipActivityDelete(params: any) {
    return request.post({ url: '/user_vip_activity/delete', params })
}

// 会员等级活动配置详情
export function apiUserVipActivityDetail(params: any) {
    return request.get({ url: '/user_vip_activity/detail', params })
}