<!--
 * @Author: kok-s0s
 * @Date: 2021-07-10 09:16:56
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-07-10 10:03:30
 * @Description: CSS 弹性盒子
-->

> Flexbox is a powerful, well-supported layout method that was introduced with the latest version of CSS, CSS3. With flexbox, it's easy to center elements on the page and create dynamic user interfaces that shrink and expand automatically.

### 1. 使用 display: flex 定位两个盒子

```html
<style>
    #box-container {
        height: 500px;
        display: flex;
    }

    #box-1 {
        background-color: dodgerblue;
        width: 50%;
        height: 50%;
    }

    #box-2 {
        background-color: orangered;
        width: 50%;
        height: 50%;
    }
</style>
<div id="box-container">
    <div id="box-1"></div>
    <div id="box-2"></div>
</div>
```

### 2. 在推文中添加弹性盒子布局

```html
<style>
    body {
        font-family: Arial, sans-serif;
    }

    header {
        display: flex;
    }

    header .profile-thumbnail {
        width: 50px;
        height: 50px;
        border-radius: 4px;
    }

    header .profile-name {
        display: flex;
        margin-left: 10px;
    }

    header .follow-btn {
        display: flex;
        margin: 0 0 0 auto;
    }

    header .follow-btn button {
        border: 0;
        border-radius: 3px;
        padding: 5px;
    }

    header h3,
    header h4 {
        display: flex;
        margin: 0;
    }

    #inner p {
        margin-bottom: 10px;
        font-size: 20px;
    }

    #inner hr {
        margin: 20px 0;
        border-style: solid;
        opacity: 0.1;
    }

    footer {
        display: flex;
    }

    footer .stats {
        display: flex;
        font-size: 15px;
    }

    footer .stats strong {
        font-size: 18px;
    }

    footer .stats .likes {
        margin-left: 10px;
    }

    footer .cta {
        margin-left: auto;
    }

    footer .cta button {
        border: 0;
        background: transparent;
    }
</style>
<header>
    <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
    <div class="profile-name">
        <h3>Quincy Larson</h3>
        <h4>@ossia</h4>
    </div>
    <div class="follow-btn">
        <button>Follow</button>
    </div>
</header>
<div id="inner">
    <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart,
        you still have to work hard.</p>
    <span class="date">1:32 PM - 12 Jan 2018</span>
    <hr>
</div>
<footer>
    <div class="stats">
        <div class="Retweets">
            <strong>107</strong> Retweets
        </div>
        <div class="likes">
            <strong>431</strong> Likes
        </div>
    </div>
    <div class="cta">
        <button class="share-btn">Share</button>
        <button class="retweet-btn">Retweet</button>
        <button class="like-btn">Like</button>
    </div>
</footer>
```

 

### 3. 使用 flex-direction 属性创建一个行

```html
<style>
    #box-container {
        display: flex;
        height: 500px;
        flex-direction: row-reverse;
    }

    #box-1 {
        background-color: dodgerblue;
        width: 50%;
        height: 50%;
    }

    #box-2 {
        background-color: orangered;
        width: 50%;
        height: 50%;
    }
</style>

<div id="box-container">
    <div id="box-1"></div>
    <div id="box-2"></div>
</div>
```

 

### 4. 使用 flex-direction 在嵌入推文中创建多行

```html
<style>
    body {
        font-family: Arial, sans-serif;
    }

    header {
        display: flex;
        flex-direction: row;
    }

    header .profile-thumbnail {
        width: 50px;
        height: 50px;
        border-radius: 4px;
    }

    header .profile-name {
        display: flex;
        margin-left: 10px;
    }

    header .follow-btn {
        display: flex;
        margin: 0 0 0 auto;
    }

    header .follow-btn button {
        border: 0;
        border-radius: 3px;
        padding: 5px;
    }

    header h3,
    header h4 {
        display: flex;
        margin: 0;
    }

    #inner p {
        margin-bottom: 10px;
        font-size: 20px;
    }

    #inner hr {
        margin: 20px 0;
        border-style: solid;
        opacity: 0.1;
    }

    footer {
        display: flex;
        flex-direction: row;
    }

    footer .stats {
        display: flex;
        font-size: 15px;
    }

    footer .stats strong {
        font-size: 18px;
    }

    footer .stats .likes {
        margin-left: 10px;
    }

    footer .cta {
        margin-left: auto;
    }

    footer .cta button {
        border: 0;
        background: transparent;
    }
</style>
<header>
    <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
    <div class="profile-name">
        <h3>Quincy Larson</h3>
        <h4>@ossia</h4>
    </div>
    <div class="follow-btn">
        <button>Follow</button>
    </div>
</header>
<div id="inner">
    <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
    <span class="date">1:32 PM - 12 Jan 2018</span>
    <hr>
</div>
<footer>
    <div class="stats">
        <div class="Retweets">
            <strong>107</strong> Retweets
        </div>
        <div class="likes">
            <strong>431</strong> Likes
        </div>
    </div>
    <div class="cta">
        <button class="share-btn">Share</button>
        <button class="retweet-btn">Retweet</button>
        <button class="like-btn">Like</button>
    </div>
</footer>
```

 

