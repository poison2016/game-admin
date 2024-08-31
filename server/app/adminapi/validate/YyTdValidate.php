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
 * YyTd验证器
 * Class YyTdValidate
 * @package app\adminapi\validate
 */
class YyTdValidate extends BaseValidate
{

     /**
      * 设置校验规则
      * @var string[]
      */
    protected $rule = [
        'id' => 'require',
        'qkfs_id' => 'require',
        'td_name' => 'require',
        'td_code' => 'require',
    ];


    /**
     * 参数描述
     * @var string[]
     */
    protected $field = [
        'id' => 'id',
        'qkfs_id' => '取款方式类型',
        'td_name' => '通道名称',
        'td_code' => '通道编码',
    ];


    /**
     * @notes 添加场景
     * @return YyTdValidate
     * @author likeadmin
     * @date 2024/08/29 22:03
     */
    public function sceneAdd()
    {
        return $this->only(['qkfs_id','td_name','td_code']);
    }


    /**
     * @notes 编辑场景
     * @return YyTdValidate
     * @author likeadmin
     * @date 2024/08/29 22:03
     */
    public function sceneEdit()
    {
        return $this->only(['id','qkfs_id','td_name','td_code']);
    }


    /**
     * @notes 删除场景
     * @return YyTdValidate
     * @author likeadmin
     * @date 2024/08/29 22:03
     */
    public function sceneDelete()
    {
        return $this->only(['id']);
    }


    /**
     * @notes 详情场景
     * @return YyTdValidate
     * @author likeadmin
     * @date 2024/08/29 22:03
     */
    public function sceneDetail()
    {
        return $this->only(['id']);
    }

}