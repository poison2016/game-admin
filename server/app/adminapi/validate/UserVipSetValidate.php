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
 * UserVipSet验证器
 * Class UserVipSetValidate
 * @package app\adminapi\validate
 */
class UserVipSetValidate extends BaseValidate
{

     /**
      * 设置校验规则
      * @var string[]
      */
    protected $rule = [
        'id' => 'require',
        'vip_name' => 'require',
    ];


    /**
     * 参数描述
     * @var string[]
     */
    protected $field = [
        'id' => 'id',
        'vip_name' => '会员等级名称',
    ];


    /**
     * @notes 添加场景
     * @return UserVipSetValidate
     * @author likeadmin
     * @date 2024/08/28 23:10
     */
    public function sceneAdd()
    {
        return $this->only(['vip_name']);
    }


    /**
     * @notes 编辑场景
     * @return UserVipSetValidate
     * @author likeadmin
     * @date 2024/08/28 23:10
     */
    public function sceneEdit()
    {
        return $this->only(['id','vip_name']);
    }


    /**
     * @notes 删除场景
     * @return UserVipSetValidate
     * @author likeadmin
     * @date 2024/08/28 23:10
     */
    public function sceneDelete()
    {
        return $this->only(['id']);
    }


    /**
     * @notes 详情场景
     * @return UserVipSetValidate
     * @author likeadmin
     * @date 2024/08/28 23:10
     */
    public function sceneDetail()
    {
        return $this->only(['id']);
    }

}