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


use app\common\model\UserAccountLogModel;
use app\common\model\UserName;
use app\common\model\UserWithdraw;
use app\common\logic\BaseLogic;
use think\facade\Db;


/**
 * UserWithdraw逻辑
 * Class UserWithdrawLogic
 * @package app\adminapi\logic
 */
class UserWithdrawLogic extends BaseLogic
{


    /**
     * @notes 添加
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2024/09/09 03:53
     */
    public static function add(array $params): bool
    {
        Db::startTrans();
        try {
            UserWithdraw::create([
                'user_id' => $params['user_id'],
                'money' => $params['money'],
                'type' => $params['type'],
                'remarks' => $params['remarks'],
                'withdraw_type' => $params['withdraw_type'],
                'number' => $params['number'],
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
     * @date 2024/09/09 03:53
     */
    public static function edit(array $params): bool
    {
        Db::startTrans();
        try {
            UserWithdraw::where('id', $params['id'])->update([

                'type' => $params['type'],
                'remarks' => $params['remarks'],
                'withdraw_time' => time(),
            ]);
            if($params['type'] == 2){//拒绝 返回金额
                $userMoney = UserName::getUserMoney($params['user_id']);
                $ret = UserName::setIncMoney($params['user_id'],$params['money']);
                //写入用户记录表
                UserAccountLogModel::insetLog([
                    'sn'=>date('YmdHis',time()).rand(1000,9999),
                    'user_id'=>$params['user_id'],
                    'action'=>1,
                    'change_amount'=>$params['money'],
                    'left_amount'=>$params['money'] + $userMoney,
                    'source_sn'=>'',
                    'change_object'=>1,
                    'change_type'=>1,
                    'remark'=>'提现失败 退回金额',
                    'create_time'=>time(),
                    'update_time'=>time()
                ]);
            }

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
     * @date 2024/09/09 03:53
     */
    public static function delete(array $params): bool
    {
        return UserWithdraw::destroy($params['id']);
    }


    /**
     * @notes 获取详情
     * @param $params
     * @return array
     * @author likeadmin
     * @date 2024/09/09 03:53
     */
    public static function detail($params): array
    {
        return UserWithdraw::findOrEmpty($params['id'])->toArray();
    }
}