/**
 * 书签管理工具
 * raindrop.io
 * ^https://api.raindrop.io/v1/\w+
 */
var body = $response.body.replace(/"pro":false/g, '"pro":true');
$done({ body });