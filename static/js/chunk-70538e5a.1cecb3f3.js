(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70538e5a"],{"4adf":function(t,e,a){var n=a("b667"),s=/"/g;t.exports=function(t,e,a,o){var r=String(n(t)),c="<"+e;return""!==a&&(c+=" "+a+'="'+String(o).replace(s,"&quot;")+'"'),c+">"+r+"</"+e+">"}},"4e51":function(t,e,a){"use strict";a("d1d2a")},"87af":function(t,e,a){var n=a("ae56");t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},"8a30":function(t,e,a){"use strict";var n=a("c194"),s=a("4adf"),o=a("87af");n({target:"String",proto:!0,forced:o("link")},{link:function(t){return s(this,"a","href",t)}})},"96d0":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"box"},[a("h1",[a("span",[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":t.isLp?"lp":"token"}}),t._v(t._s(t.symbol))],1)]),a("div",{staticClass:"certified"},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"certified"}}),a("span",[t._v("CoinTool.App Certified Locker")])],1),a("div",{staticClass:"h2Box"},[t.isLp?a("p",{staticClass:"lpInfo"},[t._v("LP total value = "+t._s(t.token1.symbol)+": "+t._s(t.totalLockLp1)+" - "+t._s(t.token2.symbol)+": "+t._s(t.totalLockLp2))]):t._e(),a("h2",[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"code"}}),t._v(t._s(t.isLp?"Liquidity Lp":"Token")+" : "),a("span",{staticClass:"contract"},[t._v(t._s(t._f("autoAddress")(t.contract)))]),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.contract,expression:"contract",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"copy",attrs:{type:"text"}},[a("svg-icon",{attrs:{"icon-class":"copy"}})],1)],1)]),a("div",{staticClass:"baseInfo"},[a("ul",[a("li",{staticClass:"textLeft"},[a("span",{staticClass:"label"},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"chart"}}),t._v("Token Supply:")],1),a("span",{staticClass:"value"},[t._v(t._s(t._f("toThousandFilter")(t.tokenInfo.totalSupply)))])]),a("li",{staticClass:"textRight"},[a("span",{staticClass:"label"},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"link"}}),t._v("Lock Link:")],1),a("span",{staticClass:"value"},[a("a",{attrs:{href:t.link,_target:"blank"}},[t._v("Explorer")])])]),a("li",{staticClass:"textLeft"},[a("span",{staticClass:"label"},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"amount"}}),t._v("All lock amount:")],1),a("span",{staticClass:"value"},[t._v(t._s(t._f("toThousandFilter")(t.totalLockAmount.toFixed(4))))])]),a("li",{staticClass:"textRight"},[a("span",{staticClass:"label"},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"percentage"}}),t._v("All Percentage:")],1),a("span",{staticClass:"value"},[t._v(t._s(t.totalLockPercentage)+"%")])])])]),0===t.list.length?a("div",{staticClass:"tips"},[t._v("This Token / LP has no locked data")]):t._e(),t.list.length>0?a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingList,expression:"loadingList"}],staticClass:"table"},t._l(t.list,(function(e,n){return a("ul",{key:n},[a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("lockInfo.lockAmount")))]),a("span",{staticClass:"value"},[t._v(t._s(t._f("toThousandFilter")(e.lock)))])]),t.isLp?a("li",[a("span",{staticClass:"label"},[t._v("Lock Token(LP)")]),a("span",{staticClass:"value"},[t._v(t._s(t.token1.symbol)+":"+t._s(e.token1)+" - "+t._s(t.token2.symbol)+":"+t._s(e.token2))])]):t._e(),a("li",[a("span",{staticClass:"label"},[t._v("init Amount")]),a("span",{staticClass:"value"},[t._v(t._s(t._f("toThousandFilter")(e.initialAmount)))])]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("lockInfo.lockDate")))]),a("span",{staticClass:"value"},[t._v(t._s(t.$moment(1e3*e.lockDate).format("YYYY-MM-DD HH:mm")))])]),a("li",[a("span",{staticClass:"label"},[t._v("Unlock Date")]),a("span",{directives:[{name:"show",rawName:"v-show",value:"0x0000000000000000000000000000000000000000"!==e.owner,expression:"item.owner !=='0x0000000000000000000000000000000000000000'"}],staticClass:"value"},[t._v(t._s(t.$moment(1e3*e.UnlockDate).format("YYYY-MM-DD HH:mm")))]),a("span",{directives:[{name:"show",rawName:"v-show",value:"0x0000000000000000000000000000000000000000"===e.owner,expression:"item.owner ==='0x0000000000000000000000000000000000000000'"}],staticClass:"value"},[t._v("Permanently locked")])]),a("li",[a("span",{staticClass:"label"},[t._v("Owner")]),a("span",{staticClass:"value"},[t._v(" "+t._s(t._f("autoAddress")(e.owner))+" "),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.owner,expression:"item.owner",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"copy",attrs:{type:"text"}},[a("svg-icon",{attrs:{"icon-class":"copy"}})],1)],1)]),a("li",[a("span",{staticClass:"label"},[t._v("Percentage")]),a("span",{staticClass:"value"},[t._v(t._s(e.Percentage)+"%")])]),e.status||"0x0000000000000000000000000000000000000000"===e.owner?a("li",{staticClass:"statusBox"},[a("div",{staticClass:"lockBox"},[a("svg-icon",{attrs:{"icon-class":"lock"}})],1)]):t._e()])})),0):t._e(),a("div",{staticClass:"btnBox"},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"item-btn",attrs:{size:"large",icon:"el-icon-lock",type:"primary"},on:{click:t.onToLock}},[t._v(" To Lock ")]),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.window.location.href,expression:"window.location.href",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onShare,expression:"onShare",arg:"success"}],staticClass:"item-btn",attrs:{size:"large",type:"primary",icon:"el-icon-share"}},[t._v(" Share ")])],1)])])},s=[],o=a("4833"),r=a("efe2"),c=(a("6a61"),a("7479"),a("4a32"),a("dfe9"),a("8a30"),a("37de"),a("1e34"),a("05d6"),a("9bdd"),a("52c1")),i={zh:{lockInfo:{lockAmount:"Lock Amount",lockDate:"Lock Date",lockAddress:"Lock Address"}},en:{lockInfo:{lockAmount:"Lock Amount",lockDate:"Lock Date",lockAddress:"Lock Address"}}},l=a("8feb"),u=a.n(l),p=a("b893"),d=a("a835"),m=a("7742"),k=a.n(m),h="lockInfo",x={name:h,inject:["onCopySuccess"],components:{},data:function(){return{window:window,loadingList:!1,NODE_ENV:"",totalLockAmount:0,totalLockPercentage:0,totalLockLp1:0,totalLockLp2:0,link:"",contract:"",tokenName:"",symbol:"",rpc_node:"",token1Lp:0,token2Lp:0,chainId:1,token1:[],token2:[],pairAddress:"",tokenInfo:[],c_address:"",isLp:!1,list:[]}},computed:Object(r["a"])({},Object(c["b"])(["isConnect","account","isPc"])),created:function(){this.$i18n.getLocaleMessage("en")[h]||(this.$i18n.mergeLocaleMessage("en",i.en),this.$i18n.mergeLocaleMessage("zh",i.zh)),this.NODE_ENV="production"},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n,s,o,r,c,i,l,p,m,k,h,x,g;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loadingList=!0,a=t.$route.query,n=a.c,s=a.a,t.contract=s,t.rpc_node=d["a"].rpcNode(parseInt(n)),o=d["a"].resolveLinkOnEtherscan(parseInt(n)),t.chainId=parseInt(n),t.pairAddress=s,e.next=9,t.getTokenInfo(s);case 9:if(r=e.sent,t.tokenInfo=r,-1===r.symbol.indexOf("-LP")&&-1===r.symbol.indexOf("-V2")){e.next=34;break}return t.tokenName="Liquidity LP",t.isLp=!0,e.next=16,t.getPairToken(t.pairAddress);case 16:return c=e.sent,e.next=19,t.getTokenInfo(c.token1);case 19:return i=e.sent,e.next=22,t.getTokenInfo(c.token2);case 22:return l=e.sent,t.token1=i,t.token2=l,t.symbol=i.symbol+"/"+l.symbol,e.next=28,t.geLockData(t.pairAddress,"0x0902f1ac");case 28:p=e.sent,m=u.a.abi.decodeParams(["uint112","uint112","uint32"],p),t.token1Lp=parseInt("0x"+m[0].toString(16))/Math.pow(10,i.decimal),t.token2Lp=parseInt("0x"+m[1].toString(16))/Math.pow(10,l.decimal),e.next=36;break;case 34:t.tokenName="Token",t.symbol=r.name+"("+r.symbol+")";case 36:return document.title=t.symbol+" - "+t.tokenName+" Locker",k=d["a"].resolveLockAddress(parseInt(n)),t.c_address=k,"0xbfedf8fad99090cf7763e1be6a56fd07c9269562"===s.toLowerCase()&&(t.c_address="0xbd1d1295d2eeaaa22d94745e11d962f1b0a1b79a"),t.link=o+"/token/"+s+"?a="+t.c_address,e.next=43,t.geLockData(t.c_address,"0xd98dcfa8000000000000000000000000"+s.replace("0x",""));case 43:h=e.sent,x=u.a.abi.decodeParams(["address[]"],h),e.t0=regeneratorRuntime.keys(x[0]);case 46:if((e.t1=e.t0()).done){e.next=52;break}return g=e.t1.value,e.next=50,t.onBatchCheck(x[0][g]);case 50:e.next=46;break;case 52:t.totalLockPercentage=(t.totalLockAmount/r.totalSupply*100).toFixed(4),t.isLp&&(t.totalLockLp1=(t.token1Lp*(t.totalLockPercentage/100)).toFixed(4),t.totalLockLp2=(t.token2Lp*(t.totalLockPercentage/100)).toFixed(4)),t.loadingList=!1;case 55:case"end":return e.stop()}}),e)})))()},methods:{onToLock:function(){var t=this.$router.resolve({name:"bscCreateToken",query:{tab:2}});window.open(t.href,"_blank")},onShare:function(t){this.$message.success("The current page has been copied successfully")},onBatchCheck:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,s,o,r,c,i,l,p,d,m,h,x,g;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=e.c_address,s=e.tokenInfo.symbol,-1===s.indexOf("-LP")&&-1===s.indexOf("-V2")){a.next=12;break}return o="0x"+k.a.methodID("getUserLockForToken",["address","address"]).toString("hex")+k.a.rawEncode(["address","address"],[t,e.pairAddress]).toString("hex"),a.next=6,e.geLockData(n,o);case 6:r=a.sent,c=u.a.abi.decodeParams(["uint256","uint256","uint256","uint256","address"],r),i=(parseInt("0x"+c[1].toString(16))/Math.pow(10,18)/e.tokenInfo.totalSupply*100).toFixed(5),parseInt("0x"+c[1].toString(16))/Math.pow(10,18)>0&&(e.totalLockAmount+=parseInt("0x"+c[1].toString(16))/Math.pow(10,18),l="",l=!((new Date).getTime()/1e3>parseInt("0x"+c[3].toString(16))),e.list.unshift({status:l,lp:!0,token1:(e.token1Lp*(i/100)).toFixed(4),token2:(e.token2Lp*(i/100)).toFixed(4),Percentage:i,initialAmount:parseInt("0x"+c[2].toString(16))/Math.pow(10,18),owner:c[4].toString(16),decimals:18,lockDate:parseInt("0x"+c[0].toString(16)),UnlockDate:parseInt("0x"+c[3].toString(16)),lock:(parseInt("0x"+c[1].toString(16))/Math.pow(10,18)).toFixed(4)})),a.next=20;break;case 12:return p="0x"+k.a.methodID("getUserLockForToken",["address","address"]).toString("hex")+k.a.rawEncode(["address","address"],[t,e.pairAddress]).toString("hex"),a.next=15,e.geLockData(n,p);case 15:d=a.sent,m=u.a.abi.decodeParams(["uint256","uint256","uint256","uint256","address"],d),h=e.tokenInfo.decimal,x=(parseInt("0x"+m[1].toString(16))/Math.pow(10,parseInt(h))/e.tokenInfo.totalSupply*100).toFixed(5),parseInt("0x"+m[1].toString(16))/Math.pow(10,parseInt(h))>0&&(e.totalLockAmount+=parseInt("0x"+m[1].toString(16))/Math.pow(10,parseInt(h)),g="",g=!((new Date).getTime()/1e3>parseInt("0x"+m[3].toString(16))),e.list.unshift({status:g,lp:!1,Percentage:x,initialAmount:parseInt("0x"+m[2].toString(16))/Math.pow(10,parseInt(h)),owner:m[4].toString(16),symbol:s,decimals:parseInt(h),lockDate:parseInt("0x"+m[0].toString(16)),UnlockDate:parseInt("0x"+m[3].toString(16)),lock:(parseInt("0x"+m[1].toString(16))/Math.pow(10,parseInt(h))).toFixed(4)}));case 20:case"end":return a.stop()}}),a)})))()},geLockData:function(t,e){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,a.$ajax({url:a.rpc_node,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{from:"0x0000000000000000000000000000000000000000",to:t,data:e},"latest"]}});case 2:return s=n.sent,n.abrupt("return",s.result);case 4:case"end":return n.stop()}}),n)})))()},getPairToken:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$ajax({url:e.rpc_node,method:"post",data:[{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x0dfe1681"},"latest"]},{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0xd21220a7"},"latest"]}]});case 2:return n=a.sent,a.abrupt("return",{token1:n[0].result.replace("000000000000000000000000",""),token2:n[1].result.replace("000000000000000000000000","")});case 4:case"end":return a.stop()}}),a)})))()},getTokenInfo:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$ajax({url:e.rpc_node,method:"post",data:[{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x95d89b41"},"latest"]},{jsonrpc:"2.0",id:2,method:"eth_call",params:[{to:t,data:"0x18160ddd"},"latest"]},{jsonrpc:"2.0",id:3,method:"eth_call",params:[{to:t,data:"0x313ce567"},"latest"]},{jsonrpc:"2.0",id:4,method:"eth_call",params:[{to:t,data:"0x06fdde03"},"latest"]}]});case 2:return n=a.sent,s=parseInt(n[2].result),a.abrupt("return",{symbol:p["a"].cleanAsciiText(u.a.toAscii(n[0].result).toString()),totalSupply:parseInt(n[1].result)/Math.pow(10,s),decimal:s,name:p["a"].cleanAsciiText(u.a.toAscii(n[3].result).toString())});case 5:case"end":return a.stop()}}),a)})))()},onLogoClick:function(){var t=this.$router.resolve({name:"Dashboard"});window.open(t.href,"_blank")}}},g=x,v=(a("4e51"),a("5d22")),f=Object(v["a"])(g,n,s,!1,null,"2389e6fc",null);e["default"]=f.exports},b893:function(t,e,a){"use strict";var n=a("1222"),s=a("a3b6"),o=a("55ae"),r=(a("a9b5"),a("37de"),a("22f9"),a("7479"),a("4a32"),a("65f0"),a("476c"),a("63f1"),a("1e34"),a("96e6"),function(){function t(){Object(n["a"])(this,t),Object(o["a"])(this,"chars",["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]),Object(o["a"])(this,"crypt",(function(t,e){var a=function(t){return t.split("").map((function(t){return t.charCodeAt(0)}))},n=function(t){return("0"+Number(t).toString(16)).substr(-2)},s=function(e){return a(t).reduce((function(t,e){return t^e}),e)};return e.split("").map(a).map(s).map(n).join("")})),Object(o["a"])(this,"decrypt",(function(t,e){var a=function(t){return t.split("").map((function(t){return t.charCodeAt(0)}))},n=function(e){return a(t).reduce((function(t,e){return t^e}),e)};return e.match(/.{1,2}/g).map((function(t){return parseInt(t,16)})).map(n).map((function(t){return String.fromCharCode(t)})).join("")}))}return Object(s["a"])(t,[{key:"guid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,a="x"===t?e:3&e|8;return a.toString(16)}))}},{key:"generateMixed",value:function(t){for(var e="",a=0;a<t;a++){var n=Math.ceil(61*Math.random());e+=this.chars[n]}return Math.random().toString(36).substr(0)+e+Math.random().toString(36).substr(0)+(new Date).getTime()+Math.random().toString(36).substr(0)}},{key:"numAdd",value:function(t,e){var a,n,s;try{a=t.toString().split(".")[1].length}catch(o){a=0}try{n=e.toString().split(".")[1].length}catch(o){n=0}return s=Math.pow(10,Math.max(a,n)),(this.numMul(t,s)+this.numMul(e,s))/s}},{key:"numSub",value:function(t,e){var a,n,s;try{a=t.toString().split(".")[1].length}catch(o){a=0}try{n=e.toString().split(".")[1].length}catch(o){n=0}return s=Math.pow(10,Math.max(a,n)),(this.numMul(t,s)-this.numMul(e,s))/s}},{key:"numMul",value:function(t,e){var a=0,n=t.toString(),s=e.toString();try{a+=n.split(".")[1].length}catch(o){}try{a+=s.split(".")[1].length}catch(o){}return Number(n.replace(".",""))*Number(s.replace(".",""))/Math.pow(10,a)}},{key:"cleanAsciiText",value:function(t){if(t)return t.replace(/[\x00-\x09\x0b-\x1F]/g,"").trim()}},{key:"numDiv",value:function(t,e){var a,n,s=0,o=0;try{s=t.toString().split(".")[1].length}catch(r){}try{o=e.toString().split(".")[1].length}catch(r){}return a=Number(t.toString().replace(".","")),n=Number(e.toString().replace(".","")),this.numMul(a/n,Math.pow(10,o-s))}}]),t}()),c=new r;e["a"]=c},d1d2a:function(t,e,a){}}]);