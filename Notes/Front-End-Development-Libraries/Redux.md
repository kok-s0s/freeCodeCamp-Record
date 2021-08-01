<!--
 * @Author: kok-s0s
 * @Date: 2021-07-27 14:31:43
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-08-01 18:31:24
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
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = { authenticated: false }, action) => {
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

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
})// 在这里定义 root reducer

const store = Redux.createStore(rootReducer);
```

### 11. 发送 Action Data 给 Store

到目前为止，你已经学会了如何将 action dispatch 给 Redux store，但到目前为止，这些 action 并未包含除 type之外的任何信息。 还可以和 action 一起发送特定数据。 事实上，这是非常常见的，因为 action 通常源于一些用户交互，并且往往会携带一些数据， Redux store 经常需要知道这些数据。

```jsx
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // 修改这行下面的代码
    case ADD_NOTE:
      return action.text;
    // 修改这行上面的代码
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // 修改这行下面的代码
  return {
    type: ADD_NOTE,
    text: note,
  }
  // 修改这行上面的代码
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
```

### 12. 使用中间件处理异步操作

目前为止的挑战都在避免讨论异步操作，但它们是 Web 开发中不可避免的一部分。 在某些时候，需要在 Redux 应用程序中使用异步请求，那么如何处理这些类型的请求？ Redux 中间件专为此目的而设计，称为 Redux Thunk 中间件。 这里简要介绍如何在 Redux 中使用它。

如果要使用 Redux Thunk 中间件，请将其作为参数传递给 Redux.applyMiddleware()。 然后将此函数作为第二个可选参数提供给 createStore() 函数， 看一下编辑器底部的代码。 然后，要创建一个异步的 action，需要在 action creator 中返回一个以 dispatch 为参数的函数。 在这个函数中，可以 dispatch action 并执行异步请求。

在此示例中，使用 setTimeout() 模拟异步请求。 通常在执行异步行为之前 dispatch action，以便应用程序状态知道正在请求某些数据（例如，这个状态可以显示加载图标）。 然后，一旦收到数据，就会发送另一个 action，该 action 的 data 是请求返回的数据同时也代表 API 操作完成。

请记住，正在将 dispatch 作为参数传递给这个特殊的 action creator。 需要 dispatch action 时只需将 action 直接传递给 dispatch，中间件就可以处理其余的部分。

---

在 handleAsync() 的 action creator 中编写两个 dispatch 事件。 在 setTimeout()（模拟 API 调用）之前 dispatch requestingData()。 然后在收到（模拟）数据后，dispatch receivedData() action，传入这些数据。 现在已经知道如何处理 Redux 中的异步操作， 其他所有操作都继续像以前一样。

```jsx
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // 在这里发送 request action
    dispatch(requestingData());
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // 在这里发送接收到的 data action
      dispatch(receivedData(data));
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
```

### 13. 用 Redux 写一个计数器

现在已经了解了 Redux 的所有核心原则！ 已经了解了如何创建 action 和 action creator，创建 Redux store，通过 store dispatch action，以及使用纯粹的 reducer 设计状态更新。 甚至已经看到过如何使用 reducer 组合管理复杂状态并处理异步操作。 这些例子很简单，但这些概念是 Redux 的核心原则。 如果已经理解这些，那么就可以开始构建自己的 Redux 应用了。 接下来的挑战包括关于 state 不变性的一些细节，但是，这里是对到目前为止学到的所有内容的回顾。

```jsx
const INCREMENT = 'INCREMENT'; // 为 increment action types 定义一个常量
const DECREMENT = 'DECREMENT'; // 为 decrement action types 定义一个常量

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT: 
      return state - 1;
    default: 
      return state;
  }
}; // 定义 counter reducer，根据接收到的动作递增或递减 state

const incAction = () => {
  return {
    type: INCREMENT,
  }
}; // 为自增运算定义一个动作创建器

const decAction = () => {
  return {
    type: DECREMENT,
  }
}; // 为自减运算定义一个动作创建器

const store = Redux.createStore(counterReducer); // 在这里定义 Redux store，传入 reducers
```

### 14. 永不改变状态

这些最后的挑战描述了在 Redux 中强制执行状态不变性关键原则的几种方法。 不可变状态意味着永远不直接修改状态，而是返回一个新的状态副本。

如果拍摄 Redux 应用程序一段时间状态的快照，会看到类似 state 1，state 2，state 3，state 4，... 等等，每个状态可能与最后一个状态相似，但每个状态都是一个独特的数据。 事实上，这种不变性提供了时间旅行调试等功能。

Redux 并没有主动地在其 store 或者 reducer 中强制执行状态不变性，责任落在程序员身上。 幸运的是，JavaScript（尤其是 ES6）提供了一些有用的工具，可以用来强制执行状态的不变性，无论是 string，number，array 或 object。 请注意，字符串和数字是原始值，并且本质上是不可变的。 换句话说，3 总是 3， 不能改变数字 3 的值。 然而，array 或 object 是可变的。 实际上，状态可能会包括 array 或 object，因为它们经常用来描述一些代表信息的数据结构。

```jsx
const ADD_TO_DO = 'ADD_TO_DO';

// 一个展示需要完成的任务的字符串列表：
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // 这里不能修改 state，否则测试不能通过
      return state.concat(action.todo);
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

### 15. 在数组中使用扩展运算符

ES6 中有助于在 Redux 中强制执行状态不变性的一个解决方案是扩展运算符：...。 扩展运算符具有很多的应用，其中一种非常适合通过一个已有的数组生成一个新数组。 这是相对较新的但常用的语法。 例如，如果你有一个数组 myArray 并写：

```js
let newArray = [...myArray];
```

newArray 现在是 myArray 的克隆。 两个数组仍然分别存在于内存中。 如果你执行像 newArray.push(5) 这样的变异， myArray 不会改变。 ... 有效将 myArray 中的值展开到一个新数组中。 要克隆数组，但在新数组中添加其他值，可以编写 [...myArray, 'new value']。 这将返回一个由 myArray 中的值和字符串 new value（作为最后一个值）组成的新数组。 扩展语法可以像这样在数组组合中多次使用，但重要的是要注意它只是生成数组的浅拷贝副本。 也就是说，它只为一维数组提供不可变的数组操作。

```jsx
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // 这里不能修改 state，否则测试不能通过
      return [...state, action.todo];
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

### 16. 从数组中删除项目

是时候练习从数组中删除项目了。 扩展运算符也可以在这里使用。 其他有用的JavaScript方法包括 slice() 和 concat()。

```jsx
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // 这里不能修改 state，否则测试不能通过
      return [...state.slice(0, action.index), ...state.slice(action.index + 1, state.length)];
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
```

### 17. 使用 Object.assign 拷贝对象

最后几个挑战适用于数组，但是当状态是 object 时，有一些方法可以实现状态不变性。 处理对象的一个常用的方法是 Object.assign()。 Object.assign() 获取目标对象和源对象，并将源对象中的属性映射到目标对象。 任何匹配的属性都会被源对象中的属性覆盖。 通常用于通过传递一个空对象作为第一个参数，然后是要用复制的对象来制作对象的浅表副本。 这是一个例子：

```js
const newObject = Object.assign({}, obj1, obj2);
```

这会创建 newObject 作为新的 object，其中包含 obj1 和 obj2 中当前存在的属性。

```jsx
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // 这里不能修改 state，否则测试不能通过
      return Object.assign({}, state, {status: 'online'});
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```
