<!--
 * @Author: kok-s0s
 * @Date: 2021-08-03 11:15:30
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-09-10 15:31:54
 * @Description: 用 D3 实现数据可视化
-->

D3 或 D3.js 表示数据驱动文档。它是一个用于在浏览器中创建动态和交互式数据视觉化的 JavaScript 库。

它基于 web 标准，即 HTML、CSS 和 SVG（可缩放矢量图形）技术。

D3 支持多种不同类型的输入数据格式。 然后，你可以使用它强大的内置方法将这些数据转换成不同的图表、和地图。

在用 D3 实现数据可视化课程中，你将学习如何使用数据来创建不同的图表、悬停元素及其他内容，用以创建动态和有吸引力的数据可视化。

### 1. 用 D3 给文档添加元素

D3 有多种方法可以用来在文档中增加元素、修改元素。

select() 方法从文档中选择一个元素。 它接受你想要选择的元素的名字作为参数，并返回文档中第一个与名字匹配的 HTML 节点。 以下是一个例子：

```js
const anchor = d3.select("a");
```

上面这个例子找到页面上的第一个锚点标签，将它作为一个 HTML 节点保存在变量 anchor 中。 你可以使用其他方法进行选择。 示例中的 d3 部分是对 D3 对象的引用，通过它访问 D3 方法。

另外两个有用的方法是 append() 和 text() 。

append() 方法接收你希望添加到文档中的元素作为参数。 它将 HTML 节点附加到选定项目，并返回该节点的句柄。

text() 方法可以设置所选节点的文本，也可以获取当前文本。 要设置该值，请在方法的括号内传递一个字符串作为参数。

下面的例子是选择一个无序列表，添加列表项和添加文本：

```js
d3.select("ul")
    .append("li")
    .text("Very important item");
```

在 D3 中可以串联多个方法，连续执行一系列操作。

----------------------------------------------

```html
<body>
    <script>
        // 在这行下面添加代码
        d3.select("body")
            .append("h1")
            .text("Learning D3");
        // 在这行上面添加代码
    </script>
</body>
```

### 2. 用 D3 选择一组元素

selectAll() 方法选择一组元素。 它以 HTML 节点数组的形式返回该文本中所有匹配所输入字符串的对象。 以下是一个选择文本中所有锚标签的例子：

```js
const anchors = d3.selectAll("a");
```

像 select() 方法一样，selectAll() 也支持链式调用，你可以在它之后调用其他方法。

--------------------------------

```html
<body>
    <ul>
        <li>Example</li>
        <li>Example</li>
        <li>Example</li>
    </ul>
    <script>
        // 在这行下面添加代码
        d3.selectAll("li").text("list item");
        // 在这行上面添加代码
    </script>
</body>
```

### 3. 使用 D3 中的数据

D3 是数据驱动的库。 可以使用 D3 的方法将数组形式的数据显示在页面上。 数据有多种格式，但这个挑战使用了一组简单的数字。

第一步是让 D3 知道数据。 data() 方法选择连接着数据的 DOM 元素， 数据集作为参数传递给该方法。

常见的方法是在文档中为数据集中的每一个数据创建一个元素。 为此，你可以使用 D3 的 enter() 方法。

当 enter() 和 data() 方法一起使用时，它把从页面中选择的元素和数据集中的元素作比较。 如果页面中选择的元素较少则创建缺少的元素。

以下是一个选择 ul 元素并根据添加的数组创建新的列表项的例子。

```html
<body>
    <ul></ul>
    <script>
        const dataset = ["a", "b", "c"];
        d3.select("ul").selectAll("li")
            .data(dataset)
            .enter()
            .append("li")
            .text("New item");
    </script>
</body>
```

选择不存在的 li 元素似乎有些难以理解。 这段代码告诉 D3 先选择页面上的 ul 元素， 再选择所有的列表项，它将返回空。 然后 data() 方法接收数组作为参数，并运行三次后面的代码，每次对应数组中的一个对象。 enter() 方法发现页面中没有 li 元素，但是需要 3 个（每个对应 dataset 中的一个数据）。 新的 li 元素被追加到 ul，文本为 New item。

--------------------------------

```html
<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        // 在这行下面添加代码
        d3.select("body")
            .selectAll("h2")
            .data(dataset)
            .enter()
            .append("h2")
            .text("New Title")

        // 在这行上面添加代码
    </script>
</body>
```

### 4. 使用 D3 中的动态数据

最后两个挑战涉及到使用 D3 的 data() 和 enter() 方法来动态展示数据。 它们以数据集为参数，和 append() 方法一起使用，为数据集中的每一个元素对象创建一个 DOM 元素。

