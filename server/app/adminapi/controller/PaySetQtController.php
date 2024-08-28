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
use app\adminapi\lists\PaySetQtLists;
use app\adminapi\logic\PaySetQtLogic;
use app\adminapi\validate\PaySetQtValidate;


/**
 * PaySetQt控制器
 * Class PaySetQtController
 * @package app\adminapi\controller
 */
class PaySetQtController extends BaseAdminController
{


    /**
     * @notes 获取列表
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/29 02:27
     */
    public function lists()
    {
        return $this->dataLists(new PaySetQtLists());
    }


    /**
     * @notes 添加
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/29 02:27
     */
    public function add()
    {
        $params = (new PaySetQtValidate())->post()->goCheck('add');
        $result = PaySetQtLogic::add($params);
        if (true === $result) {
            return $this->success('添加成功', [], 1, 1);
        }
        return $this->fail(PaySetQtLogic::getError());
    }


    /**
     * @notes 编辑
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/29 02:27
     */
    public function edit()
    {
        $params = (new PaySetQtValidate())->post()->goCheck('edit');
        $result = PaySetQtLogic::edit($params);
        if (true === $result) {
            return $this->success('编辑成功', [], 1, 1);
        }
        return $this->fail(PaySetQtLogic::getError());
    }


    /**
     * @notes 删除
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/29 02:27
     */
    public function delete()
    {
        $params = (new PaySetQtValidate())->post()->goCheck('delete');
        PaySetQtLogic::delete($params);
        return $this->success('删除成功', [], 1, 1);
    }


    /**
     * @notes 获取详情
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/29 02:27
     */
    public function detail()
    {
        $params = (new PaySetQtValidate())->goCheck('detail');
        $result = PaySetQtLogic::detail($params);
        return $this->data($result);
    }


}