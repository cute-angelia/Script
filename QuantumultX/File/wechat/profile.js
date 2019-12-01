/*
@supported E54765DF5F47
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

obj.data["signature"] = "不在了";
body = JSON.stringify(obj);

$done({
    body
});