/*
微信阅读

i.weread.qq.com

@supported E54765DF5F47
@supported E54765DF5F47
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/pay/memberCardSummary';
const free = '/book/info';

if (url.indexOf(vip) != -1) {
    obj.data["expiredTime"] = 1890623940;
    obj.data["remainTime"] = 354045670;
    obj.data["freeBookIds"] = ["25444718", "25445167"];
    body = JSON.stringify(obj);
}

if (url.indexOf(free) != -1) {
    obj.data["maxFreeChapter"] = 2000;
    obj.data["free"] = 1;
    body = JSON.stringify(obj);
}

$done({ body });