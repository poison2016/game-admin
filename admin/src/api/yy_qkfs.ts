import request from '@/utils/request'

// 取款方式列表
export function apiYyQkfsLists(params: any) {
    return request.get({ url: '/yy_qkfs/lists', params })
}

// 添加取款方式
export function apiYyQkfsAdd(params: any) {
    return request.post({ url: '/yy_qkfs/add', params })
}

// 编辑取款方式
export function apiYyQkfsEdit(params: any) {
    return request.post({ url: '/yy_qkfs/edit', params })
}

// 删除取款方式
export function apiYyQkfsDelete(params: any) {
    return request.post({ url: '/yy_qkfs/delete', params })
}

// 取款方式详情
export function apiYyQkfsDetail(params: any) {
    return request.get({ url: '/yy_qkfs/detail', params })
}