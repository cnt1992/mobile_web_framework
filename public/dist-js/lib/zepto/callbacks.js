//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

(function(e){e.Callbacks=function(t){t=e.extend({},t);var n,r,i,s,o,u,a=[],f=!t.once&&[],l=function(e){n=t.memory&&e,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;++u)if(a[u].apply(e[0],e[1])===!1&&t.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a.length=0:c.disable())},c={add:function(){if(a){var r=a.length,u=function(n){e.each(n,function(e,n){typeof n=="function"?(!t.unique||!c.has(n))&&a.push(n):n&&n.length&&typeof n!="string"&&u(n)})};u(arguments),i?o=a.length:n&&(s=r,l(n))}return this},remove:function(){return a&&e.each(arguments,function(t,n){var r;while((r=e.inArray(n,a,r))>-1)a.splice(r,1),i&&(r<=o&&--o,r<=u&&--u)}),this},has:function(t){return!!a&&!!(t?e.inArray(t,a)>-1:a.length)},empty:function(){return o=a.length=0,this},disable:function(){return a=f=n=undefined,this},disabled:function(){return!a},lock:function(){return f=undefined,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return a&&(!r||f)&&(t=t||[],t=[e,t.slice?t.slice():t],i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments)},fired:function(){return!!r}};return c}})(Zepto);