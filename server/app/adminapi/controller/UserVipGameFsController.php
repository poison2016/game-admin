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
use app\adminapi\lists\UserVipGameFsLists;
use app\adminapi\logic\UserVipGameFsLogic;
use app\adminapi\validate\UserVipGameFsValidate;


/**
 * UserVipGameFs控制器
 * Class UserVipGameFsController
 * @package app\adminapi\controller
 */
class UserVipGameFsController extends BaseAdminController
{


    /**
     * @notes 获取列表
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/29 01:11
     */
    public function lists()
    {
        return $this->dataLists(new UserVipGameFsLists());
    }


    /**
     * @notes 添加
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/29 01:11
     */
    public function add()
    {
        $params = (new UserVipGameFsValidate())->post()->goCheck('add');
        $result = UserVipGameFsLogic::add($params);
        if (true === $result) {
            return $this->success('添加成功', [], 1, 1);
        }
        return $this->fail(UserVipGameFsLogic::getError());
    }


    /**
     * @notes 编辑
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/29 01:11
     */
    public function edit()
    {
        $params = (new UserVipGameFsValidate())->post()->goCheck('edit');
        $result = UserVipGameFsLogic::edit($params);
        if (true === $result) {
            return $this->success('编辑成功', [], 1, 1);
        }
        return $this->fail(UserVipGameFsLogic::getError());
    }


    /**
     * @notes 删除
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/29 01:11
     */
    public function delete()
    {
        $params = (new UserVipGameFsValidate())->post()->goCheck('delete');
        UserVipGameFsLogic::delete($params);
        return $this->success('删除成功', [], 1, 1);
    }


    /**
     * @notes 获取详情
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/29 01:11
     */
    public function detail()
    {
        $params = (new UserVipGameFsValidate())->goCheck('detail');
        $result = UserVipGameFsLogic::detail($params);
        return $this->data($result);
    }


}