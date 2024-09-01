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
 * UserAccountLog验证器
 * Class UserAccountLogValidate
 * @package app\adminapi\validate
 */
class UserAccountLogValidate extends BaseValidate
{

     /**
      * 设置校验规则
      * @var string[]
      */
    protected $rule = [
        'id' => 'require',
        'sn' => 'require',
        'user_id' => 'require',
        'action' => 'require',
        'change_amount' => 'require',
        'left_amount' => 'require',
    ];


    /**
     * 参数描述
     * @var string[]
     */
    protected $field = [
        'id' => 'id',
        'sn' => '流水号',
        'user_id' => '用户账号',
        'action' => '动作',
        'change_amount' => '变动数量',
        'left_amount' => '变动后数量',
    ];


    /**
     * @notes 添加场景
     * @return UserAccountLogValidate
     * @author likeadmin
     * @date 2024/09/02 02:00
     */
    public function sceneAdd()
    {
        return $this->only(['sn','user_id','action','change_amount','left_amount']);
    }


    /**
     * @notes 编辑场景
     * @return UserAccountLogValidate
     * @author likeadmin
     * @date 2024/09/02 02:00
     */
    public function sceneEdit()
    {
        return $this->only(['id','sn','user_id','action','change_amount','left_amount']);
    }


    /**
     * @notes 删除场景
     * @return UserAccountLogValidate
     * @author likeadmin
     * @date 2024/09/02 02:00
     */
    public function sceneDelete()
    {
        return $this->only(['id']);
    }


    /**
     * @notes 详情场景
     * @return UserAccountLogValidate
     * @author likeadmin
     * @date 2024/09/02 02:00
     */
    public function sceneDetail()
    {
        return $this->only(['id']);
    }

}