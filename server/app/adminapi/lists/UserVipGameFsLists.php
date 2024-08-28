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
use app\common\model\UserVipGameFs;
use app\common\lists\ListsSearchInterface;
use think\facade\Db;


/**
 * UserVipGameFs列表
 * Class UserVipGameFsLists
 * @package app\adminapi\lists
 */
class UserVipGameFsLists extends BaseAdminDataLists implements ListsSearchInterface
{


    /**
     * @notes 设置搜索条件
     * @return \string[][]
     * @author likeadmin
     * @date 2024/08/29 01:11
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
     * @date 2024/08/29 01:11
     */
    public function lists(): array
    {
        $data =  UserVipGameFs::where($this->searchWhere)
            ->field(['id', 'vip_id', 'day_top_ls', 'low_ls', 'status', 'zd_fs', 'type_zr', 'type_dz', 'type_cp', 'type_ty', 'type_dj', 'type_by', 'type_qp'])
            ->limit($this->limitOffset, $this->limitLength)
            ->order(['id' => 'desc'])
            ->select()
            ->toArray();
        foreach ($data as &$v){
            $v['vip_name'] = Db::name('user_vip_set')->where('id',$v['vip_id'])->value('vip_name');
        }
        return $data;
    }


    /**
     * @notes 获取数量
     * @return int
     * @author likeadmin
     * @date 2024/08/29 01:11
     */
    public function count(): int
    {
        return UserVipGameFs::where($this->searchWhere)->count();
    }

}