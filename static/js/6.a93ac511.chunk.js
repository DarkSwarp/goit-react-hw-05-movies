"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[6],{6:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(861),a=n(439),u=n(757),c=n.n(u),i=n(791),o=n(687),s=n(474),p=n(368),f=n(184);function v(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),n=e[0],u=e[1],v=(0,i.useState)(!1),h=(0,a.Z)(v,2),d=h[0],m=h[1],l=(0,i.useState)(!1),g=(0,a.Z)(l,2),k=g[0],x=g[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),x(!1),t.next=5,(0,o._k)();case 5:e=t.sent,n=e.results,u(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),x(!0);case 13:return t.prev=13,m(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,f.jsxs)(f.Fragment,{children:[d&&(0,f.jsx)(s.Z,{}),k&&(0,f.jsx)("p",{children:"Something went wrong, reload the page"}),!d&&!k&&n.length>0&&(0,f.jsx)(p.Z,{movies:n})]})}},687:function(t,e,n){n.d(e,{Ny:function(){return p},_k:function(){return o},bI:function(){return s},oO:function(){return v},y:function(){return f}});var r=n(861),a=n(757),u=n.n(a),c=n(243),i="c0cdc1a14e8a53ae3d25369920c09f3b",o=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(e,n){var r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&page=").concat(e,"&query=").concat(n));case 2:return r=t.sent,a=r.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(Number(e),"?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(Number(e),"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(Number(e),"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},368:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(689),a=n(87),u=n(184);function c(t){var e=t.movies,n=(0,r.TH)();return(0,u.jsx)("ul",{children:e.map((function(t){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(t.id),state:{from:n},children:t.title})},t.id)}))})}}}]);
//# sourceMappingURL=6.a93ac511.chunk.js.map