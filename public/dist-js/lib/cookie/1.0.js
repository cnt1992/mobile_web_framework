// Copyright (c) 2010, 2012 

// Dual licensed under the MIT and GPL licenses:

// http://www.opensource.org/licenses/mit-license.php

// http://www.gnu.org/licenses/gpl.html

(function(e){e.extend(e.fn,{cookie:function(t,n,r){var i,s,o,u;if(arguments.length>1&&String(n)!=="[object Object]"){r=e.extend({},r);if(n===null||n===undefined)r.expires=-1;return typeof r.expires=="number"&&(i=r.expires*24*60*60*1e3,s=r.expires=new Date,s.setTime(s.getTime()+i)),n=String(n),document.cookie=[encodeURIComponent(t),"=",r.raw?n:encodeURIComponent(n),r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("")}return r=n||{},u=r.raw?function(e){return e}:decodeURIComponent,(o=(new RegExp("(?:^|; )"+encodeURIComponent(t)+"=([^;]*)")).exec(document.cookie))?u(o[1]):null}})})(Zepto);