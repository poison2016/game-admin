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
 * ActivityType验证器
 * Class ActivityTypeValidate
 * @package app\adminapi\validate
 */
class ActivityTypeValidate extends BaseValidate
{

     /**
      * 设置校验规则
      * @var string[]
      */
    protected $rule = [
        'id' => 'require',
        'name' => 'require',
        'status' => 'require',
    ];


    /**
     * 参数描述
     * @var string[]
     */
    protected $field = [
        'id' => 'id',
        'name' => '活动分类名称',
        'status' => '状态',
    ];


    /**
     * @notes 添加场景
     * @return ActivityTypeValidate
     * @author likeadmin
     * @date 2024/08/28 02:35
     */
    public function sceneAdd()
    {
        return $this->only(['name','status']);
    }


    /**
     * @notes 编辑场景
     * @return ActivityTypeValidate
     * @author likeadmin
     * @date 2024/08/28 02:35
     */
    public function sceneEdit()
    {
        return $this->only(['id','name','status']);
    }


    /**
     * @notes 删除场景
     * @return ActivityTypeValidate
     * @author likeadmin
     * @date 2024/08/28 02:35
     */
    public function sceneDelete()
    {
        return $this->only(['id']);
    }


    /**
     * @notes 详情场景
     * @return ActivityTypeValidate
     * @author likeadmin
     * @date 2024/08/28 02:35
     */
    public function sceneDetail()
    {
        return $this->only(['id']);
    }

}