在之前的挑战中，你为 dataset 数组中的每一个对象创建了一个新的 h2 元素，但是它们的文本都是相同的 New Title。 这是因为你还没有使用和每个 h2 元素关联的数据。

text() 方法以字符串或者回调函数作为参数：

```js
selection.text((d) => d)
```

上面这个例子中的参数 d 指关联数据集的一个对象。

使用当前示例作为上下文，第一个 h2 元素绑定到 12，第二个 h2 元素绑定到 31，第三个 h2 元素绑定到 22，依此类推。

--------------------------------

```html
<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body").selectAll("h2")
            .data(dataset)
            .enter()
            .append("h2")
            // 在这行下面添加代码

            .text((d) => (d + " USD"));

        // 在这行上面添加代码
    </script>
</body>
```

### 5. 给元素添加内联样式

D3允许你使用 style() 方法在动态元素上添加内联 CSS 样式。

style() 方法以用逗号分隔的键值对作为参数。 这里是一个将选中文本的颜色设为蓝色的例子：

```js
selection.style("color", "blue");
```

--------------------------------

```html
<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body").selectAll("h2")
            .data(dataset)
            .enter()
            .append("h2")
            .text((d) => (d + " USD"))
            // 在这行下面添加代码
            .style("font-family", "verdana")
        // 在这行上面添加代码
    </script>
</body>
```

### 6. 根据数据更改样式

D3 是关于可视化和展示数据的。 如果你想基于数据来改变元素的样式， 你可以在 style() 方法中使用回调函数来修改不同元素的样式。

例如，你想将值小于 20 的数据点设置为蓝色，其余设置为红色。 你可以在 style() 方法中使用包含条件逻辑的回调函数。 回调函数以 d 作为参数来表示一个数据点：

```js
selection.style("color", (d) => {

});
```

style() 方法不仅仅可以设置 color——它也适用于其他 CSS 属性。

--------------------------------

```html
<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body").selectAll("h2")
            .data(dataset)
            .enter()
            .append("h2")
            .text((d) => (d + " USD"))
            // 在这行下面添加代码

            .style("color", (d) => {
                if (d < 20) {
                    return "red";
                } else
                    return "green";
            })

        // 在这行上面添加代码
    </script>
</body>
```

### 7. 用 D3 添加 Class

即使对小型 app 来说，在 HTML 元素中大量使用内联样式也十分难以管理。 给元素添加类，并使用 CSS 规则给类添加样式会更加方便。 D3 中的 attr() 方法可以给元素添加任何 HTML 属性，包括 class 名称。

attr() 方法和 style() 的使用方法一样。 它使用逗号分隔值，并且可以使用回调函数。 下面是给选中元素添加 container class 的例子：

```js
selection.attr("class", "container");
```

请注意，当你需要添加 class 时，class 参数保持不变，只有 container 参数会发生变化。

--------------------------------

```html
<style>
    .bar {
        width: 25px;
        height: 100px;
        display: inline-block;
        background-color: blue;
    }
</style>

<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body").selectAll("div")
            .data(dataset)
            .enter()
            .append("div")
            // 在这行下面添加代码

            .attr("class", "bar");

        // 在这行上面添加代码
    </script>
</body>
```

### 8. 动态更新元素的高度

之前的挑战包括如何从数组中显示数据和如何添加 CSS 类。 将这些课程的内容结合起来，你就能创建出一个简单的条形图， 只需两步：

为每一个数组中的数据点都创建一个 div

为每个 div 动态分配高度值，在 style() 方法中使用回调函数将高度值设置为数据大小

回想使用回调函数设置样式的格式：

```js
selection.style("cssProperty", (d) => d)
```

--------------------------------

```html
<style>
    .bar {
        width: 25px;
        height: 100px;
        display: inline-block;
        background-color: blue;
    }
</style>

<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body").selectAll("div")
            .data(dataset)
            .enter()
            .append("div")
            .attr("class", "bar")
            // 在这行下面添加代码

            .style("height", (d) => (d + "px"));

        // 在这行上面添加代码
    </script>
</body>
```

### 9. 更改条形图的显示方式

上一个挑战创建了一个条形图，可以通过下面的格式调整来美化它：

1. 通过在 CSS 中为 bar class 添加 margin 属性，给每一个条形图之间添加空格，把它们分开。

2. 通过给每个值乘以一个数来缩放高度，增加高度，以更好地显示值的差异。

--------------------------------

