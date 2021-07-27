<!--
 * @Author: kok-s0s
 * @Date: 2021-07-18 14:50:40
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-07-27 14:30:57
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
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// 修改这行下面的代码
ShoppingCart.defaultProps = {items: 0};
```

### 17. 覆盖默认的 Props

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* 修改这行下面的代码 */ }
    return <Items quantity={10}/>
    { /* 修改这行上面的代码 */ }
  }
};
```

### 18. 使用 PropTypes 来定义 Props 的类型

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// 修改这行下面的代码
Items.propTypes = {quantity: PropTypes.number.isRequired}
// 修改这行上面的代码

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};
```

### 19. 使用 this.props 访问 Props

```jsx
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* 修改这行下面的代码 */ }
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
            { /* 修改这行上面的代码 */ }
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* 修改这行下面的代码 */ }
          <ReturnTempPassword tempPassword="1234567890"/>
          { /* 修改这行上面的代码 */ }
        </div>
    );
  }
};
```

### 20. 复习使用无状态函数组件的 Props

无状态函数组件是一个函数，它接收 props 作为输入并返回 JSX。 另一方面，无状态组件是一个类，它扩展了React. Component，但是不使用内部状态。 最后，状态组件是指维护其自身内部状态的组件， 它简称组件或 React 组件。

一种常见的应用模式是尽可能减少状态组件并创建无状态的函数组件。 这有助于将状态管理包含到应用程序的特定区域。 反过来，通过更容易地跟踪状态变化如何影响其行为，可以改善应用程序的开发和维护。

```jsx
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper name="kok-s0s"/>
      </div>
    );
  }
};
// 修改这行下面的代码
class Camper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    )
  }
}
Camper.defaultProps = {
  name: "CamperBot"
}
Camper.propTypes = {name: PropTypes.string.isRequired}
```

### 21. 创建一个有状态的组件

React 中最重要的主题之一是 state。 state 包含应用程序需要了解的任何数据，这些数据可能会随时间而变化。 应用程序能够响应 state 的变更，并在必要时显示更新后的 UI。 React 为现代 Web 应用程序的状态管理提供了一个很好的解决方案。

可以在类组件的 constructor 上声明 state 属性来在 React 组件中创建 state， 它在创建时使用 state 初始化组件。 state 属性必须设置为 JavaScript object（对象）。 声明如下：

```jsx
this.state = {

}
```

可以在组件的整个生命周期内访问 state 对象， 可以更新它、在 UI 中渲染它，也可以将其作为 props 传递给子组件。 state 对象的使用可以很简单，亦可以很复杂，就看你怎么用了。 请注意，必须通过扩展 React. Component 来创建类组件，以便像这样创建 state。

```jsx
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // 只修改这一行下面的代码
    this.state = {
      name: "kok-s0s",
    }
    // 只修改这一行上面的代码
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

### 22. 在用户界面中渲染状态

定义了组件的初始 state 之后，就可以在要渲染的 UI 中显示它。 如果组件是有状态的，它将始终可以访问 render() 方法中 state 的数据。 就可以使用 this.state 访问数据。

如果想在 render 方法的 return 中访问 state 值，必须把这个值用花括号括起来。

state 是 React 组件中最强大的特性之一， 它可以跟踪应用程序中的重要数据，并根据数据的变化渲染 UI。 如果数据发生变化，UI 也会随之改变。 React 使用所谓的虚拟 DOM 来跟踪幕后的变化。 当 state 数据更新时，它会使用该数据触发组件的重新渲染 -- 包括接收 prop 数据的子组件。 React 只在必要的时候更新实际的 DOM， 这意味着你不必担心 DOM 的变更， 只需声明 UI 的外观即可。

注意，如果组件是有状态的，其它组件并不知道它的 state。 它的 state 是完全封装的，或者是局限于组件本身的，除非你将 state 数据作为 props 传递给子组件。 封装 state 的概念非常重要，因为它允许编写特定的逻辑，然后将该逻辑包含并隔离在代码中的某个位置。

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* 修改这行下面的代码 */ }
        <h1>{this.state.name}</h1>
        { /* 修改这行上面的代码 */ }
      </div>
    );
  }
};
```

### 23. 以另一种方式在用户界面中渲染状态

还有另一种方法可以访问组件中的 state。 在 render() 方法中，在 return 语句之前，可以直接编写 JavaScript。 例如，可以声明函数、从 state 或 props 中访问数据、对此数据执行计算等。 然后，可以将任何数据赋值给 return 语句中可以访问的变量。

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // 修改这行下面的代码
    const name = this.state.name;
    // 修改这行上面的代码
    return (
      <div>
        { /* 修改这行下面的代码 */ }
        <h1>{name}</h1>
        { /* 修改这行上面的代码 */ }
      </div>
    );
  }
};
```

