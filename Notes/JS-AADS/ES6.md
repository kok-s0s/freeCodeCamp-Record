<!--
 * @Author: kok-s0s
 * @Date: 2021-06-10 08:51:55
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-06-11 02:02:57
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

### const---数组

```javascript
const s = [5, 7, 2];

function editInPlace() {
    // Only change code below this line
    // Using s = [2, 5, 7] would be invalid
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    // Only change code above this line
}
editInPlace();
```

### const---对象

`const` 能够保护对象的数据不会被修改

```javascript
let obj = {
    name: "FreeCodeCamp",
    review: "Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);
// 修改操作会报错，打印的数据还是初始化时的数据。
```

> 样例

```javascript
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS)
    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```

### 用箭头函数来编写简洁的匿名函数

> 样例

```javascript
const magic = () => {
    return new Date();
}
```

### 带参数的箭头函数

小知识： `concat()` 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

> 样例

```javascript
const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
}

console.log(myConcat([1, 2], [3, 4, 5]));
```

### 带默认参数的箭头函数

> 样例 定义了value的默认值（如果没有传参）。

```javascript
// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line
```

### Rest操作符的使用 箭头函数

> 样例

```javascript
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
```

### Use the Spread Operator to Evaluate Arrays In-Place

之所以使用 Math.max.apply(null, arr) 因为 Math.max(arr) 返回 NaN。 Math.max() 需要逗号分隔的参数，但不是数组。展开运算符使这种语法更易于阅读和维护。 
 
`...arr` 返回一个解压缩的数组。换句话说，它扩展了数组。但是，扩展运算符只能就地工作。

> 样例

```javascript
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1]; // Change this line

console.log(arr2);
```

### Use Destructuring Assignment to Extract Values from Objects

更简洁的赋值方式，不过要注意一一对应。

```javascript
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line

// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

const {
    today,
    tomorrow
} = HIGH_TEMPERATURES;

// Only change code above this line
```

### Use Destructuring Assignment to Assign Variables from Objects

接上，赋值的同时更改变量名。

```javascript
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

const {
    today: highToday,
    tomorrow: highTomorrow
} = HIGH_TEMPERATURES;

console.log(highToday); // should be 77
console.log(highTomorrow); // should be 80
```

### Use Destructuring Assignment to Assign Variables from Nested Objects

能够根据对象名指定对应的子对象。

```javascript
const LOCAL_FORECAST = {
    yesterday: {
        low: 61,
        high: 75
    },
    today: {
        low: 64,
        high: 77
    },
    tomorrow: {
        low: 68,
        high: 80
    }
};

// Only change code below this line

// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

const {
    today: {
        low: lowToday,
        high: highToday
    }
} = LOCAL_FORECAST;

// Only change code above this line
```

### Use Destructuring Assignment to Assign Variables from Arrays

> 样例：使用解构赋值来交换a和b的值。

```javascript
let a = 8,
    b = 6;
// Only change code below this line
[a, b] = [b, a];
```

### Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

利用上Rest操作符，来获取子数组。

```javascript
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    // Only change code below this line
    const [a, b, ...arr] = list; // Change this line
    // Only change code above this line
    return arr;
}
const arr = removeFirstTwo(source);
```

### Use Destructuring Assignment to Pass an Object as a Function's Parameters

```javascript
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Only change code below this line
const half = ({
    max,
    min
}) => (max + min) / 2.0;
// Only change code above this line
```

### 使用模板字面量创建字符串

模板字符串可以使用多行字符串和字符串插值功能。 轻松构建复杂字符串！

```javascript
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for (let i = 0; i < arr.length; ++i) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    // Only change code above this line

    return failureItems;
}

const failuresList = makeList(result.failure);
```

### Write Concise Object Literal Declarations Using Object Property Shorthand

例如：

```javascript
const getMousePosition = (x, y) => ({
    x: x,
    y: y
});

// 更简洁的写法
const getMousePosition = (x, y) => ({
    x,
    y
});
```

> 样例  语法糖

```javascript
const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
        name,
        age,
        gender
    };
    // Only change code above this line
};
```

### Write Concise Declarative Functions with ES6

> 样例 省略了function关键字

```javascript
// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
```

### Use class Syntax to Define a Constructor Function

用 `class` 创建类，constructor初始化。

> 样例 

```javascript
// Only change code below this line
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
```

### Use getters and setters to Control Access to an Object

get / set 

> 样例

```javascript
// Only change code below this line
class Thermostat {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }
    get temperature() {
        return (5 / 9) * (this.fahrenheit - 32);
    }
    set temperature(celsius) {
        this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
```

### module script

脚本导入

> 样例

```html
<html>

<body>
    <!-- Only change code below this line -->
    <script type="module" src="index.js"></script>
    <!-- Only change code above this line -->
</body>

</html>
```

### Use export to Share a Code Block

能将函数的使用范围扩大，能不用编写重复功能的代码。

```javascript
const uppercaseString = (string) => {
    return string.toUpperCase();
}

const lowercaseString = (string) => {
    return string.toLowerCase()
}

export {
    uppercaseString,
    lowercaseString
}
```

### Reuse JavaScript Code Using import

```javascript
import {
    uppercaseString,
    lowercaseString
} from './string_functions.js';
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
```

### Use * to Import Everything from a File

```javascript
import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```

### Create an Export Fallback with export default

```javascript
export default function subtract(x, y) {
    return x - y;
}
```

### Import a Default Export

导入有默认导出函数时可以自定义该函数的别名。

```javascript
import subtract from "./math_functions.js";
// Only change code above this line

subtract(7, 4);
```

### Create a JavaScript Promise

A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

```javascript
const myPromise = new Promise((resolve, reject) => {

});
```

> 样例

```javascript
const makeServerRequest = new Promise((resolve, reject) => {});
```

### Complete a Promise with resolve and reject

A promise has three states: pending, fulfilled, and rejected. The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument, as seen below.

> 样例

```javascript
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});
```

### Handle a Fulfilled Promise with then

Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:

```javascript
myPromise.then(result => {

});
```

result comes from the argument given to the resolve method.

> 样例

```javascript
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
        makeServerRequest.then(result => {
            console.log(result);
        });
    } else {
        reject("Data not received");
    }
});
```

### Handle a Rejected Promise with catch

catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:

```javascript
myPromise.catch(error => {

});
```

error is the argument passed in to the reject method.

> 样例

```javascript
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
        makeServerRequest.catch(error => {
            console.log(error);
        })
    }
});

makeServerRequest.then(result => {
    console.log(result);
});
```