```html
<style>
    .bar {
        width: 25px;
        height: 100px;
        /* 在这行下面添加代码 */

        margin: 2px;

        /* 在这行上面添加代码 */
        display: inline-block;
        background-color: blue;
    }
</style>

<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body").selectAll("div")
            .data(dataset)
            .enter()
            .append("div")
            .attr("class", "bar")
            .style("height", (d) => (d * 10 + "px")) // 修改这一行
    </script>
</body>
```

### 10. 了解 D3 中的 SVG

SVG 是 Scalable Vector Graphics 的缩写。

“scalable” 的意思是如果放大或缩小一个对象，它不会像素化。 不管是在小的移动手机屏幕上还是在大的电视显示器上，它都会随着显示系统缩放。

SVG 用于制作常见的几何图形。 由于 D3 将数据映射成可视化表达，它用 SVG 来创建可视化的图形。 网页上的 SVG 图形必须在 HTML 的 svg 标签中。

当使用相对单位（例如 vh、vw 或者百分比）时，CSS 是可伸缩的。 但是在实现数据可视化的时候 SVG 更加的灵活。

--------------------------------

```html
<style>
    svg {
        background-color: pink;
    }
</style>

<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
            // 在这行下面添加代码
            .append("svg")
            .style("width", w)
            .style("height", h);

        // 在这行上面添加代码
    </script>
</body>
```

### 11. 用 SVG 显示形状

上个挑战用给定的宽和高创建了一个 svg 元素，因为在它的 style 标签中有 background-color，所以它是可见的。 这一段代码为给定的宽和高腾出空间。

下一步是在 svg 区域中创建图形。 SVG 支持多种图形，比如矩形和圆形， 并用它们来显示数据。 例如，在条形图中一个矩形（<rect>）SVG 图形可以创建一个组。

当把图形放入 svg 区域中时，你可以用 x 和 y 坐标来指定它的位置。 起始点 (0, 0) 是在左上角。 x 正值将图形右移，y 正值将图形从原点下移

若要把一个图形放在上个挑战的 500（宽）x 100（高）的 svg 中心，可将 x 坐标设置为 250，y 坐标设置为 50。

SVG 的 rect 有四个属性。 x 和 y 坐标指定图形放在 svg 区域的位置， height 和 width 指定图形大小。

--------------------------------

```html
<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            // 在这行下面添加代码

            .append("rect")
            .attr("width", 25)
            .attr("height", 100)
            .attr("x", 0)
            .attr("y", 0)

        // 在这行上面添加代码
    </script>
</body>
```

### 12. 为集合中的每个数据点创建一个数据条

上个挑战在 svg 中只添加了一个矩形来表示数据条。 接下来你将结合到目前为止所学的关于 data()、enter() 和 SVG 图形的知识，为 dataset 中的每一个数据点创建并且添加一个矩形。

之前的挑战展示了如何为 dataset 中的每个对象创建并添加一个 div：

```js
d3.select("body").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
```

操作 rect 元素和 div 元素有一些不同。 rect 元素必须添加在 svg 元素内，而不能直接添加在 body 内。 同时，你需要告诉 D3 将 rect 放在 svg 区域的哪个位置。 条形的放置会在下一个挑战中讲到。

--------------------------------

```html
<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("rect")
            // 在这行下面添加代码
            .data(dataset)
            .enter()
            .append("rect")

            // 在这行上面添加代码
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 25)
            .attr("height", 100);
    </script>
</body>
```

### 13. 动态设置每个 Bar 的坐标

上个挑战在 svg 元素中为 dataset 的每一个数据点创建并且添加了一个矩形，其中一个矩形表示一组， 但是它们相互重叠。

矩形的位置是由 x 和 y 属性决定的。 它们告诉 D3 在 svg 区域的哪个位置开始绘制图形。 上个挑战将它们都设置为 0，因此所有条形都在左上角。

对于条形图，所有条形应该处于相同的垂直线上，也就是说所有条形的 y 值相同（为 0）， 但是 x 值需要随着增添新的条形而变化。 注意 x 值越大，图形就越靠近右边。 所以当遍历 dataset 中的数组元素时，x 的值应该递增。

D3 的 attr() 方法可接收一个回调函数来动态设置属性。 这个回调函数有两个参数，一个是数据点本身（通常是 d），另一个是该数据点在数组中的下标， 这个参数是可选的。 下面是其格式：

```js
selection.attr("property", (d, i) => {

})
```

值得注意的是，你不需要写 for 循环或者用 forEach() 迭代数据集中的对象。 data() 方法会解析数据集，任何链接在 data() 后面的方法都会为数据集中的每个对象运行一次。

--------------------------------

```html
<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => {
                // 在这行下面添加代码

                return i * 30;

                // 在这行上面添加代码
            })
            .attr("y", 0)
            .attr("width", 25)
            .attr("height", 100);
    </script>
</body>
```