### 5. 使用 flex-direction 属性创建一列

```html
<style>
    #box-container {
        display: flex;
        height: 500px;
        flex-direction: column;
    }

    #box-1 {
        background-color: dodgerblue;
        width: 50%;
        height: 50%;
    }

    #box-2 {
        background-color: orangered;
        width: 50%;
        height: 50%;
    }
</style>

<div id="box-container">
    <div id="box-1"></div>
    <div id="box-2"></div>
</div>
```

 

### 6. 使用 flex-direction 在嵌入推文中创建一列

```html
<style>
    body {
        font-family: Arial, sans-serif;
    }

    header,
    footer {
        display: flex;
        flex-direction: row;
    }

    header .profile-thumbnail {
        width: 50px;
        height: 50px;
        border-radius: 4px;
    }

    header .profile-name {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
    }

    header .follow-btn {
        display: flex;
        margin: 0 0 0 auto;
    }

    header .follow-btn button {
        border: 0;
        border-radius: 3px;
        padding: 5px;
    }

    header h3,
    header h4 {
        display: flex;
        margin: 0;
    }

    #inner p {
        margin-bottom: 10px;
        font-size: 20px;
    }

    #inner hr {
        margin: 20px 0;
        border-style: solid;
        opacity: 0.1;
    }

    footer .stats {
        display: flex;
        font-size: 15px;
    }

    footer .stats strong {
        font-size: 18px;
    }

    footer .stats .likes {
        margin-left: 10px;
    }

    footer .cta {
        margin-left: auto;
    }

    footer .cta button {
        border: 0;
        background: transparent;
    }
</style>
<header>
    <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
    <div class="profile-name">
        <h3>Quincy Larson</h3>
        <h4>@ossia</h4>
    </div>
    <div class="follow-btn">
        <button>Follow</button>
    </div>
</header>
<div id="inner">
    <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
    <span class="date">1:32 PM - 12 Jan 2018</span>
    <hr>
</div>
<footer>
    <div class="stats">
        <div class="Retweets">
            <strong>107</strong> Retweets
        </div>
        <div class="likes">
            <strong>431</strong> Likes
        </div>
    </div>
    <div class="cta">
        <button class="share-btn">Share</button>
        <button class="retweet-btn">Retweet</button>
        <button class="like-btn">Like</button>
    </div>
</footer>
```

### 7. 使用 justify-content 属性对齐元素

```html
<style>
    #box-container {
        background: gray;
        display: flex;
        height: 500px;
        /* justify-content: flex-start; */
        justify-content: center
            /* justify-content: flex-end; */
            /* justify-content: space-between; */
            /* justify-content: space-around; */
            /* justify-content: space-evenly; */
    }

    #box-1 {
        background-color: dodgerblue;
        width: 25%;
        height: 100%;
    }

    #box-2 {
        background-color: orangered;
        width: 25%;
        height: 100%;
    }
</style>

<div id="box-container">
    <div id="box-1"></div>
    <div id="box-2"></div>
</div>
```

### 8. 在推文中使用 justify-content 属性

