(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(35)},16:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),l=(a(16),a(5)),i=a(6),s=a(9),u=a(7),m=a(10),d=a(2),f=a.n(d),h=a(8),b=a.n(h),w=a(1),p=a.n(w),E=(a(29),function(e){var t=e.color;return c.a.createElement("div",{className:"swatch",style:{background:t,color:p.a.isAccessible("#000",t)?"#000":"#fff"}},t)}),g=(a(31),function(e){var t=e.foregroundColor,a=e.backgroundColor;return c.a.createElement("div",{className:"contrast-swatch"},c.a.createElement("div",{className:"contrast-swatch__grade"},p.a.isAccessible(t,a)?"\u2705":"\u274c"),c.a.createElement("div",{className:"contrast-swatch__sample",style:{color:t,background:a}},"abc"),c.a.createElement("div",{className:"contrast-swatch__ratio"},p.a.ratio(t,a).toFixed(2)," (",p.a.score(t,a),")"))}),v=(a(33),function(e){var t=e.swatch,a=e.palette;return c.a.createElement("tr",null,c.a.createElement("td",{className:"table__row-header"},c.a.createElement(E,{color:t})),a.map(function(e,a){return c.a.createElement("td",{key:a,className:"table__cell"},c.a.createElement(g,{foregroundColor:e,backgroundColor:t}))}))}),_=function(e){var t=e.palette;return c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"table__column-header table__column-header--empty"}),t.map(function(e,t){return c.a.createElement("th",{key:t,className:"table__column-header"},c.a.createElement(E,{color:e}))}))),c.a.createElement("tbody",null,t.map(function(e,a){return c.a.createElement(v,{key:a,swatch:e,palette:t})})))},k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).cleanPalette=function(e){return e.filter(function(e){return e.match(/^#|^rgb/)?f()(e):b()(e)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=window.location.href.replace(window.location.origin+window.location.pathname+"?","").replace(/\s/g,"").replace(/%20/g,"").replace(/(,)(\d)/g,"|$2").split(",");e.forEach(function(t,a){e[a]=t.replace(/\|/g,",")}),(e=this.cleanPalette(e)).length?this.palette=e:this.palette=["white","black","rgb(100,100,100)","rgba(200,200,200,0.5)","#ef5350","#ec407a","#ab47bc","#7e57c2","#5c6bc0","#42a5f5","#29b6f6","#26c6da","#26a69a","#66bb6a","#9ccc65","#d4e157","#ffee58","#ffca28","#ffa726","#ff7043","#8d6e63","#bdbdbd","#78909c"],window.history.replaceState(null,null,window.location.origin+window.location.pathname+"?"+this.palette.join(","))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(_,{palette:this.palette}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.492c59e6.chunk.js.map