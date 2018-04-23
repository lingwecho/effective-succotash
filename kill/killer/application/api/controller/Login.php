<?php
namespace app\api\controller;


use app\common\controller\Api;
use think\Db;
use think\Request;

/*
 *  登录接口
 */
class Login extends Api
{
    //设置权限
    protected $noNeedLogin = ['*'];
    protected $noNeedRight = ['*'];

    public function login()
    {
        $code = Request::instance()->get('code');
//        echo $code.'这是code值';
        //微信接口,此处用获得的code获取openid,session_key信息
        $url = "https://api.weixin.qq.com/sns/jscode2session?appid=wxe76940a82525475e&secret=c54cfb81eed343ad79656496105ae132&js_code=$code&grant_type=authorization_code";
        //通过curl方法根据code获取openid等信息
        function getcurl($url)
        {
            $curl = curl_init();
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($curl, CURLOPT_TIMEOUT, 500);
            curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
            curl_setopt($curl, CURLOPT_URL, $url);
            $res = curl_exec($curl);
            curl_close($curl);
            return $res;
        }
        //code换取openid
        $res = getcurl($url);
        $res = json_decode($res,true);
        //获取用户列表,查看是否有此openid
        $openid = $res['openid'];
//        echo '这是openid:'.$openid;
        $user = Db::name('user')->where('openid',$openid)->find();
        if(!$user){
//            Db::table('kill_user')->where('id',1)->setField('openid',$openid);
            $data = [
                'openid' => $openid
            ];
            Db::name('user')->insert($data);
            echo '插入openid成功';
        }else{
            echo '登录成功';
        }
    }
}