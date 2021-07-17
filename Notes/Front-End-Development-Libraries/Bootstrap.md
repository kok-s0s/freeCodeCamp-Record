<!--
 * @Author: kok-s0s
 * @Date: 2021-07-12 23:23:05
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-07-17 18:28:30
 * @Description: Bootstrap
-->

> Bootstrap 一个是用于设计响应性网页和应用程序的前端框架。它对网页开发采用移动优先的方法，具有预定义的 CSS 样式和 class，以及一些 JavaScript 功能。

### 1. 使用 Bootstrap Fluid 容器实现响应式设计

任何 Web 应用，都可以通过添加如下代码到 HTML 顶部来引入 Bootstrap 。

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
```

注意使用 `>` 或者 `/>` 两种方式闭合 `link` 标签都是可行的。

**Bootstrap 设定的类 container-fluid**

**具体学习**[链接](https://getbootstrap.com/docs/5.0/layout/containers/)

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
    .red-text {
        color: red;
    }

    h2 {
        font-family: Lobster, Monospace;
    }

    p {
        font-size: 16px;
        font-family: Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    .smaller-image {
        width: 100px;
    }
</style>
<div class="container-fluid">
    <h2 class="red-text">CatPhotoApp</h2>

    <p>Click here for <a href="#">cat photos</a>.</p>

    <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

    <p>Things cats love:</p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
</div>
```

### 2. 使图片自适应移动端

