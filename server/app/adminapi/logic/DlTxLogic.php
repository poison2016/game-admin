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


use app\common\model\DlTx;
use app\common\logic\BaseLogic;
use app\common\model\UserAccountLogModel;
use app\common\model\UserName;
use think\facade\Db;


/**
 * DlTx逻辑
 * Class DlTxLogic
 * @package app\adminapi\logic
 */
class DlTxLogic extends BaseLogic
{


    /**
     * @notes 添加
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2024/08/28 01:26
     */
    public static function add(array $params): bool
    {
        Db::startTrans();
        try {
            DlTx::create([
                'user_id' => $params['user_id'],
                'money' => $params['money'],
                'type' => $params['type'],
                'status' => $params['status'],
                'message' => $params['message'],
                'address' => $params['address'],
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
     * @date 2024/08/28 01:26
     */
    public static function edit(array $params): bool
    {
        Db::startTrans();
        try {
            DlTx::where('id', $params['id'])->update([
                'status' => $params['status'],
                'message' => $params['message'],
            ]);
            if($params['status'] == 3){
                $userId = Db::name('dl_tx')->where('id',$params['id'])->value('user_id');
                $userMoney = UserName::getUserMoney($userId);
                UserName::setIncMoney($userId,$params['money']);
//写入用户记录表
                UserAccountLogModel::insetLog([
                    'sn'=>date('YmdHis',time()).rand(1000,9999),
                    'user_id'=>$params['id'],
                    'action'=>1,
                    'change_amount'=>$params['money'],
                    'left_amount'=>$userMoney + $params['money'],
                    'source_sn'=>'',
                    'change_object'=>1,
                    'change_type'=>1,
                    'remark'=>'驳回提现',
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
     * @date 2024/08/28 01:26
     */
    public static function delete(array $params): bool
    {
        return DlTx::destroy($params['id']);
    }


    /**
     * @notes 获取详情
     * @param $params
     * @return array
     * @author likeadmin
     * @date 2024/08/28 01:26
     */
    public static function detail($params): array
    {
        return DlTx::findOrEmpty($params['id'])->toArray();
    }
}