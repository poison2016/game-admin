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


use app\common\model\YyQkfs;
use app\common\logic\BaseLogic;
use think\facade\Db;


/**
 * YyQkfs逻辑
 * Class YyQkfsLogic
 * @package app\adminapi\logic
 */
class YyQkfsLogic extends BaseLogic
{


    /**
     * @notes 添加
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2024/08/29 21:56
     */
    public static function add(array $params): bool
    {
        Db::startTrans();
        try {
            YyQkfs::create([
                'name' => $params['name'],
                'qk_lx' => $params['qk_lx'],
                'kj_pay_money' => $params['kj_pay_money'],
                'status' => $params['status'],
                'order_num' => $params['order_num'],
                'qt_bz' => $params['qt_bz'],
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
     * @date 2024/08/29 21:56
     */
    public static function edit(array $params): bool
    {
        Db::startTrans();
        try {
            YyQkfs::where('id', $params['id'])->update([
                'name' => $params['name'],
                'qk_lx' => $params['qk_lx'],
                'kj_pay_money' => $params['kj_pay_money'],
                'status' => $params['status'],
                'order_num' => $params['order_num'],
                'qt_bz' => $params['qt_bz'],
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
     * @date 2024/08/29 21:56
     */
    public static function delete(array $params): bool
    {
        return YyQkfs::destroy($params['id']);
    }


    /**
     * @notes 获取详情
     * @param $params
     * @return array
     * @author likeadmin
     * @date 2024/08/29 21:56
     */
    public static function detail($params): array
    {
        return YyQkfs::findOrEmpty($params['id'])->toArray();
    }
}