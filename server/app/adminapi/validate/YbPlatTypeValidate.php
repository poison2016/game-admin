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
 * YbPlatType验证器
 * Class YbPlatTypeValidate
 * @package app\adminapi\validate
 */
class YbPlatTypeValidate extends BaseValidate
{

     /**
      * 设置校验规则
      * @var string[]
      */
    protected $rule = [
        'id' => 'require',
        'plat_type' => 'require',
        'game_title' => 'require',
        'is_open' => 'require',
        'is_hot' => 'require',
        'is_new' => 'require',
        'img_url' => 'require',
    ];


    /**
     * 参数描述
     * @var string[]
     */
    protected $field = [
        'id' => 'id',
        'plat_type' => '平台类型',
        'game_title' => '显示名称',
        'is_open' => '平台状态 0-关闭 1-开启',
        'is_hot' => '是否热门',
        'is_new' => '是否最新',
        'img_url' => '游戏图片',
    ];


    /**
     * @notes 添加场景
     * @return YbPlatTypeValidate
     * @author likeadmin
     * @date 2024/08/21 23:29
     */
    public function sceneAdd()
    {
        return $this->only(['plat_type','game_title','is_open','is_hot','is_new','img_url']);
    }


    /**
     * @notes 编辑场景
     * @return YbPlatTypeValidate
     * @author likeadmin
     * @date 2024/08/21 23:29
     */
    public function sceneEdit()
    {
        return $this->only(['id','plat_type','game_title','is_open','is_hot','is_new','img_url']);
    }


    /**
     * @notes 删除场景
     * @return YbPlatTypeValidate
     * @author likeadmin
     * @date 2024/08/21 23:29
     */
    public function sceneDelete()
    {
        return $this->only(['id']);
    }


    /**
     * @notes 详情场景
     * @return YbPlatTypeValidate
     * @author likeadmin
     * @date 2024/08/21 23:29
     */
    public function sceneDetail()
    {
        return $this->only(['id']);
    }

}