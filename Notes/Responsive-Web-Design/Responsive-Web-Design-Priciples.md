<!--
 * @Author: kok-s0s
 * @Date: 2021-07-08 00:50:08
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-07-08 01:48:51
 * @Description: 响应式网页设计原则
-->

> There are many devices that can access the web, and they come in all shapes and sizes. Responsive web design is the practice of designing flexible websites that can respond to different screen sizes, orientations, and resolutions.

### 1. 创建媒体查询

根据不同设备的视图大小，相应的有不同的CSS规则。

> @media 有max和min，根据高宽变化，一共会有四个不同的子属性可以设置。

```html
<style>
    p {
        font-size: 20px;
    }

    /* Only change code below this line */
    @media (max-height: 800px) {
        p {
            font-size: 10px;
        }
    }

    /* Only change code above this line */
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

### 2. 使图像具有响应性

```html
<style>
    .responsive-img {
        max-width: 100%;
        height: auto;
    }

    img {
        width: 600px;
    }
</style>

<img class="responsive-img" src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
```

### 3. 使用 Retina 图像进行更高分辨率的显示

> 将图像设置成愿像素的一半能够提高图片的精度。

```html
<style>
    img {
        height: 100px;
        width: 100px;
    }
</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">
```

### 4. 使排版具有响应性

The four different viewport units are:

* vw (viewport width): 10vw would be 10% of the viewport's width.
* vh (viewport height): 3vh would be 3% of the viewport's height.
* vmin (viewport minimum): 70vmin would be 70% of the viewport's smaller dimension (height or width).
* vmax (viewport maximum): 100vmax would be 100% of the viewport's bigger dimension (height or width).

```html
<style>
    h2 {
        width: 80vw;
    }

    p {
        width: 75vmin;
    }
</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```
