<!--
 * @Author: kok-s0s
 * @Date: 2021-06-24 02:29:57
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-06-24 16:59:33
 * @Description: debugging
-->

> Debugging is the process of going through your code, finding any issues, and fixing them.
>  
> Issues in code generally come in three forms: syntax errors that prevent your program from running, runtime errors where your code has unexpected behavior, or logical errors where your code doesn't do what you intended.

### 1. 使用控制台检查变量值

```javascript
let a = 5;
let b = 1;
a++;
// Only change code below this line

let sumAB = a + b;
console.log(sumAB);
```

### 2. 了解 freeCodeCamp 和浏览器控制台之间的差异

```javascript
// 打开你的浏览器控制台。
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// 使用 console.log() 打印输出变量
console.clear();
console.log(output);
// 运行测试，查看两个控制台的差异。

// 现在，在 console.log() 之前添加 console.clear()，清除浏览器控制台的内容，通过测试。
```

### 3. 使用 typeof 检查变量的类型

```javascript
let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof(seven));
console.log(typeof(three));
// Only change code below this line
```

### 4. 捕获拼写错误的变量和函数名称

JavaScript 区分大小写，有可能因为打字太快而导致拼写错误。

```javascript
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
```

### 5. 捕捉未闭合的括号、方括号、大括号和引号

```javascript
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);
```

### 6. 捕捉单引号和双引号的混合用法

```javascript
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);
```

### 7. 捕捉使用赋值运算符而不是等式运算符

```javascript
let x = 7;
let y = 9;
let result = "to come";

if (x === y) {
    result = "Equal!";
} else {
    result = "Not equal!";
}

console.log(result);
```

### 8. 在函数调用后捕获缺少的左括号和右括号

```javascript
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
}

let result = getNine();
console.log(result);
```

### 9. 调用函数时捕获以错误顺序传递的参数

```javascript
function raiseToPower(b, e) {
    return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
```

### 10. 使用索引时的一个错误

> Off by one errors (sometimes called OBOE) crop up when you're trying to target a specific index of a string or array (to slice or access a segment), or when looping over the indices of them. JavaScript indexing starts at zero, not one, which means the last index is always one less than the length of the item. If you try to access an index equal to the length, the program may throw an "index out of range" reference error or print `undefined` .

```javascript
function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 0; i < len; i++) {
        // Only change code above this line
        console.log(firstFive[i]);
    }
}

countToFive();
```

### 11. 在循环内重新初始化变量时要小心

```javascript
function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray
        let row = [];
        for (let j = 0; j < n; j++) {
            // Pushes n zeroes into the current row to create the columns
            row.push(0);
        }
        // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
```

### 12. 使用有效的终止条件防止无限循环

```javascript
function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
        console.log("Still going!");
    }
}
```
