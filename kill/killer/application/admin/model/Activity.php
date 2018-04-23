<?php

namespace app\admin\model;

use think\Model;

class Activity extends Model
{
    // 表名
    protected $name = 'activity';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    
    // 追加属性
    protected $append = [

    ];
    

    







    public function cafecube()
    {
        return $this->belongsTo('Cafecube', 'cafecube_id', 'id', [], 'LEFT')->setEagerlyType(0);
    }


    public function play()
    {
        return $this->belongsTo('Play', 'play_id', 'id', [], 'LEFT')->setEagerlyType(0);
    }


    public function user()
    {
        return $this->belongsTo('User', 'user_ids', 'id', [], 'LEFT')->setEagerlyType(0);
    }
}
