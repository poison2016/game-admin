import request from '@/utils/request'

// 用户表列表
export function apiUserLists(params: any) {
    return request.get({ url: '/user/lists', params })
}

// 添加用户表
export function apiUserAdd(params: any) {
    return request.post({ url: '/user/add', params })
}

// 编辑用户表
export function apiUserEdit(params: any) {
    return request.post({ url: '/user/edit', params })
}

// 删除用户表
export function apiUserDelete(params: any) {
    return request.post({ url: '/user/delete', params })
}

// 删除用户表
export function apiUserZD(params: any) {
    return request.post({ url: '/user/apiUserZD', params })
}

// 用户表详情
export function apiUserDetail(params: any) {
    return request.get({ url: '/user/detail', params })
}

// 用户表详情
export function getUserGame(params: any) {
    return request.get({ url: '/user/getUserGameMoney', params })
}

// 转出转出
export function setUserGame(params: any) {
    return request.get({ url: '/user/edzh', params })
}

//代理列表
export function apiUserDetailAll(params: any) {
    return request.get({ url: '/user/getDl', params })
}