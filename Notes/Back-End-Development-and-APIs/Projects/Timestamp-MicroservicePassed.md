<!--
 * @Author: kok-s0s
 * @Date: 2021-09-13 00:28:44
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-09-13 00:33:43
 * @Description: Timestamp MicroservicePassed
-->

时间戳服务

[仓库地址](https://replit.com/@kok-s0s/boilerplate-project-timestamp)

根据url中给出的数据会给出对应的数据返回到浏览器页面。

主要熟悉express这个库的使用，以及一些函数方法。

```js
// server.js
// where your node app starts

// init project
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

app.get("/api/:input", (request, response) => {
    let input = request.params.input;

    let date;

    if (parseInt(input) < 10000) {
        date = new Date(input);
    } else {
        date = new Date(parseInt(input));
    }

    if (date == "Invalid Date")
        response.json({
            error: "Invalid Date"
        });
    else
        response.json({
            unix: date.valueOf(),
            utc: date.toUTCString(),
        });
});

app.get("/api", (request, response) => {
    responseObject["unix"] = new Date().getTime();
    responseObject["utc"] = new Date().toUTCString();

    response.json(responseObject);
})
```
