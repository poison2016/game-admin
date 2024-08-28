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
use app\adminapi\lists\UserVipSetLists;
use app\adminapi\logic\UserVipSetLogic;
use app\adminapi\validate\UserVipSetValidate;


/**
 * UserVipSet控制器
 * Class UserVipSetController
 * @package app\adminapi\controller
 */
class UserVipSetController extends BaseAdminController
{


    /**
     * @notes 获取列表
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/28 23:10
     */
    public function lists()
    {
        return $this->dataLists(new UserVipSetLists());
    }


    /**
     * @notes 添加
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/28 23:10
     */
    public function add()
    {
        $params = (new UserVipSetValidate())->post()->goCheck('add');
        $result = UserVipSetLogic::add($params);
        if (true === $result) {
            return $this->success('添加成功', [], 1, 1);
        }
        return $this->fail(UserVipSetLogic::getError());
    }


    /**
     * @notes 编辑
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/28 23:10
     */
    public function edit()
    {
        $params = (new UserVipSetValidate())->post()->goCheck('edit');
        $result = UserVipSetLogic::edit($params);
        if (true === $result) {
            return $this->success('编辑成功', [], 1, 1);
        }
        return $this->fail(UserVipSetLogic::getError());
    }


    /**
     * @notes 删除
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/28 23:10
     */
    public function delete()
    {
        $params = (new UserVipSetValidate())->post()->goCheck('delete');
        UserVipSetLogic::delete($params);
        return $this->success('删除成功', [], 1, 1);
    }


    /**
     * @notes 获取详情
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/28 23:10
     */
    public function detail()
    {
        $params = (new UserVipSetValidate())->goCheck('detail');
        $result = UserVipSetLogic::detail($params);
        return $this->data($result);
    }


}