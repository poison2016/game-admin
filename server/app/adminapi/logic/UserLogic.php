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


use app\common\model\User;
use app\common\logic\BaseLogic;
use think\facade\Db;


/**
 * User逻辑
 * Class UserLogic
 * @package app\adminapi\logic
 */
class UserLogic extends BaseLogic
{


    /**
     * @notes 添加
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2024/08/22 00:03
     */
    public static function add(array $params): bool
    {
        Db::startTrans();
        try {
            User::create([
                'sn' => $params['sn'],
                'avatar' => $params['avatar'],
                'real_name' => $params['real_name'],
                'nickname' => $params['nickname'],
                'account' => $params['account'],
                'password' => $params['password'],
                'mobile' => $params['mobile'],
                'sex' => $params['sex'],
                'channel' => $params['channel'],
                'is_disable' => $params['is_disable'],
                'login_ip' => $params['login_ip'],
                'login_time' => strtotime($params['login_time']),
                'is_new_user' => $params['is_new_user'],
                'user_money' => $params['user_money'],
                'total_recharge_amount' => $params['total_recharge_amount'],
                'frozen_balance' => $params['frozen_balance'],
                'level_id' => $params['level_id'],
                'login_status' => $params['login_status'],
                'agent_id' => $params['agent_id'],
                'email' => $params['email'],
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
     * @date 2024/08/22 00:03
     */
    public static function edit(array $params): bool
    {
        Db::startTrans();
        try {
            User::where('id', $params['id'])->update([
                'sn' => $params['sn'],
                'avatar' => $params['avatar'],
                'real_name' => $params['real_name'],
                'nickname' => $params['nickname'],
                'account' => $params['account'],
                'password' => $params['password'],
                'mobile' => $params['mobile'],
                'sex' => $params['sex'],
                'channel' => $params['channel'],
                'is_disable' => $params['is_disable'],
                'login_ip' => $params['login_ip'],
                'login_time' => strtotime($params['login_time']),
                'is_new_user' => $params['is_new_user'],
                'user_money' => $params['user_money'],
                'total_recharge_amount' => $params['total_recharge_amount'],
                'frozen_balance' => $params['frozen_balance'],
                'level_id' => $params['level_id'],
                'login_status' => $params['login_status'],
                'agent_id' => $params['agent_id'],
                'email' => $params['email'],
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
     * @date 2024/08/22 00:03
     */
    public static function delete(array $params): bool
    {
        return User::destroy($params['id']);
    }


    /**
     * @notes 获取详情
     * @param $params
     * @return array
     * @author likeadmin
     * @date 2024/08/22 00:03
     */
    public static function detail($params): array
    {
        return User::findOrEmpty($params['id'])->toArray();
    }
}