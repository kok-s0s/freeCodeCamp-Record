<!--
 * @Author: kok-s0s
 * @Date: 2021-07-10 14:12:24
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-07-11 22:38:09
 * @Description: CSS 网格
-->

> The CSS grid is a newer standard that makes it easy to build complex responsive layouts. It works by turning an HTML element into a grid, and lets you place child elements anywhere within.

### 1. 创建你的第一个 CSS 网格

```html
<style>
    .d1 {
        background: LightSkyBlue;
    }

    .d2 {
        background: LightSalmon;
    }

    .d3 {
        background: PaleTurquoise;
    }

    .d4 {
        background: LightPink;
    }

    .d5 {
        background: PaleGreen;
    }

    .container {
        font-size: 40px;
        width: 100%;
        background: LightGray;
        /* 只修改这一行下面的代码 */
        display: grid;
        /* 只修改这一行上面的代码 */
    }
</style>

<div class="container">
    <div class="d1">1</div>
    <div class="d2">2</div>
    <div class="d3">3</div>
    <div class="d4">4</div>
    <div class="d5">5</div>
</div>
```

### 2. 使用 grid-template-columns 添加多列

```html
<style>
    .d1 {
        background: LightSkyBlue;
    }

    .d2 {
        background: LightSalmon;
    }

    .d3 {
        background: PaleTurquoise;
    }

    .d4 {
        background: LightPink;
    }

    .d5 {
        background: PaleGreen;
    }

    .container {
        font-size: 40px;
        width: 100%;
        background: LightGray;
        display: grid;
        /* 只修改这一行下面的代码 */
        grid-template-columns: 100px 100px 100px;

        /* 只修改这一行上面的代码 */
    }
</style>

<div class="container">
    <div class="d1">1</div>
    <div class="d2">2</div>
    <div class="d3">3</div>
    <div class="d4">4</div>
    <div class="d5">5</div>
</div>
```

### 3. 使用 grid-template-rows 添加多行

```html
<style>
    .d1 {
        background: LightSkyBlue;
    }

    .d2 {
        background: LightSalmon;
    }

    .d3 {
        background: PaleTurquoise;
    }

    .d4 {
        background: LightPink;
    }

    .d5 {
        background: PaleGreen;
    }

    .container {
        font-size: 40px;
        width: 100%;
        background: LightGray;
        display: grid;
        grid-template-columns: 100px 100px 100px;
        /* 只修改这一行下面的代码 */
        grid-template-rows: 50px 50px;
        /* 只修改这一行上面的代码 */
    }
</style>

<div class="container">
    <div class="d1">1</div>
    <div class="d2">2</div>
    <div class="d3">3</div>
    <div class="d4">4</div>
    <div class="d5">5</div>
</div>
```

### 4. 使用 CSS 网格单位来更改列和行的大小

```html
<style>
    .d1 {
        background: LightSkyBlue;
    }

    .d2 {
        background: LightSalmon;
    }

    .d3 {
        background: PaleTurquoise;
    }

    .d4 {
        background: LightPink;
    }

    .d5 {
        background: PaleGreen;
    }

    .container {
        font-size: 40px;
        width: 100%;
        background: LightGray;
        display: grid;
        /* 只修改这一行下面的代码 */

        grid-template-columns: 1fr 100px 2fr;

        /* 只修改这一行上面的代码 */
        grid-template-rows: 50px 50px;
    }
</style>

<div class="container">
    <div class="d1">1</div>
    <div class="d2">2</div>
    <div class="d3">3</div>
    <div class="d4">4</div>
    <div class="d5">5</div>
</div>
```

### 5. 使用 grid-column-gap 创建多列之间的间距

```html
<style>
    .d1 {
        background: LightSkyBlue;
    }

    .d2 {
        background: LightSalmon;
    }

    .d3 {
        background: PaleTurquoise;
    }

    .d4 {
        background: LightPink;
    }

    .d5 {
        background: PaleGreen;
    }

    .container {
        font-size: 40px;
        min-height: 300px;
        width: 100%;
        background: LightGray;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        /* 只修改这一行下面的代码 */
        grid-column-gap: 20px;
        /* 只修改这一行上面的代码 */
    }
</style>

<div class="container">
    <div class="d1">1</div>
    <div class="d2">2</div>
    <div class="d3">3</div>
    <div class="d4">4</div>
    <div class="d5">5</div>
</div>
```

