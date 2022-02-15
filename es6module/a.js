// 模块文件 此文件不会通过script标签导入页面，因此不会造成全局变量污染
 var num = 1000
 var flag = true

 function af1 (){ console.log('我是 a.js 文件里的 af1 函数');}
 function af2 (){ console.log('我是 a.js 文件里的 af2 函数');}

 export default {
   af1,
   af2
 } 
