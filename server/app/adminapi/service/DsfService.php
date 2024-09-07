<?php

namespace app\adminapi\service;

class DsfService
{

    protected $api = 'https://ap.api-bet.net';
    protected $sn = 'p7d';
    protected $key = '93544732n3s557t4GW5225565FSAR36l';

    public function sign()
    {
        $random = self::generateRandomString();
        $header = [
            'sion:'. md5($random . $this->sn . $this->key),
            'random:'.$random,
            'sn:'.$this->sn,
            'Content-Type:application/json',
        ];
        return $header;
    }

    function generateRandomString(): string
    {
        // 生成随机长度在 16 到 32 之间
        $length = rand(16, 32);

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
     * @param $url
     * @param $data
     * @return array|mixed
     */
    function sendUrl($url,$data)
    {
        return self::sendPostRequest($this->api.$url,$data,self::sign());
    }

    /**
     * 通用 POST 请求
     * @param string $url 请求的 URL
     * @param array|string $postData 发送的 POST 数据
     * @param array $headers 自定义请求头 (可选)
     */
    function sendPostRequest($url, $postData, $headers = [])
    {
        // 初始化 curl
        $ch = curl_init();

        // 判断传入的 POST 数据格式
        if (is_array($postData)) {
            $postData = http_build_query($postData); // 将数组格式化为 URL 编码字符串
        }

        // 设置 curl 选项
        curl_setopt($ch, CURLOPT_URL, $url);                 // 设置请求 URL
        curl_setopt($ch, CURLOPT_POST, 1);                   // 设置为 POST 请求
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);      // 传递 POST 数据
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);       // 将结果返回为字符串
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);                // 设置超时时间
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);      // 跳过 SSL 证书验证
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);      // 跳过 SSL 主机验证

        // 如果有自定义的 headers，就添加
        if (!empty($headers)) {
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        }

        // 执行请求并获取结果
        $result = curl_exec($ch);
        // 获取错误信息
        if (curl_errno($ch)) {
            $error = curl_error($ch);
            curl_close($ch);
            return []; // 请求失败，返回 false
        }

        // 关闭 curl
        curl_close($ch);

        // 返回结果
        if($result){
            return json_decode($result,true);
        }
        return [];
    }

}