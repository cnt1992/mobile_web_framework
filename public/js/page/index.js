//主逻辑
requirejs(
  ["zepto", "Swipe",  
     "m/util",  "unveil", ]
  , function( $, Swipe,  util, unveil ){
    $(function(){
      // lazyload
      $("img").unveil(200);
      
      util.fastclick();

      //util.printHello("sky");

      window.mySwipe = Swipe(document.getElementById('slider'));
      
    })
  }
);

