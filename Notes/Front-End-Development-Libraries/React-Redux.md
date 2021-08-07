<!--
 * @Author: kok-s0s
 * @Date: 2021-08-01 19:20:29
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-08-07 10:34:55
 * @Description: React and Redux
-->

### 1. React 和 Redux 入门

这一系列挑战介绍的是 Redux 和 React 的配合， 我们先来回顾一下这两种技术的关键原则是什么。 React 是提供数据的视图库，能以高效、可预测的方式渲染视图。 Redux 是状态管理框架，可用于简化 APP 应用状态的管理。 在 React Redux app 应用中，通常可创建单一的 Redux store 来管理整个应用的状态。 React 组件仅订阅 store 中与其角色相关的数据， 可直接从 React 组件中分发 actions 以触发 store 对象的更新。

React 组件可以在本地管理自己的状态，但是对于复杂的应用来说，它的状态最好是用 Redux 保存在单一位置，有特定本地状态的独立组件例外。 当单个组件可能仅具有特定于其的本地状态时，算是例外。 最后一点是，Redux 没有内置的 React 支持，需要安装 react-redux包， 通过这个方式把 Redux 的 state 和 dispatch 作为 props 传给组件。

在接下来的挑战中，先要创建一个可输入新文本消息的 React 组件， 添加这些消息到数组里，在视图上显示数组。 这应该是 React 课程中的一个很好的回顾。 接着，创建 Redux store 和 actions 来管理消息数组的状态。 最后，使用 react-redux 连接 Redux store 和组件，从而将本地状态提取到 Redux store 中。

```jsx
class DisplayMessages extends React.Component {
  // 修改这行下面的代码
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    }
  }
  // 修改这行上面的代码
  render() {
    return <div />
  }
};
```

### 2. 首先在本地管理状态

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // 在这里添加 handleChange() 和 submitMessage() 方法

  handleChange(event) {
    this.setState({
      input: event.target.value,
      messages: this.state.messages,
    })
  }

  submitMessage() {
    this.setState({
      messages: [...this.state.messages, this.state.input],
      input: "",
    })
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* 在这一行下面渲染一个输入框（input），按钮（button）和列表（ul） */}
        <input onChange={this.handleChange.bind(this)} value={this.state.input} />

        <button onClick={this.submitMessage.bind(this)}>submit</button>

        <ul>
          {
            this.state.messages.map((item, index) => <li key={index}>{item}</li>)
          }
        </ul>
        { /* 修改这行上面的代码 */}
      </div>
    );
  }
};
```

### 3. 提取状态逻辑给 Redux

完成 React 组件后，我们需要把在本地 state 执行的逻辑移到 Redux 中， 这是为小规模 React 应用添加 Redux 的第一步。 该应用的唯一功能是把用户的新消息添加到无序列表中。 下面我们用简单的示例来演示 React 和 Redux 之间的配合。

```jsx
// 定义 ADD、addMessage()、messageReducer() 并在这里存储：

const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
}

const messageReducer = (state = [], action) => {
  if(action.type === ADD)
    return [...state, action.message];
  return state;
}

const store = Redux.createStore(messageReducer);
```

### 4. 使用 Provider 连接 Redux 和 Reac

在上一挑战中，创建了 Redux store 和 action，分别用于处理消息数组和添加新消息。 下一步要为 React 提供访问 Redux store 及发起更新所需的 actions。 react-redux 包可帮助我们完成这些任务。

React Redux 提供的 API 有两个关键的功能：Provider 和 connect。 会在另一个挑战会介绍 connect。 Provider是 React Redux 包装 React 应用的 wrapper 组件， 它允许访问整个组件树中的 Redux store 及 dispatch（分发）方法。 Provider 需要两个 props：Redux store 和 App 应用的子组件。 用于 App 组件的 Provider 可这样定义：

```jsx
<Provider store={store}>
  <App/>
