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


use app\common\model\PayTypes;
use app\common\logic\BaseLogic;
use think\facade\Db;


/**
 * PayTypes逻辑
 * Class PayTypesLogic
 * @package app\adminapi\logic
 */
class PayTypesLogic extends BaseLogic
{


    /**
     * @notes 添加
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2024/08/29 02:06
     */
    public static function add(array $params): bool
    {
        Db::startTrans();
        try {
            PayTypes::create([
                'name' => $params['name'],
                'is_tj' => $params['is_tj'],
                'js_bl' => $params['js_bl'],
                'pay_td' => $params['pay_td'],
                'pay_type' => $params['pay_type'],
                'sfskjk' => $params['sfskjk'],
                'bzlx' => $params['bzlx'],
                'xylx' => $params['xylx'],
                'low_cz_money' => $params['low_cz_money'],
                'top_cz_money' => $params['top_cz_money'],
                'cz_money_type' => $params['cz_money_type'],
                'kj_pay_money' => $params['kj_pay_money'],
                'pay_icon' => $params['pay_icon'],
                'status' => $params['status'],
                'order_num' => $params['order_num'],
                'bz' => $params['bz'],
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
     * @date 2024/08/29 02:06
     */
    public static function edit(array $params): bool
    {
        Db::startTrans();
        try {
            PayTypes::where('id', $params['id'])->update([
                'name' => $params['name'],
                'is_tj' => $params['is_tj'],
                'js_bl' => $params['js_bl'],
                'pay_td' => $params['pay_td'],
                'pay_type' => $params['pay_type'],
                'sfskjk' => $params['sfskjk'],
                'bzlx' => $params['bzlx'],
                'xylx' => $params['xylx'],
                'low_cz_money' => $params['low_cz_money'],
                'top_cz_money' => $params['top_cz_money'],
                'cz_money_type' => $params['cz_money_type'],
                'kj_pay_money' => $params['kj_pay_money'],
                'pay_icon' => $params['pay_icon'],
                'status' => $params['status'],
                'order_num' => $params['order_num'],
                'bz' => $params['bz'],
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
     * @date 2024/08/29 02:06
     */
    public static function delete(array $params): bool
    {
        return PayTypes::destroy($params['id']);
    }


    /**
     * @notes 获取详情
     * @param $params
     * @return array
     * @author likeadmin
     * @date 2024/08/29 02:06
     */
    public static function detail($params): array
    {
        return PayTypes::findOrEmpty($params['id'])->toArray();
    }
}