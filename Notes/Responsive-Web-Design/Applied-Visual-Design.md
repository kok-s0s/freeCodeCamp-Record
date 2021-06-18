<!--
 * @Author: kok-s0s
 * @Date: 2021-06-02 20:36:08
 * @LastEditTime: 2021-06-18 17:20:55
 * @Description: 可视化设计
-->

Visual design is a combination of typography, color theory, graphics, animation, page layout, and more to help deliver your unique message.

# Applied Visual Design

### 1. 使用 text-align 属性创建视觉平衡

text-align 四种属性
1. center---centers the text.
2. right---right-aligns the text.
3. left---(the default) left-aligns the text.
4. justify---causes all lines of text except the last line to meet the left and right edges of the line box.

### 2. 使用 width 属性调整元素的宽度

```css
img {
    width: 220px;
}
```

### 3. 使用 height 属性调整元素的高度

```css
img {
    height: 20px;
}
```

### 4. 使用 strong Tag 使文本加粗

```html
<strong>Stanford University.</strong>
```

效果类似于 `font-weight: bold`

### 5. 使用 u Tag 给文本加下划线

```html
<u>Ph.D. students</u>
```

效果类似于 CSS 的 `text-decoration: underline; `

### 6. 使用 em Tag 使文本斜体

```html
<p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
```

### 7. 使用 s Tag 删除文本

```html
<h4><s>Google</s>Alphabet</h4>
```

效果类似于 CSS 中的 `text-decoration: line-through; `

### 8. 使用 hr 元素创建一条水平线

```html
<h4><s>Google</s>Alphabet</h4>
<hr>
<p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
```

### 9. 调整 Text 的 background-color 属性

```css
h4 {
    text-align: center;
    padding: 10px;
    background-color: rgba(45, 45, 45, 0.1);

}
```

### 10. font-size 调整标题与段落标签的大小

```css
h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;
}
```

### 11. 向类似卡片的元素添加框阴影

The box-shadow property takes values for

* `offset-x` (how far to push the shadow horizontally from the element), 
* `offset-y` (how far to push the shadow vertically from the element), 
* `blur-radius`, 
* `spread-radius`, 
* `color`, in that order.
  
The `blur-radius` and `spread-radius` values are optional.

```css
#thumbnail {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
```

### 12. 降低元素的不透明度

> A value of 1 is opaque, which isn't transparent at all.
> A value of 0.5 is half see-through.
> A value of 0 is completely transparent.

```css
.links {
    opacity: 0.7;
}
```

### 13. 使用 text-transform 属性使文本大写

|Value|	Result|
| ---------- | --- |
|lowercase|	"transform me"|
|uppercase|	"TRANSFORM ME"|
|capitalize|	"Transform Me"|
|initial|	Use the default value|
|inherit|	Use the text-transform value from the parent element|
|none	|Default: Use the original text|

```css
h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;
    text-transform: uppercase;
}
```

### 14. 为多个标题元素设置字体大小

```html
<style>
    h1 {
        font-size: 68px;
    }

    h2 {
        font-size: 52px;
    }

    h3 {
        font-size: 40px;
    }

    h4 {
        font-size: 32px;
    }

    h5 {
        font-size: 21px;
    }

    h6 {
        font-size: 14px;
    }
</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>
```

### 15. 为多个标题元素设置字体粗细

```html
<style>
    h1 {
        font-size: 68px;
        font-weight: 800;
    }

    h2 {
        font-size: 52px;
        font-weight: 600;
    }

    h3 {
        font-size: 40px;
        font-weight: 500;
    }

    h4 {
        font-size: 32px;
        font-weight: 400;
    }

    h5 {
        font-size: 21px;
        font-weight: 300;
    }

    h6 {
        font-size: 14px;
        font-weight: 200;
    }
</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>
```

### 16. 设置段落文本的字体大小

```html
<style>
    p {
        font-size: 16px;
    }
</style>
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
```

### 17. 设置段落的行高

 `line-height`

