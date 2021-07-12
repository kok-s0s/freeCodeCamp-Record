<!--
 * @Author: kok-s0s
 * @Date: 2021-07-08 10:49:47
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-07-12 21:41:45
 * @Description: 中级算法脚本
-->

### 1. 对范围内的所有数字求和

```javascript
function sumAll(arr) {
    let low, high, sum = 0;
    if (arr[0] > arr[1]) {
        low = arr[1];
        high = arr[0]
    } else {
        low = arr[0];
        high = arr[1];
    }
    for (let i = low; i <= high; ++i)
        sum += i;
    return sum;
}

sumAll([1, 4]);
```

### 2. 区分两个数组

```javascript
function diffArray(arr1, arr2) {
    // 第一种解法
    // var newArr = [];

    // const simpleDiff = (first, second) => {
    //   for (let i = 0; i < first.length; ++i) {
    //     if (second.indexOf(first[i]) === -1) {
    //       newArr.push(first[i])
    //     }
    //   }
    // }

    // simpleDiff(arr1, arr2);
    // simpleDiff(arr2, arr1);
    // return newArr;

    // 第二种解法
    return arr1
        .concat(arr2)
        .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

### 3. Seek and Destroy

删除元素

```javascript
// function destroyer(arr,...valsToRemove) {
//   return arr.filter(item => !valsToRemove.includes(item));
// }
function destroyer(arr) {
    var valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
        return !valsToRemove.includes(val);
    });
}
// function destroyer(arr) {
//   let valsToRemove = Object.values(arguments).slice(1);

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < valsToRemove.length; j++) {
//       if (arr[i] === valsToRemove[j]) {
//         delete arr[i];
//       }
//     }
//   }
//   return arr.filter(item => item !== null);
// }
destroyer([1, 2, 3, 1, 2, 3], 2, 3);·
```

### 4. 找出包含特定键值对的对象

```javascript
function whatIsInAName(collection, source) {
    var arr = Object.keys(source);
    return collection.filter((obj) => {
        return arr.every((key) => {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        })
    });
}

whatIsInAName([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
});
```

### 5. 短线连接格式

```javascript
function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}

spinalCase('This Is Spinal Tap');
```

### 6. 儿童黑话

```javascript
function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null ?
        str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay") :
        str.concat("way");
}

