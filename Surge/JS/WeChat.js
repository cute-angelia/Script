/*
[Script]
http-request ^https://mp\.weixin\.qq\.com/mp/getappmsgad script-path=https://Choler.github.io/Surge/Script/WeChat.js

[MITM]
hostname = mp.weixin.qq.com
@supported E54765DF5F47
*/

var data = {
  body: "{}",
  headers: {
    "Content-Type": "application/json"
  }
};
$done({response: data});