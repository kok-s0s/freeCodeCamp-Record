<!--
 * @Author: kok-s0s
 * @Date: 2021-08-11 02:32:18
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-08-11 14:15:41
 * @Description: NPM
-->

npm（Node 包管理工具）是一个命令行工具，用于安装、创建和分享为 Node.js 编写的 JavaScript 代码包。在 npm 上有许多开放源码软件包，所以在项目启动之前，需要一些时间来探索，这样你就不会最后重新创建轮子来处理像日期或从 API 获取数据这样的事项。

### 1. 如何使用 package.json ——所有 Node.js 项目或 npm 包的核心

package.json 文件是所有 Node.js 项目和 npm 包的枢纽， 和 HTML 文档中的 <head> 区域用来描述网页的配置信息（元数据）一样，它存储项目的相关信息。 它由单个 JSON 对象组成，并以键值对的形式存储项目信息， 且至少包含两个必填字段：“name”和“version”——但是最好提供有关项目的其他信息，这将对用户或者维护者有所帮助。

如果能找到项目的文件树，那么可以在文件树的最外层找到 package.json， 在接下来的几个挑战中将完善这个文件。

在这个文件中最常见的信息之一是 author 字段， 它说明了项目的创建者，它可以是字符串，也可以是带有联系人详细信息的对象。 对于较大的项目，建议使用对象；但是在我们的项目中，一个简单的字符串就够了，比如下面的例子：

```json
"author": "Jane Doe", 
```

----------------------------------------------------------------

在项目的 package.json 文件的 author 键中添加你的名字。

注意： 正在修改的是一个 JSON，所有的字段名必须用双引号（"）包裹，也必须用逗号（, ）分割。

```json
{
	"author": "kok-s0s",
	"name": "fcc-learn-npm-package-json",
	"dependencies": {
		"express": "^4.14.0"
	},
	"main": "server.js",
	"scripts": {
		"start": "node server.js"
	},
	"repository": {
		"type": "git",
		"url": "https://idontknow/todo.git"
	}
}
```

### 2. 给 package.json 添加描述

一个好的 package.json 文件的下一部分就是 description 字段——简短精悍的的项目描述。

如果你计划将来把这个包发布到 npm，请注意 description 字段的作用是告知用户这个包的用途，这样用户就可以决定是否要安装你发布的包。 然而，这并不是使用描述的唯一场景：它也是一种很好的总结项目的方式， 可以帮助其它开发者、维护者甚至自己在未来快速地了解项目，对于任何一个 Node.js 项目来说都非常重要。

无论项目计划是什么，都建议使用描述。 类似这样：

```json
"description": "A project that does something awesome", 
```

----------------------------------------------------------------

给项目的 package.json 文件添加描述（description）。

注意： 请记住使用双引号（"）包裹字段名并且使用逗号（, ）分隔字段。

```json
{
	"author": "kok-s0s",
	"name": "fcc-learn-npm-package-json",
	"description": "It's a Test project.",
	"dependencies": {
		"express": "^4.14.0"
	},
	"main": "server.js",
	"scripts": {
		"start": "node server.js"
	},
	"repository": {
		"type": "git",
		"url": "https://idontknow/todo.git"
	}
}

```

### 3. 给 package.json 添加关键词

在 keywords 字段中可以使用相关的关键字描述项目。 例如：

```json
"keywords": [ "descriptive", "related", "words" ], 
```

正如你所见的，这个字段的结构是一个由双引号字符串组成的数组。

在 package.json 文件中，给 keywords 字段添加一个由适当的字符串组成的数组。

“freecodecamp”应该是关键词之一。

```json
{
	"author": "kok-s0s",
	"name": "fcc-learn-npm-package-json",
	"description": "It's a Test project.",
	"dependencies": {
		"express": "^4.14.0"
	},
	"main": "server.js",
	"scripts": {
		"start": "node server.js"
	},
	"repository": {
		"type": "git",
		"url": "https://idontknow/todo.git"
	},
	"keywords": [
		"freecodecamp",
		"npm",
		"kok-s0s"
	]
}
```

### 4. 给 package.json 添加许可证

给 package.json 添加许可证
license 字段将告知用户允许他们拿这个项目干什么。