### 24. 用 this.setState 设置状态

还有一种方法可以更改组件的 state， React 提供了 setState 方法来更新组件的 state。 在组件类中调用 setState 方法如下所示：this.setState()，传入键值对的对象， 其中键是 state 属性，值是更新后的 state 数据。 例如，如果我们在 state 中存储 username，并想要更新它，代码如下所示：

```jsx
this.setState({
  username: 'Lewis'
});
```

React 要求永远不要直接修改 state，而是在 state 发生改变时始终使用 this.setState()。 此外，应该注意，React 可以批量处理多个 state 更新以提高性能。 这意味着通过 setState 方法进行的 state 更新可以是异步的。 setState 方法有一种替代语法可以解决异步问题， 虽然这很少用到，但是最好还是记住它！ 有关详细信息，请参阅[React文档](https://reactjs.org/docs/state-and-lifecycle.html)。

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // 修改这行下面的代码
    this.setState({
      name: 'React Rocks!',
    });
    // 修改这行上面的代码
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

### 25. 将 this 绑定到 Class 方法上

除了设置和更新 state 之外，还可以为组件类定义方法。 类方法通常需要使用 this 关键字，以便它可以访问方法中类的属性（例如 state 和 props）。 有几种方法可以让类方法访问 this。

一种常见的方法是在构造函数中显式地绑定 this，这样当组件初始化时，this 就会绑定到类方法。 你可能已经注意到上一个挑战在构造函数中的 handleClick 方法使用了 this.handleClick = this.handleClick.bind(this)。 然后，当在类方法中调用像 this.setState() 这样的函数时，this 指的是这个类，而不是 undefined。

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // 修改这行下面的代码
    this.handleClick = this.handleClick.bind(this);
    // 修改这行上面的代码
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* 修改这行下面的代码 */ }
        <button onClick={this.handleClick}>Click Me</button>
        { /* 修改这行上面的代码 */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
```

### 26. 使用 State 切换元素

有时可能在更新状态的时候想知道上一个状态是什么。 但是状态更新是异步的，这意味着 React 可能会把多个 setState() 集中在一起批量更新。 所以计算下一个值时 this.state 或者 this.props 不能作为当前值。 所以最好不要写如下的代码：

```jsx
this.setState({
  counter: this.state.counter + this.props.increment
}); 
```

正确的做法是，给 setState 传入一个函数，这个函数可以访问 state 和 props。 给 setState 传入函数可以保证 state 和 props 是正确的值。 代码可以重写为这样：

```jsx
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

如果只需要 state，那么用下面没有 props 的格式也是可以的：

```jsx
this.setState(state => ({
  counter: state.counter + 1
}));
```

注意一定要把 object 放在括号里，否则 JavaScript 会认为这只是代码片段。

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // 修改这行下面的代码
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // 修改这行上面的代码
  }
  // 修改这行下面的代码
  toggleVisibility() {
    this.setState(state => ({
      visibility: !state.visibility,
    }));
  }
  // 修改这行上面的代码
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
```

### 27. 写一个简单的计数器

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // 修改这行下面的代码
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // 修改这行上面的代码
  }
  // 修改这行下面的代码
  increment() {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }

  decrement() {
    this.setState(state => ({
      count: state.count - 1,
    }));
  }

  reset() {
    this.setState(state => ({
      count: 0,
    }));
  }
  // 修改这行上面的代码
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
```

### 28. 创建一个可以控制的输入框

应用程序可能在 state 和渲染的 UI 之间有更复杂的交互。 例如，用于文本输入的表单控件元素（如 input 和 textarea）在用户键入时在 DOM 中维护自己的 state。 通过 React，可以将这种可变 state 转移到 React 组件的 state 中。 用户的输入变成了应用程序 state 的一部分，因此 React 控制该输入字段的值。 通常，如果 React 组件具有用户可以键入的输入字段，那么它将是一个受控的输入表单。

