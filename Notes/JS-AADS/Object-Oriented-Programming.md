<!--
 * @Author: kok-s0s
 * @Date: 2021-07-05 09:42:55
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-07-05 22:47:58
 * @Description: OOP 面向对象编程
-->

> OOP, or Object Oriented Programming, is one of the major approaches to the software development process. In OOP, objects and classes are used to organize code to describe things and what they can do.

### 1. 创建一个基本的JavaScript对象

```javascript
let dog = {
    name: "liao",
    numLegs: 4
};
```

### 2. 使用点表示法访问对象的属性

```javascript
let dog = {
    name: "Spot",
    numLegs: 4
};
// Only change code below this line
console.log(dog.name);
console.log(dog.numLegs);
```

### 3. 为对象创建一个方法

```javascript
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
        return "This dog has " + dog.numLegs + " legs.";
    }
};

dog.sayLegs();
```

### 4. 使用 this 关键字使代码更可重用

```javascript
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
        return "This dog has " + this.numLegs + " legs.";
    }
};

dog.sayLegs();
```

### 5. 定义构造函数

```javascript
function Dog() {
    this.name = "liao";
    this.color = "red";
    this.numLegs = 4;
}
```

### 6. 使用构造函数创建对象

```javascript
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog();
```

### 7. 扩展构造函数以接收参数

```javascript
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("liao", "red");
```
