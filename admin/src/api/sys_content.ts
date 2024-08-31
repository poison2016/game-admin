import request from '@/utils/request'

// 系统公告列表
export function apiSysContentLists(params: any) {
    return request.get({ url: '/sys_content/lists', params })
}

// 添加系统公告
export function apiSysContentAdd(params: any) {
    return request.post({ url: '/sys_content/add', params })
}

// 编辑系统公告
export function apiSysContentEdit(params: any) {
    return request.post({ url: '/sys_content/edit', params })
}

// 删除系统公告
export function apiSysContentDelete(params: any) {
    return request.post({ url: '/sys_content/delete', params })
}

// 系统公告详情
export function apiSysContentDetail(params: any) {
    return request.get({ url: '/sys_content/detail', params })
}