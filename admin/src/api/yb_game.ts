import request from '@/utils/request'

// 所有游戏大类列表
export function apiYbGameLists(params: any) {
    return request.get({ url: '/yb_game/lists', params })
}

// 添加所有游戏大类
export function apiYbGameAdd(params: any) {
    return request.post({ url: '/yb_game/add', params })
}

// 编辑所有游戏大类
export function apiYbGameEdit(params: any) {
    return request.post({ url: '/yb_game/edit', params })
}

// 删除所有游戏大类
export function apiYbGameDelete(params: any) {
    return request.post({ url: '/yb_game/delete', params })
}

// 所有游戏大类详情
export function apiYbGameDetail(params: any) {
    return request.get({ url: '/yb_game/detail', params })
}