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
use app\adminapi\lists\UserLists;
use app\adminapi\logic\UserLogic;
use app\adminapi\service\DsfService;
use app\adminapi\validate\UserValidate;
use app\common\model\YbPlatType;
use think\facade\Db;


/**
 * User控制器
 * Class UserController
 * @package app\adminapi\controller
 */
class UserController extends BaseAdminController
{


    /**
     * @notes 获取列表
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/22 00:03
     */
    public function lists()
    {
        return $this->dataLists(new UserLists());
    }

    public function getDl(){
        $data = Db::name('user')->where('is_agent',1)->where('is_disable',0)->select()->toArray();
        return $this->success('获取公馆',$data);
    }


    /**
     * @notes 添加
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/22 00:03
     */
    public function add()
    {
        $params = (new UserValidate())->post()->goCheck('add');
        $result = UserLogic::add($params);
        if (true === $result) {
            return $this->success('添加成功', [], 1, 1);
        }
        return $this->fail(UserLogic::getError());
    }

    public function getUserGameMoney(){
        $id = input('id');
        $userName  = input('user_name');
        $type = YbPlatType::getUserGameData($id);
        if(!$type){
            return $this->fail('游戏类型获取失败');
        }
        $data = [
            'playerId'=>$userName,
            'platType'=>$type,
            'currency'=>'CNY'
        ];
        $ret = (new DsfService())->sendUrl('/api/server/balance',$data);
        if(!$ret){
            return $this->fail('获取信息失败');
        }
        if($ret['code'] != 10000){
            return $this->fail($ret['msg']);
        }
        return $this->success('获取成功',$ret);
    }

    public function edzh(){
        $inset = $data = [
            'playerId'=>input('user_name'),
            'platType'=>input('plat_type'),
            'currency'=>'CNY',
            'type'=>input('type'),
            'amount'=>input('money'),
            'orderId'=>$this->generateRandomString(),
            'user_id'=>input('user_id'),
        ];
        $inset['create_time'] = time();
        Db::name('user_game_money_log')->insert($inset);
        $ret = (new DsfService())->sendUrl('/api/server/transfer',$data);
        if(!$ret){
            return $this->fail('操作失败');
        }
        if($ret['code'] != 10000){
            return $this->fail($ret['msg']);
        }
        return $this->success('操作成功');

    }

    function generateRandomString(): string
    {
        // 生成随机长度在 16 到 32 之间
        $length = 32;

        // 可用字符集：小写字母和数字
        $characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        $charactersLength = strlen($characters);
        $randomString = '';

        // 根据随机长度生成字符串
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }

        return $randomString;
    }




    /**
     * @notes 编辑
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/22 00:03
     */
    public function edit()
    {
        $params = (new UserValidate())->post()->goCheck('edit');
        $result = UserLogic::edit($params);
        if (true === $result) {
            return $this->success('编辑成功', [], 1, 1);
        }
        return $this->fail(UserLogic::getError());
    }


    /**
     * @notes 删除
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/22 00:03
     */
    public function delete()
    {
        $params = (new UserValidate())->post()->goCheck('delete');
        UserLogic::delete($params);
        return $this->success('删除成功', [], 1, 1);
    }

    public function apiUserZD(){
        Db::name('user')->whereIn('id',input('id'))->update(['is_agent'=>1]);
        foreach (input('id') as $v){
            $res = Db::name('user')->where('id',$v)->find();
            Db::table('dl_admin')->insert([
                'root'=>1,
                'name'=>$res['nickname'],
                'avatar'=>$res['avatar'],
                'account'=>$res['account'],
                'password'=>$res['password'],
                'multipoint_login'=>0,
                'disable'=>0,
                'create_time'=>time(),
                'update_time'=>time(),
                'user_id'=>$v,
        ]);
        }

        return $this->success('转代理成功',[],1,1);
    }


    /**
     * @notes 获取详情
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/22 00:03
     */
    public function detail()
    {
        $params = (new UserValidate())->goCheck('detail');
        $result = UserLogic::detail($params);
        return $this->data($result);
    }


}