### 14. 动态更改每个条形的高度

和动态设置 x 值一样，也可以把每个条形的高度设置成数组中数据点的值。

```js
selection.attr("property", (d, i) => {

})
```

d 是数据点值，i 是数组中数据点的索引。

--------------------------------

```html
<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 30)
            .attr("y", 0)
            .attr("width", 25)
            .attr("height", (d, i) => {
                // 在这行下面添加代码

                return d * 3;

                // 在这行上面添加代码
            });
    </script>
</body>
```

注意： 记住，把所有数据点乘以相同的常数来对数据进行缩放（就像放大）， 这有利于看清例子中条形数值之间的差异。

### 15. 反转 SVG 元素

你可能已经注意到了常见的条形图像是把这个翻转或者颠倒过来。 这是因为 SVG 的 (x, y) 坐标有些特别。

在 SVG 中，坐标轴的原点在左上角。 x 坐标为 0 将图形放在 SVG 区域的左边缘， y 坐标为 0 将图形放在 SVG 区域的上边缘。 x 值增大矩形将向右移动， y 值增大矩形将向下移动。

为了使条形图向上，需要改变 y 坐标计算的方式。 这需要计算条形的高度和 SVG 区域的总高度。

SVG 区域的高度为 100。 如果在集合中一个数据点的值为 0，那么条形将从 SVG 区域的最底端开始（而不是顶端）。 为此，y 坐标的值应为 100。 如果数据点的值为 1，你将从 y 坐标为 100 开始来将这个条形设置在底端， 然后需要考虑该条形的高度为 1，所以最终的 y 坐标将是 99。

y 坐标为 y = heightOfSVG - heightOfBar 会将条形图向上放置。

--------------------------------

改变 y 属性的回调函数，让条形图向上放置。 height 的值是 3 倍 d 的值。

**注意**：通常，关系是 y = h - m * d，其中 m 是缩放数据点的常数。

```html
<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => {
                // 在这行下面添加代码

                return h - 3 * d;

                // 在这行上面添加代码
            })
            .attr("width", 25)
            .attr("height", (d, i) => 3 * d);
    </script>
</body>
```

### 16. 更改 SVG 元素的颜色

所有条形图的位置都是正确的，但是它们都是一样的黑色。 SVG 可以改变条形图的颜色。

在 SVG 中， rect 图形用 fill 属性着色。 它支持十六进制代码、颜色名称、rgb 值以及更复杂的选项，比如渐变和透明。

--------------------------------

```html
<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => h - 3 * d)
            .attr("width", 25)
            .attr("height", (d, i) => 3 * d)
            // 在这行下面添加代码

            .attr("fill", "navy");

        // 在这行上面添加代码
    </script>
</body>
```

### 17. 给 D3 元素添加标签

D3 允许你使用 SVG 的 text 元素给图形元素，如条形图，添加标签。

和 rect 元素类似，text 元素也需要 x 和 y 属性来指定其放置在 SVG 画布上的位置， 它也需要能够获取数据来显示数据值。

D3 给了你很高的权限给图形添加标签。

--------------------------------

```html
<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => h - 3 * d)
            .attr("width", 25)
            .attr("height", (d, i) => 3 * d)
            .attr("fill", "navy");

        svg.selectAll("text")
            .data(dataset)
            .enter()
            // 在这行下面添加代码

            .append("text")
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => h - 3 * d - 3)
            .text((d, i) => d);

        // 在这行上面添加代码
    </script>

</body>
```

### 18. 给 D3 标签添加样式

D3 可以将样式添加到条形标签中。 fill 属性为 text 节点设置文本颜色， style() 方法设置其它样式的 CSS 规则，例如 font-family 或 font-size。

--------------------------------

```html
<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => h - 3 * d)
            .attr("width", 25)
            .attr("height", (d, i) => d * 3)
            .attr("fill", "navy");

        svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => h - (3 * d) - 3)
            // 在这行下面添加代码

            .style("fill", "red")
            .style("font-size", "25px")

        // 在这行上面添加代码
    </script>
</body>
```

### 19. 给 D3 元素添加悬停效果

我们可以为用户的鼠标悬停行为添加高亮显示的效果。 到目前为止，矩形的样式应用了内置的 D3 和 SVG 方法，但是你也可以使用 CSS 来实现。

你可以使用 attr() 方法在 SVG 元素上设置 CSS class。 然后用 :hover 伪类为你新添加的 CSS 类设置鼠标悬停的效果。

--------------------------------

用 attr() 方法给所有的 rect 元素都添加 bar class。 当鼠标悬停在元素上时，它的 fill 将变为棕色。

