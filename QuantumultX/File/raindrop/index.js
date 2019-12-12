/**
* @supported E54765DF5F47
* @tag 微信阅读
* @host api.raindrop.io
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const userConfig = '/v1/userConfig';
const stat = '/v1/stat';
const user = '/v1/user';

if (url.indexOf(vip) != -1) {
    if (obj.hasOwnProperty('user')) {
        if (obj.user.hasOwnProperty('pro')) {
            obj.user.pro = true;
        }
    }
    if (obj.hasOwnProperty('item')) {
        if (obj.item.hasOwnProperty('pro')) {
            obj.item.pro = true;
        }
    }
    body = JSON.stringify(obj);
}

if (url.indexOf(stat) != -1) {
    if (obj.hasOwnProperty('meta')) {
        if (obj.meta.hasOwnProperty('pro')) {
            obj.meta.pro = true;
        }
    }
    body = JSON.stringify(obj);
}

if (url.indexOf(user) != -1) {
    if (obj.hasOwnProperty('user')) {
        if (obj.user.hasOwnProperty('pro')) {
            obj.user.pro = true;
        }
    }
    body = JSON.stringify(obj);
}

$done({ body });