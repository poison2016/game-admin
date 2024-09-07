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
use app\adminapi\service\DsfService;
use app\common\model\YbPlatType;
use app\common\lists\ListsSearchInterface;


/**
 * YbPlatType列表
 * Class YbPlatTypeLists
 * @package app\adminapi\lists
 */
class YbPlatTypeLists extends BaseAdminDataLists implements ListsSearchInterface
{


    /**
     * @notes 设置搜索条件
     * @return \string[][]
     * @author likeadmin
     * @date 2024/08/21 23:29
     */
    public function setSearch(): array
    {
        return [
            '=' => ['game_title'],
        ];
    }


    /**
     * @notes 获取列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author likeadmin
     * @date 2024/08/21 23:29
     */
    public function lists(): array
    {
        $data = YbPlatType::where($this->searchWhere)
            ->limit($this->limitOffset, $this->limitLength)
            ->order(['id' => 'desc'])
            ->select()
            ->toArray();
        foreach ($data as &$v) {
            $v['is_open_str'] = $v['is_open'] == 1 ? '开启' : '关闭';
            $v['is_hot_str'] = $v['is_hot'] == 1 ? '是' : '否';
            $v['is_new_str'] = $v['is_new'] == 1 ? '是' : '否';
            $v['user_money'] = 0;
            if (input('user_name')) {
                $arr = [
                    'playerId' => input('user_name'),
                    'currency' => 'CNY'
                ];
                $ret = (new DsfService())->sendUrl('/api/server/balanceAll', $arr);

                if ($ret) {
                    if (!empty($ret['code']) && $ret['code'] == 10000) {
                        foreach ($ret['data'] as $item) {
                            if (!empty($item[$v['plat_type']])) {
                                $v['user_money'] = $item[$v['plat_type']];
                            }
                        }
                    }
                }

            }

        }

        return $data;
    }


    /**
     * @notes 获取数量
     * @return int
     * @author likeadmin
     * @date 2024/08/21 23:29
     */
    public function count(): int
    {
        return YbPlatType::where($this->searchWhere)->count();
    }

}