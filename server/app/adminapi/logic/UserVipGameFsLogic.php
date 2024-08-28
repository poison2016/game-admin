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


use app\common\model\UserVipGameFs;
use app\common\logic\BaseLogic;
use think\facade\Db;


/**
 * UserVipGameFs逻辑
 * Class UserVipGameFsLogic
 * @package app\adminapi\logic
 */
class UserVipGameFsLogic extends BaseLogic
{


    /**
     * @notes 添加
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2024/08/29 01:11
     */
    public static function add(array $params): bool
    {
        Db::startTrans();
        try {
            UserVipGameFs::create([
                'vip_id' => $params['vip_id'],
                'day_top_ls' => $params['day_top_ls'],
                'low_ls' => $params['low_ls'],
                'status' => $params['status'],
                'zd_fs' => $params['zd_fs'],
                'type_zr' => $params['type_zr'],
                'type_dz' => $params['type_dz'],
                'type_cp' => $params['type_cp'],
                'type_ty' => $params['type_ty'],
                'type_dj' => $params['type_dj'],
                'type_by' => $params['type_by'],
                'type_qp' => $params['type_qp'],
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
     * @date 2024/08/29 01:11
     */
    public static function edit(array $params): bool
    {
        Db::startTrans();
        try {
            UserVipGameFs::where('id', $params['id'])->update([
                'vip_id' => $params['vip_id'],
                'day_top_ls' => $params['day_top_ls'],
                'low_ls' => $params['low_ls'],
                'status' => $params['status'],
                'zd_fs' => $params['zd_fs'],
                'type_zr' => $params['type_zr'],
                'type_dz' => $params['type_dz'],
                'type_cp' => $params['type_cp'],
                'type_ty' => $params['type_ty'],
                'type_dj' => $params['type_dj'],
                'type_by' => $params['type_by'],
                'type_qp' => $params['type_qp'],
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
     * @date 2024/08/29 01:11
     */
    public static function delete(array $params): bool
    {
        return UserVipGameFs::destroy($params['id']);
    }


    /**
     * @notes 获取详情
     * @param $params
     * @return array
     * @author likeadmin
     * @date 2024/08/29 01:11
     */
    public static function detail($params): array
    {
        return UserVipGameFs::findOrEmpty($params['id'])->toArray();
    }
}