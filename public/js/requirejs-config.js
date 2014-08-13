var lib = "";
requirejs.config({
  //默认相对lib指向路径解析模块ID
  //  baseUrl:"",
  baseUrl: "",
  // 如果模块ID以"common"开始，会相对./common目录解析，
  // 如果模块ID以"m"开始，会相对./m目录解析，
  // path config是相对 baseUrl 解析的，而且不用包含".js"，因为 path config 指向的可能是目录
  paths  : {
    underscore: "/js/lib/underscore/underscore-min",
    domReady  : "/js/lib/require/domReady",
    md5       : "/js/lib/md5/md5",
    cookie    : "/js/lib/cookie/1.0",
    unveil    : "/js/lib/unveil/1.3",
    zepto     : "/js/lib/zepto/1.1.3",
    fx        : "/js/lib/zepto/fx",
    deferred  : "/js/lib/zepto/deferred",
    callbacks : "/js/lib/zepto/callbacks",
    Swipe     : "/js/lib/swipe.min",
    History   : "/js/lib/history/1.8.3",
    happy     : "/js/lib/happy/0.3.0",
    fastclick : "/js/lib/fastclick/1.0.1",

    m: "/js/module"
  },

  shim: {
    "underscore": { exports: "_" },
    "md5"       : { exports: "hex_md5" },
    "zepto"     : { exports: "$"},
    "Swipe"     : { deps: ["zepto"], exports: "Swipe"},
    "deferred"  : ["zepto"],
    "callbacks" : ["zepto"],
    "unveil"    : ["zepto"],
    "cookie"    : ["zepto"],
    "happy"     : ["zepto"],
    "History"   : { deps: ["zepto"], exports: "History"},
    "fx"        : ["zepto"]
  }

});