```jsx
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // 修改这行下面的代码
    this.handleChange = this.handleChange.bind(this);
    // 修改这行上面的代码
  }
  // 修改这行下面的代码
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  // 修改这行上面的代码
  render() {
    return (
      <div>
        { /* 修改这行下面的代码 */}
        <input onChange={this.handleChange} value={this.state.input}/>
        { /* 修改这行上面的代码 */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
```

### 29. 创建一个可以控制的表单

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // 修改这行下面的代码
    event.preventDefault();
    this.setState(state => ({
      submit: state.input,
    }));
    // 修改这行上面的代码
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* 修改这行下面的代码 */}
          <input onChange={this.handleChange} value={this.state.input} />
          {/* 修改这行上面的代码 */}
          <button type='submit'>Submit!</button>
        </form>
        {/* 修改这行下面的代码 */}
        <h1>{this.state.submit}</h1>
        {/* 修改这行上面的代码 */}
      </div>
    );
  }
}
```

### 30. 将 State 作为 Props 传递给子组件

 一个常见的模式是：有状态组件中包含对应用程序很重要的 state，然后用它渲染子组件。 如果想让这些组件能够访问该 state 的某些部分，就把这些部分作为 props 传入。

例如，有一个 App 组件可以渲染 Navbar 以及其他组件。 App 里的 state 包含大量用户信息，但 Navbar 只需要访问用户的用户名，以便显示它。 将该 state 作为 prop 传递给Navbar组件。

这个模式说明了 React 中的一些重要范例。 第一个是单向数据流， state 沿着应用程序组件树的一个方向流动，从有状态父组件到子组件， 子组件只接收它们需要的 state 数据。 第二，复杂的有状态应用程序可以分解成几个，或者可能是一个单一的有状态组件。 其余组件只是从父组件简单的接收 state 作为 props，并从该 state 渲染 UI。 它开始创建一种分离，在这种分离中，state 管理在代码的一部分中处理，而 UI 渲染在另一部分中处理。 将 state 逻辑与 UI 逻辑分离是 React 的关键原则之一。 当它被正确使用时，它使得复杂的、有状态的应用程序的设计变得更容易管理。

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* 修改这行下面的代码 */}
         <Navbar name={this.state.name}/>
         {/* 修改这行上面的代码 */}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* 修改这行下面的代码 */}
      <h1>Hello, my name is: {this.props.name}</h1>
      {/* 修改这行上面的代码 */}
    </div>
    );
  }
};
```

### 31. 传递回调作为 Props

可以将 state 作为 props 传递给子组件，但不仅限于传递数据。 也可以将函数或在 React 组件中定义的任何方法传递给子组件。 这就是子组件与父组件交互的方式。 可以把方法像普通 prop 一样传递给子组件， 它会被分配一个名字，可以在子组件中的 this.props 下访问该方法的名字。

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* 修改这行下面的代码 */ }
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
        <RenderInput input={this.state.inputValue}/>
        { /* 修改这行上面的代码 */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
```

### 32. 使用生命周期方法：componentWillMount

React 组件有几种特殊方法，可以在组件生命周期的特定点执行操作。 这些称为生命周期方法或生命周期钩子，允许在特定时间点捕获组件。 这可以在渲染之前、更新之前、接收 props 之前、卸载之前等等。 以下是一些主要生命周期方法的列表： 
* componentWillMount() 
* componentDidMount() 
* shouldComponentUpdate()
* componentDidUpdate() 
* componentWillUnmount()

注意： componentWillMount 生命周期方法会在版本 16. X 废弃在版本 17 移除。

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // 修改这行下面的代码
    console.log("kok-s0s");
    // 修改这行上面的代码
  }
  render() {
    return <div />
  }
};
```

### 33. 使用生命周期方法：componentDidMount

某些时候，大多数 web 开发人员需要调用 API 接口来获取数据。 如果正在使用 React，知道在哪里执行这个动作是很重要的。

React 的最佳实践是在生命周期方法 componentDidMount() 中对服务器进行 API 调用或任何其它调用。 将组件装载到 DOM 后会调用此方法。 此处对 setState() 的任何调用都将触发组件的重新渲染。 在此方法中调用 API 并用 API​​ 返回的数据设置 state 时，一旦收到数据，它将自动触发更新。

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* 修改这行下面的代码 */}
        <h1>Active Users: {this.state.activeUsers}</h1>
        {/* 修改这行上面的代码 */}
      </div>
    );
  }
}
```

### 34. 添加事件侦听器

componentDidMount() 方法也是添加特定功能所需的任何事件监听器的最佳位置。 React 提供了一个合成事件系统，它封装了浏览器中的事件系统。 这意味着，不管用户用的是什么浏览器，合成事件系统的行为都完全相同 -- 即使不同浏览器之间的本地事件的行为可能不同。

之前已经接触了一些合成事件处理程序，如onClick()。 React 的合成事件系统非常适合用于在 DOM 元素上管理的大多数交互。 但是，如果要将事件处理程序附加到 document 或 window 对象，则必须直接执行此操作。

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // 修改这行下面的代码
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  // 修改这行上面的代码
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
```