```html
<style>
    .bar:hover {
        fill: brown;
    }
</style>

<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => h - 3 * d)
            .attr("width", 25)
            .attr("height", (d, i) => 3 * d)
            .attr("fill", "navy")
            // 在这行下面添加代码

            .attr("class", "bar")

        // 在这行上面添加代码

        svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => h - (3 * d) - 3);
    </script>
</body>
```

### 20. 给 D3 元素添加工具提示

当用户在一个对象上悬停时，提示框可以显示关于这个对象更多的信息。 在可视化中有多种方法添加提示框，这个挑战将使用 SVG 的 title 元素。

title 和 text() 方法一起给每组动态添加数据。

--------------------------------

在每个 rect 节点下附加 title 元素。 然后用回调函数调用 text() 方法使它的文本显示数据值。

```html
<style>
    .bar:hover {
        fill: brown;
    }
</style>

<body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => h - 3 * d)
            .attr("width", 25)
            .attr("height", (d, i) => d * 3)
            .attr("fill", "navy")
            .attr("class", "bar")
            // 在这行下面添加代码

            .append("title")
            .text((d) => d)

        // 在这行上面添加代码

        svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => h - (d * 3 + 3))
    </script>
</body>
```

### 21. 使用 SVG Circles 创建散点图

散点图是另一种形式的可视化。 它用圆圈来映射数据点，每个数据点有两个值。 这两个值和 x 和 y 轴相关联，在可视化中用来给圆圈定位。

SVG 用 circle 标签来创建圆形。 它和之前用来构建条形图的 rect 非常相像。

--------------------------------

使用 data()、enter()、append() 方法将 dataset 和新添加到 SVG 画布上的 circle 元素绑定起来。

注意： 圆形并不可见，因为我们还没有设置它们的属性。 我们会在下一个挑战中设置属性。

```html
<body>
    <script>
        const dataset = [
            [34, 78],
            [109, 280],
            [310, 120],
            [79, 411],
            [420, 220],
            [233, 145],
            [333, 96],
            [222, 333],
            [78, 320],
            [21, 123]
        ];

        const w = 500;
        const h = 500;

        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("circle")
            // 在这行下面添加代码
            .data(dataset)
            .enter()
            .append("circle")

        // 在这行上面添加代码
    </script>
</body>
```

### 22. 给 Circle 元素添加属性

上个挑战为 dataset 中的每个点都创建了 circle 元素，并将它们添加到 SVG 画布上。 但是 D3 需要更多关于位置和 circle 大小的信息来正确地显示它们。

在 SVG 中 circle 有三个主要的属性。 cx 和 cy 属性是坐标。 它们告诉 D3 将图形的中心放在 SVG 画布的何处。 半径（ r 属性）给出 circle 的大小。

和 rect 的 y 坐标一样，circle 的 cy 属性是从 SVG 画布的顶端开始测量的，而不是从底端。

所有的属性都可以用回调函数来动态设值。 记住，所有串联在 data(dataset) 后面的方法会为 dataset 中的每个对象都运行一次。 回调函数中的 d 参数指在 dataset 中的当前对象，对每个点来说都是一个数组。 你可以使用方括号的方式，如 d[0]，来访问数组中的值。

--------------------------------

为 circle 元素添加 cx、cy、r 属性。 cx 的值应该是 dataset 中每个对象的数组的第一个数， cy 的值应该根据数组中的第二个值，但是要确保正向显示图表而不是倒转。 所有 circle 的 r 值应为 5。

```html
<body>
    <script>
        const dataset = [
            [34, 78],
            [109, 280],
            [310, 120],
            [79, 411],
            [420, 220],
            [233, 145],
            [333, 96],
            [222, 333],
            [78, 320],
            [21, 123]
        ];

        const w = 500;
        const h = 500;

        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("circle")
            .data(dataset)
            .enter()
            .append("circle")
            // 在这行下面添加代码

            .attr("cx", (d) => (d[0]))
            .attr("cy", (d) => (h - d[1]))
            .attr("r", 5)

        // 在这行上面添加代码
    </script>
</body>
```

### 23. 向散点图的 Circles 添加标签

你可以为散点图中的点添加文本来创建标签。

目标是显示 dataset 中每个对象的第一个（x）和第二个（y）字段中通过逗号分隔的值。

text 节点需要 x 和 y 属性来指定放置在 SVG 画布中的位置。 在这个挑战中，y 值（决定高度）可以用和 circle 的 cy 属性相同的值， x 值可以比 circle 的 cx 值稍微大一些，这样标签才可见， 并且被放置在散点的右边。

