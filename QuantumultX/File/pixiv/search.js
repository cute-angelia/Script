/**
 * @supported E54765DF5F47
 * @tag pixiv
 */

var url = 'https://pixiv.mlyx.workers.dev/?api=pixiv'
var headers = $request.headers
$httpClient.get(url, (error, response, data) => {
    if (error) {
        $done({})
    } else {
        headers['Authorization'] = `Bearer ${data}`
        $done({
            headers
        })
    }
})