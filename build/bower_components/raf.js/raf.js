/*
 * raf.js
 * https://github.com/ngryman/raf.js
 *
 * original requestAnimationFrame polyfill by Erik Möller
 * inspired from paul_irish gist and post
 *
 * Copyright (c) 2013 ngryman
 * Licensed under the MIT license.
 */
!function(n){for(var e=0,a=["webkit","moz"],t=n.requestAnimationFrame,i=n.cancelAnimationFrame,m=a.length;--m>=0&&!t;)t=n[a[m]+"RequestAnimationFrame"],i=n[a[m]+"CancelAnimationFrame"];t&&i||(t=function(n){var a=+new Date,t=Math.max(e+16,a);return setTimeout(function(){n(e=t)},t-a)},i=clearTimeout),n.requestAnimationFrame=t,n.cancelAnimationFrame=i}(window);