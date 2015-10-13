/*!
 * VERSION: beta 1.4.0
 * DATE: 2013-02-27
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";var r=window._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(r,o,n){return this._tween=n,!0}}),o=r.prototype;o._onInitAllProps=function(){for(var r,o,n,e=this._tween,t=e.vars.roundProps instanceof Array?e.vars.roundProps:e.vars.roundProps.split(","),p=t.length,s={},i=e._propLookup.roundProps;--p>-1;)s[t[p]]=1;for(p=t.length;--p>-1;)for(r=t[p],o=e._firstPT;o;)n=o._next,o.pg?o.t._roundProps(s,!0):o.n===r&&(this._add(o.t,r,o.s,o.c),n&&(n._prev=o._prev),o._prev?o._prev._next=n:e._firstPT===o&&(e._firstPT=n),o._next=o._prev=null,e._propLookup[r]=i),o=n;return!1},o._add=function(r,o,n,e){this._addTween(r,o,n,n+e,o,!0),this._overwriteProps.push(o)}}),window._gsDefine&&window._gsQueue.pop()();