```html
<style>
    body {
        font-family: Arial, sans-serif;
    }

    header,
    footer {
        display: flex;
        flex-direction: row;
    }

    header .profile-thumbnail {
        width: 50px;
        height: 50px;
        border-radius: 4px;
    }

    header .profile-name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;
    }

    header .follow-btn {
        display: flex;
        margin: 0 0 0 auto;
    }

    header .follow-btn button {
        border: 0;
        border-radius: 3px;
        padding: 5px;
    }

    header h3,
    header h4 {
        display: flex;
        margin: 0;
    }

    #inner p {
        margin-bottom: 10px;
        font-size: 20px;
    }

    #inner hr {
        margin: 20px 0;
        border-style: solid;
        opacity: 0.1;
    }

    footer .stats {
        display: flex;
        font-size: 15px;
    }

    footer .stats strong {
        font-size: 18px;
    }

    footer .stats .likes {
        margin-left: 10px;
    }

    footer .cta {
        margin-left: auto;
    }

    footer .cta button {
        border: 0;
        background: transparent;
    }
</style>
<header>
    <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
    <div class="profile-name">
        <h3>Quincy Larson</h3>
        <h4>@ossia</h4>
    </div>
    <div class="follow-btn">
        <button>Follow</button>
    </div>
</header>
<div id="inner">
    <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
    <span class="date">1:32 PM - 12 Jan 2018</span>
    <hr>
</div>
<footer>
    <div class="stats">
        <div class="Retweets">
            <strong>107</strong> Retweets
        </div>
        <div class="likes">
            <strong>431</strong> Likes
        </div>
    </div>
    <div class="cta">
        <button class="share-btn">Share</button>
        <button class="retweet-btn">Retweet</button>
        <button class="like-btn">Like</button>
    </div>
</footer>
```

### 9. 使用 align-items 属性对齐元素

```html
<style>
    #box-container {
        background: gray;
        display: flex;
        height: 500px;
        align-items: center;
        /* align-items: flex-start; */
        /* align-items: flex-end; */
        /* align-items: stretch; */
        /* align-items: baseline; */
    }

    #box-1 {
        background-color: dodgerblue;
        width: 200px;
        font-size: 24px;
    }

    #box-2 {
        background-color: orangered;
        width: 200px;
        font-size: 18px;
    }
</style>

<div id="box-container">
    <div id="box-1">
        <p>Hello</p>
    </div>
    <div id="box-2">
        <p>Goodbye</p>
    </div>
</div>
```

### 10. 在推文中使用 align-items 属性

```html
<style>
    body {
        font-family: Arial, sans-serif;
    }

    header,
    footer {
        display: flex;
        flex-direction: row;
    }

    header .profile-thumbnail {
        width: 50px;
        height: 50px;
        border-radius: 4px;
    }

    header .profile-name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;
    }

    header .follow-btn {
        display: flex;
        align-items: center;
        margin: 0 0 0 auto;
    }

    header .follow-btn button {
        border: 0;
        border-radius: 3px;
        padding: 5px;
    }

    header h3,
    header h4 {
        display: flex;
        margin: 0;
    }

    #inner p {
        margin-bottom: 10px;
        font-size: 20px;
    }

    #inner hr {
        margin: 20px 0;
        border-style: solid;
        opacity: 0.1;
    }

    footer .stats {
        display: flex;
        font-size: 15px;
    }

    footer .stats strong {
        font-size: 18px;
    }

    footer .stats .likes {
        margin-left: 10px;
    }

    footer .cta {
        margin-left: auto;
    }

    footer .cta button {
        border: 0;
        background: transparent;
    }
</style>
<header>
    <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
    <div class="profile-name">
        <h3>Quincy Larson</h3>
        <h4>@ossia</h4>
    </div>
    <div class="follow-btn">
        <button>Follow</button>
    </div>
</header>
<div id="inner">
    <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
    <span class="date">1:32 PM - 12 Jan 2018</span>
    <hr>
</div>
<footer>
    <div class="stats">
        <div class="Retweets">
            <strong>107</strong> Retweets
        </div>
        <div class="likes">
            <strong>431</strong> Likes
        </div>
    </div>
    <div class="cta">
        <button class="share-btn">Share</button>
        <button class="retweet-btn">Retweet</button>
        <button class="like-btn">Like</button>
    </div>
</footer>
```

### 11. 使用 flex-wrap 属性包裹一行或一列

```html
<style>
    #box-container {
        background: gray;
        display: flex;
        height: 100%;
        flex-wrap: wrap;
        /* flex-wrap: wrap-reverse; */
        /* flex-wrap: nowrap; */
    }

    #box-1 {
        background-color: dodgerblue;
        width: 25%;
        height: 50%;
    }

    #box-2 {
        background-color: orangered;
        width: 25%;
        height: 50%;
    }

    #box-3 {
        background-color: violet;
        width: 25%;
        height: 50%;
    }

    #box-4 {
        background-color: yellow;
        width: 25%;
        height: 50%;
    }

    #box-5 {
        background-color: green;
        width: 25%;
        height: 50%;
    }

    #box-6 {
        background-color: black;
        width: 25%;
        height: 50%;
    }
</style>

<div id="box-container">
    <div id="box-1"></div>
    <div id="box-2"></div>
    <div id="box-3"></div>
    <div id="box-4"></div>
    <div id="box-5"></div>
    <div id="box-6"></div>
</div>
```

