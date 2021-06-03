(function(t){function e(e){for(var n,o,s=e[0],c=e[1],u=e[2],p=0,h=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/philosophers-visualizer/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Visualizer")],1)},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"visualizer"}},[r("h1",[t._v("Philosophers visualizer")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textData,expression:"textData"}],attrs:{placeholder:"timestamp_in_ms X status"},domProps:{value:t.textData},on:{input:function(e){e.target.composing||(t.textData=e.target.value)}}}),t._v(" "),r("br"),r("button",{on:{click:t.generateData}},[t._v("generate")]),t.chartData.length>1?r("div",{attrs:{id:"graph"}},[r("GChart",{attrs:{settings:{packages:["timeline"]},type:"Timeline",data:t.chartData,options:t.chartOptions}})],1):t._e()])},s=[],c=(r("159b"),r("ac1f"),r("1276"),r("466d"),r("b64b"),r("cb43")),u={name:"Vizualizer",components:{GChart:c["GChart"]},data:function(){return{chartData:[],chartOptions:{title:"Philosopher visualizer",height:0,width:0,colors:["#fbb4ae","#b3cde3","#ccebc5"],avoidOverlappingGridLines:!1},textData:""}},methods:{generateData:function(){var t=[[{type:"string",id:"Index"},{type:"string",id:"Action"},{type:"string",role:"style"},{type:"number",id:"Start"},{type:"number",id:"End"}]],e=/^(\d+) (\d+) (is (eat|sleep|think)ing|died)$/,r={},n={min:1/0,max:0},a=0;this.textData.split("\n").forEach((function(i){var o=i.match(e);if(o){var s=parseInt(o[1],10),c=o[4],u=o[2];n.min=Math.min(n.min,s),n.max=Math.max(n.max,s),a=Math.max(a,u),r[u]?(t.push([u,r[u].action,"stroke-width: 0.5; stroke-color: #000000; stroke-opacity: 0.55",r[u].ms,s]),r[u]={action:c,ms:s}):r[u]={action:c,ms:s}}})),Object.keys(r).forEach((function(e){r[e].ms<n.max&&t.push([e,r[e].action,"stroke-width: 0.5; stroke-color: #000000; stroke-opacity: 0.55",r[e].ms,n.max])})),this.chartOptions.height=40*a+60,this.chartOptions.width=.6*(n.max-n.min),this.chartData=t.sort((function(t,e){return t[0]-e[0]}))}}},l=u,p=(r("8737"),r("2877")),h=Object(p["a"])(l,o,s,!1,null,"2b5f5d19",null),d=h.exports,f={name:"App",components:{Visualizer:d}},m=f,v=Object(p["a"])(m,a,i,!1,null,null,null),b=v.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(b)}}).$mount("#app")},8737:function(t,e,r){"use strict";r("e11c")},e11c:function(t,e,r){}});
//# sourceMappingURL=app.d68fa853.js.map