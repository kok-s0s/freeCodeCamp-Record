<!--
 * @Author: kok-s0s
 * @Date: 2021-07-18 10:31:12
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-07-18 14:47:05
 * @Description: SASS
-->

> Sass，英文全称为 “Syntactically Awesome StyleSheets”，是对 CSS 的扩展。它添加了一些 CSS 语法不具有的新特性。Sass 简化了 CSS，这让维护样式表变得更容易。

### 1. 用 Sass 变量存储数据

Sass 不同于 CSS 的一个特点是它允许使用变量。 可以在 Sass 中声明变量，并为它赋值，就像在 JavaScript 中一样。

在 JavaScript 中，变量是使用 let 和 const 关键字定义的。 在 Sass 中，变量以 $ 开头的，后跟变量名。

这里有几个例子：

```
$main-fonts: Arial, sans-serif;
$headings-color: green;
```

并使用变量：

```css
h1 {
    font-family: $main-fonts;
    color: $headings-color;
}
```

当需要把多个元素设置成相同颜色时，变量就会很有用。 一旦需要更改颜色，只需要改变这个变量的值就好。

```html
<style type='text/scss'>
    $text-color: red;

  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: $text-color;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
    <h2>Some random title</h2>
    <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
    <h2>Header #2</h2>
    <p>Here is some more random text.</p>
</div>
<div class="blog-post">
    <h2>Here is another header</h2>
    <p>Even more random text within a paragraph</p>
</div>
```

### 2. 用 Sass 嵌套 CSS

Sass 允许 CSS 规则的嵌套，这在组织样式表的时候会很有用。

```html
<style type='text/scss'>
    .blog-post {
    h1 {
      text-align: center;
      color: blue;
    }
    p {
      font-size: 20px;
    }
  }
</style>

<div class="blog-post">
    <h1>Blog Title</h1>
    <p>This is a paragraph</p>
</div>
```

### 3. 用 Mixins 创建可重用 CSS

在 Sass 中，mixin 是一组 CSS 声明，可以在整个样式表中重复使用。

CSS 的新功能需要一段时间适配后，所有浏览器后才能完全使用。 随着浏览器的不断升级，使用这些 CSS 规则时可能需要添加浏览器前缀。 考虑 box-shadow：

div {
  -webkit-box-shadow: 0px 0px 4px #fff; 
  -moz-box-shadow: 0px 0px 4px #fff; 
  -ms-box-shadow: 0px 0px 4px #fff; 
  box-shadow: 0px 0px 4px #fff; 
}
对于所有具有 box-shadow 属性的元素重写此规则，或者更改每个值以测试不同的效果，需要花费大量的精力。 Mixins 就像 CSS 的函数。 以下是一个例子：

```css
@mixin box-shadow($x, $y, $blur, $c) {
    -webkit-box-shadow: $x $y $blur $c;
    -moz-box-shadow: $x $y $blur $c;
    -ms-box-shadow: $x $y $blur $c;
    box-shadow: $x $y $blur $c;
}
```

定义以 @mixin 开头，后跟自定义名称。 参数（ `$x` ， `$y` ， `$blur` ，以及上例中的 `$c` ）是可选的。 现在在需要 box-shadow 规则的地方，只需一行 mixin 调用而无需添加所有的浏览器前缀。 mixin 可以通过 @include 指令调用。

```css
div {
    @include box-shadow(0px, 0px, 4px, #fff);
}
```

```html
<style type='text/scss'>
    @mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  -ms-border-radius: $radius;
  border-radius: $radius;
}

  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;
    @include border-radius(15px);
  }
</style>

<div id="awesome"></div>
```

### 4. 使用 @if 和 @else 为样式添加逻辑

Sass 中的 @if 指令对于测试特定情况非常有用——它的工作方式与 JavaScript 中的 if 语句类似。

```css
@mixin make-bold($bool) {
    @if $bool==true {
        font-weight: bold;
    }
}
```

类似 JavaScript，可以在 Sass 中使用 @else if 和 @else 测试更多条件：

```css
@mixin text-effect($val) {
    @if $val==danger {
        color: red;
    }

    @else if $val==alert {
        color: yellow;
    }

    @else if $val==success {
        color: green;
    }

    @else {
        color: black;
    }
}
```

```html
<style type='text/scss'>
    @mixin border-stroke($val) {
    @if $val == light {
      border: 1px solid black;
    }
    @else if $val == medium {
      border: 3px solid black;
    }
    @else if $val == heavy {
      border: 6px solid black;
    }
    @else {
      border: none;
    }
  }

  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }
</style>

<div id="box"></div>
```

### 5. 使用 @for 创建一个 Sass 循环

可以在 Sass 中使用 @for 循环添加样式，它的用法和 JavaScript 中的 for 循环类似。

