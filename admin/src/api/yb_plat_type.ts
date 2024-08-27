import request from '@/utils/request'

// 游戏平台列表列表
export function apiYbPlatTypeLists(params: any) {
    return request.get({ url: '/yb_plat_type/lists', params })
}

// 添加游戏平台列表
export function apiYbPlatTypeAdd(params: any) {
    return request.post({ url: '/yb_plat_type/add', params })
}

// 编辑游戏平台列表
export function apiYbPlatTypeEdit(params: any) {
    return request.post({ url: '/yb_plat_type/edit', params })
}

// 删除游戏平台列表
export function apiYbPlatTypeDelete(params: any) {
    return request.post({ url: '/yb_plat_type/delete', params })
}

// 游戏平台列表详情
export function apiYbPlatTypeDetail(params: any) {
    return request.get({ url: '/yb_plat_type/detail', params })
}