({
    appDir: '../public/js/',
    baseUrl: './',
    dir: '../public/dist-js/',
    modules: [
        {
            name : 'page/index'
        },

    ],
    fileExclusionRegExp: /^(r|build)\.js$/,
    optimizeCss: 'standard',
    removeCombined: false,
    paths: {
        underscore: "./lib/underscore/underscore-min",
        domReady  : "./lib/require/domReady",
        md5       : "./lib/md5/md5",
        cookie    : "./lib/cookie/1.0",
        unveil    : "./lib/unveil/1.3",
        zepto     : "./lib/zepto/1.1.3",
        fx        : "./lib/zepto/fx",
        deferred  : "./lib/zepto/deferred",
        callbacks : "./lib/zepto/callbacks",
        Swipe     : "./lib/swipe.min",
        History   : "./lib/history/1.8.3",
        happy     : "./lib/happy/0.3.0",
        fastclick : "./lib/fastclick/1.0.1",

        m: "./module"
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
})
