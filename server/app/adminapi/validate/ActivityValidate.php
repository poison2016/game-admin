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
 * Activity验证器
 * Class ActivityValidate
 * @package app\adminapi\validate
 */
class ActivityValidate extends BaseValidate
{

     /**
      * 设置校验规则
      * @var string[]
      */
    protected $rule = [
        'id' => 'require',
        'name' => 'require',
        'liushuibeishu' => 'require',
        'sqrk' => 'require',
        'hd_status' => 'require',
        'zs_start_time' => 'require',
        'zs_end_time' => 'require',
        'activity_start_time' => 'require',
        'activity_end_time' => 'require',
        'is_sq_money' => 'require',
        'order_num' => 'require',
    ];


    /**
     * 参数描述
     * @var string[]
     */
    protected $field = [
        'id' => 'id',
        'name' => '活动名称',
        'liushuibeishu' => '流水倍数',
        'sqrk' => '申请入口',
        'hd_status' => '长期有效',
        'zs_start_time' => '展示开始时间',
        'zs_end_time' => '展示结束时间',
        'activity_start_time' => '活动开始时间',
        'activity_end_time' => '活动结束时间',
        'is_sq_money' => '申请金额',
        'order_num' => '排序',
    ];


    /**
     * @notes 添加场景
     * @return ActivityValidate
     * @author likeadmin
     * @date 2024/08/28 02:42
     */
    public function sceneAdd()
    {
        return $this->only(['name','liushuibeishu','sqrk','hd_status','zs_start_time','zs_end_time','activity_start_time','activity_end_time','is_sq_money','order_num']);
    }


    /**
     * @notes 编辑场景
     * @return ActivityValidate
     * @author likeadmin
     * @date 2024/08/28 02:42
     */
    public function sceneEdit()
    {
        return $this->only(['id','name','liushuibeishu','sqrk','hd_status','zs_start_time','zs_end_time','activity_start_time','activity_end_time','is_sq_money','order_num']);
    }


    /**
     * @notes 删除场景
     * @return ActivityValidate
     * @author likeadmin
     * @date 2024/08/28 02:42
     */
    public function sceneDelete()
    {
        return $this->only(['id']);
    }


    /**
     * @notes 详情场景
     * @return ActivityValidate
     * @author likeadmin
     * @date 2024/08/28 02:42
     */
    public function sceneDetail()
    {
        return $this->only(['id']);
    }

}