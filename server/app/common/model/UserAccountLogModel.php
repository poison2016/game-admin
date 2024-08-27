<?php

namespace app\common\model;

class UserAccountLogModel extends BaseModel
{
    protected $table = 'la_user_account_log';

    public static function insetLog($params): UserAccountLogModel|\think\Model
    {
       return self::create($params);
    }



}