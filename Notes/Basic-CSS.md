`###<!--

- @Author: kok-s0s
- @Date: 2021-06-02 09:08:10
- @LastEditTime: 2021-06-02 09:57:31
- @Description: CSS
  -->

# Baisc CSS

### 1. 颜色改变

```html
<h2 style="color: blue;">Cat and Dog</h2>
```

### 2. 使用选择器

```html
<style>
  h2 {
    color: red;
  }
</style>
```

### 3. 使用类选择器

```html
<style>
  .red-text {
    color: red;
  }
</style>

<p class="red-text">stupid</p>
```

### 4. CSS allow you to use the same CSS styles on multipe HTML elements.

### 5. font-size 属性 设置字体大小

```html
<style>
  p {
    font-size: 16px;
  }
</style>
```

### 6. font-family 属性 设置字体样式

```html
<styl>
  p {
    font-family: monospace;
  }
</style>
```

### 7. Import a Google Font

[Google Fonts](https://fonts.google.com/) is a free library of web fonts that you can use in your CSS by referencing the font's URL.

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>

<styl> h2 { font-family: Lobster; } </styl>
```

字体引用的样式有空格的需要加上双引号进行引用.

### 8. Specify How Fonts Should Degrade

浏览器有一些内置的字体:`monospace`,`serif`,`sans-serif`,and so on.

比如你有一个元素需要使用`Helvetica`字体,但是该字体不可用时可降级为`sans-serif`字体,如下

```css
p {
  font-family: Helvetica, sans-serif;
}
```

通用字体系列名称不区分大小写,此外,它们不需要引号,因为它们是 CSS 关键字.

### 9. width 属性 设置元素宽度

```css
.smaller-image {
  width: 100px;
}
```

### 10. Add Borders Around Your Elements

```css
.thick-green-border {
  border-width: 10px;
  border-style: solid;
  border-color: green;
}
```

一个元素可以有多个类标记，只需要将类用空格隔开以作区分即可。

### 11. Add Rounded Corners with border-radius

设置边框角

```css
.thick-green-border {
  border-color: green;
  border-width: 10px;
  border-style: solid;
  border-radius: 10px;
}
```

### 12. Make Circular Images with a border-radius

In addition to pixels, you can also specify the border-radius using a percentage

```css
.smaller-image {
  width: 100px;
  border-radius: 50%;
}
```

### 13. 为 div 元素设置背景颜色 background-color

```css
.silver-background {
  background-color: silver;
}
```

### 14. 使用 id 选择器

```html
<form
  id="cat-photo-form"
  action="https://freecatphotoapp.com/submit-cat-photo"
></form>
```

### 15. 使用 id 属性为 html 元素设置样式

```css
#cat-photo-form {
  background-color: green;
}
```

### 16. 调整元素的填充

> Three important properties control the space that surrounds each HTML element: padding, border, and margin.
>
> An element's padding controls the amount of space between the element's content and its border.

```css
.blue-box {
  background-color: blue;
  color: #fff;
  padding: 20px;
}
```

### 17. Adjust the Margin of an Element

> An element's margin controls the amount of space between an element's border and surrounding elements.

```css
.blue-box {
  background-color: blue;
  color: #fff;
  padding: 20px;
  margin: 20px;
}
```

### 18. Add a Negative Margin to an Element

> An element's margin controls the amount of space between an element's border and surrounding elements.
>
> If you set an element's margin to a negative value, the element will grow larger.

```css
.blue-box {
  background-color: blue;
  color: #fff;
  padding: 20px;
  margin: -15px;
}
```

### 19. Add Different Padding to Each Side of an Element

> Sometimes you will want to customize an element so that it has different amounts of padding on each of its sides.
>
> CSS allows you to control the padding of all four individual sides of an element with the padding-top, padding-right, padding-bottom, and padding-left properties.

```css
.blue-box {
  background-color: blue;
  color: #fff;
  padding-top: 40px;
  padding-left: 40px;
  padding-right: 20px;
  padding-bottom: 20px;
}
```

### 20. Add Different Margins to Each Side of an Element

> Sometimes you will want to customize an element so that it has a different margin on each of its sides.
>
> CSS allows you to control the margin of all four individual sides of an element with the margin-top, margin-right, margin-bottom, and margin-left properties.

```css
.blue-box {
  background-color: blue;
  color: #fff;
  margin-top: 40px;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-left: 40px;
}
```

### 21. Use Clockwise Notation to Specify the Padding of an Element

> Instead of specifying an element's padding-top, padding-right, padding-bottom, and padding-left properties individually, you can specify them all in one line, like this:
>
> `padding: 10px 20px 10px 20px;`
> These four values work like a clock:top, right, bottom, left, and will produce the exact same result as using the side-specific padding instructions.

```css
.blue-box {
  background-color: blue;
  color: #fff;
  padding: 40px 20px 20px 40px;
}
```

### 22. Use Clockwise Notation to Specify the Margin of an Element

Instead of specifying an element's margin-top, margin-right, margin-bottom, and margin-left properties individually, you can specify them all in one line, like this: `margin: 10px 20px 10px 20px;`

These four values work like a clock: top, right, bottom, left, and will produce the exact same result as using the side-specific margin instructions.

```css
.blue-box {
  background-color: blue;
  color: #fff;
  margin: 40px 20px 20px 40px;
}
```

### 23. Use Attribute Selectors to Style Elements

```css
[type="checkbox"] {
  margin-top: 10px;
  margin-bottom: 15px;
}
```

### 24. Understand Absolute versus Relative Units