开源项目常见的协议有 MIT 和 BSD 等。 许可证信息并不是必须的。 大多数国家的版权法会默认让你拥有自己创作的作品的所有权。 但是，明确说明用户可以做什么和不能做什么会是一个很好的做法。 这里有一个 license 字段的例子：

```json
"license": "MIT",
```

在项目的 package.json 文件中补充合适的 license 字段。

```json
{
	"author": "kok-s0s",
	"name": "fcc-learn-npm-package-json",
	"description": "It's a Test project.",
	"dependencies": {
		"express": "^4.14.0"
	},
	"main": "server.js",
	"scripts": {
		"start": "node server.js"
	},
	"repository": {
		"type": "git",
		"url": "https://idontknow/todo.git"
	},
	"keywords": [
		"freecodecamp",
		"npm",
		"kok-s0s"
	],
	"license": "MIT"
}

```

### 5. 给 package.json 添加版本号

version 是 package.json 文件中必填字段之一， 这个字段描述了当前项目的版本， 如：

```json
"version": "1.2.0", 
```

给 package.json 文件添加项目的版本号（version）。

```json
{
	"author": "kok-s0s",
	"name": "fcc-learn-npm-package-json",
	"description": "It's a Test project.",
	"dependencies": {
		"express": "^4.14.0"
	},
	"main": "server.js",
	"scripts": {
		"start": "node server.js"
	},
	"repository": {
		"type": "git",
		"url": "https://idontknow/todo.git"
	},
	"keywords": [
		"freecodecamp",
		"npm",
		"kok-s0s"
	],
	"license": "MIT",
	"version": "1.0.0"
}
```

### 6. 使用 npm 的外部包扩展项目

强大的依赖管理特性是使用包管理器的最大原因之一。 每当在新的计算机上开始一个项目时，无需手动，npm 会自动安装所有的依赖项。 但是 npm 如何准确地知道项目需要哪些依赖呢？ 来看看 package.json 文件中 dependencies 这一部分。

在这部分，你的项目需要按照下面这种格式来存储依赖包：

```json
"dependencies": {
  "package-name": "version",
  "express": "4.14.0"
}
```

在 package.json 文件的 dependencies 字段中添加一个版本号为“2.14.0”的“moment”包。

注意： Moment 是一个非常方便地用来处理时间和日期的库。

```json
{
	"author": "kok-s0s",
	"name": "fcc-learn-npm-package-json",
	"description": "It's a Test project.",
	"dependencies": {
		"express": "^4.14.0",
		"moment": "2.14.0"
	},
	"main": "server.js",
	"scripts": {
		"start": "node server.js"
	},
	"repository": {
		"type": "git",
		"url": "https://idontknow/todo.git"
	},
	"keywords": [
		"freecodecamp",
		"npm",
		"kok-s0s"
	],
	"license": "MIT",
	"version": "1.0.0"
}
```

### 7. 通过语义化版本来管理 npm 依赖关系

在 package.json 文件的依赖项中，npm 包的 Versions 遵循语义化版本（SemVer，Semantic Versioning），它是一种旨在使管理依赖项更加容易的软件版本控制的行业标准。 在 npm 上发布的库、框架或其它工具都应该使用语义化版本，以便让用户清晰地知道如果项目升级将带来哪些改变。

在使用外部依赖项（大多数情况都是这样）进行软件开发时，了解语义化版本会很有用。 这些数字保存着项目的偶然发生的破坏性改变，不会让人对项目昨天还正常，今天却无法运行而百思不解。 根据官网，这是语义化版本的工作方式：

```json
"package": "MAJOR.MINOR.PATCH"
```

当做了不兼容的 API 修改，应该增加主版本号（MAJOR）； 当新增了向下兼容的新功能时，应该增加次版本号（MINOR）； 当修复了向下兼容的 bug 时，应该增加修订号（PATCH）。 这意味着修订号是用来修复错误的，次版本号则是添加了新功能，但它们都没有破坏之前的功能。 主版本号（MAJOR）是添加了不兼容早期版本的更改。

在 package.json 文件的依赖项中，修改 moment 的version，让它的主版本是 2，次版本号是 10，修订号是 2。

