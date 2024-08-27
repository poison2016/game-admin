import request from '@/utils/request'

// 活动申请表列表
export function apiActivityApplyLists(params: any) {
    return request.get({ url: '/activity_apply/lists', params })
}

// 添加活动申请表
export function apiActivityApplyAdd(params: any) {
    return request.post({ url: '/activity_apply/add', params })
}

// 编辑活动申请表
export function apiActivityApplyEdit(params: any) {
    return request.post({ url: '/activity_apply/edit', params })
}

// 删除活动申请表
export function apiActivityApplyDelete(params: any) {
    return request.post({ url: '/activity_apply/delete', params })
}

// 活动申请表详情
export function apiActivityApplyDetail(params: any) {
    return request.get({ url: '/activity_apply/detail', params })
}