### 35. 使用 shouldComponentUpdate 优化重新渲染

到目前为止，如果任何组件接收到新的 state 或新的 props，它会重新渲染自己及其所有子组件。 这通常是好的。 但是 React 提供了一种生命周期方法，当子组件接收到新的 state 或 props 时，可以调用该方法，并特别声明组件是否应该更新。 这个方法就是 shouldComponentUpdate()，它将 nextProps 和 nextState 作为参数。

这种方法是优化性能的有效方法。 例如，默认行为是，当组件接收到新的 props 时，即使 props 没有改变，它也会重新渲染。 可以通过使用 shouldComponentUpdate() 比较 props 来防止这种情况发生。 该方法必须返回一个 boolean（布尔值），该值告诉 React 是否更新组件。 可以比较当前的 props（this.props）和下一个 props（nextProps），以确定你是否需要更新，并相应地返回 true 或 false。

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // 修改这行下面的代码
    if(nextProps.value % 2 === 0)
      return true;
    return false;
    // 修改这行上面的代码
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
```

### 36. 介绍内联样式

如何对在 React 中创建的 JSX 元素添加样式。 你可能知道，由于将 class 应用于 JSX 元素的方式与 HTML 中的使用并不完全相同。

如果从样式表导入样式，它就没有太大的不同。 使用 className 属性将 class 应用于 JSX 元素，并将样式应用于样式表中的 class。 另一种选择是使用内联样式，这在 ReactJS 开发中非常常见。

将内联样式应用于 JSX 元素，类似于在 HTML 中的操作方式，但有一些 JSX 差异。 以下是 HTML 中内联样式的示例：

```html
<div style="color: yellow; font-size: 16px">Mellow Yellow</div>
```

JSX 元素使用 style 属性，但是鉴于 JSX 的编译方式，不能将值设置为 string（字符串）。 相反，你应该将其设置为等于JavaScript object 。 如下所示：

```html
<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>
```

注意到如何驼峰拼写 fontSize 属性了吗？ 这是因为 React 不接受样式对象中的 kebab-case 键。 React 将在 HTML 中为应用正确的属性名称。

```jsx
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: "72px"}}>Big Red</div>
    );
  }
};
```

### 37. 在 React 中添加内联样式

除了设置为 JavaScript 对象的 style 属性之外，与 HTML 内联样式相比，React 的内联样式还有其他几个语法差异。 首先，某些 CSS 样式属性的名称使用驼峰式命名。 例如，最后一个挑战用 fontSize 而不是 font-size 来设置字体的大小。 对于 JavaScript 对象属性来说，像 font-size 这样的连字符命名是无效的语法，所以 React 使用驼峰式命名。 通常，任何连字符的 style 属性在 JSX 中都是使用驼峰式命名的。

除非另有规定，否则所有属性值的 length（如height、width 和 fontSize）其单位都假定为 px。 例如，如果要使用 em，可以用引号将值和单位括起来，例如 {fontSize: "4em"}。 除了默认为 px 的 length 值之外，所有其他属性值都应该用引号括起来。

```jsx
const styles = {
    color: "purple", 
    fontSize: 40, 
    border:"2px solid purple"
}
// 修改这行上面的代码
class Colorful extends React.Component {
  render() {
    // 修改这行下面的代码
    return (
      <div style={styles}>Style Me!</div>
    );
    // 修改这行上面的代码
  }
};
```

### 38. 在 React Render 方法中使用 JavaScript

在之前的挑战中，学习了如何使用大括号 { } 将 JavaScript 代码插入到 JSX 代码中，用于访问 props、传递 props、访问 state、在代码中插入注释以及最近学习的定制组件样式等任务。 这些都是将 JavaScript 放在 JSX 中的常见用例，但是在 React 组件中使用 JavaScript 代码还有其他方式。

在 render 方法中编写 JavaScript，可以把 JavaScript 直接放在 return 语句之前，而不必将其插入大括号中。 这是因为它还不在 JSX 代码中。 如果之后想在 return 语句中的 JSX 代码里面使用变量时，可以将变量名放在大括号中。

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex]; // 修改这一行
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {/* 修改这行下面的代码 */}
          {answer}
          {/* 修改这行上面的代码 */}
        </p>
      </div>
    );
  }
}
```