Bootstrap 设定的图片自适应类 img-responsive，添加它的图片能够完美地适应页面的宽度。

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
    .red-text {
        color: red;
    }

    h2 {
        font-family: Lobster, Monospace;
    }

    p {
        font-size: 16px;
        font-family: Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    .smaller-image {
        width: 100px;
    }
</style>

<div class="container-fluid">
    <h2 class="red-text">CatPhotoApp</h2>

    <p>Click here for <a href="#">cat photos</a>.</p>

    <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
    <img src="https://bit.ly/fcc-running-cats" class="img-responsive">
    <p>Things cats love:</p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
</div>
```

### 3. 用 Bootstrap 居中文本

Bootstrap 为元素使用 text-center 这个类能使其内容居中。

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
    .red-text {
        color: red;
    }

    h2 {
        font-family: Lobster, Monospace;
    }

    p {
        font-size: 16px;
        font-family: Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    .smaller-image {
        width: 100px;
    }
</style>

<div class="container-fluid">
    <h2 class="red-text text-center">CatPhotoApp</h2>

    <p>Click here for <a href="#">cat photos</a>.</p>

    <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <p>Things cats love:</p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
</div>
```

### 4. 创建一个 Bootstrap 按钮

添加 `btn` 与 `btn-default` 两个 `classes` 能使 `button` 按键有 `Bootstrap` 的样式支持 

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
    .red-text {
        color: red;
    }

    h2 {
        font-family: Lobster, Monospace;
    }

    p {
        font-size: 16px;
        font-family: Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    .smaller-image {
        width: 100px;
    }
</style>

<div class="container-fluid">
    <h2 class="red-text text-center">CatPhotoApp</h2>

    <p>Click here for <a href="#">cat photos</a>.</p>

    <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <button class="btn btn-default">Like</button>
    <p>Things cats love:</p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
</div>
```

### 5. 创建一个 Bootstrap 块级元素按钮

> 通过为按钮添加 class 属性 btn-block 使其成为块级元素，按钮会伸展并填满页面的整个水平空间，后续的元素会流到这个块级元素的下方，即 "另起一行"。

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
    .red-text {
        color: red;
    }

    h2 {
        font-family: Lobster, Monospace;
    }

    p {
        font-size: 16px;
        font-family: Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    .smaller-image {
        width: 100px;
    }
</style>

<div class="container-fluid">
    <h2 class="red-text text-center">CatPhotoApp</h2>

    <p>Click here for <a href="#">cat photos</a>.</p>

    <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <button class="btn btn-default btn-block">Like</button>
    <p>Things cats love:</p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
</div>
```

### 6. 体验 Bootstrap 按钮的不同主题

> btn-primary class 的颜色是应用的主要颜色。 这样 “突出显示” 是引导用户按部就班进行操作的有效办法。

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
    .red-text {
        color: red;
    }

    h2 {
        font-family: Lobster, Monospace;
    }

    p {
        font-size: 16px;
        font-family: Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    .smaller-image {
        width: 100px;
    }
</style>

<div class="container-fluid">
    <h2 class="red-text text-center">CatPhotoApp</h2>

    <p>Click here for <a href="#">cat photos</a>.</p>

    <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <button class="btn btn-primary btn-block">Like</button>
    <p>Things cats love:</p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
</div>
```

### 7. 可选操作样式 btn-info

> Bootstrap 有着丰富的预定义按钮颜色。 浅蓝色的 btn-info class 通常用在备选操作上。

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
    .red-text {
        color: red;
    }

    h2 {
        font-family: Lobster, Monospace;
    }

    p {
        font-size: 16px;
        font-family: Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    .smaller-image {
        width: 100px;
    }
</style>

<div class="container-fluid">
    <h2 class="red-text text-center">CatPhotoApp</h2>

    <p>Click here for <a href="#">cat photos</a>.</p>

    <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <button class="btn btn-block btn-primary">Like</button>
    <button class="btn btn-block btn-info">Info</button>
    <p>Things cats love:</p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
</div>
```

### 8. 使用 btn-danger 提示危险操作

> Bootstrap 有着丰富的预定义按钮颜色。 红色 btn-danger class 用来提醒用户此行为具有破坏性。

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
    .red-text {
        color: red;
    }

    h2 {
        font-family: Lobster, Monospace;
    }

    p {
        font-size: 16px;
        font-family: Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    .smaller-image {
        width: 100px;
    }
</style>

<div class="container-fluid">
    <h2 class="red-text text-center">CatPhotoApp</h2>

    <p>Click here for <a href="#">cat photos</a>.</p>

    <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <button class="btn btn-block btn-primary">Like</button>
    <button class="btn btn-block btn-info">Info</button>
    <button class="btn btn-block btn-danger">Delete</button>
    <p>Things cats love:</p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
</div>
```

### 9. 使用 Bootstrap Grid 并排放置元素

> Bootstrap 的列宽取决于用户的屏幕宽度。 就拿 Bootstrap 的 col-md-* class 来说。 在这里， md 表示 medium （中等的）， 而 * 是一个数字，说明了这个元素占有多少个列宽度。 这个例子就是指定了中等大小屏幕（例如笔记本电脑）下元素所占的列宽度。
>
> 在 Cat Photo App 中，将使用 col-xs-* ， 其中 xs 是 extra small 的缩写 (比如窄屏手机屏幕)， * 是填写的数字，代表一行中的元素该占多少列宽。

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
    .red-text {
        color: red;
    }

    h2 {
        font-family: Lobster, Monospace;
    }

    p {
        font-size: 16px;
        font-family: Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    .smaller-image {
        width: 100px;
    }
</style>

<div class="container-fluid">
    <h2 class="red-text text-center">CatPhotoApp</h2>

    <p>Click here for <a href="#">cat photos</a>.</p>

    <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <div class="row">
        <div class="col-xs-4">
            <button class="btn btn-block btn-primary">Like</button>
        </div>
        <div class="col-xs-4">
            <button class="btn btn-block btn-info">Info</button>
        </div>
        <div class="col-xs-4">
            <button class="btn btn-block btn-danger">Delete</button>
        </div>
    </div>
    <p>Things cats love:</p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
</div>
```

### 10. 用 Bootstrap 来取代我们之前的自定义样式

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
    h2 {
        font-family: Lobster, Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }
</style>

<div class="container-fluid">
    <h2 class="text-primary text-center">CatPhotoApp</h2>

    <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <div class="row">
        <div class="col-xs-4">
            <button class="btn btn-block btn-primary">Like</button>
        </div>
        <div class="col-xs-4">
            <button class="btn btn-block btn-info">Info</button>
        </div>
        <div class="col-xs-4">
            <button class="btn btn-block btn-danger">Delete</button>
        </div>
    </div>
    <p>Things cats love:</p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
</div>
```

### 11. 使用 span 创建行内元素

> 通过使用行内元素 span，可以把不同的元素放在同一行，甚至能为一行的不同部分指定不同样式。

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
    h2 {
        font-family: Lobster, Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }
</style>

<div class="container-fluid">
    <h2 class="text-primary text-center">CatPhotoApp</h2>

    <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <div class="row">
        <div class="col-xs-4">
            <button class="btn btn-block btn-primary">Like</button>
        </div>
        <div class="col-xs-4">
            <button class="btn btn-block btn-info">Info</button>
        </div>
        <div class="col-xs-4">
            <button class="btn btn-block btn-danger">Delete</button>
        </div>
    </div>
    <p>Things cats <span class="text-danger">love:</span></p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats <span class="text-danger">hate:</span></p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
</div>
```

### 12. 创建自定义标题

> 由于 Bootstrap 使用了响应式栅格系统，可以很方便的把元素放到一行以及指定元素的相对宽度。 大部分的 Bootstrap 的 class 都能用在 div 元素上。

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">

<style>
    h2 {
        font-family: Lobster, Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }
</style>

<div class="container-fluid">
    <div class="row">
        <div class="col-xs-8">
            <h2 class="text-primary text-center">CatPhotoApp</h2>
        </div>
        <div class="col-xs-4">
            <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
        </div>
    </div>
    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <div class="row">
        <div class="col-xs-4">
            <button class="btn btn-block btn-primary">Like</button>
        </div>
        <div class="col-xs-4">
            <button class="btn btn-block btn-info">Info</button>
        </div>
        <div class="col-xs-4">
            <button class="btn btn-block btn-danger">Delete</button>
        </div>
    </div>
    <p>Things cats <span class="text-danger">love:</span></p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
</div>
```

### 13. 在按钮中添加字体图标

Font Awesome 是一个非常便利的图标库。 我们可以通过 webfont 或矢量图的方式来使用这些图标。 这些图标就和字体一样， 不仅能通过像素单位指定它们的大小，它们也同样会继承父级 HTML 元素的字体大小。

可以将 Font Awesome 图标库添加至任何一个 web app 中，方法很简单，只需要在 HTML head 标签中添加以下代码即可：

```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
```

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
    h2 {
        font-family: Lobster, Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }
</style>

<div class="container-fluid">
    <div class="row">
        <div class="col-xs-8">
            <h2 class="text-primary text-center">CatPhotoApp</h2>
        </div>
        <div class="col-xs-4">
            <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
        </div>
    </div>
    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <div class="row">
        <div class="col-xs-4">
            <button class="btn btn-block btn-primary"><i class="fas fa-thumbs-up">Like</i></button>
        </div>
        <div class="col-xs-4">
            <button class="btn btn-block btn-info">Info</button>
        </div>
        <div class="col-xs-4">
            <button class="btn btn-block btn-danger">Delete</button>
        </div>
    </div>
    <p>Things cats <span class="text-danger">love:</span></p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
</div>
```

### 14. 将字体图标添加到所有的按钮上

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
    h2 {
        font-family: Lobster, Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }
</style>

<div class="container-fluid">
    <div class="row">
        <div class="col-xs-8">
            <h2 class="text-primary text-center">CatPhotoApp</h2>
        </div>
        <div class="col-xs-4">
            <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
        </div>
    </div>
    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <div class="row">
        <div class="col-xs-4">
            <button class="btn btn-block btn-primary"><i class="fas fa-thumbs-up"></i> Like</button>
        </div>
        <div class="col-xs-4">
            <button class="btn btn-block btn-info"><i class="fas fa-info-circle">Info</i></button>
        </div>
        <div class="col-xs-4">
            <button class="btn btn-block btn-danger"><i class="fas fa-trash">Delete</i></button>
        </div>
    </div>
    <p>Things cats <span class="text-danger">love:</span></p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
</div>
```

### 15. 响应式风格的单选按钮

> Bootstrap 的 col-xs-* class 也可以用在 form 元素上！ 这样就可以在不关心屏幕大小的情况下，将的单选按钮均匀的平铺在页面上。

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
    h2 {
        font-family: Lobster, Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }
</style>

<div class="container-fluid">
    <div class="row">
        <div class="col-xs-8">
            <h2 class="text-primary text-center">CatPhotoApp</h2>
        </div>
        <div class="col-xs-4">
            <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
        </div>
    </div>
    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <div class="row">
        <div class="col-xs-4">
            <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
        </div>
        <div class="col-xs-4">
            <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
        </div>
        <div class="col-xs-4">
            <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
        </div>
    </div>
    <p>Things cats <span class="text-danger">love:</span></p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
        <div class="row">
            <div class="col-xs-6">
                <label><input type="radio" name="indoor-outdoor"> Indoor</label>
            </div>
            <div class="col-xs-6">
                <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
            </div>
            <label><input type="checkbox" name="personality"> Loving</label>
            <label><input type="checkbox" name="personality"> Lazy</label>
            <label><input type="checkbox" name="personality"> Crazy</label>
            <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
        </div>
    </form>
</div>
```

### 16. 响应式风格的复选框

> Bootstrap 的 col-xs-* 可应用于所有的 form 元素上，包括复选框！ 这样就可以不必关注屏幕大小，均匀地把复选框放在页面上了

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
    h2 {
        font-family: Lobster, Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }
</style>

<div class="container-fluid">
    <div class="row">
        <div class="col-xs-8">
            <h2 class="text-primary text-center">CatPhotoApp</h2>
        </div>
        <div class="col-xs-4">
            <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
        </div>
    </div>
    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <div class="row">
        <div class="col-xs-4">
            <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
        </div>
        <div class="col-xs-4">
            <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
        </div>
        <div class="col-xs-4">
            <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
        </div>
    </div>
    <p>Things cats <span class="text-danger">love:</span></p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
        <div class="row">
            <div class="col-xs-6">
                <label><input type="radio" name="indoor-outdoor"> Indoor</label>
            </div>
            <div class="col-xs-6">
                <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-4">
                <label><input type="checkbox" name="personality"> Loving</label>
            </div>
            <div class="col-xs-4">
                <label><input type="checkbox" name="personality"> Lazy</label>
            </div>
            <div class="col-xs-4">
                <label><input type="checkbox" name="personality"> Crazy</label>
            </div>
        </div>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
</div>
```

### 17. 给表单输入框添加样式

> 为表单的文本输入框（text input）设置 form-control class。 为表单的提交（submit）按钮设置 btn btn-primary class， 并为它加上 Font Awesome 的 fa-paper-plane 图标。
>  
> 所有文本输入类的元素如 `<input>`，`<textarea>` 和 `<select>` 只要设置 .form-control class 就会占满100%的宽度。

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
    h2 {
        font-family: Lobster, Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }
</style>

<div class="container-fluid">
    <div class="row">
        <div class="col-xs-8">
            <h2 class="text-primary text-center">CatPhotoApp</h2>
        </div>
        <div class="col-xs-4">
            <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
        </div>
    </div>
    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <div class="row">
        <div class="col-xs-4">
            <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
        </div>
        <div class="col-xs-4">
            <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
        </div>
        <div class="col-xs-4">
            <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
        </div>
    </div>
    <p>Things cats <span class="text-danger">love:</span></p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
        <div class="row">
            <div class="col-xs-6">
                <label><input type="radio" name="indoor-outdoor"> Indoor</label>
            </div>
            <div class="col-xs-6">
                <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-4">
                <label><input type="checkbox" name="personality"> Loving</label>
            </div>
            <div class="col-xs-4">
                <label><input type="checkbox" name="personality"> Lazy</label>
            </div>
            <div class="col-xs-4">
                <label><input type="checkbox" name="personality"> Crazy</label>
            </div>
        </div>
        <input class="form-control" type="text" placeholder="cat photo URL" required>
        <button class="btn btn-primary" type="submit"><i class="fa fa-paper-plane">Submit</i></button>
    </form>
</div>
```

### 18. 使用 Bootstrap 响应式排列表单元素

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
    h2 {
        font-family: Lobster, Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }
</style>

<div class="container-fluid">
    <div class="row">
        <div class="col-xs-8">
            <h2 class="text-primary text-center">CatPhotoApp</h2>
        </div>
        <div class="col-xs-4">
            <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
        </div>
    </div>
    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <div class="row">
        <div class="col-xs-4">
            <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
        </div>
        <div class="col-xs-4">
            <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
        </div>
        <div class="col-xs-4">
            <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
        </div>
    </div>
    <p>Things cats <span class="text-danger">love:</span></p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
        <div class="row">
            <div class="col-xs-6">
                <label><input type="radio" name="indoor-outdoor"> Indoor</label>
            </div>
            <div class="col-xs-6">
                <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-4">
                <label><input type="checkbox" name="personality"> Loving</label>
            </div>
            <div class="col-xs-4">
                <label><input type="checkbox" name="personality"> Lazy</label>
            </div>
            <div class="col-xs-4">
                <label><input type="checkbox" name="personality"> Crazy</label>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-7">
                <input type="text" class="form-control" placeholder="cat photo URL" required>
            </div>
            <div class="col-xs-5">
                <button type="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Submit</button>
            </div>
        </div>
    </form>
</div>
```

### 19. 创建一个 Bootstrap 标题

```html
<h3 class="text-primary text-center">jQuery Playground</h3>
```

### 20. 将页面放在 container-fluid div 中

```html
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
</div>
```

### 21. 创建一个 Bootstrap Row

```html
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
    <div class="row">

    </div>
</div>
```

### 22. 分割 Bootstrap Row

```html
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
    <div class="row">
        <div class="col-xs-6">

        </div>
        <div class="col-xs-6">

        </div>
    </div>
</div>
```

### 23. 创建 Bootstrap Wells

> Bootstrap 有一个叫作 well 的 class，作用是使界面更具层次感。

```html
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
    <div class="row">
        <div class="col-xs-6">
            <div class="well">

            </div>
        </div>
        <div class="col-xs-6">
            <div class="well">

            </div>
        </div>
    </div>
</div>
```

### 24. 在 Bootstrap Wells 中添加元素

```html
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
    <div class="row">
        <div class="col-xs-6">
            <div class="well">
                <button> </button>
                <button> </button>
                <button> </button>
            </div>
        </div>
        <div class="col-xs-6">
            <div class="well">
                <button> </button>
                <button> </button>
                <button> </button>
            </div>
        </div>
    </div>
</div>
```

### 25. 给 Bootstrap 按钮添加默认样式

```html
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
    <div class="row">
        <div class="col-xs-6">
            <div class="well">
                <button class="btn btn-default"></button>
                <button class="btn btn-default"></button>
                <button class="btn btn-default"></button>
            </div>
        </div>
        <div class="col-xs-6">
            <div class="well">
                <button class="btn btn-default"></button>
                <button class="btn btn-default"></button>
                <button class="btn btn-default"></button>
            </div>
        </div>
    </div>
</div>
```

### 26. 用 jQuery 选择器给目标元素的添加 class

> 并不是所有 class 属性都需要有对应的 CSS 样式。 有时候我们设置 class 只是为了更方便地在 jQuery 中选中这些元素。
>
> 为每一个 button 元素添加 target class。

```html
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
    <div class="row">
        <div class="col-xs-6">
            <div class="well">
                <button class="btn btn-default target"></button>
                <button class="btn btn-default target"></button>
                <button class="btn btn-default target"></button>
            </div>
        </div>
        <div class="col-xs-6">
            <div class="well">
                <button class="btn btn-default target"></button>
                <button class="btn btn-default target"></button>
                <button class="btn btn-default target"></button>
            </div>
        </div>
    </div>
</div>
```

### 27. 给 Bootstrap 元素添加 id 属性

> 除了可以给元素添加 class 属性，我们还可以给元素设置 id 属性。
>
> 每个元素的 id 都必须是唯一的，并且在一个页面中只能使用一次。

```html
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
    <div class="row">
        <div class="col-xs-6">
            <div class="well" id="left-well">
                <button class="btn btn-default target"></button>
                <button class="btn btn-default target"></button>
                <button class="btn btn-default target"></button>
            </div>
        </div>
        <div class="col-xs-6">
            <div class="well" id="right-well">
                <button class="btn btn-default target"></button>
                <button class="btn btn-default target"></button>
                <button class="btn btn-default target"></button>
            </div>
        </div>
    </div>
</div>
```

### 28. 给 Bootstrap Wells 设置标签

```html
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
    <div class="row">
        <div class="col-xs-6">
            <h4>#left-well</h4>
            <div class="well" id="left-well">
                <button class="btn btn-default target"></button>
                <button class="btn btn-default target"></button>
                <button class="btn btn-default target"></button>
            </div>
        </div>
        <div class="col-xs-6">
            <h4>#right-well</h4>
            <div class="well" id="right-well">
                <button class="btn btn-default target"></button>
                <button class="btn btn-default target"></button>
                <button class="btn btn-default target"></button>
            </div>
        </div>
    </div>
</div>
```

### 29. 给每个元素一个唯一的 id

```html
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
    <div class="row">
        <div class="col-xs-6">
            <h4>#left-well</h4>
            <div class="well" id="left-well">
                <button class="btn btn-default target" id="target1"></button>
                <button class="btn btn-default target" id="target2"></button>
                <button class="btn btn-default target" id="target3"></button>
            </div>
        </div>
        <div class="col-xs-6">
            <h4>#right-well</h4>
            <div class="well" id="right-well">
                <button class="btn btn-default target" id="target4"></button>
                <button class="btn btn-default target" id="target5"></button>
                <button class="btn btn-default target" id="target6"></button>
            </div>
        </div>
    </div>
</div>
```

### 30. 给 Bootstrap 按钮设置标签

```html
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
    <div class="row">
        <div class="col-xs-6">
            <h4>#left-well</h4>
            <div class="well" id="left-well">
                <button class="btn btn-default target" id="target1">#target1</button>
                <button class="btn btn-default target" id="target2">#target2</button>
                <button class="btn btn-default target" id="target3">#target3</button>
            </div>
        </div>
        <div class="col-xs-6">
            <h4>#right-well</h4>
            <div class="well" id="right-well">
                <button class="btn btn-default target" id="target4">#target4</button>
                <button class="btn btn-default target" id="target5">#target5</button>
                <button class="btn btn-default target" id="target6">#target6</button>
            </div>
        </div>
    </div>
</div>
```

### 31. 使用注释来说明代码

```html
<!-- Code below this line should not be changed -->
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
    <div class="row">
        <div class="col-xs-6">
            <h4>#left-well</h4>
            <div class="well" id="left-well">
                <button class="btn btn-default target" id="target1">#target1</button>
                <button class="btn btn-default target" id="target2">#target2</button>
                <button class="btn btn-default target" id="target3">#target3</button>
            </div>
        </div>
        <div class="col-xs-6">
            <h4>#right-well</h4>
            <div class="well" id="right-well">
                <button class="btn btn-default target" id="target4">#target4</button>
                <button class="btn btn-default target" id="target5">#target5</button>
                <button class="btn btn-default target" id="target6">#target6</button>
            </div>
        </div>
    </div>
</div>
```
