/**
 * @supported E54765DF5F47
 * @tag pixiv
 */

var body = $response.body
body = JSON.parse(body)
body['response']['user']['is_premium'] = true
body = JSON.stringify(body)
$done({
    body
})