<!--
 * @Author: kok-s0s
 * @Date: 2021-07-17 19:27:48
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-07-18 01:59:39
 * @Description: jQuery
-->

> jQuery is one of the most widely used JavaScript libraries in the world.
>
> In 2006 when it was released, all major browsers handled JavaScript slightly differently. jQuery simplified the process of writing client-side JavaScript, and also ensured that your code worked the same way in all browsers.

### 1. 了解 script 和 document.ready 是如何工作的

首先，在页面顶部添加 script 标签， 记得在后面为它添加结束标签。

浏览器会运行 script 标签所有的 JavaScript 脚本包括 jQuery。

在 script 标签中添加代码 $(document).ready(function() {。 然后在后面（仍在该 script 标签内）用 }); 闭合它。

稍后将详细介绍 functions， 现在需要知道的是，只要浏览器加载页面，function 中放入的代码就会运行。

有一点很重要，如果没有 document ready function，代码将在 HTML 页面呈现之前运行，这可能会导致错误。

```html
<script>
    $(document).ready(function() {

    });
</script>
<!-- 只修改这一行上面的代码 -->

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

### 2. 使用 jQuery 选择器选择元素

> 所有的 jQuery 函数都以 $ 开头，这个符号通常被称为美元符号（dollar sign operator）或 bling。
>  
> jQuery 通常选取并操作带有选择器（selector）的 HTML 标签。

```html
<script>
    $(document).ready(function() {
        $("button").addClass("animated bounce");
    });
</script>

<!-- 只修改这一行上面的代码 -->

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

### 3. 使用 jQuery class 选择器选择元素

> jQuery 的 .addClass() 方法用来给标签添加类。
>  
> 首先，使用 $(".well") 选取类为 well 的 div 标签。
> 值得注意的是，和 CSS 声明一样，在类名前需要添加 .。

```html
<script>
    $(document).ready(function() {
        $("button").addClass("animated bounce");
        $(".well").addClass("animated shake");
    });
</script>

<!-- 只修改这一行上面的代码 -->

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

### 4. 使用 jQuery id 选择器选择元素

> 首先，用 $("#target3") 选择器选取 id 为 target3 的 button 标签。
>
> 注意，和 CSS 声明一样，在 id 名前需要添加 #。

```html
<script>
    $(document).ready(function() {
        $("button").addClass("animated bounce");
        $(".well").addClass("animated shake");
        $("#target3").addClass("animated fadeOut");
    });
</script>

<!-- 只修改这一行上面的代码 -->

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

### 5. 删除 jQuery 函数

```html
<script>
    $(document).ready(function() {

    });
</script>

<!-- 只修改这一行上面的代码 -->

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

### 6. 用多个 jQuery 选择器选择同一个元素

```html
<script>
    $(document).ready(function() {
        $("button").addClass("animated");
        $(".btn").addClass("shake");
        $("#target1").addClass("btn-primary");
    });
</script>

<!-- 只修改这一行上面的代码 -->

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

### 7. 使用 jQuery 从元素中移除 class

> removeClass

```html
<script>
    $(document).ready(function() {
        $("button").addClass("animated bounce");
        $(".well").addClass("animated shake");
        $("#target3").addClass("animated fadeOut");
        $("button").removeClass("btn-default");
    });
</script>

<!-- 只修改这一行上面的代码 -->

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

### 8. 使用 jQuery 更改元素的 CSS

Query 有一个 .css() 方法，能改变标签的 CSS。

下面的代码效果是把颜色变蓝：

```javascript
$("#target1").css("color", "blue");
```

这与通常的 CSS 声明略有不同，因为这个 CSS 属性和它的值在英文引号里，并且它们用逗号而不是冒号间隔开。

```html
<script>
    $(document).ready(function() {
        $("#target1").css("color", "red");
    });
</script>

<!-- 只修改这一行上面的代码 -->

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

### 9. 使用 jQuery 禁用元素

能用 jQuery 改变 HTML 标签的非 CSS 属性， 例如：禁用按钮。

当禁用按钮时，它将变成灰色并无法点击。

jQuery 有一个 .prop() 方法，可以用其调整标签的属性。

下面是禁用所有的按钮的代码：

```javascript
$("button").prop("disabled", true);
```

仅禁用 target1 按钮。

```html
<script>
    $(document).ready(function() {
        $("#target1").css("color", "red");
        $("#target1").prop("disabled", true);
    });
</script>

<!-- 只修改这一行上面的代码 -->

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

### 10. 使用 jQuery 更改元素内部的文本

> `.html()` 函数，能用其在标签里添加 HTML 标签和文本， 函数提供的内容将完全替换之前标签的内容。

> `.text()` 函数，可以在不添加标签的前提下改变标签内的文本。 换句话说，这个函数不会评估传递给它的任何 HTML 标记，而是将其视为要替换现有内容的文本。

```html
<script>
    $(document).ready(function() {
        $("#target1").css("color", "red");
        $("#target4").html("<em>#target4</em>")
    });
</script>

<!-- 只修改这一行上面的代码 -->

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

### 11. 使用 jQuery 删除元素

> jQuery 有一个 .remove() 方法，能完全移除 HTML 标签。

```html
<script>
    $(document).ready(function() {
        $("#target1").css("color", "red");
        $("#target1").prop("disabled", true);
        $("#target4").remove();
    });
</script>

<!-- 只修改这一行上面的代码 -->

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

### 12. 使用 jQuery 的 appendTo 方法移动元素

jQuery 有一个 appendTo() 方法，可以选取 HTML 标签并将其添加到另一个标签里面。

例如，如果要把 target4 从 right well 移到 left well，可以设置如下：

```javascript
$("#target4").appendTo("#left-well");
```

```html
<script>
    $(document).ready(function() {
        $("#target1").css("color", "red");
        $("#target1").prop("disabled", true);
        $("#target4").remove();
        $("#target2").appendTo("#right-well")
    });
