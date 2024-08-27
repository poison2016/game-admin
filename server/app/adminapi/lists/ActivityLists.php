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
use app\common\model\Activity;
use app\common\lists\ListsSearchInterface;


/**
 * Activity列表
 * Class ActivityLists
 * @package app\adminapi\lists
 */
class ActivityLists extends BaseAdminDataLists implements ListsSearchInterface
{


    /**
     * @notes 设置搜索条件
     * @return \string[][]
     * @author likeadmin
     * @date 2024/08/28 02:42
     */
    public function setSearch(): array
    {
        return [
            '=' => ['name'],
        ];
    }


    /**
     * @notes 获取列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author likeadmin
     * @date 2024/08/28 02:42
     */
    public function lists(): array
    {
        $data =  Activity::where($this->searchWhere)
            ->limit($this->limitOffset, $this->limitLength)
            ->order(['id' => 'desc'])
            ->select()
            ->toArray();
        foreach ($data as &$v){
            $v['pc_banner_img'] = $v['pc_banner_img']?explode(',',$v['pc_banner_img']):[];
            $v['app_banner_img'] = $v['app_banner_img']?explode(',',$v['app_banner_img']):[];
        }
        return $data;
    }


    /**
     * @notes 获取数量
     * @return int
     * @author likeadmin
     * @date 2024/08/28 02:42
     */
    public function count(): int
    {
        return Activity::where($this->searchWhere)->count();
    }

}