```html
<style>
    p {
        font-size: 16px;
        line-height: 25px;
    }
</style>
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
```

### 18. 调整 a Tag 的悬停状态   (链接)

```html
<style>
    a {
        color: #000;
    }

    a:hover {
        color: blue;
    }
</style>
<a href="https://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>
```

### 19. 更改元素的相对位置

```html
<style>
    h2 {
        position: relative;
        top: 15px;
    }
</style>

<body>
    <h1>On Being Well-Positioned</h1>
    <h2>Move me!</h2>
    <p>I still think the h2 is where it normally sits.</p>
</body>
```

### 20. 使用 CSS 偏移移动相对定位的元素

相对定位下，要往哪偏移，就对相反的方向进行操作。

```html
<head>
    <style>
        h2 {
            position: relative;
            left: 15px;
            bottom: 10px;
        }
    </style>
</head>

<body>
    <h1>On Being Well-Positioned</h1>
    <h2>Move me!</h2>
    <p>I still think the h2 is where it normally sits.</p>
</body>
```

### 21. 使用绝对定位将元素锁定到其父元素

绝对定位下的偏移是实实在在的移动。

```html
<style>
    #searchbar {
        position: absolute;
        top: 50px;
        right: 50px;
    }

    section {
        position: relative;
    }
</style>

<body>
    <h1>Welcome!</h1>
    <section>
        <form id="searchbar">
            <label for="search">Search:</label>
            <input type="search" id="search" name="search">
            <input type="submit" name="submit" value="Go!">
        </form>
    </section>
</body>
```

### 22. 使用固定定位将元素锁定到浏览器窗口

固定位置和绝对位置之间的一个关键区别在于，当用户滚动时，具有固定位置的元素不会移动。

```html
<style>
    body {
        min-height: 150vh;
    }

    #navbar {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        background-color: #767676;
    }

    nav ul {
        margin: 0px;
        padding: 5px 0px 5px 30px;
    }

    nav li {
        display: inline;
        margin-right: 20px;
    }

    a {
        text-decoration: none;
    }
</style>

<body>
    <header>
        <h1>Welcome!</h1>
        <nav id="navbar">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    </header>
    <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>
```

### 23. 使用 float 浮动属性向左或向右推送元素

```html
<head>
    <style>
        #left {
            float: left;
            width: 50%;
        }

        #right {
            float: right;
            width: 40%;
        }

        aside,
        section {
            padding: 2px;
            background-color: #ccc;
        }
    </style>
</head>

<body>
    <header>
        <h1>Welcome!</h1>
    </header>
    <section id="left">
        <h2>Content</h2>
        <p>Good stuff</p>
    </section>
    <aside id="right">
        <h2>Sidebar</h2>
        <p>Links</p>
    </aside>
</body>
```

### 24. 使用 z-index 属性更改重叠元素的位置

```html
<style>
    div {
        width: 60%;
        height: 200px;
        margin-top: 20px;
    }

    .first {
        background-color: red;
        position: absolute;
        z-index: 2;
    }

    .second {
        background-color: blue;
        position: absolute;
        left: 40px;
        top: 50px;
        z-index: 1;
    }
</style>

<div class="first"></div>
<div class="second"></div>
```

### 25. 使用 margin 属性将元素水平居中

```html
<style>
    div {
        background-color: blue;
        height: 100px;
        width: 100px;
        margin: auto;
    }
</style>
<div></div>
```

### 26. 互补色

利用好互补色达到显示更好页面的效果。

```html
<style>
    body {
        background-color: #FFFFFF;
    }

    .blue {
        background-color: #0000FF;
    }

    .yellow {
        background-color: #FFFF00;
    }

    div {
        display: inline-block;
        height: 100px;
        width: 100px;
    }
</style>
<div class="blue"></div>
<div class="yellow"></div>
```

### 27. Tertiary Colors 三次色

R(red)G(Green)B(Blue)

