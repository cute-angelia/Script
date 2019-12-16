/**
* @supported E54765DF5F47
* @tag 帮小孩 app
* @host webapi.91sst.cn
*/
var body = $response.body.replace(/"IsVip":0/g, '"IsVip":1');
$done({ body });