--------------------------------

使用 text 元素标记散点图上的每个点。 标签的文本应该是用逗号和空格分隔的两个值。 例如，第一个点的标签是 34, 78。 设置 x 属性，使其比 circle 上的 cx 属性的值多 5 个单位。 设置 y 属性的方式与 circle 上的 cy 值相同。

```html
<body>
    <script>
        const dataset = [
            [34, 78],
            [109, 280],
            [310, 120],
            [79, 411],
            [420, 220],
            [233, 145],
            [333, 96],
            [222, 333],
            [78, 320],
            [21, 123]
        ];

        const w = 500;
        const h = 500;

        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("circle")
            .data(dataset)
            .enter()
            .append("circle")
            .attr("cx", (d, i) => d[0])
            .attr("cy", (d, i) => h - d[1])
            .attr("r", 5);

        svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            // 在这行下面添加代码

            .attr("x", (d) => d[0] + 5)
            .attr("y", (d) => h - d[1])
            .text((d) => (d[0]) + ", " + d[1])

        // 在这行上面添加代码
    </script>
</body>
```

### 24. 用 D3 创建线性比例

条形图和散点图都直接在 SVG 画布上绘制数据。 但是，如果一组的高或者其中一个数据点比 SVG 的高或宽更大，它将跑到 SVG 区域外。

D3 中，比例尺可帮助布局数据。 scales 是函数，它告诉程序如何将一组原始数据点映射到 SVG 画布上。

例如，假设你有一个 100x500 大小的 SVG 画布，你想为许多国家绘制国内生产总值（GDP）的图表。 这组数据将在十亿美元或万亿美元的范围内。 你给 D3 提供一种缩放方法，告诉它如何将大的 GDP 值放置在 100x500 大小的区域。

你不太可能按数据原本的大小来绘制图表。 在绘制之前，将整个数据集缩放，让 x 和 y 值适合画布的宽高。

D3 有几种缩放类型。 对于线性缩放（通常使用于定量数据），使用 D3 的 scaleLinear() 方法：

const scale = d3.scaleLinear()
默认情况下，比例尺使用一对一关系（identity relationship）。 输入的值和输出的值相同。 后面的挑战将涉及如何改变默认比例。

--------------------------------

更改 scale 变量，以创建线性比例。 然后将 output 变量设置为 scale 函数，调用函数时传入参数 50。

```html
<body>
    <script>
        // 在这行下面添加代码

        const scale = d3.scaleLinear(); // 在这里创建轴
        const output = scale(50); // 调用 scale，传入一个参数

        // 在这行上面添加代码

        d3.select("body")
            .append("h2")
            .text(output);
    </script>
</body>
```

### 25. 按比例设置域和范围

默认情况下，比例尺使用一对一关系（identity relationship）， 即输入值直接映射为输出值。 但是比例尺可以更灵活更有趣。

假设有一个数据集范围为 50 到 480， 这是缩放的输入信息，也被称为域。

你想沿着 x 轴将这些点映射到 SVG 画布上，位置介于 10 个单位到 500 个单位之间。 这是输出信息，也被称为范围。

domain() 和 range() 方法设置比例尺的值， 它们都接受一个至少有两个元素的数组作为参数。 下面是一个例子：

```js
scale.domain([50, 480]);
scale.range([10, 500]);
scale(50)
scale(480)
scale(325)
scale(750)
d3.scaleLinear()
```

按顺序，将在控制台中显示以下值：10、500、323.37 和 807.67。

注意，比例尺使用了域和范围之间的线性关系来找出给定数字的输出值。 域中的最小值（50）映射为范围中的最小值（10）。

-------------------------------

创建一个比例尺，将它的域设置为 [250, 500]，范围设置为 [10, 150]。

**注意：**你可以将 domain() 和 range() 方法串联在 scale 变量后。

```html
<body>
    <script>
        // 在这行下面添加代码
        const scale = d3.scaleLinear();
        scale.domain([250, 500]);
        scale.range([10, 150]);

        // 在这行上面添加代码
        const output = scale(50);
        d3.select("body")
            .append("h2")
            .text(output);
    </script>
</body>
```

### 26. 使用 d3.max 和 d3.min 函数在数据集中查找最小值和最大值

D3 的 domain() 和 range() 方法根据数据设置比例尺的信息。 下面有几种更简单的方法。

通常当你设置域的时候，你会想用数据集中的最小值和最大值。 试图手动的找到这些值，尤其是在很大的数据集中，可能会出错。

D3 有两个方法——min() 和 max() 来返回这些值。 下面是一个例子：

```js
const exampleData = [34, 234, 73, 90, 6, 52];
d3.min(exampleData)
d3.max(exampleData)
```

