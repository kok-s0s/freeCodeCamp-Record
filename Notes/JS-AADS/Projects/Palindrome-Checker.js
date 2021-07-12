/*
 * @Author: kok-s0s
 * @Date: 2021-07-12 21:50:00
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-07-12 22:29:55
 * @Description: 回文检查器
 */
function palindrome(str) {
    let testStr = str.toLowerCase().split(/\s|\W|_/).join("")

    for (let l = 0, r = testStr.length - 1; l <= r; l++, r--) {
        if (testStr[l] !== testStr[r])
            return false;
    }
    return true;
}

if (palindrome("_eye"))
    console.log("It's OK!");
else {
    console.log("something wrong!");
}