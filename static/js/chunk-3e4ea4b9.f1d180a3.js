(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e4ea4b9"],{"5ce3":function(e,t,a){"use strict";a("6daa")},"62f6":function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));a("b4fb"),a("513c"),a("20a5");var n=function(e,t){var a=(100*(e/t-1)).toFixed(2);return Number(a)},i=function(e){if(e){var t=e>0?"+":"";return"".concat(t).concat(e.toFixed(2),"%")}}},"6daa":function(e,t,a){},a69a:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[e._m(0),a("div",{staticClass:"main"},[a("div",[a("ul",{staticClass:"timeRange"},e._l(e.timeRange,(function(t){return a("li",{key:t.value,class:{on:e.defaultTime.value===t.value},on:{click:function(a){return e.onChangeTimeRange(t)}}},[e._v(e._s(t.lable))])})),0)]),a("div",{staticClass:"coinInfo"},[e._v("BTC INfo ")]),a("div",{staticClass:"kline"},[a("line-chart",{attrs:{"chart-data":e.lineChartData}})],1),a("div",{staticClass:"ball"},[e._v(" ball ")]),e._m(1)])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sidebar"},[a("ul",{staticClass:"timeRange"},[a("li",[e._v("BTC/USDT")]),a("li",[e._v("ETH/USDT")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pjz"},[a("h5",[e._v("时间轴平均价")]),a("p",[e._v("table")])])}],o=(a("3e54"),a("e18c"),a("96db"),a("8256"),a("ab6e"),a("927c"),a("3c51"),a("db0a"),a("1cc1"),a("ab0f"),a("fc6e"),a("f30b"),a("cfd1"),a("d104"),a("f74a"),a("3598"),a("b497"),a("2909"),a("a7ef"),a("b523"),a("e671"),a("4140"),a("83db"),a("829d"),a("939f"),a("1bb1"),a("c3ba"),a("af86"),a("6a61"),a("2e91")),r=a("d211"),s=a("52c1"),l={zh:{demo:{}},en:{demo:{}}},c=a("caaf"),d=a.n(c),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.className,style:{height:e.height,width:e.width}})},h=[],m=(a("b4fb"),a("053b"),a("3fb0")),f=a("ed08"),b={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){var e=this;this.$_resizeHandler=Object(f["c"])((function(){e.chart&&e.chart.resize()}),100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(e){"width"===e.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}};a("cabf");var v="rgba(74, 177, 103, 1)",g="rgba(74, 177, 103, 1)",p="rgba(231, 53, 79, 1)",y="rgba(231, 53, 79, 1)",w={mixins:[b],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(e){this.initChart()}}},mounted:function(){},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=m["default"].init(this.$el),this.setOptions(this.chartData)},setOptions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.values,a=e.categoryData;this.chart.setOption({backgroundColor:"transparent",tooltip:{trigger:"axis",axisPointer:{type:"cross"},formatter:function(e){var t=e[0],a="\n              ".concat(t.name,"<br/>\n              开盘:").concat(t.data[1],"<br/>\n              收盘:").concat(t.data[2],"<br/>\n              最高:").concat(t.data[4],"<br/>\n              最低:").concat(t.data[3],"<br/>\n              ");return a}},legend:{textStyle:{color:"rgba(255,255,255,1)"},data:["MA5","MA10","MA20","MA30"]},grid:{left:"10%",right:"10%",bottom:"20%"},xAxis:{type:"category",data:a,scale:!0,boundaryGap:!1,axisLine:{onZero:!1,lineStyle:{color:"RGBA(33, 38, 54, 1)",width:2}},splitLine:{show:!1},splitNumber:20,min:"dataMin",max:"dataMax",axisLabel:{textStyle:{color:"rgba(177, 190, 226, 1)",fontSize:12},showMaxLabel:!0}},yAxis:{scale:!0,splitLine:{show:!0,lineStyle:{color:"RGBA(33, 38, 54, 1)"}},axisLine:{onZero:!1,lineStyle:{color:"rgba(107, 123, 171, 1)",width:2}},axisLabel:{textStyle:{color:"rgba(107, 123, 171, 1)",fontSize:12},showMaxLabel:!0,showMinLabel:!0},axisTick:{show:!0}},dataZoom:[{textStyle:{color:"#8392A5"},handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"80%",dataBackground:{areaStyle:{color:"#8392A5"},lineStyle:{opacity:.8,color:"#8392A5"}},handleStyle:{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2}},{type:"inside",start:50,end:100}],series:[{name:"日K",type:"candlestick",data:t,itemStyle:{color:v,color0:p,borderColor:g,borderColor0:y},markPoint:{label:{normal:{formatter:function(e){return null!=e?Math.round(e.value):""}}},data:[{name:"XX标点",coord:["2013/5/31",2300],value:2300,itemStyle:{color:"rgb(41,60,85)"}},{name:"highest value",type:"max",valueDim:"highest"},{name:"lowest value",type:"min",valueDim:"lowest"},{name:"average value on close",type:"average",valueDim:"close"}],tooltip:{formatter:function(e){return e.name+"<br>"+(e.data.coord||"")}}},markLine:{symbol:["none","none"],data:[[{name:"from lowest to highest",type:"min",valueDim:"lowest",symbol:"circle",symbolSize:10,label:{show:!1},emphasis:{label:{show:!1}}},{type:"max",valueDim:"highest",symbol:"circle",symbolSize:10,label:{show:!1},emphasis:{label:{show:!1}}}],{name:"min line on close",type:"min",valueDim:"close"},{name:"max line on close",type:"max",valueDim:"close"}]}}]})}}},_=w,M=a("5d22"),z=Object(M["a"])(_,u,h,!1,null,null,null),S=z.exports,$=(a("62f6"),a("a0b3")),D="band",x=null,C={name:"Band",inject:["onCheckConnect"],components:{LineChart:S},data:function(){return{timeRange:[{lable:"1 min",value:"1min",time:60},{lable:"5 min",value:"5min",time:300},{lable:"15 min",value:"15min",time:900},{lable:"30 min",value:"30min",time:1800},{lable:"1 hour",value:"1hour",time:3600},{lable:"2 hour",value:"2hour",time:7200},{lable:"4 hour",value:"4hour",time:14400},{lable:"12 hour",value:"12hour",time:43200},{lable:"1 day",value:"1day",time:86400},{lable:"1 week",value:"1week",time:604800}],defaultTime:{lable:"5 min",value:"5min",time:300},lineChartData:{},a:1}},computed:Object(r["a"])({},Object(s["b"])(["isConnect","account","isPc","language"])),created:function(){this.$i18n.getLocaleMessage("en")[D]||(this.$i18n.mergeLocaleMessage("en",l.en),this.$i18n.mergeLocaleMessage("zh",l.zh));var e=new Promise((function(e,t){setTimeout(e,500,"promise 1 resolved")})),t=new Promise((function(e,t){setTimeout(t,100,"promise 2 rejected")})),a=new Promise((function(e,t){setTimeout((function(){e("promise3")}),200)}));Object(o["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Promise.any([e,t,a]);case 3:i=n.sent,console.log(i),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},mounted:function(){this.lineChartData={categoryData:[1614009840,1614009900,1614009960,1614010020,1614010080,1614010140,1614010200,1614010260,1614010320,1614010380],values:[[53104.45,52875.74,52858.21,53104.45],[52875.75,53009.45,52761.19,53012.42],[53001.99,52975.47,52914.19,53176.47],[52973.7,52993.17,52934.69,53088.14],[52993.18,53022.57,52993.18,53141],[53022.57,53107.03,53003.26,53160.55],[53107.03,53274.19,53043.42,53356.17],[53266.99,53458.81,53249.4,53474.67],[53458.82,53514.08,53454.39,53533.65],[53514.09,53549.07,53405.77,53549.08]]},this.onConnectWebSocket()},deactivated:function(){x.close()},methods:{onChangeTimeRange:function(e){this.defaultTime=e},onConnectWebSocket:function(){var e=this,t="wss://api.hadax.com/ws";console.log(Math.round((new Date).getTime()/1e3),this.defaultTime.time),console.log(Math.round((new Date).getTime()/1e3)-this.defaultTime.time);var a={req:"market.btcusdt.kline.".concat(this.defaultTime.value),id:"btcusdt",from:Math.round((new Date).getTime()/1e3)-60*this.defaultTime.time,to:Math.round((new Date).getTime()/1e3)};"market.btcusdt.kline.".concat(this.defaultTime.value);function n(t){var a=JSON.parse(t);a.ping?i(a.ping):"ok"===a.status?(console.log(o(a)),e.lineChartData=o(a)):console.log(a,"数据体")}function i(e){x.send(JSON.stringify({pong:e}))}function o(t){for(var a={"1min":"hh:mm","5min":"hh:mm","15min":"hh:mm","30min":"MM-DD hh:mm","1hour":"MM-dd hh:mm","2hour":"MM-dd hh:mm","4hour":"MM-dd hh:mm","6hour":"MM-dd hh:mm","12hour":"MM-dd hh:mm","1day":"YYYY-MM-DD","3day":"YYYY-MM-DD","1week":"YYYY-MM-DD"},n=a[e.defaultTime.value],i=[],o=[],r=0;r<t.data.length;r++)i.push(d()(1e3*t.data[r].id).format(n)),o.push([t.data[r].open,t.data[r].close,t.data[r].low,t.data[r].high]);return{categoryData:i,values:o}}x=new WebSocket(t),x.onopen=function(){console.log("connection establish"),x.send(JSON.stringify(a))},x.onmessage=function(e){var t=e.data,a=new FileReader;a.onload=function(e){var t=new Uint8Array(e.target.result),a=$["a"].inflate(t,{to:"string"});n(a)},a.readAsArrayBuffer(t,"utf-8")},x.onclose=function(){console.log("connection closed")}}}},E=C,R=(a("5ce3"),Object(M["a"])(E,n,i,!1,null,"17e34bac",null));t["default"]=R.exports}}]);