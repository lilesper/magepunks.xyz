(this.webpackJsonpmagepunks=this.webpackJsonpmagepunks||[]).push([[5],{1198:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return i}));var r=n(13),a=n(78),i=function(t,e,n,i,u){var c=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:n,onMove:function(t){var e=t.deltaX/c.innerWidth;i(e)},onEnd:function(t){var e=t.deltaX,n=c.innerWidth,a=e/n,i=t.velocityX,o=n/2,s=i>=0&&(i>.2||t.deltaX>o),d=(s?1-a:a)*n,h=0;if(d>5){var p=d/Math.abs(i);h=Math.min(p,540)}u(s,a<=0?.01:Object(r.d)(0,a,.9999),h)}})}}}]);
//# sourceMappingURL=5.aa17db53.chunk.js.map