```html
<style>
    body {
        background-color: #FFFFFF;
    }

    .orange {
        background-color: #FF7F00;
    }

    .cyan {
        background-color: #00FFFF;
    }

    .raspberry {
        background-color: #FF007F;
    }

    div {
        height: 100px;
        width: 100px;
        margin-bottom: 5px;
    }
</style>

<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```

### 28. 将各种元素的颜色调整为互补色

互补色会产生强烈的视觉对比，在某些内容上使用能带来视觉上的注意。

```html
    <style>
        body {
            background-color: white;
        }

        header {
            background-color: #09A7A1;
            color: white;
            padding: 0.25em;
        }

        h2 {
            color: #09A7A1;
        }

        button {
            background-color: #FF790E;
        }

        footer {
            background-color: #09A7A1;
            color: white;
            padding: 0.5em;
        }
    </style>
    <header>
        <h1>Cooking with FCC!</h1>
    </header>
    <main>
        <article>
            <h2>Machine Learning in the Kitchen</h2>
            <p>Join this two day workshop that walks through how to implement cutting-edge snack-getting algorithms with a command line interface. Coding usually involves writing exact instructions, but sometimes you need your computer to execute flexible commands, like <code>fetch Pringles</code>.</p>
            <button>Sign Up</button>
        </article>
        <article>
            <h2>Bisection Vegetable Chopping</h2>
            <p>This week-long retreat will level-up your coding ninja skills to actual ninja skills. No longer is the humble bisection search limited to sorted arrays or coding interview questions, applying its concepts in the kitchen will have you chopping carrots in O(log n) time before you know it.</p>
            <button>Sign Up</button>
        </article>
    </main>
    <br>
    <footer>&copy; 2018 FCC Kitchen</footer>
```

### 29. 调整颜色的色调 Adjust the Hue of a Color

Hue is what people generally think of as 'color'. If you picture a spectrum of colors starting with red on the left, moving through green in the middle, and blue on right, the hue is where a color fits along this line. In hsl(), hue uses a color wheel concept instead of the spectrum, where the angle of the color on the circle is given as a value between 0 and 360.

Saturation is the amount of gray in a color. A fully saturated color has no gray in it, and a minimally saturated color is almost completely gray. This is given as a percentage with 100% being fully saturated.

Lightness is the amount of white or black in a color. A percentage is given ranging from 0% (black) to 100% (white), where 50% is the normal color.

```html
<style>
    body {
        background-color: #FFFFFF;
    }

    .green {
        background-color: hsl(120, 100%, 50%);
    }

    .cyan {
        background-color: hsl(180, 100%, 50%);
    }

    .blue {
        background-color: hsl(240, 100%, 50%);
    }

    div {
        display: inline-block;
        height: 100px;
        width: 100px;
    }
</style>

<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>
```

### 30. Adjust the Tone of a Color

`hsl` 的微调操作。

```html
<style>
    header {
        background-color: hsl(180, 90%, 35%);
        color: #FFFFFF;
    }

    nav {
        background-color: hsl(180, 80%, 25%);
    }

    h1 {
        text-indent: 10px;
        padding-top: 10px;
    }

    nav ul {
        margin: 0px;
        padding: 5px 0px 5px 30px;
    }

    nav li {
        display: inline;
        margin-right: 20px;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
</style>

<header>
    <h1>Cooking with FCC!</h1>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Classes</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</header>
```

### 31. 创建渐变 CSS 线性渐变

渐变色的设置

```html
<style>
    div {
        border-radius: 20px;
        width: 70%;
        height: 400px;
        margin: 50px auto;
        background: linear-gradient(35deg, #CCFFFF, #FFCCCC);
    }
</style>

<div></div>
```

### 32. 使用 CSS 线性渐变创建条纹元素

The angle value is the direction of the gradient. Color stops are like width values that mark where a transition takes place, and are given with a percentage or a number of pixels.