### 6. 使用 grid-row-gap 创建多行之间的间距

```html
<style>
    .d1 {
        background: LightSkyBlue;
    }

    .d2 {
        background: LightSalmon;
    }

    .d3 {
        background: PaleTurquoise;
    }

    .d4 {
        background: LightPink;
    }

    .d5 {
        background: PaleGreen;
    }

    .container {
        font-size: 40px;
        min-height: 300px;
        width: 100%;
        background: LightGray;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        /* 只修改这一行下面的代码 */
        grid-row-gap: 5px;
        /* 只修改这一行上面的代码 */
    }
</style>

<div class="container">
    <div class="d1">1</div>
    <div class="d2">2</div>
    <div class="d3">3</div>
    <div class="d4">4</div>
    <div class="d5">5</div>
</div>
```

### 7. 使用 grid-gap 为网格添加间距

```html
<style>
    .d1 {
        background: LightSkyBlue;
    }

    .d2 {
        background: LightSalmon;
    }

    .d3 {
        background: PaleTurquoise;
    }

    .d4 {
        background: LightPink;
    }

    .d5 {
        background: PaleGreen;
    }

    .container {
        font-size: 40px;
        min-height: 300px;
        width: 100%;
        background: LightGray;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        /* 只修改这一行下面的代码 */
        grid-gap: 10px 20px;
        /* 只修改这一行上面的代码 */
    }
</style>
<div class="container">
    <div class="d1">1</div>
    <div class="d2">2</div>
    <div class="d3">3</div>
    <div class="d4">4</div>
    <div class="d5">5</div>
</div>
```

### 8. 使用 grid-column 来控制空间大小

```html
<style>
    .item1 {
        background: LightSkyBlue;
    }

    .item2 {
        background: LightSalmon;
    }

    .item3 {
        background: PaleTurquoise;
    }

    .item4 {
        background: LightPink;
    }

    .item5 {
        background: PaleGreen;
        /* 只修改这一行下面的代码 */
        grid-column: 2 / 4;
        /* 只修改这一行上面的代码 */
    }

    .container {
        font-size: 40px;
        min-height: 300px;
        width: 100%;
        background: LightGray;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 10px;
    }
</style>

<div class="container">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
</div>
```

### 9. 使用 grid-row 来控制空间大小

```html
<style>
    .item1 {
        background: LightSkyBlue;
    }

    .item2 {
        background: LightSalmon;
    }

    .item3 {
        background: PaleTurquoise;
    }

    .item4 {
        background: LightPink;
    }

    .item5 {
        background: PaleGreen;
        grid-column: 2 / 4;
        /* 只修改这一行下面的代码 */
        grid-row: 2 / 4;
        /* 只修改这一行上面的代码 */
    }

    .container {
        font-size: 40px;
        min-height: 300px;
        width: 100%;
        background: LightGray;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 10px;
    }
</style>

<div class="container">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
</div>
```

### 10. 使用 justify-self 水平对齐项目

```html
<style>
    .item1 {
        background: LightSkyBlue;
    }

    .item2 {
        background: LightSalmon;
        /* 只修改这一行下面的代码 */
        justify-self: center;
        /* 只修改这一行上面的代码 */
    }

    .item3 {
        background: PaleTurquoise;
    }

    .item4 {
        background: LightPink;
    }

    .item5 {
        background: PaleGreen;
    }

    .container {
        font-size: 40px;
        min-height: 300px;
        width: 100%;
        background: LightGray;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 10px;
    }
</style>

<div class="container">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
</div>
```

### 11. 使用 align-self 垂直对齐项目

```html
<style>
    .item1 {
        background: LightSkyBlue;
    }

    .item2 {
        background: LightSalmon;
    }

    .item3 {
        background: PaleTurquoise;
        /* 只修改这一行下面的代码 */
        align-self: end;
        /* 只修改这一行上面的代码 */
    }

    .item4 {
        background: LightPink;
    }

    .item5 {
        background: PaleGreen;
    }

    .container {
        font-size: 40px;
        min-height: 300px;
        width: 100%;
        background: LightGray;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 10px;
    }
</style>

<div class="container">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
</div>
```

### 12. 使用 justify-items 水平对齐所有项目

