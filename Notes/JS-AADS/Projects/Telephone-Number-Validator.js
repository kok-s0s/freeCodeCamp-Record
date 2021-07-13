/*
 * @Author: kok-s0s
 * @Date: 2021-07-12 23:06:11
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-07-13 20:40:45
 * @Description: 电话号码检查器
 */

function telephoneCheck(str) {
    // 用正则表达式去求解
    if (/^(1?\s?\(?[0-9]{3}\)?\s?[0-9]{3}\s?[0-9]{4})$/.test(str)) {
        return true;
    } else if (/^(1?\s?\({1}[0-9]{3}\){1}\s?[0-9]{3}\-?\s?[0-9]{4})$/.test(str)) {
        return true;
    } else if (/^(1?\s?[0-9]{3}\-?\s?[0-9]{3}\-?\s?[0-9]{4})$/.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

telephoneCheck("555-555-5555");