像在散点图的例子中的 [x, y] 坐标对一样，数据集有可能嵌套数组。 在这种情况下，你需要告诉 D3 怎么计算最大值和最小值。 幸运的是，min() 和 max() 都可以使用回调函数。 在下面这个例子中，回调函数的参数 d 是当前的内部数组。 回调函数需要从内数组中返回你想比较大小的元素（x 值或 y 值）。 下面是一个如何找到二维数组的最大值和最小值的例子：

```js
const locationData = [
    [1, 7],
    [6, 3],
    [8, 3]
];
const minX = d3.min(locationData, (d) => d[0]);
```

minX 的值应为 1。

--------------------------------

positionData 数组的子数组元素为 x、y 和 z 坐标。 使用 D3 方法从数组中查找 z 坐标（第三个值）的最大值，并将其保存在 output 变量中。

```html
<body>
    <script>
        const positionData = [
            [1, 7, -4],
            [6, 3, 8],
            [2, 9, 3]
        ]
        // 在这行下面添加代码

        const output = d3.max(positionData, (d) => d[2]); // 修改这一行

        // 在这行上面添加代码

        d3.select("body")
            .append("h2")
            .text(output)
    </script>
</body>
```

### 27. 使用动态比例

D3 的 min() 和 max() 方法在设置比例尺时十分有用。

对于一个复杂的数据集，首要是设置比例尺，这样可视化才能适合 SVG 容器的宽和高。 所有数据都应布局在 SVG 画布内部，这样它们在页面上才是可见的。

下面这个例子为散点图设置了 x 轴的比例尺。 domain() 方法给比例尺传递关于散点图原数据值的信息， range() 方法给出在页面上进行可视化的实际空间信息。

在这个例子中，domain 是从 0 到数据集中的最大值， 它使用 max() 方法和基于数组中 x 值的回调函数。 Range 使用 SVG 画布的宽（w），并包含 padding， 这将在散点图和 SVG 画布边缘之间添加空隙。

```js
const dataset = [
    [34, 78],
    [109, 280],
    [310, 120],
    [79, 411],
    [420, 220],
    [233, 145],
    [333, 96],
    [222, 333],
    [78, 320],
    [21, 123]
];
const w = 500;
const h = 500;

const padding = 30;
const xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[0])])
    .range([padding, w - padding]);
```

在一开始可能很难理解 padding。 想象 x 轴是一条从 0 到 500 （SVG 画布宽的值）的水平直线。 在 range() 方法中包含 padding 使散点图沿着这条直线从 30 （而不是 0）开始，在 470 （而不是 500）结束。

--------------------------------

使用 yScale 变量创建一个线性的 y 轴比例尺。 domain 应该从 0 开始到数据集中 y 的最大值， range 应该使用 SVG 的高（h），并包含 padding。

**注意：**记得保持绘图在右上角。 当你为 y 坐标设置 range 时，大的值（height 减去 padding）是第一个参数，小的值是第二个参数。

```html
<body>
    <script>
        const dataset = [
            [34, 78],
            [109, 280],
            [310, 120],
            [79, 411],
            [420, 220],
            [233, 145],
            [333, 96],
            [222, 333],
            [78, 320],
            [21, 123]
        ];

        const w = 500;
        const h = 500;

        // 画布边线和图表之间的 padding
        const padding = 30;

        // 创建 x 和 y 轴

        const xScale = d3.scaleLinear()
            .domain([0, d3.max(dataset, (d) => d[0])])
            .range([padding, w - padding]);

        // 在这行下面添加代码

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(dataset, (d) => d[1])])
            .range([h - padding, padding]);

        // 在这行上面添加代码

        const output = yScale(411); // 返回 30
        d3.select("body")
            .append("h2")
            .text(output)
    </script>
</body>
```

### 28. 使用预定义的比例放置元素

当比例尺建立好后，是时候重新映射散点图了。 比例尺就像操作函数一样，将 x 和 y 的原数据值变为适合并可在 SVG 画布上正确渲染的值。 它们使数据在屏幕的布局区域内部。

用比例尺函数为 SVG 图形设置坐标属性值。 这包括 rect 或者 text 元素的 x 和 y 属性，或者 circles 的 cx 和 cy。 以下是一个例子：

```js
shape
    .attr("x", (d) => xScale(d[0]))
```

比例尺设置图形坐标属性来将数据点放置在 SVG 画布上。 当你显示实际数据值时，不用使用比例尺，例如，在提示框或标签中的 text() 方法。

--------------------------------

