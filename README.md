### 问题清单
#### 1、不支持react hook
```
Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.
```
解决办法：
将react、react-dom版本切换到16.8.0版本，然后删除.docz，删除之前需要在任务管理器中将node进行杀死，不然删除不掉，最后，执行yarn docz:dev

#### 2、组件文档中props不显示

  // "workspaces": {
  //   "packages": [
  //     "packages/*"
  //   ]
  // },