```html
<style>
    div {
        border-radius: 20px;
        width: 70%;
        height: 400px;
        margin: 50 auto;
        background: repeating-linear-gradient(45deg,
                yellow 0px,
                yellow 40px,
                black 40px,
                black 80px);
    }
</style>

<div></div>
```

### 33. 通过添加微妙的图案作为背景图像来创建纹理

就是为背景设置个图片。

```html
<style>
    body {
        background: url(https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png);
    }
</style>
```

### 34. 使用 CSS Transform scale 属性更改元素的大小

算是更改比例来达到改变元素大小的效果。

```html
<style>
    .ball {
        width: 40px;
        height: 40px;
        margin: 50 auto;
        position: fixed;
        background: linear-gradient(35deg,
                #ccffff,
                #ffcccc);
        border-radius: 50%;
    }

    #ball1 {
        left: 20%;
    }

    #ball2 {
        left: 65%;
        transform: scale(1.5);
    }
</style>

<div class="ball" id="ball1"></div>
<div class="ball" id="ball2"></div>
```

### 35. Use the CSS Transform scale Property to Scale an Element on Hover

> 使用 CSS Transform scale 属性在悬停时缩放元素 

```html
<style>
    div {
        width: 70%;
        height: 100px;
        margin: 50px auto;
        background: linear-gradient(53deg,
                #ccfffc,
                #ffcccf);
    }

    div:hover {
        transform: scale(1.1);
    }
</style>

<div></div>
```

### 36. 使用 CSS 变换属性 skewX 沿 X 轴倾斜元素

设置元素倾斜角。

```html
<style>
    div {
        width: 70%;
        height: 100px;
        margin: 50px auto;
    }

    #top {
        background-color: red;
    }

    #bottom {
        background-color: blue;
        transform: skewX(24deg);
    }
</style>

<div id="top"></div>
<div id="bottom"></div>
```

### 37. 使用 CSS 变换属性 skewY 沿 Y 轴倾斜元素

```html
<style>
    div {
        width: 70%;
        height: 100px;
        margin: 50px auto;
    }

    #top {
        background-color: red;
        transform: skewY(-10deg);
    }

    #bottom {
        background-color: blue;
        transform: skewX(24deg);
    }
</style>

<div id="top"></div>
<div id="bottom"></div>
```

### 38. 使用 CSS 创建图形

> 样例 创建出一个月亮形状。

```html
<style>
    .center {
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100px;
        height: 100px;
        background-color: transparent;
        border-radius: 50%;
        box-shadow: 25px 10px 0px 0px blue;
    }
</style>
<div class="center"></div>
```

### 39. 使用 CSS 和 HTML 创建更复杂的形状

> 创建一个心形图形。

```html
<style>
    .heart {
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: pink;
        height: 50px;
        width: 50px;
        transform: rotate(-45deg);
    }

    .heart::after {
        background-color: pink;
        content: "";
        border-radius: 50%;
        position: absolute;
        width: 50px;
        height: 50px;
        top: 0px;
        left: 25px;
    }

    .heart::before {
        content: "";
        background-color: pink;
        border-radius: 50%;
        position: absolute;
        width: 50px;
        height: 50px;
        top: -25px;
        left: 0px;
    }
</style>
<div class="heart"></div>
```

### 40. CSS @keyframes 和动画属性的工作原理

动画要设置动画的名字和持续事件。

```html
<style>
    div {
        height: 40px;
        width: 70%;
        background: black;
        margin: 50px auto;
        border-radius: 5px;
    }

    #rect {
        animation-name: rainbow;
        animation-duration: 4s;

    }

    @keyframes rainbow {
        0% {
            background-color: blue;
        }

        50% {
            background-color: green;
        }

        100% {
            background-color: yellow;
        }
    }
</style>
<div id="rect"></div>
```

### 41. 使用 CSS 动画更改按钮的悬停状态

