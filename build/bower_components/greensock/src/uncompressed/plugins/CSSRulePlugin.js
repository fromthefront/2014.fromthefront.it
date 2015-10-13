/*!
 * VERSION: beta 0.6.1
 * DATE: 2014-01-20
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("plugins.CSSRulePlugin",["plugins.TweenPlugin","TweenLite","plugins.CSSPlugin"],function(e,t,s){var n=function(){e.call(this,"cssRule"),this._overwriteProps.length=0},o=window.document,i=s.prototype.setRatio,r=n.prototype=new s;return r._propName="cssRule",r.constructor=n,n.version="0.6.1",n.API=2,n.getRule=function(e){var t,s,n,i,r=o.all?"rules":"cssRules",u=o.styleSheets,l=u.length,c=":"===e.charAt(0);for(e=(c?"":",")+e.toLowerCase()+",",c&&(i=[]);--l>-1;){try{s=u[l][r]}catch(w){console.log(w);continue}for(t=s.length;--t>-1;)if(n=s[t],n.selectorText&&-1!==(","+n.selectorText.split("::").join(":").toLowerCase()+",").indexOf(e)){if(!c)return n.style;i.push(n.style)}}return i},r._onInitTween=function(e,t,n){if(void 0===e.cssText)return!1;var i=e._gsProxy=e._gsProxy||o.createElement("div");return this._ss=e,this._proxy=i.style,i.style.cssText=e.cssText,s.prototype._onInitTween.call(this,i,t,n),!0},r.setRatio=function(e){i.call(this,e),this._ss.cssText=this._proxy.cssText},e.activate([n]),n},!0)}),window._gsDefine&&window._gsQueue.pop()();