### 12. 使用 flex-shrink 属性定义 flex 子元素的收缩规则

> 子元素的 flex-shrink 接受数值作为属性值。 数值越大，则该元素与其他元素相比会被压缩得更厉害。 比如，一个项目的 flex-shrink 属性值为 1，另一个项目的 flex-shrink 属性值为 3，那么后者相比前者会受到 3 倍压缩。

```html
<style>
    #box-container {
        display: flex;
        height: 500px;
    }

    #box-1 {
        background-color: dodgerblue;
        width: 100%;
        height: 200px;
        flex-shrink: 1;
    }

    #box-2 {
        background-color: orangered;
        width: 100%;
        height: 200px;
        flex-shrink: 2;
    }
</style>

<div id="box-container">
    <div id="box-1"></div>
    <div id="box-2"></div>
</div>
```

### 13. 使用 flex-grow 属性定义 flex 子元素的增长系数

```html
<style>
    #box-container {
        display: flex;
        height: 500px;
    }

    #box-1 {
        background-color: dodgerblue;
        height: 200px;
        flex-grow: 1
    }

    #box-2 {
        background-color: orangered;
        height: 200px;
        flex-grow: 2;
    }
</style>

<div id="box-container">
    <div id="box-1"></div>
    <div id="box-2"></div>
</div>
```

### 14. 使用 flex-basis 属性设置元素的初始大小

> flex-basis 属性定义了在使用 CSS 的 flex-shrink 或 flex-grow 属性对元素进行调整前，元素的初始大小。 
>  
> flex-basis 属性的单位与其他表示尺寸的属性的单位一致（px、em、% 等）。 如果值为 auto，则项目的尺寸随内容调整。

```html
<style>
    #box-container {
        display: flex;
        height: 500px;
    }

    #box-1 {
        background-color: dodgerblue;
        height: 200px;
        flex-basis: 10em;
    }

    #box-2 {
        background-color: orangered;
        height: 200px;
        flex-basis: 20em;
    }
</style>

<div id="box-container">
    <div id="box-1"></div>
    <div id="box-2"></div>
</div>
```

### 15. 使用 flex 短方法属性

> 上面几个 flex 属性有一个简写方式。 flex-grow、flex-shrink 和 flex-basis 属性可以在 flex 中一并设置。
>
> 例如，flex: 1 0 10px; 会把项目属性设为 flex-grow: 1; 、flex-shrink: 0; 以及 flex-basis: 10px; 。
>
> 属性的默认设置是 flex: 0 1 auto; 。

```html
<style>
    #box-container {
        display: flex;
        height: 500px;
    }

    #box-1 {
        background-color: dodgerblue;
        flex: 2 2 150px;
        height: 200px;
    }

    #box-2 {
        background-color: orangered;
        flex: 1 1 150px;
        height: 200px;
    }
</style>

<div id="box-container">
    <div id="box-1"></div>
    <div id="box-2"></div>
</div>
```

### 16. 使用 order 属性重新排列子元素

```html
<style>
    #box-container {
        display: flex;
        height: 500px;
    }

    #box-1 {
        background-color: dodgerblue;
        order: 2;
        height: 200px;
        width: 200px;
    }

    #box-2 {
        background-color: orangered;
        order: 1;
        height: 200px;
        width: 200px;
    }
</style>

<div id="box-container">
    <div id="box-1"></div>
    <div id="box-2"></div>
</div>
```

### 17. 使用 align-self 属性

```html
<style>
    #box-container {
        display: flex;
        height: 500px;
    }

    #box-1 {
        background-color: dodgerblue;
        align-self: center;
        height: 200px;
        width: 200px;
    }

    #box-2 {
        background-color: orangered;
        align-self: flex-end;
        height: 200px;
        width: 200px;
    }
</style>

<div id="box-container">
    <div id="box-1"></div>
    <div id="box-2"></div>
</div>
```