### 39. 使用 If-Else 条件进行渲染

使用 JavaScript 控制渲染视图的另一个应用是按条件渲染元素。 当条件为真时，将呈现一个视图， 反之，则呈现另一种视图。 可以在 React 组件的 render() 方法中使用的标准 if/else 语句来实现这一点。

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // 修改这行下面的代码
    if(this.state.display)
      return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
            <h1>Displayed!</h1>
       </div>
    );
    else 
      return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
       </div>
      );
  }
};
```

### 40. Use && for a More Concise Conditional

if/else 语句在上一次挑战中是有效的，但是有一种更简洁的方法可以达到同样的结果。 假设正在跟踪组件中的几个条件，并且希望根据这些条件中的每一个来渲染不同的元素。 如果你写了很多 else if 语句来返回稍微不同的 UI，你可能会写很多重复代码，这就留下了出错的空间。 相反，你可以使用 && 逻辑运算符以更简洁的方式执行条件逻辑。 这是完全可行的，因为你希望检查条件是否为 true。如果是，则返回一些标记。 这里有一个例子：

```jsx
{condition && <p>markup</p>}
```

如果 condition 为 true，则返回标记。 如果条件为 false ，则在评估 condition 后操作将立即返回 false，并且不返回任何内容。 可以将这些语句直接包含在 JSX 中，并通过在每个条件后面写 && 来将多个条件串在一起。 这允许你在 render() 方法中处理更复杂的条件逻辑，而无需重复大量代码。

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // 修改这行下面的代码
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
```

### 41. 使用三元表达式进行条件渲染

在继续使用动态渲染技术之前，还有最后一种方法可以渲染想要的东西，它使用内置的 JavaScript 条件：三元运算符。 三元运算符经常被用作 JavaScript 中 if/else 语句的缩写。 它们不像传统的 if/else 语句那样强大，但是在 React 开发人员中非常流行， 原因之一就是 JSX 的编译原理，if/else 语句不能直接插入到 JSX 代码中。 可能你在前几个挑战就注意到了这一点——当需要 if/else 语句时，它总是在 return 语句的外面。 如果想在 JSX 中实现条件逻辑，三元表达式是一个很好的选择。 回想一下，三元运算符有三个部分，但是可以将多个三元表达式组合在一起。 以下是基本语法：

