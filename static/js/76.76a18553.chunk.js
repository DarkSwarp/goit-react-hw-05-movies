"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{687:function(t,e,r){r.d(e,{Ny:function(){return p},_k:function(){return s},bI:function(){return o},oO:function(){return h},y:function(){return f}});var n=r(861),a=r(757),c=r.n(a),u=r(243),i="c0cdc1a14e8a53ae3d25369920c09f3b",s=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e,r){var n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&page=").concat(e,"&query=").concat(r));case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(Number(e),"?api_key=").concat(i,"&language=en-US"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(Number(e),"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(Number(e),"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},76:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});var n=r(861),a=r(439),c=r(757),u=r.n(c),i=r(689),s=r(791),o=r(687),p=r(521),f="Cast_list__GlWio",h="Cast_img__-isbW",l="Cast_name__6UbFm",m="Cast_character__tKDlA",v=r(184);function d(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),r=e[0],c=e[1],d=(0,s.useState)(!1),g=(0,a.Z)(d,2),k=g[0],_=g[1],b=(0,s.useState)(!1),x=(0,a.Z)(b,2),w=x[0],y=x[1],Z=(0,i.UO)().movieId;return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,_(!0),y(!1),t.next=5,(0,o.y)(Z);case 5:e=t.sent,c(e.cast),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),y(!0);case 12:return t.prev=12,_(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[Z]),(0,v.jsxs)(v.Fragment,{children:[k&&(0,v.jsx)(p.Z,{}),w&&(0,v.jsx)("p",{children:"Something went wrong, reload the page"}),!k&&!w&&0===r.length&&(0,v.jsx)("p",{children:"Unfortunately, there is no information about the actors."}),!k&&!w&&r.length>0&&(0,v.jsx)("ul",{className:f,children:r.map((function(t){return(0,v.jsxs)("li",{children:[t.profile_path&&(0,v.jsx)("img",{className:h,src:"https://image.tmdb.org/t/p/w200".concat(t.profile_path),alt:""}),!t.profile_path&&(0,v.jsx)("img",{className:h,src:"https://kartinki.pibig.info/uploads/posts/2023-04/1681549820_kartinki-pibig-info-p-zaglushka-kartinka-arti-krasivo-2.jpg",alt:""}),(0,v.jsx)("p",{className:l,children:t.name}),(0,v.jsxs)("p",{className:m,children:["Character ",t.character]})]},t.id)}))})]})}}}]);
//# sourceMappingURL=76.76a18553.chunk.js.map