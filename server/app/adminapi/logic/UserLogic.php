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
use app\common\model\UserAccountLogModel;
use app\common\model\UserName;
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
        if($params['is_show'] ==2){//增加降低余额
            //查询当前用户余额
            $userMoney = UserName::getUserMoney($params['id']);
            if($params['is_type'] == 1){//增加
                $ret = UserName::setIncMoney($params['id'],$params['money']);
                //写入用户记录表
                UserAccountLogModel::insetLog([
                    'sn'=>date('YmdHis',time()).rand(1000,9999),
                    'user_id'=>$params['id'],
                    'action'=>1,
                    'change_amount'=>$params['money'],
                    'left_amount'=>$params['money'] + $userMoney,
                    'source_sn'=>'',
                    'change_object'=>1,
                    'change_type'=>1,
                    'remark'=>'平台操作 增加金额',
                    'create_time'=>time(),
                    'update_time'=>time()
                ]);
            }else{
                $ret = UserName::setDecMoney($params['id'],$params['money']);
                UserAccountLogModel::insetLog([
                    'sn'=>date('YmdHis',time()).rand(1000,9999),
                    'user_id'=>$params['id'],
                    'action'=>2,
                    'change_amount'=>$params['moneys'],
                    'left_amount'=>$userMoney - $params['moneys'],
                    'change_object'=>2,
                    'change_type'=>2,
                    'source_sn'=>'',
                    'remark'=>'平台操作 降低金额',
                    'create_time'=>time(),
                    'update_time'=>time()
                ]);
            }
            if(!$ret){
                self::setError('处理失败 错误码1001-1');
                Db::rollback();
                return false;
            }
            Db::commit();
            return true;

        }else{
            try {
                $arr = [
                    'sn' => $params['sn'],
//                'avatar' => $params['avatar'],
//                'real_name' => $params['real_name'],
//                'nickname' => $params['nickname'],
//                'account' => $params['account'],

                    'mobile' => $params['mobile'],
//                'sex' => $params['sex'],
//                'channel' => $params['channel'],
                    'is_disable' => $params['is_disable'],
//                'login_ip' => $params['login_ip'],
//                'login_time' => strtotime($params['login_time']),
//                'is_new_user' => $params['is_new_user'],
//                'user_money' => $params['user_money'],
//                'total_recharge_amount' => $params['total_recharge_amount'],
//                'frozen_balance' => $params['frozen_balance'],
                    'level_id' => $params['level_id'],
//                'agent_id' => $params['agent_id'],
                    'email' => $params['email'],
                ];
                if($params['password']){
                    $arr['password'] = md5($params['password']);
                }
                User::where('id', $params['id'])->update($arr);

                Db::commit();
                return true;
            } catch (\Exception $e) {
                Db::rollback();
                self::setError($e->getMessage());
                return false;
            }
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