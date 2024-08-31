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
use app\common\model\YyTd;
use app\common\lists\ListsSearchInterface;
use think\facade\Db;


/**
 * YyTd列表
 * Class YyTdLists
 * @package app\adminapi\lists
 */
class YyTdLists extends BaseAdminDataLists implements ListsSearchInterface
{


    /**
     * @notes 设置搜索条件
     * @return \string[][]
     * @author likeadmin
     * @date 2024/08/29 22:03
     */
    public function setSearch(): array
    {
        return [
            '=' => ['td_name'],
        ];
    }


    /**
     * @notes 获取列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author likeadmin
     * @date 2024/08/29 22:03
     */
    public function lists(): array
    {
        $data = YyTd::where($this->searchWhere)
            ->field(['id', 'qkfs_id', 'td_name', 'td_code', 'create_time'])
            ->limit($this->limitOffset, $this->limitLength)
            ->order(['id' => 'desc'])
            ->select()
            ->toArray();
        foreach ($data as &$v){
            $v['name'] = Db::name('yy_qkfs')->where('id',$v['qkfs_id'])->value('name');
        }
        return $data;
    }


    /**
     * @notes 获取数量
     * @return int
     * @author likeadmin
     * @date 2024/08/29 22:03
     */
    public function count(): int
    {
        return YyTd::where($this->searchWhere)->count();
    }

}