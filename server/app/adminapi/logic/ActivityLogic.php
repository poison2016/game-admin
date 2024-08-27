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


use app\common\model\Activity;
use app\common\logic\BaseLogic;
use think\facade\Db;


/**
 * Activity逻辑
 * Class ActivityLogic
 * @package app\adminapi\logic
 */
class ActivityLogic extends BaseLogic
{


    /**
     * @notes 添加
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2024/08/28 02:42
     */
    public static function add(array $params): bool
    {
        Db::startTrans();
        try {
            Activity::create([
                'name' => $params['name'],
                'liushuibeishu' => $params['liushuibeishu'],
                'sqrk' => $params['sqrk'],
                'hd_status' => $params['hd_status'],
                'zs_start_time' => strtotime($params['zs_start_time']),
                'zs_end_time' => strtotime($params['zs_end_time']),
                'activity_start_time' => strtotime($params['activity_start_time']),
                'activity_end_time' => strtotime($params['activity_end_time']),
                'pc_activity_img' => $params['pc_activity_img'],
                'app_activity_img' => $params['app_activity_img'],
                'pc_banner_img' => $params['pc_banner_img']?implode(',',$params['pc_banner_img']):'',
                'app_banner_img' => $params['app_banner_img']?implode(',',$params['app_banner_img']):'',
                'pc_bg_img' => $params['pc_bg_img'],
                'app_bg_img' => $params['app_bg_img'],
                'is_sq_money' => $params['is_sq_money'],
                'order_num' => $params['order_num'],
                'pc_content' => $params['pc_content'],
                'app_content' => $params['app_content'],
                'activity_type'=>$params['activity_type'],
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
     * @date 2024/08/28 02:42
     */
    public static function edit(array $params): bool
    {
        Db::startTrans();
        try {
            Activity::where('id', $params['id'])->update([
                'name' => $params['name'],
                'liushuibeishu' => $params['liushuibeishu'],
                'sqrk' => $params['sqrk'],
                'hd_status' => $params['hd_status'],
                'zs_start_time' => strtotime($params['zs_start_time']),
                'zs_end_time' => strtotime($params['zs_end_time']),
                'activity_start_time' => strtotime($params['activity_start_time']),
                'activity_end_time' => strtotime($params['activity_end_time']),
                'pc_activity_img' => $params['pc_activity_img'],
                'app_activity_img' => $params['app_activity_img'],
                'pc_banner_img' => $params['pc_banner_img']?implode(',',$params['pc_banner_img']):'',
                'app_banner_img' => $params['app_banner_img']?implode(',',$params['app_banner_img']):'',
                'pc_bg_img' => $params['pc_bg_img'],
                'app_bg_img' => $params['app_bg_img'],
                'is_sq_money' => $params['is_sq_money'],
                'order_num' => $params['order_num'],
                'pc_content' => $params['pc_content'],
                'app_content' => $params['app_content'],
                'activity_type'=>$params['activity_type'],

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
     * @date 2024/08/28 02:42
     */
    public static function delete(array $params): bool
    {
        return Activity::destroy($params['id']);
    }


    /**
     * @notes 获取详情
     * @param $params
     * @return array
     * @author likeadmin
     * @date 2024/08/28 02:42
     */
    public static function detail($params): array
    {
        return Activity::findOrEmpty($params['id'])->toArray();
    }
}