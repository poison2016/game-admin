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
 * User验证器
 * Class UserValidate
 * @package app\adminapi\validate
 */
class UserValidate extends BaseValidate
{

     /**
      * 设置校验规则
      * @var string[]
      */
    protected $rule = [
        'id' => 'require',
        'sn' => 'require',
        'nickname' => 'require',
        'account' => 'require',
        'password' => 'require',
        'channel' => 'require',
        'is_disable' => 'require',
        'is_new_user' => 'require',
        'frozen_balance' => 'require',
        'level_id' => 'require',
        'login_status' => 'require',
        'agent_id' => 'require',
    ];


    /**
     * 参数描述
     * @var string[]
     */
    protected $field = [
        'id' => 'id',
        'sn' => '编号',
        'nickname' => '用户昵称',
        'account' => '用户账号',
        'password' => '用户密码',
        'channel' => '注册渠道',
        'is_disable' => '是否禁用',
        'is_new_user' => '是否是新注册用户:',
        'frozen_balance' => '锁定余额',
        'level_id' => 'VIP等级',
        'login_status' => '登录状态',
        'agent_id' => '代理id',
    ];


    /**
     * @notes 添加场景
     * @return UserValidate
     * @author likeadmin
     * @date 2024/08/22 00:03
     */
    public function sceneAdd()
    {
        return $this->only(['sn','nickname','account','password','channel','is_disable','is_new_user','frozen_balance','level_id','login_status','agent_id']);
    }


    /**
     * @notes 编辑场景
     * @return UserValidate
     * @author likeadmin
     * @date 2024/08/22 00:03
     */
    public function sceneEdit()
    {
        return $this->only(['id','sn','nickname','account','password','channel','is_disable','is_new_user','frozen_balance','level_id','login_status','agent_id']);
    }


    /**
     * @notes 删除场景
     * @return UserValidate
     * @author likeadmin
     * @date 2024/08/22 00:03
     */
    public function sceneDelete()
    {
        return $this->only(['id']);
    }


    /**
     * @notes 详情场景
     * @return UserValidate
     * @author likeadmin
     * @date 2024/08/22 00:03
     */
    public function sceneDetail()
    {
        return $this->only(['id']);
    }

}