<!--
 * @Author: kok-s0s
 * @Date: 2021-09-10 15:34:23
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-09-10 17:58:57
 * @Description: JSON APIs and AJAX
-->

类似于 UI 如何帮助人们使用程序，API（应用程序接口）帮助程序与其他程序互动。API 是计算机用来相互沟通的工具，部分用于发送和接收数据。

程序员在使用 API 的时候，通常会使用 AJAX（同步 JavaScript 和 XML）。AJAX 指的是一组技术，这些技术向服务器提出异步请求以传输数据，然后将任何返回的数据加载到页面。而且在浏览器和服务器之间传输的数据常常是一种 JSON（JavaScript 对象）格式。

### 1. 使用 onclick 属性处理点击事件

你希望代码仅在页面完成加载后执行。 为此，你可将名为DOMContentLoaded的 JavaScript 事件附加到文档中。 以下是实现的代码：

```js
document.addEventListener('DOMContentLoaded', function() {

});
```

你可以在DOMContentLoaded函数内部添加事件处理方法。 你可以添加onclick事件处理器，当用户点击 id 为getMessage的元素时会触发事件。 添加以下代码：

```js
document.getElementById('getMessage').onclick = function() {};
```

---------------------------------------

在DOMContentLoaded函数内为 id 为getMessage的元素添加一个 click 事件处理器。

```html
<script>
    document.addEventListener('DOMContentLoaded', function() {
        // 在这行下面添加代码
        document.getElementById("getMessage").onclick = function() {}

        // 在这行上面添加代码
    });
</script>

<style>
    body {
        text-align: center;
        font-family: "Helvetica", sans-serif;
    }

    h1 {
        font-size: 2em;
        font-weight: bold;
    }

    .box {
        border-radius: 5px;
        background-color: #eee;
        padding: 20px 5px;
    }

    button {
        color: white;
        background-color: #4791d0;
        border-radius: 5px;
        border: 1px solid #4791d0;
        padding: 5px 10px 8px 10px;
    }

    button:hover {
        background-color: #0F5897;
        border: 1px solid #0F5897;
    }
</style>
<h1>Cat Photo Finder</h1>
<p class="message box">
    The message will go here
</p>
<p>
    <button id="getMessage">
        Get Message
    </button>
</p>
```

### 2. 通过单击事件更改文本

当点击事件发生时，你可以使用 JavaScript 更新 HTML 元素。

例如，当用户点击 Get Message 按钮时，它将改变 class 为 message 的元素的文本为 Here is the message。

通过在点击事件内添加以下代码实现：

```js
document.getElementsByClassName('message')[0].textContent = "Here is the message";
```

在 onclick 事件处理器中添加代码，改变 message 元素内的文本为 Here is the message。

```html
<script>
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('getMessage').onclick = function() {
            // 在这行下面添加代码
            document.getElementsByClassName('message')[0].textContent = "Here is the message";

            // 在这行上面添加代码
        }
    });
</script>

<style>
    body {
        text-align: center;
        font-family: "Helvetica", sans-serif;
    }

    h1 {
        font-size: 2em;
        font-weight: bold;
    }

    .box {
        border-radius: 5px;
        background-color: #eee;
        padding: 20px 5px;
    }

    button {
        color: white;
        background-color: #4791d0;
        border-radius: 5px;
        border: 1px solid #4791d0;
        padding: 5px 10px 8px 10px;
    }

    button:hover {
        background-color: #0F5897;
        border: 1px solid #0F5897;
    }
</style>

<h1>Cat Photo Finder</h1>
<p class="message box">
    The message will go here
</p>
<p>
    <button id="getMessage">
        Get Message
    </button>
</p>
```

### 3. 使用 XMLHttpRequest 方法获取 JSON

你还可以从外部来源请求数据。 这就是 API 发挥作用的地方。

请记住，API（或叫应用程序编程接口）是计算机用来互相通信的工具。 你将学习如何通过 AJAX技术 从 API 获得的数据来更新 HTML。

大部分 web APIs 以 JSON 格式传输数据。 JSON 是 JavaScript Object Notation 的简写。

JSON 语法与 JavaScript 对象字面符号非常相似。 JSON 具有对象属性以及其当前值，夹在 { 和 }之间。

这些属性及其值通常称为 "键值对"。

但是，JSON 是由 API 以bytes 形式传输的，你的程序以string接受它。 它们能转换成为 JavaScript 对象，但默认情况下它们不是 JavaScript 对象。 JSON.parse方法解析字符串并构造它描述的 JavaScript 对象。