使用 xScale 和 yScale 将 circle 和 text 图形放置在 SVG 画布上。 对于 circles，使用比例尺设置 cx 和 cy 属性， 半径为 5 个单位。

对于 text 元素，使用比例尺设置 x 和 y 属性。 标签应该标注在点的右边， 为此，在将 x 数据值传递给 xScale 之前，要给它加上 10 个单位。

```html
<body>
    <script>
        const dataset = [
            [34, 78],
            [109, 280],
            [310, 120],
            [79, 411],
            [420, 220],
            [233, 145],
            [333, 96],
            [222, 333],
            [78, 320],
            [21, 123]
        ];

        const w = 500;
        const h = 500;
        const padding = 60;

        const xScale = d3.scaleLinear()
            .domain([0, d3.max(dataset, (d) => d[0])])
            .range([padding, w - padding]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(dataset, (d) => d[1])])
            .range([h - padding, padding]);

        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("circle")
            .data(dataset)
            .enter()
            .append("circle")
            // 在这行下面添加代码

            .attr("cx", (d) => xScale(d[0]))
            .attr("cy", (d) => yScale(d[1]))
            .attr("r", 5)

        // 在这行上面添加代码

        svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .text((d) => (d[0] + ", " +
                d[1]))
            // 在这行下面添加代码

            .attr("x", (d) => xScale(d[0] + 10))
            .attr("y", (d) => yScale(d[1]))

        // 在这行上面添加代码
    </script>
</body>
```

### 29. 添加坐标轴到视图中

另一种改进散点图的方法是添加 x 轴和 y 轴。

D3 有两种方法来渲染 y 轴和 x 轴，分别是 axisLeft() 和 axisBottom()。 下面是一个基于上个挑战中的 xScale 创建 x 轴的例子：

```js
const xAxis = d3.axisBottom(xScale);
```

下一步是在 SVG 画布上渲染 x 轴。 为此，你可以使用一个 SVG 组件， g 元素， g 是英文中组（group）的缩写。 不同于 rect、circle、text，在渲染时，轴只是一条直线。 因为它是一个简单的图形，所以可以用 g 。 最后一步是使用 transform 属性将轴放置在 SVG 画布的正确位置上。 否则，轴将会沿着 SVG 画布的边缘渲染，从而不可见。 SVG 支持多种 transforms，但是定位轴需要使用 translate 属性。 当它应用在 g 元素上时，它根据给出的总量移动整组。 下面是一个例子：

```js
const xAxis = d3.axisBottom(xScale);

svg.append("g")
    .attr("transform", "translate(0, " + (h - padding) + ")")
    .call(xAxis);
```

上部分代码将 x 轴放置在 SVG 画布的底端。 然后 x 轴作为参数被传递给 call() 方法。 y 轴的定位也是这样，只是 translate 参数的形式是 (x, 0)。 因为 translate 是 attr() 方法中的一个字符串，你可以在参数中使用字符串的连接将变量值包括进去。

--------------------------------

现在散点图有 x 轴了。 用 axisLeft() 方法创建 y 轴并赋值给 yAxis 变量， 然后通过 g 元素渲染 y 轴。 使用 transform 属性将 y 轴向右平移（平移的单位等于 paading 的值），向下平移 0 个单位。 记得对 y 轴调用 call() 方法。

```html
<body>
    <script>
        const dataset = [
            [34, 78],
            [109, 280],
            [310, 120],
            [79, 411],
            [420, 220],
            [233, 145],
            [333, 96],
            [222, 333],
            [78, 320],
            [21, 123]
        ];

        const w = 500;
        const h = 500;
        const padding = 60;

        const xScale = d3.scaleLinear()
            .domain([0, d3.max(dataset, (d) => d[0])])
            .range([padding, w - padding]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(dataset, (d) => d[1])])
            .range([h - padding, padding]);

        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("circle")
            .data(dataset)
            .enter()
            .append("circle")
            .attr("cx", (d) => xScale(d[0]))
            .attr("cy", (d) => yScale(d[1]))
            .attr("r", (d) => 5);

        svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .text((d) => (d[0] + "," + d[1]))
            .attr("x", (d) => xScale(d[0] + 10))
            .attr("y", (d) => yScale(d[1]))

        const xAxis = d3.axisBottom(xScale);
        // 在这行下面添加代码
        const yAxis = d3.axisLeft(yScale);
        // 在这行上面添加代码

        svg.append("g")
            .attr("transform", "translate(0," + (h - padding) + ")")
            .call(xAxis);

        // 在这行下面添加代码

        svg.append("g")
            .attr("transform", "translate(" + padding + ",0)")
            .call(yAxis);

        // 在这行上面添加代码
    </script>
</body>
```
