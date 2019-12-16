/**
* @supported E54765DF5F47
* @tag 帮小孩 app
* @host webapi.91sst.cn
* @reg ^http://webapi.91sst.cn/v1/rat/EventHandle
*/
var body = $response.body.replace(/"IsVip":0/g, '"IsVip":1');
$done({ body });