```json
{
	"author": "kok-s0s",
	"name": "fcc-learn-npm-package-json",
	"description": "It's a Test project.",
	"dependencies": {
		"express": "^4.14.0",
		"moment": "2.10.2"
	},
	"main": "server.js",
	"scripts": {
		"start": "node server.js"
	},
	"repository": {
		"type": "git",
		"url": "https://idontknow/todo.git"
	},
	"keywords": [
		"freecodecamp",
		"npm",
		"kok-s0s"
	],
	"license": "MIT",
	"version": "1.0.0"
}
```

### 8. 用波浪号维持依赖项的最新修订号

在上一个挑战中，npm 只包含特定版本的依赖包。 如果想让项目各个部分保持相互兼容，锁定依赖包版本是一个行之有效的办法。 但是大多数情况下，我们并不希望错过依赖项的问题修复，因为它们通常包含重要的安全补丁，而且它们理论上也会兼容我们既有的代码。

可以在依赖项的版本号前加一个波浪号（~），以让 npm 依赖项更新到最新的修订版。 这里有一个允许升级到任何 1.3.x 的例子：

```json
"package": "~1.3.8"
```

在 package.json 文件中，当前规则是 npm 将 moment 升级到特定版本（2.10.2）。 但是现在，要允许使用最新的 2.10.x 版本。

在依赖项中，给 moment 的版本号添加波浪号（~）前缀，允许 npm 将其更新为最新的修订版。

**注意：**原来的版本号不用更改。

```json
{
	"author": "kok-s0s",
	"name": "fcc-learn-npm-package-json",
	"description": "It's a Test project.",
	"dependencies": {
		"express": "^4.14.0",
		"moment": "~2.10.2"
	},
	"main": "server.js",
	"scripts": {
		"start": "node server.js"
	},
	"repository": {
		"type": "git",
		"url": "https://idontknow/todo.git"
	},
	"keywords": [
		"freecodecamp",
		"npm",
		"kok-s0s"
	],
	"license": "MIT",
	"version": "1.0.0"
}
```

### 9. 用脱字符（^）来使用依赖项的最新次要版本

和上一个挑战中我们学到的用波浪号来安装最新的修订版依赖一样，脱字符（^）也允许 npm 来安装功能更新。 它们的不同之处在于：脱字符允许次版本和修订版更新。

现在项目中的 moment 依赖包的版本应该是“~2.10.2”，这意味着 npm 可以安装最新的 2.10.x 版的 moment， 如果使用脱字符（^）来替换版本号的前缀，那么 npm 可以将 moment 升级安装到任何 2.x.x 的版本。

```json
"package": "^1.3.8"
```

这会将依赖包更新到任意的 1.x.x 版本。

在依赖项中，使用脱字符（^）为 moment 的版本添加前缀，允许 npm 更新依赖包到任意新的次版本。

**注意：**原来的版本号不用更改。

```json
{
	"author": "kok-s0s",
	"name": "fcc-learn-npm-package-json",
	"description": "It's a Test project.",
	"dependencies": {
		"express": "^4.14.0",
		"moment": "^2.10.2"
	},
	"main": "server.js",
	"scripts": {
		"start": "node server.js"
	},
	"repository": {
		"type": "git",
		"url": "https://idontknow/todo.git"
	},
	"keywords": [
		"freecodecamp",
		"npm",
		"kok-s0s"
	],
	"license": "MIT",
	"version": "1.0.0"
}
```

### 10. 从依赖项中删除依赖包

从依赖项中删除依赖包
已经尝试过一些通过项目 package.json 文件中依赖项管理依赖的方式了， 也添加了一些外部的依赖包到项目中，甚至通过一些特殊的字符比如波浪号或者脱字符来告诉 npm 想要的版本类型。

但是，如果想要删除不再需要的依赖包，该怎么办呢？ 可能已经猜到了——只需要从依赖项中删除相应的键值对就行了。

同样的方法也适用于删除 package.json 中的其它字段。

从依赖项中删除 moment 依赖包。

**注意：**删除依赖包后，确保逗号数量正确。

```json
{
	"author": "kok-s0s",
	"name": "fcc-learn-npm-package-json",
	"description": "It's a Test project.",
	"dependencies": {
		"express": "^4.14.0"
	},
	"main": "server.js",
	"scripts": {
		"start": "node server.js"
	},
	"repository": {
		"type": "git",
		"url": "https://idontknow/todo.git"
	},
	"keywords": [
		"freecodecamp",
		"npm",
		"kok-s0s"
	],
	"license": "MIT",
	"version": "1.0.0"
}
```
