/*
 * @Author: kok-s0s
 * @Date: 2021-07-13 18:48:53
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-07-13 20:38:13
 * @Description: 计算找零
 */
function checkCashRegister(price, cash, cid) {
    let map = new Map([
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.10],
        ["QUARTER", 0.25],
        ["ONE", 1.00],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ]);
    let changeRes = {
        status: "INSUFFICIENT_FUNDS",
        change: []
    }
    let diff = cash - price;
    let totalMoney = 0;
    for (let element of cid) {
        totalMoney += element[1];
    }
    totalMoney = totalMoney.toFixed(2);
    if (diff > totalMoney)
        return changeRes;
    else if (diff.toFixed(2) === totalMoney) {
        changeRes.status = "CLOSED";
        changeRes.change = cid;
        return changeRes;
    } else {
        cid = cid.reverse();
        for (let element of cid) {
            let temp = [element[0], 0];
            while (diff >= map.get(element[0]) && element[1] > 0) {
                temp[1] += map.get(element[0]);
                element[1] -= map.get(element[0]);
                diff -= map.get(element[0]);
                diff = diff.toFixed(2);
            }
            if (temp[1] > 0) {
                changeRes.change.push(temp);
            }
        }
        if (diff > 0) {
            changeRes.change = [];
        } else {
            changeRes.status = "OPEN";
        }
        return changeRes;
    }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));