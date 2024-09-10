<?php
// +----------------------------------------------------------------------
// | likeadmin快速开发前后端分离管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/likeshop_gitee/likeadmin
// | github下载：https://github.com/likeshop-github/likeadmin
// | 访问官网：https://www.likeadmin.cn
// | likeadmin团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeadminTeam
// +----------------------------------------------------------------------

namespace app\adminapi\lists;


use app\adminapi\lists\BaseAdminDataLists;
use app\common\model\UserWithdraw;
use app\common\lists\ListsSearchInterface;
use think\facade\Db;


/**
 * UserWithdraw列表
 * Class UserWithdrawLists
 * @package app\adminapi\lists
 */
class UserWithdrawLists extends BaseAdminDataLists implements ListsSearchInterface
{


    /**
     * @notes 设置搜索条件
     * @return \string[][]
     * @author likeadmin
     * @date 2024/09/09 03:53
     */
    public function setSearch(): array
    {
        return [

        ];
    }


    /**
     * @notes 获取列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author likeadmin
     * @date 2024/09/09 03:53
     */
    public function lists(): array
    {
        $where = [];
        if(input('user_id')){
            $where['u.id'] = input('user_id');
        }
        $data =  Db::name('user_withdraw')->alias('uw')->field('uw.*,u.account,ua.xy_lx,ua.address')
            ->join('user u','u.id = uw.user_id','LEFT')->where($where)
            ->join('user_withdraw_account ua','ua.id = uw.withdraw_account_id','LEFT')->where($where)
            ->limit($this->limitOffset, $this->limitLength)
            ->order('type,id DESC')
            ->select()
            ->toArray();
        foreach ($data as &$item){
            $item['number'] = $item['number']?$item['number']:$item['address'];
            $item['w_type'] = $item['xy_lx'] == 1?'trc20':'erc20';
        }
        return $data;
    }


    /**
     * @notes 获取数量
     * @return int
     * @author likeadmin
     * @date 2024/09/09 03:53
     */
    public function count(): int
    {
        $where = [];
        if(input('user_id')){
            $where['u.id'] = input('user_id');
        }
        return Db::name('user_withdraw')->alias('uw')->field('uw.*,u.account')->join('user u','u.id = uw.user_id','LEFT')->where($where)->count();
    }

}