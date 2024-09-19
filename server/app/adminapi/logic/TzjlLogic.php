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


use app\common\model\Tzjl;
use app\common\logic\BaseLogic;
use think\facade\Db;


/**
 * Tzjl逻辑
 * Class TzjlLogic
 * @package app\adminapi\logic
 */
class TzjlLogic extends BaseLogic
{


    /**
     * @notes 添加
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2024/09/20 02:54
     */
    public static function add(array $params): bool
    {
        Db::startTrans();
        try {
            Tzjl::create([
                'user_id' => $params['user_id'],
                'plat_type' => $params['plat_type'],
                'game_type' => $params['game_type'],
                'game_name' => $params['game_name'],
                'round' => $params['round'],
                'table' => $params['table'],
                'seat' => $params['seat'],
                'bet_amount' => $params['bet_amount'],
                'vaild_amount' => $params['vaild_amount'],
                'settled_amount' => $params['settled_amount'],
                'bet_content' => $params['bet_content'],
                'status' => $params['status'],
                'game_order_id' => $params['game_order_id'],
                'bet_time' => $params['bet_time'],
                'last_update_time' => $params['last_update_time'],
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
     * @date 2024/09/20 02:54
     */
    public static function edit(array $params): bool
    {
        Db::startTrans();
        try {
            Tzjl::where('id', $params['id'])->update([
                'user_id' => $params['user_id'],
                'plat_type' => $params['plat_type'],
                'game_type' => $params['game_type'],
                'game_name' => $params['game_name'],
                'round' => $params['round'],
                'table' => $params['table'],
                'seat' => $params['seat'],
                'bet_amount' => $params['bet_amount'],
                'vaild_amount' => $params['vaild_amount'],
                'settled_amount' => $params['settled_amount'],
                'bet_content' => $params['bet_content'],
                'status' => $params['status'],
                'game_order_id' => $params['game_order_id'],
                'bet_time' => $params['bet_time'],
                'last_update_time' => $params['last_update_time'],
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
     * @date 2024/09/20 02:54
     */
    public static function delete(array $params): bool
    {
        return Tzjl::destroy($params['id']);
    }


    /**
     * @notes 获取详情
     * @param $params
     * @return array
     * @author likeadmin
     * @date 2024/09/20 02:54
     */
    public static function detail($params): array
    {
        return Tzjl::findOrEmpty($params['id'])->toArray();
    }
}