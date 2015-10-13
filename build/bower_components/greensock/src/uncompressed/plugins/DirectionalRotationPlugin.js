/*!
 * VERSION: beta 0.2.0
 * DATE: 2013-05-07
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine.plugin({propName:"directionalRotation",API:2,version:"0.2.0",init:function(t,i){"object"!=typeof i&&(i={rotation:i}),this.finals={};var e,s,n,o,r,u,a=i.useRadians===!0?2*Math.PI:360,f=1e-6;for(e in i)"useRadians"!==e&&(u=(i[e]+"").split("_"),s=u[0],n=parseFloat("function"!=typeof t[e]?t[e]:t[e.indexOf("set")||"function"!=typeof t["get"+e.substr(3)]?e:"get"+e.substr(3)]()),o=this.finals[e]="string"==typeof s&&"="===s.charAt(1)?n+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,r=o-n,u.length&&(s=u.join("_"),-1!==s.indexOf("short")&&(r%=a,r!==r%(a/2)&&(r=0>r?r+a:r-a)),-1!==s.indexOf("_cw")&&0>r?r=(r+9999999999*a)%a-(r/a|0)*a:-1!==s.indexOf("ccw")&&r>0&&(r=(r-9999999999*a)%a-(r/a|0)*a)),(r>f||-f>r)&&(this._addTween(t,e,n,n+r,e),this._overwriteProps.push(e)));return!0},set:function(t){var i;if(1!==t)this._super.setRatio.call(this,t);else for(i=this._firstPT;i;)i.f?i.t[i.p](this.finals[i.p]):i.t[i.p]=this.finals[i.p],i=i._next}})._autoCSS=!0}),window._gsDefine&&window._gsQueue.pop()();