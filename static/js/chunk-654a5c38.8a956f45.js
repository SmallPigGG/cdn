(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-654a5c38"],{"0aa2":function(t,e,a){},"4adf":function(t,e,a){var n=a("b667"),s=/"/g;t.exports=function(t,e,a,o){var r=String(n(t)),c="<"+e;return""!==a&&(c+=" "+a+'="'+String(o).replace(s,"&quot;")+'"'),c+">"+r+"</"+e+">"}},"87af":function(t,e,a){var n=a("ae56");t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},"8a30":function(t,e,a){"use strict";var n=a("c194"),s=a("4adf"),o=a("87af");n({target:"String",proto:!0,forced:o("link")},{link:function(t){return s(this,"a","href",t)}})},"96d0":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"box"},[a("div",{staticClass:"logoBox"},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/c0deCn/wiki@master/logo.png"},on:{click:t.onLogoClick}})]),a("h1",[a("span",[t._v(t._s(t.tokenName)+" - "+t._s(t.symbol))])]),a("div",{staticClass:"h2Box"},[a("h2",[a("svg-icon",{attrs:{"icon-class":"code"}}),t._v("Contract : "),a("span",{staticClass:"contract"},[t._v(t._s(t._f("autoAddress")(t.contract)))]),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.contract,expression:"contract",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"copy",attrs:{type:"text"}},[a("svg-icon",{attrs:{"icon-class":"copy"}})],1)],1),t.isLp?a("span",{staticClass:"lpInfo"},[t._v("LP total value = "+t._s(t.token1.symbol)+": "+t._s(t.totalLockLp1)+" - "+t._s(t.token2.symbol)+": "+t._s(t.totalLockLp2))]):t._e()]),a("div",{staticClass:"baseInfo"},[a("ul",[a("li",{staticClass:"textLeft"},[a("span",{staticClass:"label"},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"chart"}}),t._v("Token Supply:")],1),a("span",{staticClass:"value"},[t._v(t._s(t._f("toThousandFilter")(t.tokenInfo.totalSupply)))])]),a("li",{staticClass:"textRight"},[a("span",{staticClass:"label"},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"link"}}),t._v("Lock Link:")],1),a("span",{staticClass:"value"},[a("a",{attrs:{href:t.link,_target:"blank"}},[t._v("Explorer")])])]),a("li",{staticClass:"textLeft"},[a("span",{staticClass:"label"},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"amount"}}),t._v("All lock amount:")],1),a("span",{staticClass:"value"},[t._v(t._s(t._f("toThousandFilter")(t.totalLockAmount.toFixed(4))))])]),a("li",{staticClass:"textRight"},[a("span",{staticClass:"label"},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"percentage"}}),t._v("All Percentage:")],1),a("span",{staticClass:"value"},[t._v(t._s(t.totalLockPercentage)+"%")])])])]),0===t.list.length?a("div",{staticClass:"tips"},[t._v("This Token / LP has no locked data")]):t._e(),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingList,expression:"loadingList"}],staticClass:"table"},t._l(t.list,(function(e,n){return a("ul",{key:n},[a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("lockInfo.lockAmount")))]),a("span",{staticClass:"value"},[t._v(t._s(t._f("toThousandFilter")(e.lock)))])]),t.isLp?a("li",[a("span",{staticClass:"label"},[t._v("Lock Token(LP)")]),a("span",{staticClass:"value"},[t._v(t._s(t.token1.symbol)+":"+t._s(e.token1)+" - "+t._s(t.token2.symbol)+":"+t._s(e.token2))])]):t._e(),a("li",[a("span",{staticClass:"label"},[t._v("init Amount")]),a("span",{staticClass:"value"},[t._v(t._s(t._f("toThousandFilter")(e.initialAmount)))])]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("lockInfo.lockDate")))]),a("span",{staticClass:"value"},[t._v(t._s(t.$moment(1e3*e.lockDate).format("YYYY-MM-DD HH:MM")))])]),a("li",[a("span",{staticClass:"label"},[t._v("Unlock Date")]),a("span",{staticClass:"value"},[t._v(t._s(t.$moment(1e3*e.UnlockDate).format("YYYY-MM-DD HH:MM")))])]),a("li",[a("span",{staticClass:"label"},[t._v("Owner")]),a("span",{staticClass:"value"},[t._v(" "+t._s(t._f("autoAddress")(e.owner))+" "),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.owner,expression:"item.owner",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"copy",attrs:{type:"text"}},[a("svg-icon",{attrs:{"icon-class":"copy"}})],1)],1)]),a("li",[a("span",{staticClass:"label"},[t._v("Percentage")]),a("span",{staticClass:"value"},[t._v(t._s(e.Percentage)+"%")])]),e.status?a("li",{staticClass:"statusBox"},[a("div",{staticClass:"lockBox"},[a("svg-icon",{attrs:{"icon-class":"lock"}})],1)]):t._e()])})),0),a("div",{staticClass:"btnBox"},[a("el-button",{staticClass:"item-btn",attrs:{round:"",size:"large",icon:"el-icon-lock",type:"primary"},on:{click:t.onToLock}},[t._v(" To Lock ")]),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.window.location.href,expression:"window.location.href",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onShare,expression:"onShare",arg:"success"}],staticClass:"item-btn",attrs:{round:"",size:"large",type:"primary",icon:"el-icon-share"}},[t._v(" Share ")])],1)])])},s=[],o=a("4833"),r=a("efe2"),c=(a("6a61"),a("7479"),a("4a32"),a("8a30"),a("37de"),a("1e34"),a("05d6"),a("9bdd"),a("52c1")),i={zh:{lockInfo:{lockAmount:"Lock Amount",lockDate:"Lock Date",lockAddress:"Lock Address"}},en:{lockInfo:{lockAmount:"Lock Amount",lockDate:"Lock Date",lockAddress:"Lock Address"}}},l=a("3d65"),u=a("8feb"),p=a.n(u),d=a("b893"),k=a("a835"),m=a("7742"),h=a.n(m),g="lockInfo",x={name:g,inject:["onCopySuccess"],components:{DaBox:l["a"]},data:function(){return{window:window,loadingList:!1,NODE_ENV:"",totalLockAmount:0,totalLockPercentage:0,totalLockLp1:0,totalLockLp2:0,link:"",contract:"0x11111111111111111",tokenName:"",symbol:"CT",rpc_node:"",token1Lp:0,token2Lp:0,chainId:1,token1:[],token2:[],pairAddress:"",tokenInfo:[],isLp:!1,list:[]}},computed:Object(r["a"])({},Object(c["b"])(["isConnect","account","isPc"])),created:function(){this.$i18n.getLocaleMessage("en")[g]||(this.$i18n.mergeLocaleMessage("en",i.en),this.$i18n.mergeLocaleMessage("zh",i.zh)),this.NODE_ENV="production"},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n,s,o,r,c,i,l,u,d,m,h,g,x;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loadingList=!0,a=t.$route.query,n=a.c,s=a.a,t.contract=s,t.rpc_node=k["a"].rpcNode(parseInt(n)),o=k["a"].resolveLinkOnEtherscan(parseInt(n)),t.chainId=parseInt(n),t.pairAddress=s,e.next=9,t.getTokenInfo(s);case 9:if(r=e.sent,t.tokenInfo=r,-1===r.symbol.indexOf("-LP")&&-1===r.symbol.indexOf("-V2")){e.next=35;break}return t.tokenName="Liquidity LP",t.isLp=!0,e.next=16,t.getPairToken(t.pairAddress);case 16:return c=e.sent,e.next=19,t.getTokenInfo(c.token1);case 19:return i=e.sent,e.next=22,t.getTokenInfo(c.token2);case 22:return l=e.sent,t.token1=i,t.token2=l,t.symbol=i.symbol+"/"+l.symbol,e.next=28,t.geLockData(t.pairAddress,"0x0902f1ac");case 28:u=e.sent,d=p.a.abi.decodeParams(["uint112","uint112","uint32"],u),t.token1Lp=parseInt("0x"+d[0].toString(16))/Math.pow(10,i.decimal),t.token2Lp=parseInt("0x"+d[1].toString(16))/Math.pow(10,l.decimal),console.log(d),e.next=37;break;case 35:t.tokenName="Token",t.symbol=r.symbol;case 37:return m=k["a"].resolveLockAddress(parseInt(n)),t.link=o+"/token/"+s+"?a="+m,e.next=41,t.geLockData(m,"0xd98dcfa8000000000000000000000000"+s.replace("0x",""));case 41:h=e.sent,g=p.a.abi.decodeParams(["address[]"],h),e.t0=regeneratorRuntime.keys(g[0]);case 44:if((e.t1=e.t0()).done){e.next=50;break}return x=e.t1.value,e.next=48,t.onBatchCheck(g[0][x]);case 48:e.next=44;break;case 50:t.totalLockPercentage=(t.totalLockAmount/r.totalSupply*100).toFixed(4),t.isLp&&(t.totalLockLp1=(t.token1Lp*(t.totalLockPercentage/100)).toFixed(4),t.totalLockLp2=(t.token2Lp*(t.totalLockPercentage/100)).toFixed(4)),t.loadingList=!1;case 53:case"end":return e.stop()}}),e)})))()},methods:{onToLock:function(){var t=this.$router.resolve({name:"BsccreateToken",query:{tab:2}});window.open(t.href,"_blank")},onShare:function(t){this.$message.success("The current page has been copied successfully")},onBatchCheck:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,s,o,r,c,i,l,u,d,m,g,x,v;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=k["a"].resolveLockAddress(e.chainId),s=e.tokenInfo.symbol,-1===s.indexOf("-LP")&&-1===s.indexOf("-V2")){a.next=12;break}return o="0x"+h.a.methodID("getUserLockForToken",["address","address"]).toString("hex")+h.a.rawEncode(["address","address"],[t,e.pairAddress]).toString("hex"),a.next=6,e.geLockData(n,o);case 6:r=a.sent,c=p.a.abi.decodeParams(["uint256","uint256","uint256","uint256","address"],r),i=(parseInt("0x"+c[1].toString(16))/Math.pow(10,18)/e.tokenInfo.totalSupply*100).toFixed(5),parseInt("0x"+c[1].toString(16))/Math.pow(10,18)>0&&(e.totalLockAmount+=parseInt("0x"+c[1].toString(16))/Math.pow(10,18),l="",l=!((new Date).getTime()/1e3>parseInt("0x"+c[3].toString(16))),e.list.unshift({status:l,lp:!0,token1:(e.token1Lp*(i/100)).toFixed(4),token2:(e.token2Lp*(i/100)).toFixed(4),Percentage:i,initialAmount:parseInt("0x"+c[2].toString(16))/Math.pow(10,18),owner:c[4].toString(16),decimals:18,lockDate:parseInt("0x"+c[0].toString(16)),UnlockDate:parseInt("0x"+c[3].toString(16)),lock:(parseInt("0x"+c[1].toString(16))/Math.pow(10,18)).toFixed(4)})),a.next=20;break;case 12:return u="0x"+h.a.methodID("getUserLockForToken",["address","address"]).toString("hex")+h.a.rawEncode(["address","address"],[t,e.pairAddress]).toString("hex"),a.next=15,e.geLockData(n,u);case 15:d=a.sent,m=p.a.abi.decodeParams(["uint256","uint256","uint256","uint256","address"],d),g=e.tokenInfo.decimal,x=(parseInt("0x"+m[1].toString(16))/Math.pow(10,parseInt(g))/e.tokenInfo.totalSupply*100).toFixed(5),parseInt("0x"+m[1].toString(16))/Math.pow(10,parseInt(g))>0&&(e.totalLockAmount+=parseInt("0x"+m[1].toString(16))/Math.pow(10,parseInt(g)),v="",v=!((new Date).getTime()/1e3>parseInt("0x"+m[3].toString(16))),e.list.unshift({status:v,lp:!1,Percentage:x,initialAmount:parseInt("0x"+m[2].toString(16))/Math.pow(10,parseInt(g)),owner:m[4].toString(16),symbol:s,decimals:parseInt(g),lockDate:parseInt("0x"+m[0].toString(16)),UnlockDate:parseInt("0x"+m[3].toString(16)),lock:(parseInt("0x"+m[1].toString(16))/Math.pow(10,parseInt(g))).toFixed(4)}));case 20:case"end":return a.stop()}}),a)})))()},geLockData:function(t,e){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,a.$ajax({url:a.rpc_node,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{from:"0x0000000000000000000000000000000000000000",to:t,data:e},"latest"]}});case 2:return s=n.sent,n.abrupt("return",s.result);case 4:case"end":return n.stop()}}),n)})))()},getPairToken:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$ajax({url:e.rpc_node,method:"post",data:[{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x0dfe1681"},"latest"]},{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0xd21220a7"},"latest"]}]});case 2:return n=a.sent,a.abrupt("return",{token1:n[0].result.replace("000000000000000000000000",""),token2:n[1].result.replace("000000000000000000000000","")});case 4:case"end":return a.stop()}}),a)})))()},getTokenInfo:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$ajax({url:e.rpc_node,method:"post",data:[{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x95d89b41"},"latest"]},{jsonrpc:"2.0",id:2,method:"eth_call",params:[{to:t,data:"0x313ce567"},"latest"]},{jsonrpc:"2.0",id:3,method:"eth_call",params:[{to:t,data:"0x18160ddd"},"latest"]}]});case 2:return n=a.sent,a.abrupt("return",{symbol:d["a"].cleanAsciiText(p.a.toAscii(n[0].result).toString()),decimal:parseInt(n[1].result),totalSupply:parseInt(n[2].result)/Math.pow(10,parseInt(n[1].result))});case 4:case"end":return a.stop()}}),a)})))()},onLogoClick:function(){var t=this.$router.resolve({name:"Dashboard"});window.open(t.href,"_blank")}}},v=x,f=(a("b1f4"),a("5d22")),b=Object(f["a"])(v,n,s,!1,null,"104e7e1b",null);e["default"]=b.exports},b1f4:function(t,e,a){"use strict";a("0aa2")},b893:function(t,e,a){"use strict";var n=a("1222"),s=a("a3b6"),o=a("55ae"),r=(a("a9b5"),a("37de"),a("22f9"),a("7479"),a("4a32"),a("65f0"),a("476c"),a("63f1"),a("1e34"),a("96e6"),function(){function t(){Object(n["a"])(this,t),Object(o["a"])(this,"chars",["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]),Object(o["a"])(this,"crypt",(function(t,e){var a=function(t){return t.split("").map((function(t){return t.charCodeAt(0)}))},n=function(t){return("0"+Number(t).toString(16)).substr(-2)},s=function(e){return a(t).reduce((function(t,e){return t^e}),e)};return e.split("").map(a).map(s).map(n).join("")})),Object(o["a"])(this,"decrypt",(function(t,e){var a=function(t){return t.split("").map((function(t){return t.charCodeAt(0)}))},n=function(e){return a(t).reduce((function(t,e){return t^e}),e)};return e.match(/.{1,2}/g).map((function(t){return parseInt(t,16)})).map(n).map((function(t){return String.fromCharCode(t)})).join("")}))}return Object(s["a"])(t,[{key:"guid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,a="x"===t?e:3&e|8;return a.toString(16)}))}},{key:"generateMixed",value:function(t){for(var e="",a=0;a<t;a++){var n=Math.ceil(61*Math.random());e+=this.chars[n]}return Math.random().toString(36).substr(0)+e+Math.random().toString(36).substr(0)+(new Date).getTime()+Math.random().toString(36).substr(0)}},{key:"numAdd",value:function(t,e){var a,n,s;try{a=t.toString().split(".")[1].length}catch(o){a=0}try{n=e.toString().split(".")[1].length}catch(o){n=0}return s=Math.pow(10,Math.max(a,n)),(this.numMul(t,s)+this.numMul(e,s))/s}},{key:"numSub",value:function(t,e){var a,n,s;try{a=t.toString().split(".")[1].length}catch(o){a=0}try{n=e.toString().split(".")[1].length}catch(o){n=0}return s=Math.pow(10,Math.max(a,n)),(this.numMul(t,s)-this.numMul(e,s))/s}},{key:"numMul",value:function(t,e){var a=0,n=t.toString(),s=e.toString();try{a+=n.split(".")[1].length}catch(o){}try{a+=s.split(".")[1].length}catch(o){}return Number(n.replace(".",""))*Number(s.replace(".",""))/Math.pow(10,a)}},{key:"cleanAsciiText",value:function(t){if(t)return t.replace(/[\x00-\x09\x0b-\x1F]/g,"").trim()}},{key:"numDiv",value:function(t,e){var a,n,s=0,o=0;try{s=t.toString().split(".")[1].length}catch(r){}try{o=e.toString().split(".")[1].length}catch(r){}return a=Number(t.toString().replace(".","")),n=Number(e.toString().replace(".","")),this.numMul(a/n,Math.pow(10,o-s))}}]),t}()),c=new r;e["a"]=c}}]);