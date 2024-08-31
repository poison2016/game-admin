import request from '@/utils/request'

// 取款方式通道配置列表
export function apiYyTdLists(params: any) {
    return request.get({ url: '/yy_td/lists', params })
}

// 添加取款方式通道配置
export function apiYyTdAdd(params: any) {
    return request.post({ url: '/yy_td/add', params })
}

// 编辑取款方式通道配置
export function apiYyTdEdit(params: any) {
    return request.post({ url: '/yy_td/edit', params })
}

// 删除取款方式通道配置
export function apiYyTdDelete(params: any) {
    return request.post({ url: '/yy_td/delete', params })
}

// 取款方式通道配置详情
export function apiYyTdDetail(params: any) {
    return request.get({ url: '/yy_td/detail', params })
}