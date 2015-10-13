/*!
 * VERSION: 0.3.0
 * DATE: 2014-05-13
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine.plugin({propName:"attr",API:2,version:"0.3.0",init:function(t,i,s){var e,r,n;if("function"!=typeof t.setAttribute)return!1;this._target=t,this._proxy={},this._start={},this._end={},this._endRatio=s.vars.runBackwards?0:1;for(e in i)this._start[e]=this._proxy[e]=r=t.getAttribute(e),this._end[e]=n=i[e],this._addTween(this._proxy,e,parseFloat(r),n,e),this._overwriteProps.push(e);return!0},set:function(t){this._super.setRatio.call(this,t);for(var i,s=this._overwriteProps,e=s.length,r=0!==t&&1!==t?this._proxy:t===this._endRatio?this._end:this._start;--e>-1;)i=s[e],this._target.setAttribute(i,r[i]+"")}})}),window._gsDefine&&window._gsQueue.pop()();