<!--
 * @Author: kok-s0s
 * @Date: 2021-09-20 17:18:07
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-09-24 12:17:57
 * @Description: MongoDB and Mongoose
-->

MongoDB 是一个数据库应用程序，用于存储您可以在应用程序中使用的 JSON 文档（或记录）。与 SQL（另一种类型的数据库）不同，Mongo 是一种非关系型或“NoSQL”数据库。这意味着 Mongo 将所有关联数据存储在一个记录中，而不是像在 SQL 数据库中那样将其存储在许多预设表中。

Mongoose 是一个流行的 npm 包，通常与 Mongo 一起安装。使用 Mongoose，您可以使用纯 JavaScript 对象而不是 JSON，这使得使用 Mongo 更容易。此外，它还允许您为称为架构的文档创建蓝图，因此您不会意外保存错误类型的数据并在以后导致错误。

在 MongoDB 和 Mongoose 课程中，您将学习处理持久数据的基础知识，包括如何设置模型，以及如何在数据库中保存、删除和查找文档。

--------------------------------

### 1. 安装和设置 Mongoose

[MongoDB Atlas Tutorial – How to Get Started](https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/)

在这个挑战中，你将建立一个 MongoDB Atlas 数据库并导入连接到它所需的软件包。

按照这篇教程在 MongoDB Atlas 创建一个托管数据库。

将 mongodb 和 mongoose 添加到项目的 package.json 文件中。 然后，在 myApp.js 文件中请求 mongoose。 创建一个 .env 文件，给它添加一个 MONGO_URI 变量。 变量的值为你的 MongoDB Atlas 数据库 URI。 应用单引号或双引号包裹 URI。请记住，环境变量 = 两边不能有空格。 例如，MONGO_URI='VALUE'。 完成后，使用下面的代码来连接数据库。

```js
mongoose.connect( < Your URI > , {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
```

