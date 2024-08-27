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
 * ActivityApply验证器
 * Class ActivityApplyValidate
 * @package app\adminapi\validate
 */
class ActivityApplyValidate extends BaseValidate
{

     /**
      * 设置校验规则
      * @var string[]
      */
    protected $rule = [
        'id' => 'require',
        'activity_name' => 'require',
        'activity_id' => 'require',
        'user_id' => 'require',
        'account' => 'require',
        'money' => 'require',
        'status' => 'require',
    ];


    /**
     * 参数描述
     * @var string[]
     */
    protected $field = [
        'id' => 'id',
        'activity_name' => '活动名称',
        'activity_id' => '活动id',
        'user_id' => '申请人id',
        'account' => '申请人账号',
        'money' => '申请彩金',
        'status' => '审核状态',
    ];


    /**
     * @notes 添加场景
     * @return ActivityApplyValidate
     * @author likeadmin
     * @date 2024/08/28 02:45
     */
    public function sceneAdd()
    {
        return $this->only(['activity_name','activity_id','user_id','account','money','status']);
    }


    /**
     * @notes 编辑场景
     * @return ActivityApplyValidate
     * @author likeadmin
     * @date 2024/08/28 02:45
     */
    public function sceneEdit()
    {
        return $this->only(['id','activity_name','activity_id','user_id','account','money','status']);
    }


    /**
     * @notes 删除场景
     * @return ActivityApplyValidate
     * @author likeadmin
     * @date 2024/08/28 02:45
     */
    public function sceneDelete()
    {
        return $this->only(['id']);
    }


    /**
     * @notes 详情场景
     * @return ActivityApplyValidate
     * @author likeadmin
     * @date 2024/08/28 02:45
     */
    public function sceneDetail()
    {
        return $this->only(['id']);
    }

}