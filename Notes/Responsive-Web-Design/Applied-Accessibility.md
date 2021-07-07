<!--
 * @Author: kok-s0s
 * @Date: 2021-06-20 13:23:56
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-07-07 23:19:19
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

### 7. 使用导航地标使屏幕阅读器导航更轻松

> nav元素

```html
<body>
    <header>
        <h1>Training with Camper Cat</h1>

        <nav>
            <ul>
                <li><a href="#stealth">Stealth &amp; Agility</a></li>
                <li><a href="#combat">Combat</a></li>
                <li><a href="#weapons">Weapons</a></li>
            </ul>
        </nav>

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

### 8. 使用页脚 Landmark 使屏幕阅读器导航更轻松

```html
<body>
    <header>
        <h1>Training</h1>
        <nav>
            <ul>
                <li><a href="#stealth">Stealth &amp; Agility</a></li>
                <li><a href="#combat">Combat</a></li>
                <li><a href="#weapons">Weapons</a></li>
            </ul>
        </nav>
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

    <footer>&copy; 2018 Camper Cat</footer>

</body>
```

### 9. 使用音频元素提高音频内容的可访问性

```html
<body>
    <header>
        <h1>Real Coding Ninjas</h1>
    </header>
    <main>
        <p>A sound clip of Zersiax's screen reader in action.</p>
        <audio controls>
            <source src="https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" type="audio/mpeg">
        </audio>
    </main>
</body>
```

### 10. 使用 figure 元素改进图表可访问性

```html
<body>
    <header>
        <h1>Training</h1>
        <nav>
            <ul>
                <li><a href="#stealth">Stealth &amp; Agility</a></li>
                <li><a href="#combat">Combat</a></li>
                <li><a href="#weapons">Weapons</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section>

            <!-- Only change code below this line -->

            <figure>
                <!-- Stacked bar chart will go here -->
                <br>
                <figcaption>Breakdown per week of time to spend training in stealth, combat, and weapons.</figcaption>
            </figure>
            <!-- Only change code above this line -->

        </section>
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
    <footer>&copy; 2018 Camper Cat</footer>
</body>
```

### 11. 使用标签元素提高表单字段的可访问性

```html
<body>
    <header>
        <h1>Deep Thoughts with Master Camper Cat</h1>
    </header>
    <section>
        <form>
            <p>Sign up to receive Camper Cat's blog posts by email here!</p>

            <label for="email">Email:</label>
            <input type="text" id="email" name="email">

            <input type="submit" name="submit" value="Submit">
        </form>
    </section>
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
    <footer>&copy; 2018 Camper Cat</footer>
</body>
```

### 12. 将单选按钮包装在字段集元素中以获得更好的可访问性

```html
<body>
    <header>
        <h1>Deep Thoughts with Master Camper Cat</h1>
    </header>
    <section>
        <form>
            <p>Sign up to receive Camper Cat's blog posts by email here!</p>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email">

            <!-- Only change code below this line -->
            <fieldset>
                <legend>What level ninja are you?</legend>
                <input id="newbie" type="radio" name="levels" value="newbie">
                <label for="newbie">Newbie Kitten</label><br>
                <input id="intermediate" type="radio" name="levels" value="intermediate">
                <label for="intermediate">Developing Student</label><br>
                <input id="master" type="radio" name="levels" value="master">
                <label for="master">Master</label>
            </fieldset>
            <!-- Only change code above this line -->

            <input type="submit" name="submit" value="Submit">
        </form>
    </section>
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
    <footer>&copy; 2018 Camper Cat</footer>
</body>
```

### 13. 添加可访问的日期选择器

```html
<body>
    <header>
        <h1>Tournaments</h1>
    </header>
    <main>
        <section>
            <h2>Mortal Kombat Tournament Survey</h2>
            <form>
                <p>Tell us the best date for the competition</p>
                <label for="pickdate">Preferred Date:</label>

                <!-- Only change code below this line -->
                <input type="date" id="pickdate" name="date">
                <!-- Only change code above this line -->

                <input type="submit" name="submit" value="Submit">
            </form>
        </section>
    </main>
    <footer>&copy; 2018 Camper Cat</footer>
