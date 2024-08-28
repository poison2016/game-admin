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


use app\common\model\UserVipSet;
use app\common\logic\BaseLogic;
use think\facade\Db;


/**
 * UserVipSet逻辑
 * Class UserVipSetLogic
 * @package app\adminapi\logic
 */
class UserVipSetLogic extends BaseLogic
{


    /**
     * @notes 添加
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2024/08/28 23:10
     */
    public static function add(array $params): bool
    {
        Db::startTrans();
        try {
            UserVipSet::create([
                'vip_name' => $params['vip_name'],
                'up_money' => $params['up_money'],
                'up_ls' => $params['up_ls'],
                'bj_ls' => $params['bj_ls'],
                'day_tk_num' => $params['day_tk_num'],
                'low_tk' => $params['low_tk'],
                'low_cz' => $params['low_cz'],
                'day_tk_money' => $params['day_tk_money'],
                'top_cz' => $params['top_cz'],
                'up_lj' => $params['up_lj'],
                'sr_lj' => $params['sr_lj'],
                'z_hb' => $params['z_hb'],
                'low_zz' => $params['low_zz'],
                'hb_bl' => $params['hb_bl'],
                'zg_jj' => $params['zg_jj'],
                'ls_bs' => $params['ls_bs'],
                'num_xz' => $params['num_xz'],
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
     * @date 2024/08/28 23:10
     */
    public static function edit(array $params): bool
    {
        Db::startTrans();
        try {
            UserVipSet::where('id', $params['id'])->update([
                'vip_name' => $params['vip_name'],
                'up_money' => $params['up_money'],
                'up_ls' => $params['up_ls'],
                'bj_ls' => $params['bj_ls'],
                'day_tk_num' => $params['day_tk_num'],
                'low_tk' => $params['low_tk'],
                'low_cz' => $params['low_cz'],
                'day_tk_money' => $params['day_tk_money'],
                'top_cz' => $params['top_cz'],
                'up_lj' => $params['up_lj'],
                'sr_lj' => $params['sr_lj'],
                'z_hb' => $params['z_hb'],
                'low_zz' => $params['low_zz'],
                'hb_bl' => $params['hb_bl'],
                'zg_jj' => $params['zg_jj'],
                'ls_bs' => $params['ls_bs'],
                'num_xz' => $params['num_xz'],
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
     * @date 2024/08/28 23:10
     */
    public static function delete(array $params): bool
    {
        return UserVipSet::destroy($params['id']);
    }


    /**
     * @notes 获取详情
     * @param $params
     * @return array
     * @author likeadmin
     * @date 2024/08/28 23:10
     */
    public static function detail($params): array
    {
        return UserVipSet::findOrEmpty($params['id'])->toArray();
    }
}