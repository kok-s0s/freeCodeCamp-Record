<!--
 * @Author: kok-s0s
 * @Date: 2021-09-20 17:13:55
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-09-24 16:49:41
 * @Description: URL Shortener Microservice
-->

短网址微服务

需要输入正确的 url 地址，会返回一个临时的短网址地址 `id` ，用户可以通过访问该网站下的 `api/shorturl/id` 来访问到原网址。

熟悉 get 和 post 的相关操作以及对 URL 的相关处理。

熟悉了 mongoDB 和 mongoose 的作用以及使用。

[任务仓库](https://replit.com/@kok-s0s/boilerplate-project-urlshortener#server.js)

```js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
    res.json({
        greeting: 'hello API'
    });
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});

let dburl = "mongodb+srv://kok-s0s:13392652923@cluster0.juszl.mongodb.net/db2?retryWrites=true&w=majority";

mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let urlSchema = new Schema({
    original: {
        type: String,
        required: true
    },
    short: {
        type: Number
    }
})

let Url = mongoose.model("URL", urlSchema);

let bodyParser = require("body-parser");
let responseObject = {};
app.post('/api/shorturl', bodyParser.urlencoded({
    extended: false
}), (request, response) => {
    let inputUrl = request.body['url'];

    let urlRegex = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);

    if (!inputUrl.match(urlRegex)) {
        response.json({
            error: 'invalid url'
        })
        return
    }

    let urlObj = new URL(request.body['url']);
    if (urlObj.protocol === 'ftp:') {
        response.json({
            error: 'invalid url'
        });
        return
    }

    responseObject['original_url'] = inputUrl;

    let inputShort = 1;

    Url.findOne({})
        .sort({
            short: "desc"
        })
        .exec((error, result) => {
            if (!error && result != undefined) {
                inputShort = result.short + 1;
            }
            if (!error) {
                Url.findOneAndUpdate({
                        original: inputUrl
                    }, {
                        original: inputUrl,
                        short: inputShort
                    }, {
                        new: true,
                        upsert: true
                    },
                    (error, savedUrl) => {
                        if (!error) {
                            responseObject["short_url"] = savedUrl.short;
                            response.json(responseObject);
                        }
                    }
                )
            } else {
                response.json({
                    error: 'invalid url'
                })
            }
        })
});

app.get("/api/shorturl/:inputShort", (request, response) => {
    let inputShort = request.params.inputShort;

    Url.findOne({
        short: inputShort
    }, (error, result) => {
        if (!error && result != undefined) {
            response.redirect(result.original);
        } else {
            response.json({
                error: 'URL Does Not Exist'
            })
        }
    })
})
```
