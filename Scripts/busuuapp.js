/**
 * @supported E54765DF5F47
 * @tag busuuapp app
 * @host api.busuu.com
 * @reg ^https:\/\/api\.busuu\.com\/users\/me*
 */
var obj = JSON.parse($response.body);

if (obj.hasOwnProperty('data') && obj.data.hasOwnProperty('is_premium')) {
    obj.data.is_premium = true;
}

$done({
    body: JSON.stringify(obj)
});