```html
<style>
    .item1 {
        background: LightSkyBlue;
    }

    .item2 {
        background: LightSalmon;
    }

    .item3 {
        background: PaleTurquoise;
    }

    .item4 {
        background: LightPink;
    }

    .item5 {
        background: PaleGreen;
    }

    .container {
        font-size: 40px;
        min-height: 300px;
        width: 100%;
        background: LightGray;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 10px;
        /* 只修改这一行下面的代码 */
        justify-self: center;
        /* 只修改这一行上面的代码 */
    }
</style>

<div class="container">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
</div>
```

### 13. 使用 align-items 垂直对齐所有项目

```html
<style>
    .item1 {
        background: LightSkyBlue;
    }

    .item2 {
        background: LightSalmon;
    }

    .item3 {
        background: PaleTurquoise;
    }

    .item4 {
        background: LightPink;
    }

    .item5 {
        background: PaleGreen;
    }

    .container {
        font-size: 40px;
        min-height: 300px;
        width: 100%;
        background: LightGray;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 10px;
        /* 只修改这一行下面的代码 */
        align-items: end;
        /* 只修改这一行上面的代码 */
    }
</style>

<div class="container">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
</div>
```

### 14. 将网格划分为区域模板

```html
<style>
    .item1 {
        background: LightSkyBlue;
    }

    .item2 {
        background: LightSalmon;
    }

    .item3 {
        background: PaleTurquoise;
    }

    .item4 {
        background: LightPink;
    }

    .item5 {
        background: PaleGreen;
    }

    .container {
        font-size: 40px;
        min-height: 300px;
        width: 100%;
        background: LightGray;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 10px;
        grid-template-areas:
            /* 只修改这一行下面的代码 */
            "header header header"
            ". content content"
            "footer footer footer";
        /* 只修改这一行上面的代码 */
    }
</style>

<div class="container">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
</div>
```

### 15. 使用 grid-area 属性将项目放置在网格区域中

```html
<style>
    .item1 {
        background: LightSkyBlue;
    }

    .item2 {
        background: LightSalmon;
    }

    .item3 {
        background: PaleTurquoise;
    }

    .item4 {
        background: LightPink;
    }

    .item5 {
        background: PaleGreen;
        /* 只修改这一行下面的代码 */
        grid-area: footer;
        /* 只修改这一行上面的代码 */
    }

    .container {
        font-size: 40px;
        min-height: 300px;
        width: 100%;
        background: LightGray;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 10px;
        grid-template-areas:
            "header header header"
            "advert content content"
            "footer footer footer";
    }
</style>

<div class="container">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
</div>
```

### 16. 使用 grid-area 创建区域模板

```html
<style>
    .item1 {
        background: LightSkyBlue;
    }

    .item2 {
        background: LightSalmon;
    }

    .item3 {
        background: PaleTurquoise;
    }

    .item4 {
        background: LightPink;
    }

    .item5 {
        background: PaleGreen;
        /* 只修改这一行下面的代码 */
        grid-area: 3 / 1 / 4 / 4;
        /* 只修改这一行上面的代码 */
    }

    .container {
        font-size: 40px;
        min-height: 300px;
        width: 100%;
        background: LightGray;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 10px;
    }
</style>

<div class="container">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
</div>
```

### 17. 使用 repeat 函数减少重复

```html
<style>
    .item1 {
        background: LightSkyBlue;
    }

    .item2 {
        background: LightSalmon;
    }

    .item3 {
        background: PaleTurquoise;
    }

    .item4 {
        background: LightPink;
    }

    .item5 {
        background: PaleGreen;
    }

    .container {
        font-size: 40px;
        min-height: 300px;
        width: 100%;
        background: LightGray;
        display: grid;
        /* 只修改这一行下面的代码 */

        grid-template-columns: repeat(3, 1fr);

        /* 只修改这一行上面的代码 */
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 10px;
    }
</style>

<div class="container">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
</div>
```

### 18. 使用 minmax 函数限制项目大小

```html
<style>
    .item1 {
        background: LightSkyBlue;
    }

    .item2 {
        background: LightSalmon;
    }

    .item3 {
        background: PaleTurquoise;
    }

    .item4 {
        background: LightPink;
    }

    .item5 {
        background: PaleGreen;
    }

    .container {
        font-size: 40px;
        min-height: 300px;
        width: 100%;
        background: LightGray;
        display: grid;
        /* 只修改这一行下面的代码 */

        grid-template-columns: repeat(3, minmax(90px, 1fr));

        /* 只修改这一行上面的代码 */
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 10px;
    }
</style>

<div class="container">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
</div>
```

