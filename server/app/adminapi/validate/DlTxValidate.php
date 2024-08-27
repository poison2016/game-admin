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
 * DlTx验证器
 * Class DlTxValidate
 * @package app\adminapi\validate
 */
class DlTxValidate extends BaseValidate
{

     /**
      * 设置校验规则
      * @var string[]
      */
    protected $rule = [
        'id' => 'require',
        'money' => 'require',
        'type' => 'require',
        'status' => 'require',
        'address' => 'require',
    ];


    /**
     * 参数描述
     * @var string[]
     */
    protected $field = [
        'id' => 'id',
        'money' => '金额',
        'type' => '类型',
        'status' => '提现状态',
        'address' => '地址',
    ];


    /**
     * @notes 添加场景
     * @return DlTxValidate
     * @author likeadmin
     * @date 2024/08/28 01:26
     */
    public function sceneAdd()
    {
        return $this->only(['money','type','status','address']);
    }


    /**
     * @notes 编辑场景
     * @return DlTxValidate
     * @author likeadmin
     * @date 2024/08/28 01:26
     */
    public function sceneEdit()
    {
        return $this->only(['id','money','type','status','address']);
    }


    /**
     * @notes 删除场景
     * @return DlTxValidate
     * @author likeadmin
     * @date 2024/08/28 01:26
     */
    public function sceneDelete()
    {
        return $this->only(['id']);
    }


    /**
     * @notes 详情场景
     * @return DlTxValidate
     * @author likeadmin
     * @date 2024/08/28 01:26
     */
    public function sceneDetail()
    {
        return $this->only(['id']);
    }

}