@for 以两种方式使用：“开始 through 结束” 或 “开始 to 结束”。 主要区别在于“开始 to 结束”不包括结束数字，而“开始 through 结束”包括 结束号码。

这是一个开始 through 结束的示例：

```css
@for $i from 1 through 12 {
    .col-#{$i} {
        width: 100%/12 * $i;
    }
}

#{$i} 部分是将变量（i）与文本组合成字符串的语法。 当 Sass 文件转换为 CSS 时，它看起来像这样： .col-1 {
    width: 8.33333%;
}

.col-2 {
    width: 16.66667%;
}

... .col-12 {
    width: 100%;
}
```

这是创建网格布局的有效方法。 现在，有了 12 个可用作 CSS class 的列宽选项。

```html
<style type='text/scss'>
    @for $i from 1 to 6 {
    .text-#{$i} {
      font-size: 15px * $i;
    }
  }

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

### 6. 使用 @each 遍历列表中的项目

Sass 还提供 @each 指令，该指令循环遍历列表或映射中的每个项目。 在每次迭代时，变量将从列表或映射分配给当前值。

```css
@each $color in blue,
red,
green {
    .#{$color}-text {
        color: $color;
    }
}
```

map 的语法略有不同。 这是一个例子：

```css
$colors: (color1: blue, color2: red, color3: green);

@each $key,
$color in $colors {
    .#{$color}-text {
        color: $color;
    }
}
```

请注意，需要用 $key 变量来引用 map 中的键。 否则，编译后的 CSS 将包含 color1，color2...... 以上两个代码示例都转换为以下 CSS：

```css
.blue-text {
    color: blue;
}

.red-text {
    color: red;
}

.green-text {
    color: green;
}
```

```html
<style type='text/scss'>
    $colors: (color1: blue, color2: black, color3: red);

  @each $key, $color in $colors {
    .#{$color}-bg {
      background-color: $color;
    }
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

### 7. 使用 @while 循环创建样式

Sass 中的 @while 指令与 JavaScript 中的 while 类似。 只要满足条件，它就会一直创建 CSS 代码。

@for 挑战提供了一个创建简单网格系统的示例。 用 @while 也可以实现。

```css
$x: 1;

@while $x < 13 {
    .col-#{$x} {
        width: 100%/12 * $x;
    }

    $x: $x+1;
}
```

首先，定义变量 `$x` 并将其设置为 1。 接下来，使用 @while 指令，while `$x` 小于 13 时创建网格系统 。 在设置 width 的 CSS 规则后，$x 增加 1 以避免无限循环。

```html
<style type='text/scss'>
    $x : 1;
@while $x < 6 {
  .text-#{$x} {
    font-size: 15px * $x;
  }
  $x : $x + 1;
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

### 8. 用 Partials 将样式分成小块

Sass 中的 Partials 是包含 CSS 代码段的单独的文件。 这些片段可以导入其它 Sass 文件使用。 可以把类似代码放到模块中，以保持代码结构规整且易于管理。

partials 的名称以下划线（_）字符开头，这样 Sass 就知道它是 CSS 的一小部分，而不会将其转换为 CSS 文件。 此外，Sass 文件以 .scss 文件扩展名结尾。 要将 partial 中的代码放入另一个 Sass 文件中，使用 @import 指令。

例如，如果所有 mixins 都保存在名为 “_mixins.scss” 的 partial 中，并且在 “main.scss” 文件中需要它们，下面是使用方法：

```
@import 'mixins'
```

请注意，import 语句中不需要下划线——Sass 知道它是 partial。 将 partial 导入文件后，可以使用所有变量、mixins 和其它代码。

```
<!-- main.scss 文件 -->
@import 'variables'
```

### 9. 将一组 CSS 样式扩展到另一个元素

Sass 有一个名为 extend 的功能，可以很容易地从一个元素中借用 CSS 规则并在另一个元素上重用它们。

例如，下面的 CSS 规则块设置了 .panel class 的样式。 它有 background-color，height 和 border。

```css
.panel {
    background-color: red;
    height: 70px;
    border: 2px solid green;
}
```

现在需要另一个名为 .big-panel 的面板。 它具有与 .panel 相同的基本属性，但还需要 width 和 font-size。 可以从 .panel 复制并粘贴初始 CSS 规则，但是当添加更多类型的面板时，代码会变得重复。 extend 指令是一种重用为一个元素编写的规则的简单方法，可以为另一个元素重用并添加更多规则：

```css
.big-panel {
    @extend .panel;
    width: 150px;
    font-size: 2em;
}
```

除了新样式之外，.big-panel 将具有与 .panel 相同的属性。

```html
<style type='text/scss'>
    h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }
  .info-important {
    @extend .info;
    background-color: magenta;
  }

</style>
<h3>Posts</h3>
<div class="info-important">
    <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
    <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>
```
