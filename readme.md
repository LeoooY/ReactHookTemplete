### React Hook Templete
使用纯React Hook的前端项目模板


### 安装依赖

```
npm install
yarn 
```

### 数据通信
`useReducer` 和 `React context`建立的一个类`Redux`通信模型



#### 定义
- 1.写一个`reducer`: 
```
index(主要处理逻辑)，
types(定义action类型), 
creator(action生成器,对于dispatch参数的一层封装)
```

- 2.到`context`中将各`reducer`Combine在一起，通过`Context.Provider`提供出去

- 3.用自定义`Hook`封装`dispatch`
```
// dispatch一般用自定义Hook封装在一起，使用时useXXHook进行使用
// useExampleA:
import {useContext} from 'react';
import {context} from '@context';
import * as exampleAAction from '@context/reducer/exampleA/creator';


const useExampleA = () => {
    const {egA: {dispatch: egADispatch}} = useContext(context);
    return {        
        example: (somedate) => {
            egADispatch(exampleAAction.example(somedate))
        },
    }
};

export default useExampleA;

```

#### 使用
将Provider放到入口顶层，所有组件都可访问到`state`和`dispatch`
```
// 入口
import Provider from '@context'

function App(props) {
    return (
        <Provider>
            <div>App</div>
        </Provider>
    )
}

// 组件中使用
import React, {useContext} from 'react'
import {context} from '@context'


function Components(props) {
    const { egA: { state: egAState, dispatch: egADispatch } } = useContext(context)
    const { example }=useExampleA
    return (
        <div>Components</div>
    )
}

```
### lint
```
$ npx eslint --init

$ yarn add eslint-plugin-react@latest --dev
$ yarn add eslint-plugin-react-hooks --dev

{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```