</Provider>
```

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange} /><br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map((message, idx) => {
            return (
              <li key={idx}>{message}</li>
            )
          })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // 在这一行下面渲染 Provider
  render() {
    return (
      <Provider store={store}>
        <DisplayMessages />
      </Provider>
    )
  }
  // 修改这行上面的代码
};
```

注意： React Redux 在此可作全局变量，因此可通过点号表示法访问 Provider。 利用这一点，编辑器上的代码把 Provider 设置为常量，便于你在 AppWrapper 渲染方法中使用。

### 5. 映射 State 到 Props

Provider可向 React 组件提供 state 和 dispatch ，但必须确切地指定所需要的 state 和 actions， 以确保每个组件只能访问所需的 state。 完成这个任务，需要创建两个函数：mapStateToProps()、mapDispatchToProps()。

在这两个函数中，声明 state 中函数所要访问的部分及需要 dispatch 的创建 action 的函数。 完成这些，我们就可以迎接下一个挑战，学习如何使用 React Redux 的 connect 方法来把函数连接到组件了。

注意： 在幕后，React Redux 用 store.subscribe() 方法来实现 mapStateToProps()。

--------

创建 mapStateToProps() 函数， 以 state 为参数，然后返回一个对象，该对象把 state 映射到特定属性名上， 这些属性能通过 props 访问组件。 由于此示例把 app 应用的整个状态保存在单一数组中，可把整个状态传给组件。 在返回的对象中创建 messages 属性，并设置为 state。

```jsx
const state = [];

// 修改这行下面的代码
const mapStateToProps = (state) => {
  return {
    messages: state,
  }
}
```

### 6. 映射 Dispatch 到 Props

mapDispatchToProps() 函数可为 React 组件提供特定的创建 action 的函数，以便组件可 dispatch actions，从而更改 Redux store 中的数据。 该函数的结构跟上一挑战中的mapStateToProps()函数相似， 它返回一个对象，把 dispatch actions 映射到属性名上，该属性名成为props。 然而，每个属性都返回一个用 action creator 及与 action 相关的所有数据调用 dispatch 的函数，而不是返回 state 的一部分。 可以访问 dispatch，因为在定义函数时，我们以参数形式把它传入 mapDispatchToProps() 了，这跟 state 传入 mapStateToProps() 是一样的。 在幕后，React Redux 用 Redux 的 store.dispatch() 来管理这些含 mapDispatchToProps() 的dispatches， 这跟它使用 store.subscribe() 来订阅映射到 state 的组件的方式类似。

例如，创建 action 的函数 loginUser() 把 username 作为 action payload， mapDispatchToProps() 返回给创建 action 的函数的对象如下：

```jsx
{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
```

--------------------------------

编辑器上提供的是创建 action 的函数 addMessage()。 写出接收 dispatch 为参数的函数 mapDispatchToProps()，返回一个 dispatch 函数对象， 其属性为 submitNewMessage。该函数在 dispatch addMessage() 时为新消息提供一个参数。

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// 修改这行下面的代码
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => { dispatch(addMessage(message)) },
  }
}
```

### 7. 连接 Redux 和 React

你已经写了mapStateToProps()、mapDispatchToProps() 两个函数，现在可以用它们来把 state 和 dispatch 映射到 React 组件的 props 了。 React Redux 的 connect 方法可以完成这个任务。 此方法有 mapStateToProps()、mapDispatchToProps() 两个可选参数， 它们是可选的，原因是你的组件可能仅需要访问 state 但不需要分发任何 actions，反之亦然。

为了使用此方法，需要传入函数参数并在调用时传入组件。 这种语法有些不寻常，如下所示：

```jsx
connect(mapStateToProps, mapDispatchToProps)(MyComponent)
```

**注意：**如果要省略 connect 方法中的某个参数，则应当用 null 替换这个参数。

--------------------------------

代码编辑器具有 mapStateToProps() 和 mapDispatchToProps() 函数，以及一个名为 Presentational 的新 React 组件。 使用 ReactRedux 全局对象中的 connect 方法将此组件连接到 Redux，并立即在 Presentational 组件上调用它。 将结果赋值给名为 ConnectedComponent 的新 const，表示连接的组件。 就是这样，现在你已经连接到 Redux 了！ 尝试将 connect 的参数更改为 null，并观察测试结果。

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// 修改这行下面的代码
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational)
```