</body>
```

### 14. 使用 HTML5 datetime 属性标准化时间

```html
<body>
    <header>
        <h1>Tournaments</h1>
    </header>
    <article>
        <h2>Mortal Kombat Tournament Survey Results</h2>

        <!-- Only change code below this line -->

        <p>Thank you to everyone for responding to Master Camper Cat's survey. The best day to host the vaunted Mortal Kombat tournament is <time datetime="2016-09-15">Thursday, September 15<sup>th</sup></time>. May the best ninja win!</p>

        <!-- Only change code above this line -->

        <section>
            <h3>Comments:</h3>
            <article>
                <p>Posted by: Sub-Zero on <time datetime="2016-08-13T20:01Z">August 13<sup>th</sup></time></p>
                <p>Johnny Cage better be there, I'll finish him!</p>
            </article>
            <article>
                <p>Posted by: Doge on <time datetime="2016-08-15T08:12Z">August 15<sup>th</sup></time></p>
                <p>Wow, much combat, so mortal.</p>
            </article>
            <article>
                <p>Posted by: The Grim Reaper on <time datetime="2016-08-16T00:00Z">August 16<sup>th</sup></time></p>
                <p>Looks like I'll be busy that day.</p>
            </article>
        </section>
    </article>
    <footer>&copy; 2018 Camper Cat</footer>
</body>
```

### 15. 使用自定义 CSS 使元素仅对屏幕阅读器可见

```html
<head>
    <style>
        .sr-only {
            position: absolute;
            left: -10000px;
            width: 1px;
            height: 1px;
            top: auto;
            overflow: hidden;
        }
    </style>
</head>

<body>
    <header>
        <h1>Training</h1>
        <nav>
            <ul>
                <li><a href="#stealth">Stealth &amp; Agility</a></li>
                <li><a href="#combat">Combat</a></li>
                <li><a href="#weapons">Weapons</a></li>
            </ul>
        </nav>
    </header>
    <section>
        <h2>Master Camper Cat's Beginner Three Week Training Program</h2>
        <figure>
            <!-- Stacked bar chart of weekly training -->
            <p>[Stacked bar chart]</p>
            <br />
            <figcaption>Breakdown per week of time to spend training in stealth, combat, and weapons.</figcaption>
        </figure>
        <table class="sr-only">
            <caption>Hours of Weekly Training in Stealth, Combat, and Weapons</caption>
            <thead>
                <tr>
                    <th></th>
                    <th scope="col">Stealth &amp; Agility</th>
                    <th scope="col">Combat</th>
                    <th scope="col">Weapons</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Week One</th>
                    <td>3</td>
                    <td>5</td>
                    <td>2</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th scope="row">Week Two</th>
                    <td>4</td>
                    <td>5</td>
                    <td>3</td>
                    <td>12</td>
                </tr>
                <tr>
                    <th scope="row">Week Three</th>
                    <td>4</td>
                    <td>6</td>
                    <td>3</td>
                    <td>13</td>
                </tr>
            </tbody>
        </table>
    </section>
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
            <h3>Goodbye, world: 5 proven ways to knock out an opponent</h3>
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
    <footer>&copy; 2018 Camper Cat</footer>
</body>
```

### 16. 使用高对比度文本提高可读性

```html
<head>
    <style>
        body {
            color: #636363;
            background-color: #FFF;
        }
    </style>
</head>

<body>
    <header>
        <h1>Deep Thoughts with Master Camper Cat</h1>
    </header>
    <article>
        <h2>A Word on the Recent Catnip Doping Scandal</h2>
        <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
        <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
    </article>
</body>
```

### 17. 通过使用足够的对比度避免色盲问题

```html
<head>
    <style>
        body {
            color: hsl(0, 55%, 15%);
            background-color: hsl(120, 25%, 55%);
        }
    </style>
</head>

