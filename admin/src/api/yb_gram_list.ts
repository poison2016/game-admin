import request from '@/utils/request'

// 游戏列表列表
export function apiYbGramListLists(params: any) {
    return request.get({ url: '/yb_gram_list/lists', params })
}

// 添加游戏列表
export function apiYbGramListAdd(params: any) {
    return request.post({ url: '/yb_gram_list/add', params })
}

// 编辑游戏列表
export function apiYbGramListEdit(params: any) {
    return request.post({ url: '/yb_gram_list/edit', params })
}

// 删除游戏列表
export function apiYbGramListDelete(params: any) {
    return request.post({ url: '/yb_gram_list/delete', params })
}

// 游戏列表详情
export function apiYbGramListDetail(params: any) {
    return request.get({ url: '/yb_gram_list/detail', params })
}