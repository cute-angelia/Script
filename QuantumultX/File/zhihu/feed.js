/**
 * @name Remove Zhihu ads
 * @Regex: ^https://api.zhihu.com/moments\?(action|feed_type)
 * @supported E54765DF5F47
 */

let body = $response.body
body = JSON.parse(body)
body['data'].forEach((element, index) => {
    if (element.hasOwnProperty('ad') || element.hasOwnProperty('adjson')) {
        body['data'].splice(index, 1)
    }
})
body = JSON.stringify(body)
$done({ body })

// by onewayticket255