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


use app\common\model\DlLsYj;
use app\common\logic\BaseLogic;
use think\facade\Db;


/**
 * DlLsYj逻辑
 * Class DlLsYjLogic
 * @package app\adminapi\logic
 */
class DlLsYjLogic extends BaseLogic
{


    /**
     * @notes 添加
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2024/08/29 01:31
     */
    public static function add(array $params): bool
    {
        Db::startTrans();
        try {
            DlLsYj::create([
                'name' => $params['name'],
                'top_tz' => $params['top_tz'],
                'low_tz' => $params['low_tz'],
                'low_user' => $params['low_user'],
                'status' => $params['status'],
                'zd_fs' => $params['zd_fs'],
                'type_zr' => $params['type_zr'],
                'type_dz' => $params['type_dz'],
                'type_cp' => $params['type_cp'],
                'type_ty' => $params['type_ty'],
                'type_dj' => $params['type_dj'],
                'type_by' => $params['type_by'],
                'type_qp' => $params['type_qp'],
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
     * @date 2024/08/29 01:31
     */
    public static function edit(array $params): bool
    {
        Db::startTrans();
        try {
            DlLsYj::where('id', $params['id'])->update([
                'name' => $params['name'],
                'top_tz' => $params['top_tz'],
                'low_tz' => $params['low_tz'],
                'low_user' => $params['low_user'],
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
     * @date 2024/08/29 01:31
     */
    public static function delete(array $params): bool
    {
        return DlLsYj::destroy($params['id']);
    }


    /**
     * @notes 获取详情
     * @param $params
     * @return array
     * @author likeadmin
     * @date 2024/08/29 01:31
     */
    public static function detail($params): array
    {
        return DlLsYj::findOrEmpty($params['id'])->toArray();
    }
}