```html
<style>
    button {
        border-radius: 5px;
        color: white;
        background-color: #0F5897;
        padding: 5px 10px 8px 10px;
    }

    button:hover {
        animation-name: background-color;
        animation-duration: 500ms;
    }

    @keyframes background-color {
        100% {
            background-color: #4791d0;
        }
    }
</style>

<button>Register</button>
```

### 42. 修改动画的填充模式

```html
<style>
    button {
        border-radius: 5px;
        color: white;
        background-color: #0F5897;
        padding: 5px 10px 8px 10px;
    }

    button:hover {
        animation-name: background-color;
        animation-duration: 500ms;
        /* Only change code below this line */
        animation-fill-mode: forwards;
        /* Set the animation-fill-mode property of button:hover to forwards so the button stays highlighted when a user hovers over it. */

        /* Only change code above this line */
    }

    @keyframes background-color {
        100% {
            background-color: #4791d0;
        }
    }
</style>
<button>Register</button>
```

### 43. 使用 CSS 动画创建运动

```html
<style>
    div {
        height: 40px;
        width: 70%;
        background: black;
        margin: 50px auto;
        border-radius: 5px;
        position: relative;
    }

    #rect {
        animation-name: rainbow;
        animation-duration: 4s;
    }

    @keyframes rainbow {
        0% {
            background-color: blue;
            top: 0px;
            left: 0px;
        }

        50% {
            background-color: green;
            top: 50px;
            left: 25px;
        }

        100% {
            background-color: yellow;
            top: 0px;
            left: -25px;
        }
    }
</style>

<div id="rect"></div>
```

### 44. 通过从左到右淡化元素来创建视觉方向

小球想有移动同时逐渐淡出。

```html
<style>
    #ball {
        width: 70px;
        height: 70px;
        margin: 50px auto;
        position: fixed;
        left: 20%;
        border-radius: 50%;
        background: linear-gradient(35deg,
                #ccffff,
                #ffcccc);
        animation-name: fade;
        animation-duration: 3s;
    }

    @keyframes fade {
        50% {
            left: 60%;
            opacity: 0.1;
        }
    }
</style>

<div id="ball"></div>
```

### 45. 连续使用无限动画计数动画元素

> animation-iteration-count: infinite; 

```html
<style>
    #ball {
        width: 100px;
        height: 100px;
        margin: 50px auto;
        position: relative;
        border-radius: 50%;
        background: linear-gradient(35deg,
                #ccffff,
                #ffcccc);
        animation-name: bounce;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

    @keyframes bounce {
        0% {
            top: 0px;
        }

        50% {
            top: 249px;
            width: 130px;
            height: 70px;
        }

        100% {
            top: 0px;
        }
    }
</style>
<div id="ball"></div>
```

### 46. 使用 Inf 制作 CSS Heartbeat

```html
<style>
    .back {
        position: fixed;
        padding: 0;
        margin: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        animation-name: backdiv;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

    .heart {
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: pink;
        height: 50px;
        width: 50px;
        transform: rotate(-45deg);
        animation-name: beat;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

    .heart:after {
        background-color: pink;
        content: "";
        border-radius: 50%;
        position: absolute;
        width: 50px;
        height: 50px;
        top: 0px;
        left: 25px;
    }

    .heart:before {
        background-color: pink;
        content: "";
        border-radius: 50%;
        position: absolute;
        width: 50px;
        height: 50px;
        top: -25px;
        left: 0px;
    }

    @keyframes backdiv {
        50% {
            background: #ffe6f2;
        }
    }

    @keyframes beat {
        0% {
            transform: scale(1) rotate(-45deg);
        }

        50% {
            transform: scale(0.6) rotate(-45deg);
        }
    }
</style>
<div class="back"></div>
<div class="heart"></div>
```

### 47. 以可变速率动画元素