### 19. 使用 auto-fill 创建弹性布局

```html
<style>
    .item1 {
        background: LightSkyBlue;
    }

    .item2 {
        background: LightSalmon;
    }

    .item3 {
        background: PaleTurquoise;
    }

    .item4 {
        background: LightPink;
    }

    .item5 {
        background: PaleGreen;
    }

    .container {
        font-size: 40px;
        min-height: 100px;
        width: 100%;
        background: LightGray;
        display: grid;
        /* 只修改这一行下面的代码 */

        grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));

        /* 只修改这一行上面的代码 */
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 10px;
    }

    .container2 {
        font-size: 40px;
        min-height: 100px;
        width: 100%;
        background: Silver;
        display: grid;
        grid-template-columns: repeat(3, minmax(60px, 1fr));
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 10px;
    }
</style>
<div class="container">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
</div>
<div class="container2">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
</div>
```

### 20. 使用 auto-fit 创建弹性布局

```html
<style>
    .item1 {
        background: LightSkyBlue;
    }

    .item2 {
        background: LightSalmon;
    }

    .item3 {
        background: PaleTurquoise;
    }

    .item4 {
        background: LightPink;
    }

    .item5 {
        background: PaleGreen;
    }

    .container {
        font-size: 40px;
        min-height: 100px;
        width: 100%;
        background: LightGray;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 10px;
    }

    .container2 {
        font-size: 40px;
        min-height: 100px;
        width: 100%;
        background: Silver;
        display: grid;
        /* 只修改这一行下面的代码 */

        grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));

        /* 只修改这一行上面的代码 */
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 10px;
    }
</style>

<div class="container">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
</div>
<div class="container2">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
</div>
```

### 21. 使用媒体查询创建响应式布局

```html
<style>
    .item1 {
        background: LightSkyBlue;
        grid-area: header;
    }

    .item2 {
        background: LightSalmon;
        grid-area: advert;
    }

    .item3 {
        background: PaleTurquoise;
        grid-area: content;
    }

    .item4 {
        background: lightpink;
        grid-area: footer;
    }

    .container {
        font-size: 1.5em;
        min-height: 300px;
        width: 100%;
        background: LightGray;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 50px auto 1fr auto;
        grid-gap: 10px;
        grid-template-areas:
            "header"
            "advert"
            "content"
            "footer";
    }

    @media (min-width: 300px) {
        .container {
            grid-template-columns: auto 1fr;
            grid-template-rows: auto 1fr auto;
            grid-template-areas:
                "advert header"
                "advert content"
                "advert footer";
        }
    }

    @media (min-width: 400px) {
        .container {
            grid-template-areas:
                /* 只修改这一行下面的代码 */
                "header header"
                "advert content"
                "footer footer";
            /* 只修改这一行上面的代码 */
        }
    }
</style>

<div class="container">
    <div class="item1">header</div>
    <div class="item2">advert</div>
    <div class="item3">content</div>
    <div class="item4">footer</div>
</div>
```

### 22. 在网格中创建网格

```html
<style>
    .container {
        font-size: 1.5em;
        min-height: 300px;
        width: 100%;
        background: LightGray;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr auto;
        grid-gap: 10px;
        grid-template-areas:
            "advert header"
            "advert content"
            "advert footer";
    }

    .item1 {
        background: LightSkyBlue;
        grid-area: header;
    }

    .item2 {
        background: LightSalmon;
        grid-area: advert;
    }

    .item3 {
        background: PaleTurquoise;
        grid-area: content;
        /* 只修改这一行下面的代码 */
        display: grid;
        grid-template-columns: auto 1fr;
        /* 只修改这一行上面的代码 */
    }

    .item4 {
        background: lightpink;
        grid-area: footer;
    }

    .itemOne {
        background: PaleGreen;
    }

    .itemTwo {
        background: BlanchedAlmond;
    }
</style>

<div class="container">
    <div class="item1">header</div>
    <div class="item2">advert</div>
    <div class="item3">
        <div class="itemOne">paragraph1</div>
        <div class="itemTwo">paragraph2</div>
    </div>
    <div class="item4">footer</div>
</div>
```
