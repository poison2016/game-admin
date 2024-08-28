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
 * PaySetDsf验证器
 * Class PaySetDsfValidate
 * @package app\adminapi\validate
 */
class PaySetDsfValidate extends BaseValidate
{

     /**
      * 设置校验规则
      * @var string[]
      */
    protected $rule = [
        'id' => 'require',
        'name' => 'require',
        'low_name' => 'require',
        'shop_id' => 'require',
        'shop_password' => 'require',
        'status' => 'require',
        'dsf_url' => 'require',
        'ck_order_message_address' => 'require',
        'qk_order_message_address' => 'require',
    ];


    /**
     * 参数描述
     * @var string[]
     */
    protected $field = [
        'id' => 'id',
        'name' => '支付接口名称',
        'low_name' => '支付简称',
        'shop_id' => '商户ID',
        'shop_password' => '商户秘钥',
        'status' => '状态',
        'dsf_url' => '第三方链接',
        'ck_order_message_address' => '存款订单变动通知地址',
        'qk_order_message_address' => '取款订单变动通知地址',
    ];


    /**
     * @notes 添加场景
     * @return PaySetDsfValidate
     * @author likeadmin
     * @date 2024/08/29 02:32
     */
    public function sceneAdd()
    {
        return $this->only(['name','low_name','shop_id','shop_password','status','dsf_url','ck_order_message_address','qk_order_message_address']);
    }


    /**
     * @notes 编辑场景
     * @return PaySetDsfValidate
     * @author likeadmin
     * @date 2024/08/29 02:32
     */
    public function sceneEdit()
    {
        return $this->only(['id','name','low_name','shop_id','shop_password','status','dsf_url','ck_order_message_address','qk_order_message_address']);
    }


    /**
     * @notes 删除场景
     * @return PaySetDsfValidate
     * @author likeadmin
     * @date 2024/08/29 02:32
     */
    public function sceneDelete()
    {
        return $this->only(['id']);
    }


    /**
     * @notes 详情场景
     * @return PaySetDsfValidate
     * @author likeadmin
     * @date 2024/08/29 02:32
     */
    public function sceneDetail()
    {
        return $this->only(['id']);
    }

}