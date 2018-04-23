<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/4/19 0019
 * Time: 下午 15:39
 */

namespace app\api\controller;


use app\admin\command\Api;

class Decode extends Api
{
    /**
     * 设置权限 *为有所有权限
     */
    protected $noNeedLogin = ['*'];
    protected $noNeedRight = ['*'];
    /**
     * 解密用户敏感数据
     *
     * @param encryptedData 明文,加密数据
     * @param iv            加密算法的初始向量
     * @param code          用户允许登录后，回调内容会带上 code（有效期五分钟），开发者需要将 code 发送到开发者服务器后台，使用code 换取 session_key api，将 code 换成 openid 和 session_key
     * @return
     */
    public function userinfo()
    {
//        include_once "wxBizDataCrypt.php";
        function httpGet($url)
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

        $code = $_GET['code'];
//        $iv = $_GET['iv'];
//        $encryptedData = $_GET['encryptedData'];
        $appid = 'wxe76940a82525475e';//小程序唯一标识   (在微信小程序管理后台获取)
        $appsecret = 'c54cfb81eed343ad79656496105ae132';//小程序的 app secret (在微信小程序管理后台获取)
        $grant_type = "authorization_code"; //授权（必填）

        $params = "appid=" . $appid . "&secret=" . $appsecret . "&js_code=" . $code . "&grant_type=" . $grant_type;
        $url = "https://api.weixin.qq.com/sns/jscode2session?" . $params;

        $res = json_decode(httpGet($url), true);
        //json_decode不加参数true，转成的就不是array,而是对象。 下面的的取值会报错  Fatal error: Cannot use object of type stdClass as array in
        $sessionKey = $res['session_key'];//取出json里对应的值
        //以上正确无问题

        //以下是测试部分,不执行
//        $pc = new \WXBizDataCrypt($appid,$sessionKey);
//        $errCode = $pc->decryptData($encryptedData, $iv, $data);
//        var_dump($pc);
//
//        if ($errCode == 0) {
//            print($data . "\n");
//        } else {
//            print($errCode . "\n");
//        }
    }
}