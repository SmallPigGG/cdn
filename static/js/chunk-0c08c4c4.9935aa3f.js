(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c08c4c4"],{"153f":function(e,t,n){var r=n("27b5");r(Math,"Math",!0)},"5ed4":function(e,t,n){"use strict";n("aedb")},"6c6a":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"box-card",staticStyle:{"margin-top":"40px"}},[n("iframe",{attrs:{id:"iframe-widget",src:"https://changenow.io/embeds/exchange-widget/v2/widget.html?amount=0.1&from=btc&link_id=3236decae62425&to=eth&FAQ=false&logo=false&locales=false&lang=",width:"100%",height:"350px",frameborder:"0"}})])],1)},a=[],o=(n("f3dd"),n("0a51"),n("9b11"),n("89d4"),n("b4fb"),n("dbb3"),n("fe59"),n("ecb4"),n("2eeb"),n("77ad"),n("7ac1"),n("153f"),n("b73f"),n("bf84b"),n("fe8a"),n("e18c"),n("e35a"),n("1c2e"),n("96db"),n("9cf3"),n("0d7a"),n("6db4"),n("08ba"),n("af86"),n("3e83")),c={name:"Swap",data:function(){return{loading:!0}},created:function(){},mounted:function(){var e=this,t=document.querySelector("#iframe-widget");t.attachEvent?t.attachEvent("onload",(function(){console.log("已加载完毕"),e.loading=!1})):t.onload=function(){e.loading=!1,console.log("已加载完毕")}}};!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===Object(o["a"])(e)&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!==typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){var r=n(2),a=n(3),o=n(4);e.exports=function(e,t){return r(e)||a(e,t)||o()}},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t,n){n.r(t);var r=n(1),a=n.n(r),o=n(0),c=n.n(o);function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";return decodeURI(e).split(t).map((function(e){return e.trim().toLowerCase()}))}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var u=function(e){var t={};return e.slice(e.indexOf("?")+1,e.length).split("&").forEach((function(e){var n=e.split("="),r=c()(n,2),a=r[0],o=r[1],l=escape(o);if(""!==l&&"undefined"!==l)switch(a){case"amount":t.valueFrom=l;break;case"from":t.currencyFrom=l;break;case"to":t.currencyTo=l;break;case"FAQ":t.FAQ="true"===l;break;case"logo":t.logo="true"===l;break;case"address":t.recipientAddress=l;break;case"link_id":t.linkId=l;break;case"lang":t.lang=l;break;case"userid":t.userId="true"===l;break;case"currencies_from":t.availableFromCurrencies=i(o);break;case"currencies_to":t.availableToCurrencies=i(o);break;case"locales":t.locales="false"!==l}})),t},s=document.getElementById("iframe-widget");null===s&&console.error("EXCHANGE WIDGET: iframe-widget not found");var d=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},u(s?s.src:""),{},u(window.location.search)),f=d.valueFrom,b=d.currencyFrom,p=d.currencyTo,m=d.FAQ,g=d.logo,v=d.recipientAddress,h=d.linkId,w=d.userId,y=d.availableFromCurrencies,O=d.availableToCurrencies,x=d.lang,j=d.locales,k=escape(h||"");s&&(s.src="".concat("https://changenow.io/embeds/exchange-widget/v2/widget.html","?amount=").concat(f,"&from=").concat(b,"&link_id=").concat(k,"&to=").concat(p,"&FAQ=").concat(m,"&logo=").concat(g,"&userid=").concat(w,"&address=").concat(v||"","&currencies_from=").concat(y,"&currencies_to=").concat(O,"&lang=").concat(x,"&locales=").concat(j)),window.addEventListener("message",(function(e){if("Close modal"===e.data.messageText&&document.querySelector(".wrapper-iframe").remove(),"Open modal"===e.data.messageText){var t=e.data.dataQuery,n=document.createElement("iframe"),r=document.createElement("div");r.className="wrapper-iframe",r.style.cssText="\n      position: fixed;\n      top: 0;\n      height: 100vh;\n      width: 100vw;\n      z-index: 2147483647;\n    ",window.document.body.appendChild(r),r.appendChild(n);var a=escape(t.linkId?t.linkId:"");n.src="".concat("https://changenow.io/embeds/exchange-widget/v2/stepper.html","?amount=").concat(t.valueFrom,"&from=").concat(t.currencyFrom,"&to=").concat(t.currencyTo,"&FAQ=").concat(t.FAQ,"&userid=").concat(w,"&rate=").concat(t.rate,"&logo=").concat(t.logo,"&address=").concat(t.recipientAddress,"&link_id=").concat(a,"&currencies_from=").concat(t.availableFromCurrencies,"&currencies_to=").concat(t.availableToCurrencies,"&lang=").concat(t.lang,"&locales=").concat(t.locales),n.id="iframe-stepper",n.width="100%",n.height="100%",n.frameBorder="0"}}),!1)}]);var i=c,l=(n("5ed4"),n("5d22")),u=Object(l["a"])(i,r,a,!1,null,"6f6069ef",null);t["default"]=u.exports},"7ac1":function(e,t,n){var r=n("d890"),a=n("27b5");a(r.JSON,"JSON",!0)},"89d4":function(e,t,n){var r=n("6d51");r("toStringTag")},"9cf3":function(e,t,n){"use strict";var r=n("b2a2"),a=n("857c"),o=n("2732"),c=n("9d5c"),i=n("59da");r("search",1,(function(e,t,n){return[function(t){var n=o(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var o=a(e),l=String(this),u=o.lastIndex;c(u,0)||(o.lastIndex=0);var s=i(o,l);return c(o.lastIndex,u)||(o.lastIndex=u),null===s?-1:s.index}]}))},"9d5c":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},aedb:function(e,t,n){}}]);