你可以从 freeCodeCamp 的 Cat Photo API 请求 JSON。 以下是你可以在点击事件中添加的代码：

```js
const req = new XMLHttpRequest();
req.open("GET", '/json/cats.json', true);
req.send();
req.onload = function() {
    const json = JSON.parse(req.responseText);
    document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
};
```

这里介绍每行代码的作用。 JavaScript XMLHttpRequest 对象具有许多用于传输数据的属性和方法。 首先，创建一个XMLHttpRequest对象实例，并保存在req变量里 。 然后，open 方法初始化一个请求——这个例子是从 API 请求数据，因此它是一个 GET 请求。 第二个参数 open 是你要从中请求数据的 API 的 URL。 第三个参数是一个布尔值， true 使其成为异步请求。 send 方法发送请求。 最后，onload 事件处理程序解析返回的数据并应用该 JSON.stringify 方法将JavaScript对象转换为字符串， 然后将此字符串作为消息文本插入。

--------------------------------

更新代码，创建并向 freeCodeCamp Cat Photo API 发送 GET 请求。 然后单击 Get Message 按钮。 AJAX 函数将使用 API​​ 的原始 JSON 输出替换文本 The message will go here。

```html
<script>
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('getMessage').onclick = function() {
            // 在这行下面添加代码
            const req = new XMLHttpRequest();
            req.open("GET", '/json/cats.json', true);
            req.send();
            req.onload = function() {
                const json = JSON.parse(req.responseText);
                document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
            }

            // 在这行上面添加代码
        };
    });
</script>

<style>
    body {
        text-align: center;
        font-family: "Helvetica", sans-serif;
    }

    h1 {
        font-size: 2em;
        font-weight: bold;
    }

    .box {
        border-radius: 5px;
        background-color: #eee;
        padding: 20px 5px;
    }

    button {
        color: white;
        background-color: #4791d0;
        border-radius: 5px;
        border: 1px solid #4791d0;
        padding: 5px 10px 8px 10px;
    }

    button:hover {
        background-color: #0F5897;
        border: 1px solid #0F5897;
    }
</style>

<h1>Cat Photo Finder</h1>
<p class="message box">
    The message will go here
</p>
<p>
    <button id="getMessage">
        Get Message
    </button>
</p>
```

### 4. 使用 JavaScript 的 fetch 方法获取 JSON

请求外部数据的另一个方法是使用 JavaScript 的 fetch() 方法。 它的作用和 XMLHttpRequest 一样，但是它的语法更容易理解。

下面是使用 GET 请求 /json/cats.json 数据的例子。

```js
fetch('/json/cats.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerHTML = JSON.stringify(data);
    })
```

逐行解释一下代码。

第一行是发起请求。 fetch(URL) 向指定的 URL 发起 GET 请求。 这个方法返回一个 Promise。

当 Promise 返回后，如果请求成功，会执行 then 方法，该方法把响应转换为 JSON 格式。

then 方法返回的也是 Promise，会被下一个 then 方法捕获。 第二个 then 方法传入的参数就是最终的 JSON 对象。

接着，使用 document.getElementById() 选择将要接收数据的元素。 然后插入请求返回的 JSON 对象创建的字符串修改元素的 HTML 代码。

--------------------------------

更新代码，创建并向 freeCodeCamp Cat Photo API 发送 GET 请求。 这次使用 fetch 方法而不是 XMLHttpRequest。

```html
<script>
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('getMessage').onclick = () => {
            // 在这行下面添加代码
            fetch('/json/cats.json')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('message').innerHTML = JSON.stringify(data);
                })

            // 在这行上面添加代码
        };
    });
</script>
<style>
    body {
        text-align: center;
        font-family: "Helvetica", sans-serif;
    }

    h1 {
        font-size: 2em;
        font-weight: bold;
    }

    .box {
        border-radius: 5px;
        background-color: #eee;
        padding: 20px 5px;
    }

    button {
        color: white;
        background-color: #4791d0;
        border-radius: 5px;
        border: 1px solid #4791d0;
        padding: 5px 10px 8px 10px;
    }

    button:hover {
        background-color: #0F5897;
        border: 1px solid #0F5897;
    }
</style>
<h1>Cat Photo Finder</h1>
<p id="message" class="box">
    The message will go here
</p>
<p>
    <button id="getMessage">
        Get Message
    </button>
</p>
```

### 5. 访问来自 API 的 JSON 数据

