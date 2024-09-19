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

namespace app\adminapi\validate;


use app\common\validate\BaseValidate;


/**
 * Tzjl验证器
 * Class TzjlValidate
 * @package app\adminapi\validate
 */
class TzjlValidate extends BaseValidate
{

     /**
      * 设置校验规则
      * @var string[]
      */
    protected $rule = [
        'id' => 'require',
        'user_id' => 'require',
        'plat_type' => 'require',
        'game_type' => 'require',
        'game_name' => 'require',
        'round' => 'require',
        'table' => 'require',
        'seat' => 'require',
        'bet_amount' => 'require',
        'vaild_amount' => 'require',
        'settled_amount' => 'require',
        'bet_content' => 'require',
        'status' => 'require',
        'game_order_id' => 'require',
        'bet_time' => 'require',
        'last_update_time' => 'require',
    ];


    /**
     * 参数描述
     * @var string[]
     */
    protected $field = [
        'id' => 'id',
        'user_id' => '玩家',
        'plat_type' => '游戏平台',
        'game_type' => '游戏类型',
        'game_name' => '游戏名称',
        'round' => '局号',
        'table' => '桌号',
        'seat' => '座号',
        'bet_amount' => '投注金额',
        'vaild_amount' => '有效投注金额',
        'settled_amount' => '输赢金额',
        'bet_content' => '投注内容',
        'status' => '状态',
        'game_order_id' => '订单号',
        'bet_time' => '创建时间',
        'last_update_time' => '订单更新时间',
    ];


    /**
     * @notes 添加场景
     * @return TzjlValidate
     * @author likeadmin
     * @date 2024/09/20 02:54
     */
    public function sceneAdd()
    {
        return $this->only(['user_id','plat_type','game_type','game_name','round','table','seat','bet_amount','vaild_amount','settled_amount','bet_content','status','game_order_id','bet_time','last_update_time']);
    }


    /**
     * @notes 编辑场景
     * @return TzjlValidate
     * @author likeadmin
     * @date 2024/09/20 02:54
     */
    public function sceneEdit()
    {
        return $this->only(['id','user_id','plat_type','game_type','game_name','round','table','seat','bet_amount','vaild_amount','settled_amount','bet_content','status','game_order_id','bet_time','last_update_time']);
    }


    /**
     * @notes 删除场景
     * @return TzjlValidate
     * @author likeadmin
     * @date 2024/09/20 02:54
     */
    public function sceneDelete()
    {
        return $this->only(['id']);
    }


    /**
     * @notes 详情场景
     * @return TzjlValidate
     * @author likeadmin
     * @date 2024/09/20 02:54
     */
    public function sceneDetail()
    {
        return $this->only(['id']);
    }

}