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

namespace app\adminapi\logic;


use app\common\model\ActivitySet;
use app\common\logic\BaseLogic;
use think\facade\Db;


/**
 * ActivitySet逻辑
 * Class ActivitySetLogic
 * @package app\adminapi\logic
 */
class ActivitySetLogic extends BaseLogic
{


    /**
     * @notes 添加
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2024/08/28 22:01
     */
    public static function add(array $params): bool
    {
        Db::startTrans();
        try {
            ActivitySet::create([
                'activity_name' => $params['activity_name'],
                'low_money' => $params['low_money'],
                'hl_lb' => $params['hl_lb'],
                'hl_sx' => $params['hl_sx'],
                'size_type' => $params['size_type'],
                'create_time' => time(),
            ]);

            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            self::setError($e->getMessage());
            return false;
        }
    }


    /**
     * @notes 编辑
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2024/08/28 22:01
     */
    public static function edit(array $params): bool
    {
        Db::startTrans();
        try {
            ActivitySet::where('id', $params['id'])->update([
                'activity_name' => $params['activity_name'],
                'low_money' => $params['low_money'],
                'hl_lb' => $params['hl_lb'],
                'hl_sx' => $params['hl_sx'],
                'size_type' => $params['size_type'],

            ]);

            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            self::setError($e->getMessage());
            return false;
        }
    }


    /**
     * @notes 删除
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2024/08/28 22:01
     */
    public static function delete(array $params): bool
    {
        return ActivitySet::destroy($params['id']);
    }


    /**
     * @notes 获取详情
     * @param $params
     * @return array
     * @author likeadmin
     * @date 2024/08/28 22:01
     */
    public static function detail($params): array
    {
        return ActivitySet::findOrEmpty($params['id'])->toArray();
    }
}