### 8. 将 Redux 连接到 Messages App

知道如何使用 connect 连接 React 和 Redux 后，我们可以在 React 组件中应用上面学到的内容。

在上一课，连接到 Redux 的组件命名为 Presentational，这个命名不是任意的， 这样的术语通常是指未直接连接到 Redux 的 React 组件， 它们只负责执行接收 props 的函数来实现 UI 的呈现。 相比之下，容器组件用来连接到 Redux 上。 这些组件通常负责把 actions 分派给 store，且经常给子组件传入 store state 属性。

----------------------------------------------------------------

到目前为止，我们的编辑器上已包含了整个章节的代码， 唯一不同的是，React 组件被重新命名为 Presentational，即展示层组件。 创建一个新组件，保存在名为 Container 的常量中。 这个常量用 connect 把 Presentational 组件和 Redux 连接起来。 然后，在AppWrapper 中渲染 React Redux 的 Provider组件， 给 Provider 传入 Redux store 属性并渲染 Container 为子组件。 设置完所有内容后，将再次看到消息应用程序渲染到页面上。

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// 在这里定义 Container 组件：
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // 完成 return 语句
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
};
```

### 9. 将局部状态提取到 Redux 中

马上就完成了! 请回顾一下为管理 React messages app 的状态写的 Redux 代码。 现在有了连接好的 Redux，还要从Presentational组件中提取状态管理到 Redux， 目前，已连接 Redux，但正在 Presentational 组件中本地处理状态。

--------------------------------

在 Presentational 组件中，先删除本地 state 中的 messages 属性， 被删的 messages 将由 Redux 管理。 接着，修改 submitMessage() 方法，使该方法从 this.props 那里分发 submitNewMessage()；从本地 state 中传入当前消息输入作为参数。 因本地状态删除了 messages 属性，所以在调用 this.setState() 时也要删除 messages 属性。 最后，修改 render() 方法，使其所映射的消息是从 props 接收的，而不是 state

完成这些更改后，我们的应用会实现 Redux 管理应用的状态，但它继续运行着相同的功能。 此示例还阐明了组件获得本地 state 的方式，即在自己的 state 中继续跟踪用户本地输入。 由此可见，Redux 为 React 提供了很有用的状态管理框架。 先前，仅使用 React 的本地状态也实现了相同的结果，这在应付简单的应用时通常是可行的。 但是，随着应用变得越来越大，越来越复杂，应用的状态管理也变得非常困难，Redux 就是为解决这样的问题而诞生的。

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// 修改这行下面的代码
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: '',
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
// 修改这行上面的代码

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
```

### 10. 从这里前进

恭喜！ 你完成了 React 和 Redux 的所有课程！ 结束之前，还要再提一点。 通常，我们不会在这样的编辑器中编写 React 应用代码。 如果你在自己的计算机上使用 npm 和文件系统，这个挑战可让你一瞥 React 应用的语法之貌。 除了使用 import 语句（这些语句引入了各挑战中提供的所有依赖关系），其代码看起来类似。 “管理包（含 npm）”这一节更详细地介绍了 npm。

最后，写 React 和 Redux 的代码通常需要一些配置， 且很快会变得复杂起来。 如果你有兴趣在自己的电脑上尝试，Create React App 已配置好，并准备就绪。

或者，你可以在 CodePen 中启用 Babel 作为 JavaScript 预处理器，将 React 和 ReactDOM 添加为外部 JavaScript 资源，这样编写应用。

--------------------------------

在控制台输出消息 'Now I know React and Redux!'。

```jsx
/*
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,x
  document.getElementById('root')
);
*/

// 只修改这一行下面的代码
console.log('Now I know React and Redux!');
```
