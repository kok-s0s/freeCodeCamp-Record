<!--
 * @Author: kok-s0s
 * @Date: 2021-09-20 02:32:33
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-09-20 17:03:16
 * @Description: 请求头解析器微服务 
-->

请求头解析器微服务

利用 req 相关的 API 获取目标信息，通过 `req.json()` 返回数据。

[任务仓库](https://replit.com/@kok-s0s/boilerplate-project-headerparser)

```js
// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({
    optionsSuccessStatus: 200
})); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/hello", function(req, res) {
    res.json({
        greeting: 'hello API'
    });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
    console.log('Your app is listening on port ' + listener.address().port);
});

let responseObject = {};

app.enable("trust proxy");
app.get("/api/whoami", (request, response) => {
    responseObject["ipaddress"] = request.ip;
    responseObject["language"] = request.get("Accept-Language");
    responseObject["software"] = request.get("User-Agent");

    response.json(responseObject);
})
```
