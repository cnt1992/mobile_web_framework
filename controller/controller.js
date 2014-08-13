/*
* 路由控制
*/
var index = require('./index')
		,hello = require('./hello')
;

module.exports = function(app){

  app.get('/',index.index)
     .get('/index.html',index.index) //首页
     .get('/hello.html',hello.hello)
  ;


};