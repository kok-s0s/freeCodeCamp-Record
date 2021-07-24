<!--
 * @Author: kok-s0s
 * @Date: 2021-07-18 14:50:40
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-07-24 13:35:18
 * @Description: React
-->

> React 是一个流行的 JavaScript 库，用于为网页或应用程序构建可重用的组件驱动的用户界面。
>
> React 将 HTML 与 JavaScript 结合在了一起，以此创建出一个新的标签语言 JSX。React 还使得管理整个应用程序的数据流变得更容易。

[Babel 编译器](https://babeljs.io/)

底层调用 ReactDOM.render(JSX, document.getElementById('root'))。 这个函数调用将 JSX 置于 React 自己的轻量级 DOM 中。 然后，React 使用自己的 DOM 快照来实现增量更新。

### 1. 创建一个简单的 JSX 元素

```jsx
const JSX = <h1>Hello JSX!</h1>;
```

### 2. 创建一个复杂的 JSX 元素

```jsx
const JSX = <div>
              <h1></h1>
              <p></p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>;
```

### 3. 在 JSX 中添加注释

```jsx
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
    {/* 这是一个注释 */}
  </div>
);
```

### 4. 渲染 HTML 元素为 DOM 树

> JSX 是一种在 JavaScript 中编写可读 HTML 的便捷工具。

```jsx
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// 修改这行下面的代码
ReactDOM.render(JSX, document.getElementById('challenge-node'));
```

### 5.  在 JSX 中定义一个 HTML Class

使用 className 属性用于指定 CSS 的 class

```jsx
const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);
```

### 6. 了解 JSX 的自动闭合

```jsx
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);
```

### 7. 创建一个无状态的函数组件

```jsx
const MyComponent = function () {
  // 修改这行下面的代码
  return (
    <div>"kok-s0s, it's time to lean React!"
    </div>
  );
  // 修改这行上面的代码
}
```

### 8. 创建一个 React 组件

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // 修改这行下面的代码
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    // 修改这行上面的代码
  }
};
```

### 9. 用组合的方式创建一个 React 组件

```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* 修改这行下面的代码 */ }
        <ChildComponent />
        { /* 修改这行上面的代码 */ }
      </div>
    );
  }
};
```

### 10. 使用 React 渲染嵌套组件

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* 修改这行下面的代码 */ }
      <TypesOfFruit />
      { /* 修改这行上面的代码 */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* 修改这行下面的代码 */ }
        <Fruits />
        { /* 修改这行上面的代码 */ }
      </div>
    );
  }
};
```

### 11. 组合 React 组件

```jsx
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* 修改这行下面的代码 */ }
        <NonCitrus />
        <Citrus />
        { /* 修改这行上面的代码 */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* 修改这行下面的代码 */ }
        <Fruits />
        { /* 修改这行上面的代码 */ }
        <Vegetables />
      </div>
    );
  }
};
```

### 12. 将 class 组件渲染到 DOM 树

```jsx
class TypesOfFood extends React. Component {
  constructor(props) {

    super(props);

  }
  render() {

    return (
      <div>
        <h1>Types of Food:</h1>
        {/* 修改这行下面的代码 */}
        <Fruits />
        <Vegetables />
        {/* 修改这行上面的代码 */}
      </div>
    );

  }
}; 

// 修改这行下面的代码
ReactDOM.render(<TypesOfFood/>, document.getElementById('challenge-node')); 
```

### 13. 从零开始写一个 React 组

```jsx
// 修改这行下面的代码
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'))
```

### 14. 将 Props 传递给无状态函数组件

```jsx
const CurrentDate = (props) => {
  return (
    <div>
      { /* 修改这行下面的代码 */ }
      <p>The current date is: {props.date}</p>
      { /* 修改这行上面的代码 */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* 修改这行下面的代码 */ }
        <CurrentDate date={Date()}/>
        { /* 修改这行上面的代码 */ }
      </div>
    );
  }
};
```

### 15. 传递一个数组作为 Props

```jsx
const List = (props) => {
  { /* 修改这行下面的代码 */ }
  return <p>{props.tasks.join(", ")}</p>
  { /* 修改这行上面的代码 */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* 修改这行下面的代码 */ }
        <List tasks={["walk dog","learn React"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["algorithm","React","javascript"]}/>
        { /* 修改这行上面的代码 */ }
      </div>
    );
  }
};
```

### 16. 使用默认的 Props

```jsx

```
