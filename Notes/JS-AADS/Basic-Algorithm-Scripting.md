<!--
 * @Author: kok-s0s
 * @Date: 2021-06-26 12:01:00
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-06-28 15:43:17
 * @Description: 基本算法实现
-->

> An algorithm is a series of step-by-step instructions that describe how to do something.
>  
> To write an effective algorithm, it helps to break a problem down into smaller parts, and think carefully about how to solve each part with code.

### 1. 将摄氏度转换为华氏度

```javascript
function convertToF(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}

convertToF(30);
```

### 2. 反转字符串

```javascript
function reverseString(str) {
    // let reverseStr = "";
    // for(let i = str.length - 1; i >=0 ;--i)
    //   reverseStr += str[i];
    // return reverseStr;
    return str
        .split("")
        .reverse()
        .join("")
}

reverseString("hello");
```

### 3. 对数字进行因式分解

```javascript
function factorialize(num) {
    if (num == 0)
        return 1;
    return num * factorialize(num - 1);
}

factorialize(5);
```

### 4. 找出字符串中最长的单词

> for of 用来遍历数组
> for in 用来遍历对象

```javascript
function findLongestWordLength(str) {
    let arr = str.split(" ");
    let maxLength = 0;
    for (let item of arr) {
        if (item.length > maxLength)
            maxLength = item.length;
    }
    return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
```

### 5. 返回数组中的最大数

```javascript
function largestOfFour(arr) {
    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        res.push(Math.max(...arr[i]));
    }
    return res;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);
```

### 6. Confirm the Ending 确认是否以某个字符串作为结尾。

```javascript
function confirmEnding(str, target) {
    let unRegex = new RegExp(target + "$", "i");
    return unRegex.test(str);
}

confirmEnding("Bastian", "n");
```

### 7. Repeat a String Repeat a String 重复字符串

```javascript
function repeatStringNumTimes(str, num) {
    if (num <= 0)
        return "";
    let newStr = "";
    while (num) {
        newStr += str;
        num--;
    }
    return newStr;
}

repeatStringNumTimes("abc", 3);
```

### 8. 截断一个字符串

```javascript
function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
```

### 9. Finders Keepers

```javascript
function findElement(arr, func) {
    // for(let item of arr) {
    //   if(func(item))
    //     return item;
    // }
    // return undefined;
    return arr.find(func);
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```

### 10. Boo who

```javascript
function booWho(bool) {
    return bool === true || bool === false;
}

booWho(null);
```

### 11. Title Case a Sentence 标题案例一个例子

> 正则表达式 Regex

```javascript
function titleCase(str) {
    // 正则表达式的做法
    return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());

}

titleCase("I'm a little tea pot");
```

> another 分割进行大小写的转换

```javascript
String.prototype.replaceAt = function(index, character) {
    return (
        this.substr(0, index) + character + this.substr(index + character.length)
    );
};

function titleCase(str) {
    var newTitle = str.split(" ");
    var updatedTitle = [];
    for (var st in newTitle) {
        updatedTitle[st] = newTitle[st]
            .toLowerCase()
            .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(" ");
}

titleCase("I'm a little tea pot");
```

### 12. Slice and Splice 切片和拼接

```javascript
function frankenSplice(arr1, arr2, n) {
    let res = arr2.slice();
    res.splice(n, 0, ...arr1);
    return res;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```

### 13. Falsy Bouncer

> [filter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 筛选器

```javascript
function bouncer(arr) {
    // let newArr = [];
    // for(let item of arr) {
    //   if(item)
    //     newArr.push(item);
    // }
    // return newArr;
    return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
```

### 14. Where do I Belong 我属于哪里

```javascript
function getIndexToIns(arr, num) {
    // 找出所有比num小的数，即可知道排序后，num所应该在的位置。
    // let index = 0;
    // for (let i = 0; i < arr.length; ++i) {
    //   if (arr[i] < num)
    //     index++;
    // }
    // return index;  
    return arr.filter(val => num > val).length;
}

getIndexToIns([40, 60], 50);
```

### 15. Mutations 突变

> 需要有映射功能的数据结构作为支撑

```javascript
function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; ++i) {
        if (target.indexOf(test[i]) < 0)
            return false;
    }
    return true;
}

mutation(["hello", "hey"]);
```

### 16. Chunky Monkey 矮小的猴子

> 将一个一维数组分割成多个子数组，最后组合成一个二维数组。

```javascript
function chunkArrayInGroups(arr, size) {
    let res = [];
    let start = 0;
    while (start < arr.length) {
        res.push(arr.slice(start, start + size))
        start += size;
    }
    return res;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
```
