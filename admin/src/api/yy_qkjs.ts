import request from '@/utils/request'

// 取款加送规则设置列表
export function apiYyQkjsLists(params: any) {
    return request.get({ url: '/yy_qkjs/lists', params })
}

// 添加取款加送规则设置
export function apiYyQkjsAdd(params: any) {
    return request.post({ url: '/yy_qkjs/add', params })
}

// 编辑取款加送规则设置
export function apiYyQkjsEdit(params: any) {
    return request.post({ url: '/yy_qkjs/edit', params })
}

// 删除取款加送规则设置
export function apiYyQkjsDelete(params: any) {
    return request.post({ url: '/yy_qkjs/delete', params })
}

// 取款加送规则设置详情
export function apiYyQkjsDetail(params: any) {
    return request.get({ url: '/yy_qkjs/detail', params })
}