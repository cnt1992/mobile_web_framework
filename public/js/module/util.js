/*
* 测试工具类
*/

define(function( require, exports, module ){

  //若需要引入其它模块，则用require引入
  var $ = require('zepto');
  var FastClick = require('fastclick');

  module.exports = {
    //测试模块
    printHello : function(name){
      document.write("hello " + name);
    },
    fastclick : function(){
        window.addEventListener('load',function(){
            FastClick.attach(document.body);
        });
    }

  }
});