```jsx
condition ? expressionIfTrue : expressionIfFalse;
```

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // 修改这行下面的代码
    this.state = {
      input: '',
      userAge: ''
    }
    // 修改这行上面的代码
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* 修改这行下面的代码 */}
        {this.state.userAge === '' ? buttonOne : this.state.userAge >= 18 ? buttonTwo : buttonThree }
        {/* 修改这行上面的代码 */}
      </div>
    );
  }
}
```

### 42. 根据 Props 有条件地渲染

到目前为止，你已经看到如何使用 if/else、&& 以及三元运算符（condition ? expressionIfTrue : expressionIfFalse）在不同条件下运行不同的代码。 然而，还有一个重要的话题需要讨论，将这些概念中的任何一个或所有概念与另一个强大的 React 功能 props 结合起来。 使用 props 有条件地渲染代码在 React 开发人员中很常见——也就是说：他们使用给定 prop 的值来自动决定渲染什么。

在这个挑战中，将设置一个子组件来根据 props 做出渲染决定。 可以使用三元运算符，但是可以看到过去几个挑战中涵盖的其他几个概念在这种情况下可能同样有用。

```jsx
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {/* 修改这行下面的代码 */}
    return <h1>{this.props.fiftyFifty ? "You Win!" : "You Lose!"}</h1>;
    {/* 修改这行上面的代码 */}
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      // 完成 return 语句
      return {
        counter: prevState.counter + 1,
      }
    });
  }
  render() {
    const expression = Math.random() >= 0.5; // 修改这一行
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* 修改这行下面的代码 */}
        <Results fiftyFifty={expression}/>
        {/* 修改这行上面的代码 */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
```

### 43. 根据组件状态有条件地更改内联 CSS

此时，已经看到了一些条件渲染的应用程序和内联样式的使用。 这里还有一个将这两个主题结合在一起的例子。 你也可以根据 React 组件的 state 有条件地渲染 CSS。 要执行此操作，请检查条件，如果满足该条件，则修改在 render 方法中分配给 JSX 元素的样式对象。

理解这个模式很重要，因为相比传统的方式（这在 jQuery 中非常常见），直接修改 DOM 元素来应用样式的方法是一个戏剧性的转变。 在该方法中，必须跟踪元素何时更改并直接处理实际操作。 跟踪更改可能变得很困难，可能会使 UI无法预测。 当根据一个条件设置一个样式对象时，描述了 UI 作为应用程序的状态函数应当如何展现。 如此便有一个清晰的单向流动的信息流。 这是使用 React 编写应用程序时的首选方法。

```jsx
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // 修改这行下面的代码
    if(this.state.input.length > 15) 
      inputStyle = {
        border: '3px solid red'
      }
    // 修改这行上面的代码
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
```

### 44. 使用 Array.map() 动态渲染元素

条件渲染很有用，但是可能需要组件来渲染未知数量的元素。 通常在响应式编程中，程序员在应用程序运行时之前无法知道其 state，因为这在很大程度上取决于用户与该程序的交互。 程序员需要提前编写代码来正确处理未知状态。 在 React 中使用 Array.map() 阐明了这个概念。

例如，创建一个简单的“To Do List”应用程序。 作为程序员，你无法知道用户可能在其列表中有多少项。 需要设置组件，以便在使用该程序的人决定今天今日待办事项之前动态渲染正确数量的列表元素。

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // 修改这行下面的代码
    this.state = {
      userInput: '',
      toDoList: []
    }
    // 修改这行上面的代码
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map(item => <li>{item}</li>); // 修改这一行
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
```

### 45. 给同级元素一个唯一的键属性

上一个挑战展示了如何使用 map 方法根据用户输入动态渲染多个元素。 然而，这个例子中缺少一个重要的部分。 创建元素数组时，每个元素都需要一个设置为唯一值的 key 属性。 React 使用这些键来跟踪哪些项目被添加、更改或删除。 这有助于在以任何方式修改列表时提高重新渲染过程的效率。

注意： 键只需要在兄弟元素之间是唯一的，它们不需要在应用程序中是全局唯一的。

```jsx
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((item, index) => <li key={index}>{item}</li>); // 修改这一行
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
```

### 46. 使用 Array. Filter() 动态过滤数组

map 数组方法是一个强大的工具，在使用 React 时经常使用。 与 map 相关的另一种方法是 filter，它根据条件过滤数组的内容，然后返回一个新数组。 例如，如果有一个 users 数组，每个数组元素都有一个可以设置为 true 或 false 的 online 属性，可以这样只过滤那些在线的用户：

```jsx
let onlineUsers = users.filter(user => user.online);
```

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online); // 修改这一行
    const renderOnline = usersOnline.map((item,index) => <li key={index}>{item.username}</li>); // 修改这一行
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}
```

### 47. 用 renderToString 在服务器上渲染 React

到目前为止，已经能够在客户端上渲染 React 组件， 一般来说我们都是这么做的。 然而，在一些用例中，需要在服务器上渲染一个 React 组件。 由于 React 是一个 JavaScript 视图库，所以通常使用 Node 让 JavaScript 运行在服务器上。 事实上，React 提供了一个可用于此目的的 renderToString() 方法。

有两个关键原因可以解释为什么服务器上的渲染可能会在真实世界的应用程序中使用。 首先，如果不这样做，当 React 应用程序最初加载到浏览器时，它将包含一个代码量很少的 HTML 文件和一大堆 JavaScript。 这对于搜索引擎来说可能不太理想，因为它们试图为网页内容生成索引，以便人们可以找到这个应用。 如果在服务器上渲染初始 HTML 标记并将其发送到客户端，则初始页面加载的内容包含搜索引擎可以抓取的所有页面标记。 其次，这创造了更快的初始页面加载体验，因为渲染的 HTML 代码量要比整个应用程序的 JavaScript 代码小。 React 仍然能够识别你的应用并在初始加载后进行管理。

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// 修改这行下面的代码
ReactDOMServer.renderToString(<App />);
```