The two main types of length units are absolute and relative. Absolute units tie to physical units of length. For example, in and mm refer to inches and millimeters, respectively. Absolute length units approximate the actual measurement on a screen, but there are some differences depending on a screen's resolution.

Relative units, such as em or rem, are relative to another length value. For example, em is based on the size of an element's font. If you use it to set the font-size property itself, it's relative to the parent's font-size.

```css
.red-box {
  background-color: red;
  margin: 20px 40px 20px 40px;
  padding: 1.5em;
}
```

### 25. 设置 body 样式

```css
body {
  background-color: black;
}
```

### 26. Inherit Styles from the Body Element 继承样式属性

```html
<style>
  body {
    background-color: black;
    color: green;
    font-family: monospace;
  }
</style>

<body>
  <h1>Hello World</h1>
</body>
```

### 27. 覆盖父元素的属性

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>
```

### 28. Override Styles in Subsequent CSS

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }

  .pink-text {
    color: pink;
  }

  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```

### 29. Override Class Declarations by Styling ID Attributes

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }

  .pink-text {
    color: pink;
  }

  .blue-text {
    color: blue;
  }

  #orange-text {
    color: orange;
  }
</style>
<h1 class="pink-text blue-text" id="orange-text">Hello World!</h1>
```

### 30. Override Class Declarations with Inline Styles

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 style="color:white;" id="orange-text" class="pink-text blue-text">
  Hello World!
</h1>
```

### 31. Override All Other Styles by using Important

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink !important;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">
  Hello World!
</h1>
```

### 32. Use Hex Code for Specific Colors

```html
<style>
  body {
    background-color: #000000;
  }
</style>
```

### 33. Use Hex Code to Mix Colors

```html
<style>
  .red-text {
    color: #ff0000;
  }
  .green-text {
    color: #00ff00;
  }
  .dodger-blue-text {
    color: #1e90ff;
  }
  .orange-text {
    color: #ffa500;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```

### 34. Use Abbreviated Hex Code

```html
<style>
  .red-text {
    color: #f00;
  }
  .fuchsia-text {
    color: #f0f;
  }
  .cyan-text {
    color: #0ff;
  }
  .green-text {
    color: #0f0;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>
```

### 35. Use RGB values to Color Elements

```html
<style>
  body {
    background-color: rgb(0, 0, 0);
  }
</style>
```

### 36. Use RGB to Mix Colors

```html
<style>
  .red-text {
    color: rgb(255, 0, 0);
  }
  .orchid-text {
    color: rgb(218, 112, 214);
  }
  .sienna-text {
    color: rgb(160, 82, 45);
  }
  .blue-text {
    color: rgb(0, 0, 255);
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>
```

### 37. Use CSS Variables to change several elements at once

```css
.penguin {
  /* Only change code below this line */
  --penguin-skin: gray;
  --penguin-belly: white;
  --penguin-beak: orange;
  /* Only change code above this line */

  position: relative;
  margin: auto;
  display: block;
  margin-top: 5%;
  width: 300px;
  height: 300px;
}
```

### 38. Create a custom CSS Variable

To create a CSS variable, you just need to give it a name with two hyphens in front of it and assign it a value like this:

`--penguin-skin: gray;`

This will create a variable named --penguin-skin and assign it the value of gray. Now you can use that variable elsewhere in your CSS to change the value of other elements to gray.

### 39. Use a custom CSS Variable

After you create your variable, you can assign its value to other CSS properties by referencing the name you gave it.

`background: var(--penguin-skin);`

This will change the background of whatever element you are targeting to gray because that is the value of the --penguin-skin variable. Note that styles will not be applied unless the variable names are an exact match.

### 40. Attach a Fallback value to a CSS Variable

When using your variable as a CSS property value, you can attach a fallback value that your browser will revert to if the given variable is invalid.

`background: var(--penguin-skin, black);`

This will set background to black if your variable wasn't set. Note that this can be useful for debugging.

### 41. Improve Compatibility with Browser Fallbacks

```html
<style>
  :root {
    --red-color: red;
  }

  .red-box {
    background: red;
    background: var(--red-color);
    height: 200px;
    width: 200px;
  }
</style>
<div class="red-box"></div>
```

### 42. Inherit CSS Variables

```html
<style>
  :root {
    /* Only change code below this line */
    --penguin-belly: pink;
    /* Only change code above this line */
  }

  body {
    background: var(--penguin-belly, #c6faf1);
  }

  .penguin {
    --penguin-skin: gray;
    --penguin-beak: orange;
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>
```

### 43. Change a variable for a specific area

When you create your variables in `:root` they will set the value of that variable for the whole page.

You can then over-write these variables by setting them again within a specific element.

```css
:root {
  --penguin-skin: gray;
  --penguin-belly: pink;
  --penguin-beak: orange;
}

body {
  background: var(--penguin-belly, #c6faf1);
}

.penguin {
  /* Only change code below this line */
  --penguin-belly: white;
  /* Only change code above this line */
  position: relative;
  margin: auto;
  display: block;
  margin-top: 5%;
  width: 300px;
  height: 300px;
}
```

### 44. Use a media query to change a variable

CSS Variables can simplify the way you use media queries.

For instance, when your screen is smaller or larger than your media query break point, you can change the value of a variable, and it will apply its style wherever it is used.

```css
:root {
  --penguin-size: 300px;
  --penguin-skin: gray;
  --penguin-belly: white;
  --penguin-beak: orange;
}

@media (max-width: 350px) {
  :root {
    /* Only change code below this line */
    --penguin-size: 200px;
    --penguin-skin: black;
    /* Only change code above this line */
  }
}
```
