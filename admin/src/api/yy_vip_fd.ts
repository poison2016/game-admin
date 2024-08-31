import request from '@/utils/request'

// 会员亏损返点配置列表
export function apiYyVipFdLists(params: any) {
    return request.get({ url: '/yy_vip_fd/lists', params })
}

// 添加会员亏损返点配置
export function apiYyVipFdAdd(params: any) {
    return request.post({ url: '/yy_vip_fd/add', params })
}

// 编辑会员亏损返点配置
export function apiYyVipFdEdit(params: any) {
    return request.post({ url: '/yy_vip_fd/edit', params })
}

// 删除会员亏损返点配置
export function apiYyVipFdDelete(params: any) {
    return request.post({ url: '/yy_vip_fd/delete', params })
}

// 会员亏损返点配置详情
export function apiYyVipFdDetail(params: any) {
    return request.get({ url: '/yy_vip_fd/detail', params })
}