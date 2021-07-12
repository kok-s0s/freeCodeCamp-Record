/*
 * @Author: kok-s0s
 * @Date: 2021-07-12 22:52:41
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-07-12 23:05:25
 * @Description: 凯撒密码
 */
// JavaScript中无法使用下标来访问字符串中的某一位字符

function rot13(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/\w/)) {
            // console.log(str[i].charCodeAt());
            newStr += String.fromCharCode((str[i].charCodeAt() - 65 + 13) % 26 + 65);
        }
        else
            newStr += str[i];
    }
    return newStr;
}

console.log(rot13("SERR PBQR PNZC"));