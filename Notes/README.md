<!--
 * @Author: kok-s0s
 * @Date: 2021-06-20 00:18:11
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-07-08 21:30:41
 * @Description: Summary
-->

2021/6/19

总感觉每次练习完一个章节，如果仅仅只是记录，还是差点意思，应该加个总结的步骤。

## 正则表达式的使用

[记录文件](./JS-AADS/Regular-Expressions.md)

* 两个方法
  + `.test()` 判断是否匹配成功
  + `.match()` 返回匹配成功的结果，否则`null`
* `|` 使用该符号分割多个匹配项
* `i` 忽略大小写
* `g` 寻求多个结果
* `.` 适当使用该符号，能够找到有匹配的前缀或者后缀
* `[ ]` 里面如果放些字符，能够提供更多的匹配选择
* `[a-z]` 设定一定的字符匹配区间范围
* `[0-9]` 设定一定的数字匹配区间范围
* `^` 表示取反
* `s+` 表示取同一个`s`字符的连续 这只是个例子，且必须有出现过一次
* `s*` 表示取同一个`s`字符的连续 同上，但不一定要出现
* `?` 惰性匹配 和`*`搭配使用
* `^` 该符号用在开头也表示匹配其起始字符串
* `$` 用在末尾表示匹配末尾字符串
* `\w` === `[A-Za-z0-9_]`
* `\W` === `[^A-Za-z0-9_]`
* `\d` === `[0-9]`
* `\D` === `[^0-9]`
* `\s` 能够匹配空白，在要匹配一个句子时常用到
* `\S` 表示匹配非空白字符
* `{}` 能够限制匹配的字符
* `?` 跟在某字符后面，表示该字符可有可无，便于区分英式和美式的英语
* `?=u` 表示必须要有该`u`字符
* `?!u` 表示不要`u`字符
* `( | )` 混合分组

## debugging

[记录文件](./JS-AADS/Debugging.md)

总结：注意大小写，注意括号，注意拼写，注意规范，注意函数的正确写法及调用，避免死循环，注意索引使用，注意等价符号与复制符号的区别，注意变量的类型。总之，实战出bug就多想多尝试。

## Basic-Data-Structures

[记录文件](./JS-AADS/Basic-Data-Structures.md)

几个函数方法：
* push()
* unshift()
* pop()
* shift()
* splice()
* slice()
* Object.keys()
* indexOf()
* hasOwnProperty()

特殊符号

* `...`

语句
* for
* for in

关键字
* delete

以及各种对数组，对象，键值对的操作。读，写，删，更改等等

## Basic-Algorithm-Scripting

[记录文件](./JS-AADS/Basic-Algorithm-Scripting.md)

就一些JavaScript的代码练习，算是个温故知新了。

## Object-Oriented-Programming

[记录文件](./JS-AADS/Object-Oriented-Programming.md)

* 学会如何构造一个对象
* 对象的访问
* 对象的方法
* 对象方法的重用---this的使用
* 构造函数
* 对象相关的函数或属性
  + instanceof
  + hasOwnProperty
  + constructor
  + isPrototypeOf
  + prototype
* 原型属性的使用
* DRY原则---不要重复你自己
* 对象的继承
* Mixin的使用，让多个不同对象有相同的方法
* 闭包的使用---使用闭包保护对象内的属性不被外部修改
* 立即调用函数表达式（IIFE）&& IIFE创建模块

## Functional Programming

[记录文件](./JS-AADS/Functional-Programming.md)

函数这东西我太熟悉了，能记录的东西不多。
