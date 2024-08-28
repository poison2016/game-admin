import request from '@/utils/request'

// Vip游戏返水比例列表
export function apiUserVipGameFsLists(params: any) {
    return request.get({ url: '/user_vip_game_fs/lists', params })
}

// 添加Vip游戏返水比例
export function apiUserVipGameFsAdd(params: any) {
    return request.post({ url: '/user_vip_game_fs/add', params })
}

// 编辑Vip游戏返水比例
export function apiUserVipGameFsEdit(params: any) {
    return request.post({ url: '/user_vip_game_fs/edit', params })
}

// 删除Vip游戏返水比例
export function apiUserVipGameFsDelete(params: any) {
    return request.post({ url: '/user_vip_game_fs/delete', params })
}

// Vip游戏返水比例详情
export function apiUserVipGameFsDetail(params: any) {
    return request.get({ url: '/user_vip_game_fs/detail', params })
}