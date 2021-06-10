<!--
 * @Author: kok-s0s
 * @Date: 2021-06-10 08:51:55
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-06-10 09:15:07
 * @Description: ES6新特性
-->

# ES6

### var和let的初始化

let遵循严格模式 `"use strict"` ，无法重复定义。

```javascript
let catName;
let quote;

function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";

}
catTalk();
```

### var和let的作用域区别

 

```javascript
var numArray = [];
for (var i = 0; i < 3; i++) {
    numArray.push(i);
}
console.log(numArray);
console.log(i);
// [1, 2, 3] 3

var numArray = [];
var i;
for (i = 0; i < 3; i++) {
    numArray.push(i);
}
console.log(numArray);
console.log(i);
// [1, 2, 3] 3

// 这里var定义的变量作用域范围都是全局的

let printNumTwo;
for (let i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function() {
            return i;
        };
    }
}
console.log(printNumTwo());
console.log(i);
// 2 输出i出现错误

// 这里let作用域范围只有其所在的块的作用域

// 样例
function checkScope() {
    "use strict"
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}
```

### const声明 只读 Read-only

`const` 设置的变量只可读，不可以做修改，而且定义的变量的首字母必须是大写。

```javascript
function printManyTimes(str) {

    // Only change code below this line

    "use strict"
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }

    // Only change code above this line

}
printManyTimes("freeCodeCamp");
```
