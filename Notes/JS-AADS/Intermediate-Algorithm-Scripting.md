<!--
 * @Author: kok-s0s
 * @Date: 2021-07-08 10:49:47
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-07-08 22:14:10
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
