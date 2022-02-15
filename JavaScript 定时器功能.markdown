JavaScript提供定时执行代码的功能：定时器（timer），主要由setTimeout（）和setInterval（）这两个函数来完成。

### setTimeout()
这个函数用来指定某段代码或者函数，在多少毫秒之后执行。它返回一个整数，表示定时器的id，以取消这个定时器。
```
var timer = setTimeout( func | code, delay)
```
需要注意的是：推迟执行的代码必须以字符串的形式给出。因为引擎内部使用eval（）函数，将字符串转为代码。
```
setTimeout("console.log('1')", 1000)
```
除了前两个参数，setTimeout还可接收更多参数，他们将被传入推迟执行的函数。

```
setTimeout((a, b) => {
  console.log(a + b)
}, 1000, 1, 2)
```
* 注意：IE 9以下版本，只支持setTimeout()有两个参数，不支持更多参数。此时有两种解决办法： 
  
  * 自定义setTimeout(),使用apply等方法将参数输入回调函数。
  ```
  setTimeout(function(args){}.bind(undefined, 10), 1000)
  setTimeout(function(args){}.call(undefined, 10), 1000)
  setTimeout(function(args){}.apply(undefined, [10]), 1000)
  ```
  * 使用匿名函数包裹回调函数：
  ```
  setTimeout( () => {
    function(args)
  }, 10)
  ```

  ### setInterval()
  setInterval（）用法和setTimeout（）完全一致，区别仅在于setInterval（）指定某个任务每隔一段时间就执行一次，也就是无限次执行。