</script>

<!-- 只修改这一行上面的代码 -->

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

### 13. 使用 jQuery 克隆元素

jQuery 有一个 clone() 方法，可以复制标签。

例如，如果想把 target2 从 left-well 复制到 right-well，可以设置如下：

```javascript
$("#target2").clone().appendTo("#right-well");
```

两个 jQuery 函数连在一起了, 这被称为链式调用（function chaining），是一种用 jQuery 实现效果的简便方法。

```html
<script>
    $(document).ready(function() {
        $("#target1").css("color", "red");
        $("#target1").prop("disabled", true);
        $("#target4").remove();
        $("#target2").appendTo("#right-well");
        $("#target5").clone().appendTo("#left-well");
    });
</script>

<!-- 只修改这一行上面的代码 -->

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

### 14. 使用 jQuery 选择元素的父元素

每个 HTML 标签都默认 inherits（继承）其 parent（父标签）的 CSS 属性。

例如，h3 标签 jQuery Playground 的父标签是 `<div class="container-fluid">` ，而这个标签的父标签是 body。

jQuery 有一个 parent() 方法，可以访问被选取标签的父标签。

下面的代码展示了使用 parent() 方法把 left-well 标签的父标签背景色设置成蓝色（blue）：

```javascript
$("#left-well").parent().css("background-color", "blue")
```

```html
<script>
    $(document).ready(function() {
        $("#target1").css("color", "red");
        $("#target1").prop("disabled", true);
        $("#target4").remove();
        $("#target2").appendTo("#right-well");
        $("#target5").clone().appendTo("#left-well");
        $("#target1").parent().css("background", "red");
    });
</script>

<!-- 只修改这一行上面的代码 -->

<body>
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
</body>
```

### 15. 使用 jQuery 选择元素的子元素

把 HTML 标签放到另一个级别的标签里，这些 HTML 标签被称为该标签的子标签（children element）。 例如，本次挑战中文本为 #target1、#target2 和 #target3 的按钮都是 <div class="well" id="left-well"> 标签的子标签。

jQuery 有一个 children() 方法，可以访问被选取标签的子标签。

下面的代码展示了用 children() 方法把 left-well 标签的子标签的颜色设置成 blue（蓝色）：

```javascript
$("#left-well").children().css("color", "blue")
```

```html
<script>
    $(document).ready(function() {
        $("#target1").css("color", "red");
        $("#target1").prop("disabled", true);
        $("#target4").remove();
        $("#target2").appendTo("#right-well");
        $("#target5").clone().appendTo("#left-well");
        $("#target1").parent().css("background-color", "red");
        $("#right-well").children().css("color", "orange");
    });
</script>

<!-- 只修改这一行上面的代码 -->

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

### 16. 使用 jQuery 选择元素的特定子元素

> jQuery 可以用 CSS 选择器（CSS Selectors）选取标签。 target:nth-child(n) CSS 选择器可以选取指定 class 或者元素类型的的第 n 个标签。

```html
<script>
    $(document).ready(function() {
        $("#target1").css("color", "red");
        $("#target1").prop("disabled", true);
        $("#target4").remove();
        $("#target2").appendTo("#right-well");
        $("#target5").clone().appendTo("#left-well");
        $("#target1").parent().css("background-color", "red");
        $("#right-well").children().css("color", "orange");
        $(".target:nth-child(2)").addClass("animated bounce");
    });
</script>

<!-- 只修改这一行上面的代码 -->

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

### 17. 使用 jQuery 选择偶数元素

可以用基于位置的奇 :odd 和偶 :even 选择器选取标签。

注意，jQuery 是零索引（zero-indexed）的，这意味着第 1 个标签的位置编号是 0。 这有点混乱和反常——:odd 表示选择第 2 个标签（位置编号 1），第 4 个标签（位置编号 3）……等等，以此类推。

下面的代码展示了选取所有 target class 元素的奇数元素并设置 sheke 效果：

```javascript
$(".target:odd").addClass("animated shake");
```

```html
<script>
    $(document).ready(function() {
        $("#target1").css("color", "red");
        $("#target1").prop("disabled", true);
        $("#target4").remove();
        $("#target2").appendTo("#right-well");
        $("#target5").clone().appendTo("#left-well");
        $("#target1").parent().css("background-color", "red");
        $("#right-well").children().css("color", "orange");
        $("#left-well").children().css("color", "green");
        $(".target:nth-child(2)").addClass("animated bounce");
        $(".target:even").addClass("animated shake");
    });
</script>

<!-- 只修改这一行上面的代码 -->

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

### 18. 使用 jQuery 修改整个页面

```html
<script>
    $(document).ready(function() {
        $("#target1").css("color", "red");
        $("#target1").prop("disabled", true);
        $("#target4").remove();
        $("#target2").appendTo("#right-well");
        $("#target5").clone().appendTo("#left-well");
        $("#target1").parent().css("background-color", "red");
        $("#right-well").children().css("color", "orange");
        $("#left-well").children().css("color", "green");
        $(".target:nth-child(2)").addClass("animated bounce");
        $(".target:even").addClass("animated shake");
        $("body").addClass("animated hinge");
    });
</script>

<!-- 只修改这一行上面的代码 -->

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
