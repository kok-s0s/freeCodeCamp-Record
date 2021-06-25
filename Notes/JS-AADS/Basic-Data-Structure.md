<!--
 * @Author: kok-s0s
 * @Date: 2021-06-24 17:05:13
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-06-25 15:43:00
 * @Description: 简单数据结构
-->

### 1. 使用数组存储数据集合

```javascript
let yourArray = [true, 11, "kok-s0s", "Github", "scnu"]; // Change this line
```

### 2. 使用括号表示法访问数组的内容

```javascript
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "kok-s0s"
// Only change code above this line
console.log(myArray);
```

### 3. 使用 push() 和 unshift() 将项目添加到数组

`push()` 添加在数组后面

`unshift()` 添加在数组前面

```javascript
function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9)
    // Only change code above this line
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
```

### 4. 使用 pop() 和 shift() 从数组中删除项目

```javascript
function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
```

### 5. 使用 splice() 删除项目

```javascript
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(4, 4);
arr.shift();
// Only change code above this line
console.log(arr);
```

### 6. 使用 splice() 添加项目

```javascript
function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
    // Only change code above this line
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
```

### 7. 使用 slice() 复制数组项

> slice() 不是修改数组，而是将给定数量的元素复制或提取到新数组中，而保持调用它的数组不变。 slice() 只接受 2 个参数——第一个是开始提取的索引，第二个是停止提取的索引（提取将发生，但不包括该索引处的元素）。

```javascript
function forecast(arr) {
    // Only change code below this line

    return arr.slice(2, 4);
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```

### 8. 使用扩展运算符复制数组

> While `slice()` allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: `...`

```javascript
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // Only change code below this line
        newArr.push([...arr]);
        // Only change code above this line
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));
```

### 9. 使用扩展运算符组合数组

```javascript
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
    return sentence;
}

console.log(spreadOut());
```

### 10. 使用 indexOf() 检查元素是否存在

```javascript
function quickCheck(arr, elem) {
    // Only change code below this line
    return arr.indexOf(elem) !== -1;
    // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

### 11. 使用 For 循环遍历数组的所有项

```javascript
function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i].indexOf(elem) === -1)
            newArr.push(arr[i]);
    }
    // Only change code above this line
    return newArr;
}

console.log(filteredArray([
    [3, 2, 3],
    [1, 6, 3],
    [3, 13, 26],
    [19, 3, 9]
], 3));
```

### 12. 创建复杂的多维数组

```javascript
let myNestedArray = [
    // Only change code below this line
    'level 1', /* myNestedArray[0]             */
    ['level 2'], /* myNestedArray[1][0]          */
    [
        ['level 3', 'deep']
    ], /* myNestedArray[2][0][0]       */
    [
        [
            ['level 4', 'deeper']
        ]
    ], /* myNestedArray[3][0][0][0]    */
    [
        [
            [
                ['level 5', 'deepest']
            ]
        ]
    ] /* myNestedArray[4][0][0][0][0] */
    // Only change code above this line
];
```

### 13. 向 JavaScript 对象添加键值对

```javascript
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

// Only change code below this line
foods.bananas = 13;
foods['grapes'] = 35;
foods['strawberries'] = 27;
// Only change code above this line

console.log(foods);
```

### 14. 修改嵌套在对象中的对象

```javascript
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);
```

### 15. 使用括号表示法访问属性名称

```javascript
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {
    // Only change code below this line
    return foods[scannedItem];
    // Only change code above this line
}

console.log(checkInventory("apples"));
```

### 16. 使用 delete 关键字删除对象属性

```javascript
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line

console.log(foods);
```

### 17. 检查对象是否具有属性

```javascript
let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(userObj) {
    // Only change code below this line
    // if (userObj.hasOwnProperty('Alan') &&
    //   userObj.hasOwnProperty('Jeff') &&
    //   userObj.hasOwnProperty('Sarah') &&
    //   userObj.hasOwnProperty('Ryan'))
    //   return true;
    // else
    //   return false;
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
        userObj.hasOwnProperty(name)
    );
    // Only change code above this line
}

console.log(isEveryoneHere(users));
```

### 18. 使用 for...in 语句遍历对象的键

```javascript
function countOnline(usersObj) {
    // Only change code below this line
    let res = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true)
            res++;
    }
    return res;
    // Only change code above this line
}
```

### 19. 使用 Object.keys() 生成所有对象键的数组

```javascript
let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    // Only change code below this line
    return Object.keys(obj);
    // Only change code above this line
}

console.log(getArrayOfUsers(users));
// [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]
```

### 20. 修改存储在对象中的数组

```javascript
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    // Only change code below this line
    userObj.data.friends.push(friend);
    return userObj.data.friends;
    // Only change code above this line
}

console.log(addFriend(user, 'Pete'));
```
