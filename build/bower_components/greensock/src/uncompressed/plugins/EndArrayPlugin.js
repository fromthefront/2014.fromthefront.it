/*!
 * VERSION: 0.1.1
 * DATE: 2014-04-08
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine.plugin({propName:"endArray",API:2,version:"0.1.1",init:function(n,i){var e,t,r=i.length,s=this.a=[];if(this.target=n,this._round=!1,!r)return!1;for(;--r>-1;)e=n[r],t=i[r],e!==t&&s.push({i:r,s:e,c:t-e});return!0},round:function(n){"endArray"in n&&(this._round=!0)},set:function(n){var i,e,t=this.target,r=this.a,s=r.length;if(this._round)for(;--s>-1;)i=r[s],t[i.i]=Math.round(i.s+i.c*n);else for(;--s>-1;)i=r[s],e=i.s+i.c*n,t[i.i]=1e-6>e&&e>-1e-6?0:e}})}),window._gsDefine&&window._gsQueue.pop()();