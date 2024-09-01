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
use app\common\model\User;
use app\common\lists\ListsSearchInterface;


/**
 * User列表
 * Class UserLists
 * @package app\adminapi\lists
 */
class UserLists extends BaseAdminDataLists implements ListsSearchInterface
{


    /**
     * @notes 设置搜索条件
     * @return \string[][]
     * @author likeadmin
     * @date 2024/08/22 00:03
     */
    public function setSearch(): array
    {
        return [
            '=' => ['real_name', 'nickname', 'account', 'mobile','is_agent'],
        ];
    }


    /**
     * @notes 获取列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author likeadmin
     * @date 2024/08/22 00:03
     */
    public function lists(): array
    {
        $data =  User::where($this->searchWhere)
            ->limit($this->limitOffset, $this->limitLength)
            ->order(['id' => 'desc'])
            ->select()
            ->toArray();
        foreach ($data as &$v){
            $v['sex_str'] = $v['sex'] == 1?'男':'女';
            switch ($v['channel']){
                case 1:
                    $v['channel_str'] = '微信小程序';
                    break;
                case 2:
                    $v['channel_str'] = '微信公众号';
                    break;
                case 3:
                    $v['channel_str'] = '手机H5';
                    break;
                case 4:
                    $v['channel_str'] = '电脑PC';
                    break;
                case 5:
                    $v['channel_str'] = '苹果APP';
                    break;
                case 6:
                    $v['channel_str'] = '安卓APP';
                    break;

            }
            $v['is_disable_str'] = $v['is_disable'] == 1?'是':'否';
            $v['is_new_user_str'] = $v['is_new_user'] == 1?'是':'否';
            $v['login_status_str'] = $v['login_status'] == 1?'是':'否';
            $v['password']  = '';
        }
        return $data;
    }


    /**
     * @notes 获取数量
     * @return int
     * @author likeadmin
     * @date 2024/08/22 00:03
     */
    public function count(): int
    {
        return User::where($this->searchWhere)->count();
    }

}