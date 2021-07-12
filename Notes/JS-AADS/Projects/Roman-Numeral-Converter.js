/*
 * @Author: kok-s0s
 * @Date: 2021-07-12 22:30:33
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-07-12 22:51:12
 * @Description: 罗马数字转换器
 */
function convertToRoman(num) {
    let map = new Map([
        [0, ''],
        [1, 'I'],
        [2, 'II'],
        [3, 'III'],
        [4, 'IV'],
        [5, 'V'],
        [6, 'VI'],
        [7, 'VII'],
        [8, 'VIII'],
        [9, 'IX'],
        [10, 'X'],
        [20, 'XX'],
        [30, 'XXX'],
        [40, 'XL'],
        [50, 'L'],
        [60, 'LX'],
        [70, 'LXX'],
        [80, 'LXXX'],
        [90, 'XC'],
        [100, 'C'],
        [200, 'CC'],
        [300, 'CCC'],
        [400, 'CD'],
        [500, 'D'],
        [600, 'DC'],
        [700, 'DCC'],
        [800, 'DCCC'],
        [900, 'CM']
    ]);
    let tho = Math.floor(num / 1000);
    let hun = Math.floor((num % 1000) / 100) * 100;
    let ten = Math.floor((num % 100) / 10) * 10;
    let onesPlace = num % 10;
    let res = "";
    while (tho > 0) {
        res += "M";
        tho--;
    }
    // console.log(tho);
    // console.log(hun);
    // console.log(ten);
    // console.log(onesPlace);
    return res = res + map.get(hun) + map.get(ten) + map.get(onesPlace);
}

console.log(convertToRoman(400));