(function(e){function n(n){for(var r,a,c=n[0],A=n[1],s=n[2],u=0,d=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in A)Object.prototype.hasOwnProperty.call(A,r)&&(e[r]=A[r]);l&&l(n);while(d.length)d.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(r=!1)}r&&(i.splice(n--,1),e=A(A.s=t[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return A.p+"js/"+({about:"about"}[e]||e)+"."+{about:"570f71c0","chunk-45548cfa":"4e3eff95"}[e]+".js"}function A(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,A),t.l=!0,t.exports}A.e=function(e){var n=[],t={about:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"04c51329","chunk-45548cfa":"31d6cfe0"}[e]+".css",o=A.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===r||u===o))return n()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],u=s.getAttribute("data-href");if(u===r||u===o)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],l.parentNode.removeChild(l),t(i)},l.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(l)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,A.nc&&u.setAttribute("nonce",A.nc),u.src=c(e);var d=new Error;s=function(n){u.onerror=u.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,t[1](d)}o[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(n)},A.m=e,A.c=r,A.d=function(e,n,t){A.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},A.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,n){if(1&n&&(e=A(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(A.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)A.d(t,r,function(n){return e[n]}.bind(null,r));return t},A.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return A.d(n,"a",n),n},A.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},A.p="/",A.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var l=u;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("85ec"),a=t.n(r);a.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"relative"},[t("div",{staticClass:"nav"},[t("router-link",{staticClass:"text",attrs:{to:"/"}},[e._v("Webinar")]),t("router-link",{staticClass:"text",attrs:{to:"/certificados"}},[e._v("Personas Certificadas")])],1)]),t("router-view")],1)},o=[],i=(t("034f"),t("2877")),c={},A=Object(i["a"])(c,a,o,!1,null,null,null),s=A.exports,u=t("9483");Object(u["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7");var d=t("8c4f"),l=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"full_screen"},[r("div",{staticClass:"webinar_title"},[r("img",{staticClass:"qr_container",attrs:{src:t("9b19")}}),r("h1",[e._v("Transformación Digital")]),r("span",[e._v("en Centros Educativos")])])])}],m={name:"Home"},E=m,p=(t("cccb"),Object(i["a"])(E,l,f,!1,null,null,null)),L=p.exports;r["a"].use(d["a"]);var O=[{path:"/",name:"Home",component:L},{path:"/certificados",name:"certificados",component:function(){return t.e("about").then(t.bind(null,"f820"))}},{path:"/TDCE/:id",name:"TDCE",component:function(){return t.e("chunk-45548cfa").then(t.bind(null,"d139"))}}],I=new d["a"]({mode:"history",base:"/",routes:O}),R=I,N=t("2f62");r["a"].use(N["a"]);var C=new N["a"].Store({state:{certis:[{name:"JOSE LINO LOAYZA CASTRO ",id:26681},{name:"LIC. NANCY NÚÑEZ CHUMACERO",id:10139},{name:"IVAN CALCINA HUAYHUA",id:10539},{name:"MARTHA VILLARROEL VALDIVIA",id:21580},{name:"MELVY TALAVERA MENACHO",id:19399},{name:"OLVIS ESCALANTE MEJIA",id:24009},{name:"LEONARDO CUÉLLAR RAMOS",id:27899},{name:"GABRIEL APONTE MEJIA",id:22087},{name:"PATRICIA  ALMENDRAS CALIZAYA ",id:24753},{name:"ARIEL CASTELLON CAZORLA ",id:18281},{name:"MARLENE VEIZAGA JATTACO",id:19698},{name:"CLAUDIA ABASTO LÓPEZ ",id:23420},{name:"NELLY ROSALBA ARNEZ MIRANDA",id:21566},{name:"ESTANISLAO FRANCO RAMIREZ SANABRIA",id:26708},{name:"QUENIA DELITZER  GUARY SOTTO ",id:10672},{name:"TEOLINDA AMAZA NOCRE",id:16758},{name:"LUZ MARINA MORON",id:21827},{name:"BOZENA IRENA MISIAK",id:14107},{name:"MARIELA  RUEDA VALENCIA ",id:15652},{name:"ROLANDO VARGAS MARTINEZ",id:16777},{name:"JOSÉ ELIO GABRIEL LÓPEZ.",id:34569},{name:"DRA. MARIA DEL CARMEN SARAVIA CARDOZO",id:34579},{name:"BANIA DORIS VELARDE GARCIA",id:13944},{name:"ARMANDO VACA CITA",id:16959},{name:"LIC. NANCY NÚÑEZ CHUMACERO",id:10139},{name:"FRANZ MARCELO MARTINEZ RODRIGUEZ",id:34589},{name:"DEYSI CUELLAR MELGAREJO",id:34689},{name:"LIC. JUAN CARLOS FLORES ALBIS",id:34690},{name:"LIC. ANGELA KARINA APRICIO MENDOZA",id:34691},{name:"LIC. OSVALDO VILDOZO VILLAMONTE",id:34692},{name:"VERÓNICA ADRIAZOLA MURIEL",id:34693},{name:"SOFIA VILLALPANDO CUISA",id:34694},{name:"ZARA ROCIO DÍAZ QUISPE",id:34695},{name:"ELMER GONZALO MAMANI LEÓN",id:34696},{name:"KATHERINE FABIOLA FLORES LAURA",id:34697},{name:"LIC. MARTHA VERONICA TORREZ ARDAYA",id:34698},{name:"LIC. JENNY CATALINA PINTO GUTIERREZ",id:34699},{name:"FREDDY ELOY MAMANI DURAN",id:34700},{name:"CONSTANTINA JALDIN MONTAÑO",id:34701},{name:"EDWARD LUNA RICALDI",id:34702}]},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:R,store:C,render:function(e){return e(s)}}).$mount("#app")},"5ced":function(e,n,t){},"85ec":function(e,n,t){},"9b19":function(e,n,t){e.exports=t.p+"img/logo.08ab0ccb.svg"},cccb:function(e,n,t){"use strict";var r=t("5ced"),a=t.n(r);a.a}});
//# sourceMappingURL=app.f9d9d810.js.map