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
 * PayTypes验证器
 * Class PayTypesValidate
 * @package app\adminapi\validate
 */
class PayTypesValidate extends BaseValidate
{

     /**
      * 设置校验规则
      * @var string[]
      */
    protected $rule = [
        'id' => 'require',
        'name' => 'require',
        'is_tj' => 'require',
        'js_bl' => 'require',
        'low_cz_money' => 'require',
        'top_cz_money' => 'require',
    ];


    /**
     * 参数描述
     * @var string[]
     */
    protected $field = [
        'id' => 'id',
        'name' => '名称',
        'is_tj' => '是否推荐 1-推荐 0-不推荐',
        'js_bl' => '加送比例',
        'low_cz_money' => '最低充值金额',
        'top_cz_money' => '最高充值金额',
    ];


    /**
     * @notes 添加场景
     * @return PayTypesValidate
     * @author likeadmin
     * @date 2024/08/29 02:06
     */
    public function sceneAdd()
    {
        return $this->only(['name','is_tj','js_bl','low_cz_money','top_cz_money']);
    }


    /**
     * @notes 编辑场景
     * @return PayTypesValidate
     * @author likeadmin
     * @date 2024/08/29 02:06
     */
    public function sceneEdit()
    {
        return $this->only(['id','name','is_tj','js_bl','low_cz_money','top_cz_money']);
    }


    /**
     * @notes 删除场景
     * @return PayTypesValidate
     * @author likeadmin
     * @date 2024/08/29 02:06
     */
    public function sceneDelete()
    {
        return $this->only(['id']);
    }


    /**
     * @notes 详情场景
     * @return PayTypesValidate
     * @author likeadmin
     * @date 2024/08/29 02:06
     */
    public function sceneDetail()
    {
        return $this->only(['id']);
    }

}