translatePigLatin("consonant");
```

### 7. 搜索与替换

> indexOf 寻求匹配不区分大小写

```javascript
function myReplace(str, before, after) {
    // Find index where before is on string
    var index = str.indexOf(before);
    // Check to see if the first letter is uppercase or not
    if (str[index] === str[index].toUpperCase()) {
        // Change the after word to be capitalized before we use it.
        after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
        // Change the after word to be uncapitalized before we use it.
        after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    // Now replace the original str with the edited one.
    str = str.replace(before, after);

    return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

### 8. DNA 配对

```javascript
function pairElement(str) {
    let newStr = [];
    for (let i = 0; i < str.length; ++i) {
        let subStr = [];
        subStr.push(str[i]);
        switch (str[i]) {
            case "A":
                subStr.push("T");
                break;
            case "T":
                subStr.push("A");
                break;
            case "C":
                subStr.push("G");
                break;
            case "G":
                subStr.push("C");
                break;
        }
        newStr.push(subStr);
    }
    return newStr;
}

pairElement("GCG");
```

```javascript
function pairElement(str) {
    //create object for pair lookup
    var pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x, pairs[x]]);
}

pairElement("GCG");
```

### 9. 寻找缺失的字母

两个函数 字符与数字之间的转换

1. charCodeAt
2. fromCharCode

```javascript
function fearNotLetter(str) {
    let first = str.charCodeAt(0);
    for (let i = 1; i < str.length; ++i) {
        if (str.charCodeAt(i) !== first + i) {
            return String.fromCharCode(first + i);
        }
    }
    return undefined;
}

fearNotLetter("abce");
```

### 10. 集合排序

> [Arguments 对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)

```javascript
function uniteUnique(arr1, arr2, arr3) {
    let res = [];
    for (let i = 0; i < arguments.length; ++i) {
        for (let j = 0; j < arguments[i].length; ++j) {
            if (res.indexOf(arguments[i][j]) < 0) {
                res.push(arguments[i][j]);
            }
        }
    }
    return res;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

```javascript
function uniteUnique(...arr) {
    return [...new Set(arr.flat())]
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

### 11. 转换 HTML 字符实体

```javascript
function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);

}

convertHTML("Dolce & Gabbana");
```

### 12. 求斐波那契数列中的奇数之和

```javascript
function sumFibs(num) {
    if (num === 1)
        return 1;
    else if (num === 2)
        return 2;
    let fir = 1,
        sec = 1,
        sum = 2;
    for (let i = 3; i <= num; ++i) {
        let temp = fir + sec;
        fir = sec;
        sec = temp;
        if (temp % 2 !== 0 && temp <= num)
            sum += temp;
    }
    return sum;
}

sumFibs(4);
```

### 13. 质数求和

```javascript
function Prime(n) {
    for (let i = 2; i <= Math.sqrt(n); ++i) {
        if (n % i === 0)
            return false;
    }
    return true;
}

function sumPrimes(num) {
    if (num === 2)
        return 2;
    let sum = 2;
    for (let i = 3; i <= num; ++i) {
        if (Prime(i))
            sum += i;
    }
    return sum;
}

sumPrimes(10);
```

### 14. 找出数字范围内的最小公倍数

```javascript
function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const range = Array(max - min + 1)
        .fill(0)
        .map((_, i) => i + min);
    // GCD of two numbers
    // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
    const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
    // LCM of two numbers
    // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
    const lcm = (a, b) => a * b / gcd(a, b);
    // LCM of multiple numbers
    // https://en.wikipedia.org/wiki/Least_common_multiple#Other
    return range.reduce((multiple, curr) => lcm(multiple, curr));
}

smallestCommons([1, 5]);
```

```javascript
function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1;
    // Largest possible value for SCM
    let upperBound = 1;
    for (let i = min; i <= max; i++) {
        upperBound *= i;
    }
    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
        // Check if every value in range divides 'multiple'
        let divisorCount = 0;
        for (let i = min; i <= max; i++) {
            // Count divisors
            if (multiple % i === 0) {
                divisorCount += 1;
            }
        }
        if (divisorCount === numberDivisors) {
            return multiple;
        }
    }
}

smallestCommons([1, 5]);
```

### 15. 根据参数删除数组元素

```javascript
function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
        console.log(arr[0]);
        arr.shift()
    }
    return arr;
}

dropElements([1, 2, 3], function(n) {
    return n < 3;
});
```

### 16. 数组扁平化

```javascript
function steamrollArray(arr) {
    const flattenedArray = [];
    // Loop over array contents
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // Recursively flatten entries that are arrays
            //  and push into the flattenedArray
            flattenedArray.push(...steamrollArray(arr[i]));
        } else {
            // Copy contents that are not arrays
            flattenedArray.push(arr[i]);
        }
    }
    return flattenedArray;
}

steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]);
```

```javascript
function steamrollArray(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;

}

steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]);
```

### 17. 翻译二进制字符串

```javascript
function binaryAgent(str) {
    let bitString = str.split(" ");
    let resString = [];
    for (let i = 0; i < bitString.length; ++i) {
        resString.push(String.fromCharCode(parseInt(bitString[i], 2)));
    }
    return resString.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```

```javascript
function binaryAgent(str) {
    return String.fromCharCode(
        ...str.split(" ").map(function(char) {
            return parseInt(char, 2);
        })
    );
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```

### 18. 一切都是True

```javascript
function truthCheck(collection, pre) {
    // Create a counter to check how many are true.
    var counter = 0;
    // Check for each object
    for (var c in collection) {
        // If it is has property and value is truthy
        if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
            counter++;
        }
    }
    // Outside the loop, check to see if we got true for all of them and return true or false
    return counter == collection.length;
}

truthCheck([{
    "user": "Tinky-Winky",
    "sex": "male"
}, {
    "user": "Dipsy",
    "sex": "male"
}, {
    "user": "Laa-Laa",
    "sex": "female"
}, {
    "user": "Po",
    "sex": "female"
}], "sex");
```

```javascript
function truthCheck(collection, pre) {
    return collection.every((element) => {
        return element.hasOwnProperty(pre) && Boolean(element[pre]);
    })
}

truthCheck([{
    "user": "Tinky-Winky",
    "sex": "male"
}, {
    "user": "Dipsy",
    "sex": "male"
}, {
    "user": "Laa-Laa",
    "sex": "female"
}, {
    "user": "Po",
    "sex": "female"
}], "sex");
```

### 19. 可选参数

```javascript
function addTogether() {
    var args = Array.from(arguments);
    return args.some(n => typeof n !== "number") ?
        undefined :
        args.length > 1 ?
        args.reduce((acc, n) => (acc += n), 0) :
        n => (typeof n === "number" ? n + args[0] : undefined);

}

addTogether(2, 3);
```

### 20. 创建一个人员对象

```javascript
var Person = function(firstAndLast) {
    var fullName = firstAndLast;

    this.getFirstName = function() {
        return fullName.split(" ")[0];
    };

    this.getLastName = function() {
        return fullName.split(" ")[1];
    };

    this.getFullName = function() {
        return fullName;
    };

    this.setFirstName = function(name) {
        fullName = name + " " + fullName.split(" ")[1];
    };

    this.setLastName = function(name) {
        fullName = fullName.split(" ")[0] + " " + name;
    };

    this.setFullName = function(name) {
        fullName = name;
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();
```

### 21. 计算轨道周期

```javascript
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return arr.map(({
        name,
        avgAlt
    }) => {
        const earth = earthRadius + avgAlt;
        const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3) / GM));
        return {
            name,
            orbitalPeriod
        };
    });
}

orbitalPeriod([{
    name: "sputnik",
    avgAlt: 35873.5553
}]);
```
