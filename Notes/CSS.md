<!--
 * @Author: kok-s0s
 * @Date: 2021-06-02 09:08:10
 * @LastEditTime: 2021-06-02 09:57:31
 * @Description: CSS
-->

# Baisc CSS

1. 颜色改变

```html
<h2 style="color: blue;">Cat and Dog</h2>
```

2. 使用选择器

```html
<style>
  h2 {
    color: red;
  }
</style>
```

3. 使用类选择器

```html
<style>
  .red-text {
    color: red;
  }
</style>

<p class="red-text">stupid</p>
```

4. CSS allow you to use the same CSS styles on multipe HTML elements.

5. font-size 属性 设置字体大小

```html
<style>
  p {
    font-size: 16px;
  }
</style>
```

6. font-family 属性 设置字体样式

```html
<style>
  p {
    font-family: monospace;
  }
</style>
```

7. Import a Google Font

[Google Fonts](https://fonts.google.com/) is a free library of web fonts that you can use in your CSS by referencing the font's URL.

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>

<style>
  h2 {
    font-family: Lobster;
  }
</style>
```

字体引用的样式有空格的需要加上双引号进行引用.

8. Specify How Fonts Should Degrade

浏览器有一些内置的字体:`monospace`,`serif`,`sans-serif`,and so on.

比如你有一个元素需要使用`Helvetica`字体,但是该字体不可用时可降级为`sans-serif`字体,如下

```css
p {
  font-family: Helvetica, sans-serif;
}
```

通用字体系列名称不区分大小写,此外,它们不需要引号,因为它们是 CSS 关键字.

9. width 属性 设置元素宽度

```css
.smaller-image {
  width: 100px;
}
```

10. 