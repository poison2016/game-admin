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
use app\adminapi\lists\DlTxLists;
use app\adminapi\logic\DlTxLogic;
use app\adminapi\validate\DlTxValidate;


/**
 * DlTx控制器
 * Class DlTxController
 * @package app\adminapi\controller
 */
class DlTxController extends BaseAdminController
{


    /**
     * @notes 获取列表
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/28 01:26
     */
    public function lists()
    {
        return $this->dataLists(new DlTxLists());
    }


    /**
     * @notes 添加
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/28 01:26
     */
    public function add()
    {
        $params = (new DlTxValidate())->post()->goCheck('add');
        $result = DlTxLogic::add($params);
        if (true === $result) {
            return $this->success('添加成功', [], 1, 1);
        }
        return $this->fail(DlTxLogic::getError());
    }


    /**
     * @notes 编辑
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/28 01:26
     */
    public function edit()
    {
        $params = (new DlTxValidate())->post()->goCheck('edit');
        $result = DlTxLogic::edit($params);
        if (true === $result) {
            return $this->success('编辑成功', [], 1, 1);
        }
        return $this->fail(DlTxLogic::getError());
    }


    /**
     * @notes 删除
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/28 01:26
     */
    public function delete()
    {
        $params = (new DlTxValidate())->post()->goCheck('delete');
        DlTxLogic::delete($params);
        return $this->success('删除成功', [], 1, 1);
    }


    /**
     * @notes 获取详情
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/28 01:26
     */
    public function detail()
    {
        $params = (new DlTxValidate())->goCheck('detail');
        $result = DlTxLogic::detail($params);
        return $this->data($result);
    }


}