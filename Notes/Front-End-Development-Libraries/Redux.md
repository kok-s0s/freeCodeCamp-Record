<!--
 * @Author: kok-s0s
 * @Date: 2021-07-27 14:31:43
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-07-30 22:14:19
 * @Description: Redux
-->

随着应用程序规模和范围的扩大，管理共享数据变得更加困难。 Redux 被定义为 “JavaScript 应用的可预测状态容器”，它有助于确保你的应用能够可预测地运行，并且更容易测试。

### 1. 创建一个 Redux Store

Redux 是一个状态管理框架，可以与包括 React 在内的许多不同的 Web 技术一起使用。

在 Redux 中，有一个状态对象负责应用程序的整个状态， 这意味着如果你有一个包含十个组件且每个组件都有自己的本地状态的 React 项目，那么这个项目的整个状态将通过 Redux store 被定义为单个状态对象， 这是学习 Redux 时要理解的第一个重要原则：Redux store 是应用程序状态的唯一真实来源。

这也意味着，如果应用程序想要更新状态，只能通过 Redux store 执行， 单向数据流可以更轻松地对应用程序中的状态进行监测管理。

```jsx
const reducer = (state = 5) => {
  return state;
}

// 可从 Redux 对象获得 Redux 方法
// 例如：Redux.createStore()
// 在这里定义 store here：

const store = Redux.createStore(reducer);
```

### 2. 从 Redux Store 获取状态

Redux store 对象提供了几种与之交互的方法， 比如，可以使用 getState() 方法检索 Redux store 对象中保存的当前 state。

```jsx
const store = Redux.createStore(
  (state = 5) => state
);

// 修改这行下面的代码
const currentState = store.getState();
```

### 3. 定义一个 Redux Action

由于 Redux 是一个状态管理框架，因此更新状态是其核心任务之一。 在 Redux 中，所有状态更新都由 dispatch action 触发， action 只是一个 JavaScript 对象，其中包含有关已发生的 action 事件的信息。 Redux store 接收这些 action 对象，然后更新相应的状态。 有时，Redux action 也会携带一些数据。 例如，在用户登录后携带用户名， 虽然数据是可选的，但 action 必须带有 type 属性，该属性表示此 action 的类型。

我们可以将 Redux action 视为信使，将有关应用程序中发生的事件信息提供给 Redux store， 然后 store 根据发生的 action 进行状态的更新。

```jsx
// 在这里定义一个动作
const action = {
  type: 'LOGIN',
}
```

### 4. 定义一个 Action Creator

创建 action 后要将 action 发送到 Redux store，以便它可以更新其状态。 在 Redux 中，可以定义动作创建器来完成此任务， action creator 只是一个返回动作的 JavaScript 函数， 换句话说，action creator 创建表示动作事件的对象。

```jsx
const action = {
  type: 'LOGIN'
}
// 在这里定义一个动作创建器：
function actionCreator() {
  return action;
}
```

### 5. 分发 Action Event

dispatch 方法用于将 action 分派给 Redux store， 调用 store.dispatch() 将从 action creator 返回的值发送回 store。

回想一下，动作创建者返回一个具有 type 属性的对象，该属性指定已发生的动作。 然后该方法会将一个 action 对象发送到 Redux store。 基于上一个挑战的示例，下面的行是等效的，两者都会调度类 LOGIN 类型的 action：

```jsx
store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
```

```jsx
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// 在这里发送 action：
store.dispatch(loginAction());
```

### 6. 在 Store 里处理 Action

在一个 action 被创建并 dispatch 之后，Redux store 需要知道如何响应该操作。 这就是 reducer 函数存在的意义。 Redux 中的 Reducers 负责响应 action 然后进行状态的修改。 reducer 将 state 和 action 作为参数，并且它总是返回一个新的 state。 我们要知道这是 reducer 的唯一的作用。 它不应有任何其他的作用：比如它不应调用 API 接口，也不应存在任何潜在的副作用。 reducer 只是一个接受状态和动作，然后返回新状态的纯函数。

Redux 的另一个关键原则是 state 是只读的。 换句话说，reducer 函数必须始终返回一个新的 state，并且永远不会直接修改状态。 Redux 不强制改变状态，但是需要在 reducer 函数的代码中强制执行它， 以后的挑战会练习这一点。

```jsx
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // 修改这行下面的代码
  if(action.type === 'LOGIN') 
    return {
      login: true,
    }
  return state;
  // 修改这行上面的代码
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
```

### 7. 使用 Switch 语句处理多个 Actions

可以定义 Redux store 处理多种 action 类型。 假设在 Redux store 中管理用户身份验证。 希望用状态表示用户登录和注销。 使用 state 的 authenticated 属性表示它。 还需要使用 action creators 创建与用户登录和用户注销相对应的 action，以及 action 对象本身。

```jsx
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // 修改这行下面的代码
  switch(action.type) {
    case 'LOGIN':
      return {
        authenticated: true,
      }
    case 'LOGOUT': 
      return {
        authenticated: false
      }
    default: 
      return state;
  }
  // 修改这行上面的代码
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
```

### 8. 使用 const 声明 Action Types

在使用 Redux 时的一个常见做法是将操作类型指定为只读，然后在任何使用它们的地方引用这些常量。 可以通过将 action types 使用 const 声明重构你正在使用的代码。

注意： 通常以全部大写形式写出常量，这也是 Redux 的标准做法。

```jsx
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN: 
      return {
        authenticated: true
      }
    case LOGOUT: 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};
```

### 9. 注册 Store 监听器

在 Redux store 对象上访问数据的另一种方法是 store.subscribe()。 这允许将监听器函数订阅到 store，只要 action 被 dispatch 就会调用它们。 这个方法的一个简单用途是为 store 订阅一个函数，它只是在每次收到一个 action 并且更新 store 时记录一条消息。

```jsx
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// 全局 count 变量：
let count = 0;

// 修改这行下面的代码
// function addCount() {
//   count += 1;
// }

// store.subscribe(addCount())
store.subscribe(() => {
  count += 1;
})
;// 修改这行上面的代码

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
```

### 10. 组合多个 Reducers

当应用程序的状态开始变得越来越复杂时，可能会将 state 分成多个块。 相反，请记住 Redux 的第一个原则：所有应用程序状态都保存在 store 中的一个简单的 state 对象中。 因此，Redux 提供 reducer 组合作为复杂状态模型的解决方案。 定义多个 reducer 来处理应用程序状态的不同部分，然后将这些 reducer 组合成一个 root reducer。 然后将 root reducer 传递给 Redux createStore()方法。

为了将多个 reducer 组合在一起，Redux 提供了combineReducers()方法。 该方法接受一个对象作为参数，在该参数中定义一个属性，该属性将键与特定 reducer 函数关联。 Redux 将使用给定的键值作为关联状态的名称。

通常情况下，当它们在某种程度上是独一无二的，为每个应用程序的 state 创建一个 reducer 是一个很好的做法。 例如，在一个带有用户身份验证的记笔记应用程序中，一个 reducer 可以处理身份验证而另一个处理用户提交的文本和注释。 对于这样的应用程序，可能会编写 combineReducers() 方法，如下所示：

```jsx
const rootReducer = Redux.combineReducers({
  auth: authenticationReducer, 
  notes: notesReducer
}); 
```

现在，notes 键将包含与注释相关联的所有状态，并由 notesReducer 处理。 这就是组合多个 reducer 来管理更复杂的应用程序状态的方式， 在此示例中，Redux store 中保存的状态将是一个包含 auth 和 notes 属性的简单对象。

```jsx

```
