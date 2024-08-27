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

namespace app\common\model;


use app\common\model\BaseModel;



/**
 * UserName模型
 * Class UserName
 * @package app\common\model
 */
class UserName extends BaseModel
{
    
    protected $table = 'la_user';

    public static function getUserInfo($userId){
       return self::where('id',$userId)->findOrEmpty()->toArray();
    }

    /**获取用户余额
     * @param $userId
     * @return mixed
     */
    public static function getUserMoney($userId){
        return self::where('id',$userId)->value('user_money');
    }

    /**增加用户余额
     * @param $userId
     * @param $money
     * @return mixed
     */
    public static function setIncMoney($userId,$money){
        return self::where('id',$userId)->inc('user_money',$money)->update(['update_time'=>time()]);
    }

    /**降低用户余额
     * @param $userId
     * @param $money
     * @return mixed
     */
    public static function setDecMoney($userId,$money){
        return self::where('id',$userId)->dec('user_money',$money)->update(['update_time'=>time()]);
    }
    

    
}