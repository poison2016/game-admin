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


namespace app\adminapi\controller;


use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\YyVipFdLists;
use app\adminapi\logic\YyVipFdLogic;
use app\adminapi\validate\YyVipFdValidate;


/**
 * YyVipFd控制器
 * Class YyVipFdController
 * @package app\adminapi\controller
 */
class YyVipFdController extends BaseAdminController
{


    /**
     * @notes 获取列表
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/29 23:12
     */
    public function lists()
    {
        return $this->dataLists(new YyVipFdLists());
    }


    /**
     * @notes 添加
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/29 23:12
     */
    public function add()
    {
        $params = (new YyVipFdValidate())->post()->goCheck('add');
        $result = YyVipFdLogic::add($params);
        if (true === $result) {
            return $this->success('添加成功', [], 1, 1);
        }
        return $this->fail(YyVipFdLogic::getError());
    }


    /**
     * @notes 编辑
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/29 23:12
     */
    public function edit()
    {
        $params = (new YyVipFdValidate())->post()->goCheck('edit');
        $result = YyVipFdLogic::edit($params);
        if (true === $result) {
            return $this->success('编辑成功', [], 1, 1);
        }
        return $this->fail(YyVipFdLogic::getError());
    }


    /**
     * @notes 删除
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/29 23:12
     */
    public function delete()
    {
        $params = (new YyVipFdValidate())->post()->goCheck('delete');
        YyVipFdLogic::delete($params);
        return $this->success('删除成功', [], 1, 1);
    }


    /**
     * @notes 获取详情
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/29 23:12
     */
    public function detail()
    {
        $params = (new YyVipFdValidate())->goCheck('detail');
        $result = YyVipFdLogic::detail($params);
        return $this->data($result);
    }


}