<body>
    <header>
        <h1>Deep Thoughts with Master Camper Cat</h1>
    </header>
    <article>
        <h2>A Word on the Recent Catnip Doping Scandal</h2>
        <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
        <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
    </article>
</body>
```

### 18. 通过仔细选择传达信息的颜色来避免色盲问题

```html
<head>
    <style>
        button {
            color: #003366;
            background-color: #FFFF33;
            font-size: 14px;
            padding: 10px;
        }
    </style>
</head>

<body>
    <header>
        <h1>Danger!</h1>
    </header>
    <button>Delete Internet</button>
</body>
```

### 19. 使用描述性链接文本赋予链接意义

```html
<body>
    <header>
        <h1>Deep Thoughts with Master Camper Cat</h1>
    </header>
    <article>
        <h2>Defeating your Foe: the Red Dot is Ours!</h2>
        <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. <a href="">information about batteries</a> for information about batteries</p>
    </article>
</body>
```

### 20. 使用 HTML 访问键使链接可导航

```html
<body>
    <header>
        <h1>Deep Thoughts with Master Camper Cat</h1>
    </header>
    <article>

        <h2><a id="first" href="#" accesskey="g">The Garfield Files: Lasagna as Training Fuel?</a></h2>

        <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
    </article>
    <article>

        <h2><a id="second" href="#" accesskey="c">Is Chuck Norris a Cat Person?</a></h2>

        <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
    </article>
    <footer>&copy; 2018 Camper Cat</footer>
</body>
```

### 21. 使用 tabindex 将键盘焦点添加到元素

```html
<head>
    <style>
        p:focus {
            background-color: yellow;
        }
    </style>
</head>

<body>
    <header>
        <h1>Ninja Survey</h1>
    </header>
    <section>
        <form>

            <p tabindex="0">Instructions: Fill in ALL your information then click <b>Submit</b></p>

            <label for="username">Username:</label>
            <input type="text" id="username" name="username"><br>
            <fieldset>
                <legend>What level ninja are you?</legend>
                <input id="newbie" type="radio" name="levels" value="newbie">
                <label for="newbie">Newbie Kitten</label><br>
                <input id="intermediate" type="radio" name="levels" value="intermediate">
                <label for="intermediate">Developing Student</label><br>
                <input id="master" type="radio" name="levels" value="master">
                <label for="master">9th Life Master</label>
            </fieldset>
            <br>
            <fieldset>
                <legend>Select your favorite weapons:</legend>
                <input id="stars" type="checkbox" name="weapons" value="stars">
                <label for="stars">Throwing Stars</label><br>
                <input id="nunchucks" type="checkbox" name="weapons" value="nunchucks">
                <label for="nunchucks">Nunchucks</label><br>
                <input id="sai" type="checkbox" name="weapons" value="sai">
                <label for="sai">Sai Set</label><br>
                <input id="sword" type="checkbox" name="weapons" value="sword">
                <label for="sword">Sword</label>
            </fieldset>
            <br>
            <input type="submit" name="submit" value="Submit">
        </form><br>
    </section>
    <footer>&copy; 2018 Camper Cat</footer>
</body>
```

### 22. 使用 tabindex 指定多个元素的键盘焦点顺序

```html
x

<body>
    <div tabindex="1" class="overlay"></div>
    <header>
        <h1>Even Deeper Thoughts with Master Camper Cat</h1>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Training</a></li>
            </ul>
        </nav>
    </header>
    <form>
        <label for="search">Search:</label>

        <input type="search" name="search" id="search" tabindex="1">
        <input type="submit" name="submit" value="Submit" id="submit" tabindex="2">

    </form>
    <h2>Inspirational Quotes</h2>
    <blockquote>
        <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
            - Chuck Norris</p>
    </blockquote>
    <blockquote>
        <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
            - TMNT</p>
    </blockquote>
    <footer>&copy; 2018 Camper Cat</footer>
</body>
<style>
    body {
        height: 100%;
        margin: 0 !important;
        padding: 8px;
    }

    .overlay {
        margin: -8px;
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>
```
