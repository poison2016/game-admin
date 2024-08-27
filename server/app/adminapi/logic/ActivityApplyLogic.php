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


use app\common\model\ActivityApply;
use app\common\logic\BaseLogic;
use app\common\model\UserAccountLogModel;
use app\common\model\UserName;
use think\facade\Db;


/**
 * ActivityApply逻辑
 * Class ActivityApplyLogic
 * @package app\adminapi\logic
 */
class ActivityApplyLogic extends BaseLogic
{


    /**
     * @notes 添加
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2024/08/28 02:45
     */
    public static function add(array $params): bool
    {
        Db::startTrans();
        try {
            ActivityApply::create([
                'activity_name' => $params['activity_name'],
                'activity_id' => $params['activity_id'],
                'user_id' => $params['user_id'],
                'account' => $params['account'],
                'money' => $params['money'],
                'status' => $params['status'],
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
     * @date 2024/08/28 02:45
     */
    public static function edit(array $params): bool
    {
        Db::startTrans();
        try {
            ActivityApply::where('id', $params['id'])->update([
                'status' => $params['status'],
            ]);
            UserName::setIncMoney($params['user_id'],$params['money']);
            $userMoney = UserName::getUserMoney($params['user_id']);
            UserAccountLogModel::insetLog([
                'sn'=>date('YmdHis',time()).rand(1000,9999),
                'user_id'=>$params['id'],
                'action'=>1,
                'change_amount'=>$params['money'],
                'left_amount'=>$userMoney + $params['money'],
                'source_sn'=>'',
                'change_object'=>1,
                'change_type'=>1,
                'remark'=>$params['activity_name'].' 申请资金',
                'create_time'=>time(),
                'update_time'=>time()
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
     * @date 2024/08/28 02:45
     */
    public static function delete(array $params): bool
    {
        return ActivityApply::destroy($params['id']);
    }


    /**
     * @notes 获取详情
     * @param $params
     * @return array
     * @author likeadmin
     * @date 2024/08/28 02:45
     */
    public static function detail($params): array
    {
        return ActivityApply::findOrEmpty($params['id'])->toArray();
    }
}