```html
<style>
    .stars {
        background-color: white;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        animation-iteration-count: infinite;
    }

    .star-1 {
        margin-top: 15%;
        margin-left: 60%;
        animation-name: twinkle-1;
        animation-duration: 1s;
    }

    .star-2 {
        margin-top: 25%;
        margin-left: 25%;
        animation-name: twinkle-2;
        animation-duration: 1s;
    }

    @keyframes twinkle-1 {
        50% {
            transform: scale(0.5);
            opacity: 0.5;
        }
    }

    @keyframes twinkle-2 {
        20% {
            transform: scale(0.5);
            opacity: 0.5;
        }
    }

    #back {
        position: fixed;
        padding: 0;
        margin: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
    }
</style>

<div id="back"></div>
<div class="star-1 stars"></div>
<div class="star-2 stars"></div>
```

### 48. 以可变速率动画多个元素

```html
<style>
    .stars {
        background-color: white;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        animation-iteration-count: infinite;
    }

    .star-1 {
        margin-top: 15%;
        margin-left: 60%;
        animation-duration: 1s;
        animation-name: twinkle;
    }

    .star-2 {
        margin-top: 25%;
        margin-left: 25%;
        animation-duration: 0.9s;
        animation-name: twinkle;
    }

    .star-3 {
        margin-top: 10%;
        margin-left: 50%;
        animation-duration: 1.1s;
        animation-name: twinkle;
    }

    @keyframes twinkle {
        20% {
            transform: scale(0.5);
            opacity: 0.5;
        }
    }

    #back {
        position: fixed;
        padding: 0;
        margin: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
    }
</style>

<div id="back"></div>
<div class="star-1 stars"></div>
<div class="star-2 stars"></div>
<div class="star-3 stars"></div>
```

### 49. 使用关键字更改动画时间

```html
<style>
    .balls {
        border-radius: 50%;
        background: linear-gradient(35deg,
                #ccffff,
                #ffcccc);
        position: fixed;
        width: 50px;
        height: 50px;
        margin-top: 50px;
        animation-name: bounce;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }

    #ball1 {
        left: 27%;
        animation-timing-function: linear;
    }

    #ball2 {
        left: 56%;
        animation-timing-function: ease-out;
    }

    @keyframes bounce {
        0% {
            top: 0px;
        }

        100% {
            top: 249px;
        }
    }
</style>

<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```

### 50. 贝塞尔曲线的工作原理

```html
<style>
    .balls {
        border-radius: 50%;
        background: linear-gradient(35deg,
                #ccffff,
                #ffcccc);
        position: fixed;
        width: 50px;
        height: 50px;
        margin-top: 50px;
        animation-name: bounce;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }

    #ball1 {
        left: 27%;
        animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
    }

    #ball2 {
        left: 56%;
        animation-timing-function: ease-out;
    }

    @keyframes bounce {
        0% {
            top: 0px;
        }

        100% {
            top: 249px;
        }
    }
</style>

<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```

### 51. 使用贝塞尔曲线移动图形

```html
<style>
    .balls {

        border-radius: 50%;
        position: fixed;
        width: 50px;
        height: 50px;
        margin-top: 50px;
        animation-name: bounce;
        animation-duration: 2s;
        animation-iteration-count: infinite;

    }

    #red {

        background: red;
        left: 27%;
        animation-timing-function: cubic-bezier(0, 0, 0.58, 1);

    }

    #blue {

        background: blue;
        left: 56%;
        animation-timing-function: ease-out;

    }

    @keyframes bounce {

        0% {
            top: 0px;
        }

        100% {
            top: 249px;
        }

    }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
```

### 52. 使用贝塞尔曲线使运动更自然

```html
<style>
    .balls {
        border-radius: 50%;
        position: fixed;
        width: 50px;
        height: 50px;
        top: 60%;
        animation-name: jump;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }

    #red {
        background: red;
        left: 25%;
        animation-timing-function: linear;
    }

    #blue {
        background: blue;
        left: 50%;
        animation-timing-function: ease-out;
    }

    #green {
        background: green;
        left: 75%;
        animation-timing-function: cubic-bezier(0.311, 0.441, 0.444, 1.649);
    }

    @keyframes jump {
        50% {
            top: 10%;
        }
    }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>
```