[任务仓库](https://replit.com/@kok-s0s/boilerplate-mongomongoose#.replit)

**package.json**

```json
{
    "name": "fcc-mongo-mongoose-challenges",
    "version": "0.0.1",
    "description": "A boilerplate project",
    "main": "server.js",
    "scripts": {
        "start": "node server.js"
    },
    "dependencies": {
        "body-parser": "^1.15.2",
        "dotenv": "^8.2.0",
        "express": "^4.12.4",
        "mongodb": "^4.1.2",
        "mongoose": "^6.0.6"
    },
    "repository": {
        "type": "git",
        "url": "https://github.com/freeCodeCamp/boilerplate-mongomongoose.git"
    },
    "keywords": [
        "node",
        "mongoose",
        "express"
    ],
    "license": "MIT"
}
```

**myApp.js**

```js
let mongoose = require('mongoose');

let url = "mongodb+srv://kok-s0s:13392652923@cluster0.juszl.mongodb.net/db1?retryWrites=true&w=majority"

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
```

### 2. 创建一个模型（Model）

CRUD 第一小节——CREATE

首先，我们需要一个 Schema， 每一个 Schema 都对应一个 MongoDB 的 collection， 并且在相应的 collection 里定义 documents 的“样子”。 Schema 用于组成模型（Model）， 我们甚至可以通过嵌套 Schema 来创建复杂的模型。目前我们先从简。 我们可以根据模型创建实例，模型实例化后的对象称为 documents。

Replit 是一个真实的服务器，在其中，通过 handler 函数和数据库交互。 这些函数会在特定事件（比如有人调用了我们的服务器 API）发生时执行。 接下来的挑战题目即是以此为基础。 done() 是一个回调函数，它的作用是在一个异步操作（比如对数据库进行插入、查询、更新或删除）执行完成时，通知我们可以继续执行后续的其它代码。 这与 Node.js 中的处理方式十分类似，在 Node.js 中，我们会在（异步操作）成功时调用 done(null, data)，在失败时调用 done(err)。

注意：与远程服务器进行交互时，我们需要考虑到发生错误的可能！

```js
/* Example */

const someFunc = function(done) {
    //... do something (risky) ...
    if (error) return done(error);
    done(null, result);
};
```

按下面的原型信息创建一个名为 personSchema 的 schema：

```
- Person Prototype -
--------------------
name : string [required]
age :  number
favoriteFoods : array of strings (*)
```

采用 Mongoose 基础 schema 类型。 你如果还想添加更多的键，就请使用 required 或 unique 等简单的验证器（validators），并设置默认值。 详情请参考 [Mongoose 文档](https://mongoosejs.com/docs/guide.html)。

请从 personSchema 创建一个名为 Person 的 model。

[任务仓库](https://replit.com/@kok-s0s/boilerplate-mongomongoose#.replit)

**myApp.js**

```js
let mongoose = require('mongoose');
const {
    Schema
} = mongoose;

let url = "mongodb+srv://kok-s0s:13392652923@cluster0.juszl.mongodb.net/db1?retryWrites=true&w=majority"

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    favoriteFoods: [String],
});

let Person = mongoose.model('Person', personSchema);
```

### 3. 创建并保存一条 Model 记录

在这个挑战中，你需要创建并保存一条模型数据。

在 createAndSavePerson 函数中，用我们在上一个挑战中写好的 Person 构造函数创建 document 实例， 将包含 name、age 和 favoriteFoods 的对象传给构造函数， 这些属性的数据类型必须符合我们在 personSchema 中定义的类型。 然后在返回的 document 实例上调用方法 document.save()。 同时，按 Node.js 的方式为它传一个回调函数。 这是一种常见模式，以下所有CRUD方法都将这样的回调函数作为最后一个参数。

```js
/* Example */

// ...
person.save(function(err, data) {
    //   ...do your stuff here...
});
```

--------------------------------

**myApp.js**

```js
let mongoose = require('mongoose');
const {
    Schema
} = mongoose;

let url = "mongodb+srv://kok-s0s:13392652923@cluster0.juszl.mongodb.net/db1?retryWrites=true&w=majority"

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    favoriteFoods: [String],
});

let Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
    let kok = new Person({
        name: "kok-s0s",
        age: 21,
        favoriteFoods: ["apple", "pig"],
    });
    kok.save(function(err, data) {
        if (err)
            return done(err);
        return done(null, data);
    })
};
```

### 4. 使用 model.create() 创建多条记录

在一些情况下，比如进行数据库初始化，你会需要创建很多 model 实例来用作初始数据。 Model.create() 接受一组像 [{name: 'John', ...}, {...}, ...] 的数组作为第一个参数，并将其保存到数据库。

--------------------------------

修改 createManyPeople 方法，使用 arrayOfPeople 作为 Model.create() 的参数来创建多个 people 实例。

注意： 你可以使用在上一个挑战中创建的 model 来完成当前挑战。

--------------------------------

**myApp.js**

```js
let mongoose = require('mongoose');
const {
    Schema
} = mongoose;

let url = "mongodb+srv://kok-s0s:13392652923@cluster0.juszl.mongodb.net/db1?retryWrites=true&w=majority"

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    favoriteFoods: [String],
});

let Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
    let kok = new Person({
        name: "kok-s0s",
        age: 21,
        favoriteFoods: ["apple", "pig"],
    });
    kok.save((err, data) => {
        if (err)
            return done(err);
        return done(null, data);
    })
};

const createManyPeople = (arrayOfPeople, done) => {
    Person.create(arrayOfPeople, (err, data) => {
        if (err)
            return console.error(err);
        done(null, data);
    });
};
```

### 5. 使用 model.find() 查询数据库

我们尝试一种最简单的用法，Model.find() 接收一个查询 document（一个 JSON 对象）作为第一个参数，一个回调函数作为第二个参数， 它会返回由匹配到的数据组成的数组。 这个方法支持很多搜索选项， 详情请参阅文档。

--------------------------------

修改 findPeopleByName 函数使用 Model.find() -> [Person] 查询所有给定名字的人。

请使用函数参数中的 personName 作为搜索条件。

```js
const findPeopleByName = (personName, done) => {
    Person.find({
        name: personName
    }, (error, personFound) => {
        if (error) return console.log(error);
        done(null, personFound);
    })
};
```

### 6. 使用 model.findOne() 从数据库中返回一个单一匹配的 Document

Model.findOne() 与 Model.find() 十分类似，但就算数据库中有很多条数据可以匹配查询条件，它也只返回一个 document，而不会返回一个数组， 如果查询条件是声明为唯一值的属性，它会更加适用。

--------------------------------

修改 findOneByFood 函数，用 Model.findOne() -> Person 来查询在收藏夹中有某种食物的一个人。 将函数参数中的 food 作为检索条件。

```js
const findOneByFood = (food, done) => {
    Person.findOne({
        favoriteFoods: food
    }, (error, foodFound) => {
        if (error) return consolo.log(error);
        done(null, foodFound);
    })
};
```

### 7. 使用 model.findById() 方法，根据 _id 来搜索数据

在保存 document 的时候，MongoDB 会自动为它添加 _id 字段，并给该字段设置一个唯一的仅包含数字和字母的值。 通过 _id 搜索是一个十分常见的操作，为此，Mongoose 提供了一个专门的方法。

--------------------------------

修改 findPersonById，用 Model.findById() -> Person 来查询唯一一个给定 _id 的人， 把函数参数 personId 作为查询键。

```js
const findPersonById = (personId, done) => {
    Person.findById(personId, (error, idFound) => {
        if (error) return consolo.log(error);
        done(null, idFound);
    })
};
```

### 8. 通过执行查询、编辑、保存来执行经典更新流程

在过去，如果想要编辑 document 并以某种方式使用它（比如放到服务器的返回数据中），就必须执行查找、编辑和保存。 Mongoose 有一个专用的更新方法 Model.update()， 它与底层的 mongo 驱动绑定。 通过这个方法，我们可以批量编辑符合特定条件的多个 document。但问题在于，这个方法不会返回更新后的 document，而是返回状态信息。 此外，它直接调用 mongo 的底层驱动，让处理 model 的验证变得更加棘手。

--------------------------------

在这个挑战中，请使用参数 personId 作为字段，修改 findEditThenSave 方法，以在数据库中通过 _id 找到相应的 person（你可以使用之前挑战中的任何一种方法）。 将 "hamburger" 添加到它的 favoriteFoods 清单中（你可以使用 Array.push()）。 然后，在查询数据库的方法的回调里通过 save() 方法更新 Person 的数据。

提示： 如果你在 Schema 中将 favoriteFoods 声明为一个 Array（数组）并且没有指定数组的类型(如 `[String]` )， 那么此时，favoriteFoods 就会是默认的 Mixed 类型。如果想编辑它，就必须执行 document.markModified('edited-field')。 详情请参阅 Mongoose 文档

```js
const findEditThenSave = (personId, done) => {
    const foodToAdd = "hamburger";
    Person.findById(personId, (error, person) => {
        if (error) return console.log(error);
        person.favoriteFoods.push(foodToAdd);

        person.save((error, data) => {
            if (error) return console.log(error);
            done(null, data);
        });
    });
};
```

### 9. 在 document 中执行新的更新方式——使用 model.findOneAndUpdate()

最近发布的 mongoose 版本简化了 document 的更新方式， 但同时，一些高级功能（如 pre/post hook, 验证）的使用方式也变得和以前不同。因此，在很多情景下，上一个挑战中提到的老方法其实更常用。 新方法的加入，可以让我们使用 findByIdAndUpdate() 来进行基于 id 的搜索。

--------------------------------

修改 findAndUpdate 函数，通过 Name 查询人，并将查到的人的年龄设为 20 岁， 将函数参数 personName 作为查询关键字。

提示： 你需要返回更新后的 document。 你可以把 findOneAndUpdate() 的第三个参数设置为 { new: true } 。 默认情况下，这个方法会返回修改前的数据。

```js
const findAndUpdate = (personName, done) => {
    const query = {
        name: personName
    };
    const update = {
        age: 20
    };
    const options = {
        new: true
    };
    Person.findOneAndUpdate(query, update, options, (error, person) => {
        if (error) return console.log(error);
        done(null, person);
    });
};
```

### 10. 使用 model.findByIdAndRemove 删除一个 document

findByIdAndRemove 和 findOneAndRemove 类似于我们之前的更新方法， 它们将被删除的 document 传给数据库。 和之前一样，使用函数参数 personId 作为查询关键字。

--------------------------------

修改 removeById 函数，通过 _id 删除一个人的数据， 可以使用 findByIdAndRemove() 或 findOneAndRemove() 方法。

```js
const removeById = (personId, done) => {
    Person.findByIdAndRemove(personId, (error, personToRemove) => {
        if (error) return console.log(error);
        done(null, personToRemove);
    })
};
```

### 11. 使用 model.remove() 删除多个 document

Model.remove() 可以用于删除符合给定匹配条件的所有 document。

--------------------------------

修改 removeManyPeople 函数，使用 nameToRemove 删除所有姓名是变量 Model.remove() 的人。 给它传入一个带有 name 字段的查询 document 和一个回调函数。

注意： Model.remove() 不会返回被删除的 document，而是会返回一个包含操作结果以及受影响的数据数量的 JSON 对象。 不要忘记将它传入 done() 回调函数，因为我们需要在挑战的测试中调用它。

```js
const removeManyPeople = (done) => {
    const nameToRemove = "Mary";
    Person.remove({
        name: nameToRemove
    }, (err, response) => {

        if (err) return console.log(err);
        done(null, response);

    });
};
```

### 12. 通过链式调用辅助查询函数来缩小搜索结果

如果不给 Model.find()（或者别的搜索方法）的最后一个参数传入回调函数, 查询将不会执行。 可以将查询条件存储在变量中供以后使用， 也可以通过链式调用这类变量来构建新的查询字段。 实际的数据库操作会在最后调用 .exec() 方法时执行。 必须把回调函数传给最后一个方法。 Mongoose 提供了许多辅助查询函数, 这里使用最常见的一种。

--------------------------------

修改 queryChain 函数来查询喜欢 foodToSearch 食物的人。 同时，需要将查询结果按 name 属性排序， 查询结果应限制在两个 document 内，并隐藏 age 属性。 请链式调用 .find()、.sort()、.limit() 和 .select()，并在最后调用 .exec()， 并将 done(err, data) 回调函数传入 exec()。

```js
const queryChain = (done) => {
    const foodToSearch = "burrito";
    Person.find({
            favoriteFoods: foodToSearch
        })
        .sort({
            name: "asc"
        })
        .limit(2)
        .select("-age")
        .exec((error, data) => {
            if (error) return consolo.log(error);
            done(null, data);
        })
};
```
