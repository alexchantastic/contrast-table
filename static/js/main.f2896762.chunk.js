(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t(36)},17:function(e,a,t){},30:function(e,a,t){},32:function(e,a,t){},34:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(4),l=t.n(r),o=(t(17),t(5)),s=t(6),i=t(9),m=t(7),u=t(10),d=t(2),f=t.n(d),h=t(8),w=t.n(h),b=t(1),p=t.n(b),g=(t(30),function(e){var a=e.color;return c.a.createElement("div",{className:"swatch",style:{background:a,color:p.a.isAccessible("#000",a)?"#000":"#fff"}},a)}),E=(t(32),function(e){var a=e.foregroundColor,t=e.backgroundColor,n=p.a.ratio(a,t).toFixed(2),r=p.a.score(a,t),l=n>=4.5,o=n>=3;return c.a.createElement("div",{className:"contrast-swatch"},c.a.createElement("div",{className:"contrast-swatch__grades"},c.a.createElement("div",{className:"contrast-swatch__grade",title:"Body text ".concat(l?"pass":"fail")},c.a.createElement("span",{className:"contrast-swatch__grade-label"},"\ud83d\udd21"),l?"\u2705":"\u274c"),c.a.createElement("div",{className:"contrast-swatch__grade",title:"Large-scale text ".concat(o?"pass":"fail")},c.a.createElement("span",{className:"contrast-swatch__grade-label"},"\ud83d\udd20"),o?"\u2705":"\u274c")),c.a.createElement("div",{className:"contrast-swatch__sample",style:{color:a,background:t}},"abc"),c.a.createElement("div",{className:"contrast-swatch__ratio"},n," (",r,")"))}),_=(t(34),function(e){var a=e.swatch,t=e.palette;return c.a.createElement("tr",null,c.a.createElement("td",{className:"table__row-header"},c.a.createElement(g,{color:a})),t.map(function(e,t){return c.a.createElement("td",{key:t,className:"table__cell"},c.a.createElement(E,{foregroundColor:e,backgroundColor:a}))}))}),v=function(e){var a=e.palette;return c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"table__column-header table__column-header--empty"}),a.map(function(e,a){return c.a.createElement("th",{key:a,className:"table__column-header"},c.a.createElement(g,{color:e}))}))),c.a.createElement("tbody",null,a.map(function(e,t){return c.a.createElement(_,{key:t,swatch:e,palette:a})})))},y=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).cleanPalette=function(e){return e.filter(function(e){return e.match(/^#|^rgb/)?f()(e):w()(e)})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentWillMount",value:function(){var e=window.location.href.replace(window.location.origin+window.location.pathname+"?","").replace(/\s/g,"").replace(/%20/g,"").replace(/(,)(\d)/g,"|$2").split(",");e.forEach(function(a,t){e[t]=a.replace(/\|/g,",")}),(e=this.cleanPalette(e)).length?this.palette=e:this.palette=["white","black","rgb(100,100,100)","rgba(200,200,200,0.5)","#ef5350","#ec407a","#ab47bc","#7e57c2","#5c6bc0","#42a5f5","#29b6f6","#26c6da","#26a69a","#66bb6a","#9ccc65","#d4e157","#ffee58","#ffca28","#ffa726","#ff7043","#8d6e63","#bdbdbd","#78909c"],window.history.replaceState(null,null,window.location.origin+window.location.pathname+"?"+this.palette.join(","))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(v,{palette:this.palette}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.f2896762.chunk.js.map