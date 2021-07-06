<!--
 * @Author: kok-s0s
 * @Date: 2021-07-05 09:42:55
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-07-06 22:50:41
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

### 8. 使用 instanceof 验证对象的构造函数

```javascript
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(5);
myHouse instanceof House;
```

### 9. 了解自己的属性

```javascript
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

// Only change code below this line
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}
```

### 10. 使用原型属性减少重复代码

> prototype

```javascript
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog("Snoopy");
```

### 11. 迭代所有属性

```javascript
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}

console.log(ownProps);
console.log(prototypeProps);
```

### 12. 了解构造函数属性

```javascript
function Dog(name) {
    this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
}
```

### 13. 将原型更改为新对象

```javascript 
function Dog(name) {

    this.name = name; 

}

Dog.prototype = {

    // Only change code below this line
    numLegs: 4, 
    eat: function() {
        console.log("ka ka ka");
    }, 
    describe: function() {
        console.log("My name is " + this.name);
    }

}; 

```

### 14. 更改原型时记得设置构造函数属性

```javascript
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
    console.log("nom nom nom");
    },
    describe: function() {
    console.log("My name is " + this.name);
    }
};
```

### 15. 了解对象原型的来源

```javascript
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
Dog.prototype.isPrototypeOf(beagle);
```

### 16. 理解原型链

```javascript
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle); // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);
```

### 17. 使用继承，这样你就不会重复自己

```javascript
function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
};

function Animal() {}

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};
```

### 18. 从超类型继承行为

```javascript
function Animal() {}

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line
```

### 19. 将子对象的原型设置为父对象的实例

```javascript
function Animal() {}

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

function Dog() {}

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();
beagle.eat();
```

### 20. 重置继承的构造函数属性

```javascript
function Animal() {}

function Bird() {}

function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
```

### 21. 继承后添加方法

```javascript
function Animal() {}
Animal.prototype.eat = function() {
    console.log("nom nom nom");
};

function Dog() {}

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log("Woof!");
}
// Only change code above this line

let beagle = new Dog();
```

### 22. 覆盖继承的方法

```javascript
function Bird() {}

Bird.prototype.fly = function() {
    return "I am flying!";
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = function() {
    return "Alas, this is a flightless bird.";
}
// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());
```

### 23. 使用 Mixin 在不相关的对象之间添加共同行为

```javascript
let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Only change code below this line
let glideMixin = function(obj) {
    obj.glide = function() {
        console.log("swim!")
    }
}
glideMixin(bird);
glideMixin(boat);
```

### 24. 使用闭包保护对象内的属性不被外部修改

```javascript
function Bird() {
    let weight = 15;
    this.getWeight = function() {
        return weight;
    }
}
```

### 25. 理解立即调用函数表达式 (IIFE)

```javascript
(function() {
    console.log("A cozy nest is ready");
})();
```

### 26. 使用 IIFE 创建模块

```javascript
let funModule = (function() {
    return {
        isCuteMixin: function(obj) {
            obj.isCute = function() {
                return true;
            };
        },
        singMixin: function(obj) {
            obj.sing = function() {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();
```

> 示例

```javascript
let motionModule = (function() {
    return {
        glideMixin: function(obj) {
            obj.glide = function() {
                console.log("Gliding on the water");
            };
        },
        flyMixin: function(obj) {
            obj.fly = function() {
                console.log("Flying, wooosh!");
            };
        }
    }
})();
```

Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule. This returned object contains all of the mixin behaviors as properties of the object. The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. Here is an example using it:

```javascript
motionModule.glideMixin(duck);
duck.glide();
```
