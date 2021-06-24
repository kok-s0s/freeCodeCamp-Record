<!--
 * @Author: kok-s0s
 * @Date: 2021-06-20 13:23:56
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-06-21 06:27:33
 * @Description: 无障碍
-->

> In web development, accessibility refers to web content and a UI (user interface) that can be understood, navigated, and interacted with by a broad audience. This includes people with visual, auditory, mobility, or cognitive disabilities.

# Applied Accessibility

### 1. 为视觉障碍辅助功能添加替代图像的文本

就是在图像里增加 `alt` 属性，这样有图片阅览障碍的用户可以通过文字了解该图的含义。

```html
<img src="doingKarateWow.jpeg" alt="Camper Cat is doing karate">
```

### 2. 清楚 `alt` 的使用的注意点

看需求决定是否使用，有时可以直接设置为空。

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg" alt="">

<article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>To Come...</p>
</article>
```

### 3. 使用标题显示内容的层次关系

easy，会用 `h` 标签即可。

```html
<h1>How to Become a Ninja</h1>
<main>
    <h2>Learn the Art of Moving Stealthily</h2>
    <h3>How to Hide in Plain Sight</h3>
    <h3>How to Climb a Wall</h3>

    <h2>Learn the Art of Battle</h2>
    <h3>How to Strengthen your Body</h3>
    <h3>How to Fight like a Ninja</h3>

    <h2>Learn the Art of Living with Honor</h2>
    <h3>How to Breathe Properly</h3>
    <h3>How to Simplify your Life</h3>
</main>
```

### 4. 使用主元素直接跳转到内容

```html
<header>
    <h1>Weapons of the Ninja</h1>
</header>

<main>

</main>

<footer></footer>
```

### 5. 将内容包裹在文章元素中

 `article`

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
    <article>
        <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
        <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
    </article>

    <img src="samuraiSwords.jpeg" alt="">

    <article>
        <h2>Defeating your Foe: the Red Dot is Ours!</h2>
        <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
    </article>

    <img src="samuraiSwords.jpeg" alt="">

    <article>
        <h2>Is Chuck Norris a Cat Person?</h2>
        <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
    </article>
</main>
```

### 6. 使用标题 Landmark 使屏幕阅读器导航更容易

```html
<body>

    <header>
        <h1>Training with Camper Cat</h1>
    </header>

    <main>
        <section id="stealth">
            <h2>Stealth &amp; Agility Training</h2>
            <article>
                <h3>Climb foliage quickly using a minimum spanning tree approach</h3>
            </article>
            <article>
                <h3>No training is NP-complete without parkour</h3>
            </article>
        </section>
        <section id="combat">
            <h2>Combat Training</h2>
            <article>
                <h3>Dispatch multiple enemies with multithreaded tactics</h3>
            </article>
            <article>
                <h3>Goodbye world: 5 proven ways to knock out an opponent</h3>
            </article>
        </section>
        <section id="weapons">
            <h2>Weapons Training</h2>
            <article>
                <h3>Swords: the best tool to literally divide and conquer</h3>
            </article>
            <article>
                <h3>Breadth-first or depth-first in multi-weapon training?</h3>
            </article>
        </section>
    </main>
</body>
```

### 7. 