在前面的挑战中，你了解了如何从 freeCodeCamp Cat Photo API 获取 JSON 数据。

现在，你将进一步观察返回的数据，以更好地了解 JSON 格式。 回忆一下 JavaScript 中的一些符号：

```
[ ] -> 方括号表示数组
{ } -> 大括号表示对象
" " -> 双引号表示字符串， 它们还用于表示 JSON 中的键名
```

理解 API 返回数据的结构是必需的，它将影响你如何获取你所需的值。

在右侧，单击 Get Message 按钮，将 freeCodeCamp Cat Photo API JSON 加载到 HTML 中。

在 JSON 数据中的第一个和最后一个字符是中括号[ ]， 这意味着返回的数据是一个数组。 JSON 数据中的第二个符号是一个大括号{，这意味着是一个对象。 再仔细看，你会发现有三个独立的对象。 这个 JSON 数据是一个包含三个对象的数组，它们各自都包含了 cat photo 的信息。

你之前了解了对象包含了用逗号分隔的 "键值对"。 在 Cat Photo 示例中，第一个对象的 "id":0，id 是键，0 是对应的值。 类似地，imageLink、altText 和 codeNames 也有键。 每个 cat photo 对象具有相同的键，但具有不同的值。

在第一个对象中有一个有趣的 "键值对" 它是"codeNames":["Juggernaut", "Mrs. Wallace", "ButterCup"]。 codeNames 是键，它的值是一个包含三个字符串的数组。 对象数组以及数组作为键可以作为值

记住如何访问数组和对象中的数据。 数组使用括号表示法来访问项目的特定索引， 对象使用括号或点表示法来访问给定属性的值。 这个例子打印第一张 cat photo 的 altText 属性——请注意，编辑器中解析的 JSON 数据被保存在名为 json 的变量中：

```js
console.log(json[0].altText);
```

控制台将显示字符串 A white cat wearing a green helmet shaped melon on its head.。

--------------------------------

对于 id 为 2 的 cat，在控制台打印 codeNames 数组中的第二个值。 你应该在对象（保存在变量 json 中）上使用括号或者点表示法来访问该值。

```html
<script>
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('getMessage').onclick = function() {
            const req = new XMLHttpRequest();
            req.open("GET", '/json/cats.json', true);
            req.send();
            req.onload = function() {
                const json = JSON.parse(req.responseText);
                document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
                // 在这行下面添加代码
                console.log(json[2].codeNames[1])
                // 在这行上面添加代码
            };
        };
    });
</script>

<style>
    body {
        text-align: center;
        font-family: "Helvetica", sans-serif;
    }

    h1 {
        font-size: 2em;
        font-weight: bold;
    }

    .box {
        border-radius: 5px;
        background-color: #eee;
        padding: 20px 5px;
    }

    button {
        color: white;
        background-color: #4791d0;
        border-radius: 5px;
        border: 1px solid #4791d0;
        padding: 5px 10px 8px 10px;
    }

    button:hover {
        background-color: #0F5897;
        border: 1px solid #0F5897;
    }
</style>

<h1>Cat Photo Finder</h1>
<p class="message box">
    The message will go here
</p>
<p>
    <button id="getMessage">
        Get Message
    </button>
</p>
```

### 6. 将 JSON 数据转换为 HTML

现在你从 JSON API 获取了数据，可以在 HTML 中显示它们了。

既然 cat photo 对象都保存在数组里，你可以使用 forEach 方法来遍历它们。 当你拿到每个对象时，你就可以修改 HTML 元素了。

首先，通过 let html = ""; 声明一个 html 变量。

接着，遍历 JSON，将用 strong 标签包裹的键名和后面跟着值的 html 元素添加给变量。 当循环结束后渲染它。

这是执行此操作的代码：

```js
let html = "";
json.forEach(function(val) {
    const keys = Object.keys(val);
    html += "<div class = 'cat'>";
    keys.forEach(function(key) {

        html += "<strong>" + key + "</strong>: " + val[key] + "<br>";

    });
    html += "</div><br>";
});
```

**注意：**在本挑战中，你需要给页面添加新的 HTML 元素，所以你不能使用 textContent 方法。 你可以用 innerHTML 来完成挑战，这个方法使网站容易遭受跨站脚本攻击。

--------------------------------

添加一个 forEach 循环来遍历 JSON 数据，并创建 HTML 元素以显示它。

下面是示例 JSON：

```json
[
  {
    "id":0,
      "imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg",
      "altText":"A white cat wearing a green helmet shaped melon on its head. ",
      "codeNames":[ "Juggernaut", "Mrs. Wallace", "Buttercup"
    ]
  }
]
```

```html
<script>
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('getMessage').onclick = function() {
            const req = new XMLHttpRequest();
            req.open("GET", '/json/cats.json', true);
            req.send();
            req.onload = function() {
                const json = JSON.parse(req.responseText);
                let html = "";
                // 在这行下面添加代码
                json.forEach(function(val) {
                    const keys = Object.keys(val);
                    html += "<div class='cat'>";
                    keys.forEach(function(key) {
                        html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
                    });
                    html += "</div><br>"
                })

                // 在这行上面添加代码
                document.getElementsByClassName('message')[0].innerHTML = html;
            };
        };
    });
</script>

<style>
    body {
        text-align: center;
        font-family: "Helvetica", sans-serif;
    }

    h1 {
        font-size: 2em;
        font-weight: bold;
    }

    .box {
        border-radius: 5px;
        background-color: #eee;
        padding: 20px 5px;
    }

    button {
        color: white;
        background-color: #4791d0;
        border-radius: 5px;
        border: 1px solid #4791d0;
        padding: 5px 10px 8px 10px;
    }

    button:hover {
        background-color: #0F5897;
        border: 1px solid #0F5897;
    }
</style>

<h1>Cat Photo Finder</h1>
<p class="message box">
    The message will go here
</p>
<p>
    <button id="getMessage">
        Get Message
    </button>
</p>
```

### 7. 渲染数据源的图像

前几个挑战中表明，JSON 数组中的每个对象都包含一个 imageLink 键，其值为猫图像的 URL。

当你遍历这些对象的时候，你可以使用 imageLink 属性在 img 元素中显示此图像。

这是执行此操作的代码：

```js
html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
```

--------------------------------

添加代码以在 img 标记中使用 imageLink 和 altText 属性。

```html
<script>
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('getMessage').onclick = function() {
            const req = new XMLHttpRequest();
            req.open("GET", '/json/cats.json', true);
            req.send();
            req.onload = function() {
                const json = JSON.parse(req.responseText);
                let html = "";
                json.forEach(function(val) {
                    html += "<div class = 'cat'>";
                    // 在这行下面添加代码
                    const keys = Object.keys(val);
                    keys.forEach(function(key) {
                        html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
                    });

                    // 在这行上面添加代码
                    html += "</div><br>";
                });
                document.getElementsByClassName('message')[0].innerHTML = html;
            };
        };
    });
</script>

<style>
    body {
        text-align: center;
        font-family: "Helvetica", sans-serif;
    }

    h1 {
        font-size: 2em;
        font-weight: bold;
    }

    .box {
        border-radius: 5px;
        background-color: #eee;
        padding: 20px 5px;
    }

    button {
        color: white;
        background-color: #4791d0;
        border-radius: 5px;
        border: 1px solid #4791d0;
        padding: 5px 10px 8px 10px;
    }

    button:hover {
        background-color: #0F5897;
        border: 1px solid #0F5897;
    }
</style>
<h1>Cat Photo Finder</h1>
<p class="message box">
    The message will go here
</p>
<p>
    <button id="getMessage">
        Get Message
    </button>
</p>
```

### 8. 预先过滤 JSON 以获得所需的数据

如果你不希望渲染每张从 freeCodeCamp Cat Photo API 取回的猫照片，你可以在循环先预先过滤 JSON 数据。

鉴于 JSON 数据存储在数组中，你可以使用 filter 方法过滤掉 id 键值为 1 的 cat。

这是执行此操作的代码：

```js
json = json.filter(function(val) {
    return (val.id !== 1);
});
```

--------------------------------

添加代码以 filter json 数据，删除 id 值为 1 的 cat。

```html
<script>
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('getMessage').onclick = function() {
            const req = new XMLHttpRequest();
            req.open("GET", '/json/cats.json', true);
            req.send();
            req.onload = function() {
                let json = JSON.parse(req.responseText);
                let html = "";
                // 在这行下面添加代码

                json = json.filter(function(val) {
                    return (val.id !== 1);
                });

                // 在这行上面添加代码
                json.forEach(function(val) {
                    html += "<div class = 'cat'>"

                    html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"

                    html += "</div>"
                });
                document.getElementsByClassName('message')[0].innerHTML = html;
            };
        };
    });
</script>

<style>
    body {
        text-align: center;
        font-family: "Helvetica", sans-serif;
    }

    h1 {
        font-size: 2em;
        font-weight: bold;
    }

    .box {
        border-radius: 5px;
        background-color: #eee;
        padding: 20px 5px;
    }

    button {
        color: white;
        background-color: #4791d0;
        border-radius: 5px;
        border: 1px solid #4791d0;
        padding: 5px 10px 8px 10px;
    }

    button:hover {
        background-color: #0F5897;
        border: 1px solid #0F5897;
    }
</style>

<h1>Cat Photo Finder</h1>
<p class="message box">
    The message will go here
</p>
<p>
    <button id="getMessage">
        Get Message
    </button>
</p>
```

### 9. 根据地理位置数据找到用户的 GPS 坐标

你还能做一件很酷的事就是访问你用户当前的地理位置。 每个浏览器都有内置的导航器，可以为你提供这些信息。

导航器会获取用户当前的经度和纬度。

您将看到允许或阻止此站点了解您当前位置的提示。 只要代码正确，挑战就可以以任何一种方式完成。

通过选择允许，你将看到输出手机上的文本更改为你的纬度和经度

这是执行此操作的代码：

```js
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        document.getElementById('data').innerHTML = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
    });
}
```

首先，它检查navigator.geolocation对象是否存在。 如果是，getCurrentPosition则调用该对象上的方法，该方法启动对用户位置的异步请求。 如果请求成功，则运行方法中的回调函数。 此函数position使用点表示法访问对象的纬度和经度值，并更新页面。

--------------------------------

在script标记内添加示例代码以检查用户的当前位置并将其插入 HTML

```html
<script>
    // 在这行下面添加代码
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

            document.getElementById('data').innerHTML = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;

        });
    }

    // 在这行上面添加代码
</script>
<h4>You are here:</h4>
<div id="data">

</div>
```

### 10. 使用 XMLHttpRequest 方法发送数据

在前面的示例中，你通过外部资源获取数据。 此外，你也可以将数据发送到外部资源，只要该资源支持 AJAX 请求并且你知道 URL。

JavaScript 的XMLHttpRequest方法也用于将数据发布到服务器。 这是一个示例：

```js
const xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 201) {
        const serverResponse = JSON.parse(xhr.response);
        document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
    }
};
const body = JSON.stringify({
    userName: userName,
    suffix: ' loves cats!'
});
xhr.send(body);
```

你之前已经见过这些方法。 open 方法将对外部资源的给定 URL 的请求初始化为 POST，并使用 true 布尔值使其变成异步的。 setRequestHeader 方法设置了 HTTP 请求标头的值，该标头包含有关发送人和请求的信息。 它必须在 open 方法之后、send 方法之前调用。 它的两个参数表示标头的内容类型和标头数据将被设置成什么值。 接下来，onreadystatechange 事件监听器监听请求状态的更改。 readyState 为 4，表示操作已完成。status 为 201，表示请求成功。 文档的 HTML 可以更新。 最后，send 方法发送带有 body 值的请求，其中 userName 的值由用户在 input 字段中输入。

--------------------------------

更新代码，创建并向 API 发送 POST 请求。 然后在输入框中输入你的姓名，并点击 Send Message。 你的 AJAX 函数会用服务器返回的数据替换 Reply from Server will be here.。 修改返回的请求结果，在你的名字后面添加 loves cats。

```html
<script>
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('sendMessage').onclick = function() {

            const userName = document.getElementById('name').value;
            const url = 'https://jsonplaceholder.typicode.com/posts';
            // 在这行下面添加代码
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 201) {
                    const serverResponse = JSON.parse(xhr.response);
                    document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
                }
            };
            const body = JSON.stringify({
                userName: userName,
                suffix: ' loves cats!'
            });
            xhr.send(body);

            // 在这行上面添加代码
        };
    });
</script>

<style>
    body {
        text-align: center;
        font-family: "Helvetica", sans-serif;
    }

    h1 {
        font-size: 2em;
        font-weight: bold;
    }

    .box {
        border-radius: 5px;
        background-color: #eee;
        padding: 20px 5px;
    }

    button {
        color: white;
        background-color: #4791d0;
        border-radius: 5px;
        border: 1px solid #4791d0;
        padding: 5px 10px 8px 10px;
    }

    button:hover {
        background-color: #0F5897;
        border: 1px solid #0F5897;
    }
</style>

<h1>Cat Friends</h1>
<p class="message box">
    Reply from Server will be here
</p>
<p>
    <label for="name">Your name:
        <input type="text" id="name" />
    </label>
    <button id="sendMessage">
        Send Message
    </button>
</p>
```
