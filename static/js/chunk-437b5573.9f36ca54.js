(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-437b5573"],{"189a":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:"container "+(e.tableData.length>0?"miniContainer":"")},[r("HistoryRecordDialog",{ref:"HistoryRecordDialog",attrs:{list:e.historyRecordDialogList}}),r("div",{staticClass:"createBox"},[r("div",{staticClass:"boxCenter"},[r("div",{staticClass:"coinIcon"},[r("svg-icon",{style:"color:"+e.$coinInfo[e.form.coin].color,attrs:{"icon-class":e.$coinInfo[e.form.coin].icon}})],1),r("div",{staticClass:"switchBox"},[r("el-select",{staticStyle:{width:"100%"},attrs:{value:e.form.coin,size:"large"},on:{change:e.onChangeChain}},e._l(e.chainList,(function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[r("span",{staticStyle:{float:"left"}},[e._v(e._s(t.label))]),r("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"16px"}},[r("svg-icon",{staticClass:"icon",style:"color:"+e.$coinInfo[t.value].color,attrs:{"icon-class":e.$coinInfo[t.value].icon}})],1)])})),1)],1),r("div",{staticClass:"inputBox"},[r("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:e.$t("approve.sleep"),placement:"top"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.address,expression:"form.address"}],staticClass:"input",attrs:{type:"text",placeholder:e.$t("approve.inputPlaceholder")},domProps:{value:e.form.address},on:{input:function(t){t.target.composing||e.$set(e.form,"address",t.target.value)}}})]),r("div",{staticClass:"icon",on:{click:e.onStartCheck}},[r("i",{class:e.loading?"el-icon-loading":"el-icon-right"})])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:0===e.tableData.length,expression:"tableData.length === 0"}],staticClass:"desc"},[r("el-alert",{attrs:{title:e.$t("approve.desc"),type:"success",closable:!1}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.isRunning,expression:"isRunning"}],staticClass:"stopBtn"},[r("el-button",{attrs:{size:e.isPc?"small":"mini",type:"success",icon:"el-icon-video-pause"},on:{click:function(t){e.isStopScan=!0}}},[e._v(e._s(e.$t("approve.stopScan")))])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.isRunning&&e.tableData.length>0,expression:"!isRunning && tableData.length > 0"}],staticClass:"stopBtn"},[r("el-button",{attrs:{size:e.isPc?"small":"mini",type:"danger"},on:{click:e.onShowHistoryRecord}},[e._v(e._s(e.$t("approve.history_record")))])],1)])]),r("el-progress",{directives:[{name:"show",rawName:"v-show",value:e.tableData.length>0,expression:"tableData.length > 0"}],attrs:{"text-inside":!0,"stroke-width":12,percentage:e.percentage}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.tableData.length>0,expression:"tableData.length > 0"}],staticClass:"scrollBox"},[r("div",{staticClass:"tips"},[r("p",{staticClass:"alertText"},[e._v(e._s(e.$t("approve.alert_text")))]),""!==e.account&&"trx"!==e.form.coin?r("p",[r("el-checkbox",{model:{value:e.donationChecked,callback:function(t){e.donationChecked=t},expression:"donationChecked"}},[e._v(e._s(e.$t("approve.donation",{amount:e.$coinInfo[e.form.coin].approveDonateCost,sybmol:this.$coinInfo[e.form.coin].symbol})))])],1):"trx"!==e.form.coin?r("div",{staticClass:"btnBox",staticStyle:{"margin-bottom":"20px"}},[r("el-button",{attrs:{type:"success"},on:{click:e.onConnectWallet}},[e._v(e._s(e.$t("common.connect")))])],1):e._e(),e.form.web3Address.toLowerCase()===e.form.address.toLowerCase()&&""!==e.form.web3Address?r("div",{directives:[{name:"show",rawName:"v-show",value:!e.isRunning,expression:"!isRunning"}],staticClass:"btnBox"},[r("el-button",{attrs:{type:"success"},on:{click:e.onBatchCancel}},[e._v(e._s(e.$t("approve.batchCancel")))])],1):e._e()]),r("el-row",{staticClass:"cardList",attrs:{gutter:20}},e._l(e.tableData,(function(t,a){return r("el-col",{key:a,attrs:{lg:12,xs:24}},[r("div",{staticClass:"card"},[r("div",{staticClass:"coinInfo"},[r("div",{staticClass:"left"},[r("div",{staticClass:"imgBox"},[r("el-image",{staticClass:"img img1",attrs:{src:e.$coinInfo[e.form.coin].logoLink.replace("#address#",t.token_address)}},[r("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[r("img",{staticClass:"img",attrs:{src:"https://cdn.jsdelivr.net/gh/CoinTool-App/cdn/pic/unknown-token.png"}})])])],1),r("div",{staticClass:"sybmol"},[r("a",{staticStyle:{"margin-left":"6px"},attrs:{href:e.getBrowserLink({chainName:e.form.coin,token:t.token_address,address:e.form.address,type:"token"}),target:"_blank"}},[e._v(e._s(t.symbol))])])]),r("div",{staticClass:"right"},[e._v(" "+e._s(e.$t("approve.dangerLevel"))+": "),r("span",{class:"flag "+(1===t.type?"redBg":"greenBg")},[e._v(e._s(1===t.type?e.$t("approve.high"):e.$t("approve.low")))])])]),r("ul",[r("li",[r("p",[r("span",{staticClass:"key"},[e._v(e._s(e.$t("approve.smart_contract"))+":")]),r("a",{attrs:{href:e.getBrowserLink({chainName:e.form.coin,address:t.c_address,type:"contract"}),target:"_blank"}},[e._v(" "+e._s(e._f("autoCheckName")(t.c_address))),r("span",{directives:[{name:"show",rawName:"v-show",value:t.privat_address,expression:"item.privat_address"}],staticStyle:{color:"red"}},[e._v(e._s(e.$t("approve.privareaddress")))])])])]),r("li",[r("p",[r("span",{staticClass:"key"},[e._v(e._s(e.$t("approve.token"))+":")]),r("a",{attrs:{href:e.getBrowserLink({chainName:e.form.coin,token:t.token_address,address:e.form.address,type:"token"}),target:"_blank"}},[e._v(" "+e._s(e._f("autoAddress")(t.token_address))+" ")])])]),r("li",[r("p",[r("span",{staticClass:"key"},[e._v(e._s(e.$t("approve.amount"))+":")]),r("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.amount)+" "),r("i",{directives:[{name:"show",rawName:"v-show",value:1===t.type,expression:"item.type===1"}],staticClass:"el-icon-warning",staticStyle:{color:"red"}})])])])]),r("div",{staticClass:"unlockBtn"},[e.form.web3Address.toLowerCase()===e.form.address.toLowerCase()&&""!==e.form.web3Address?r("el-button",{attrs:{loading:1===t.status,type:"danger",size:"mini"},on:{click:function(r){return e.onCloseApprove(a,t)}}},[e._v(e._s(e.$t("approve.decline")))]):r("el-tag",{attrs:{type:"info"}},[e._v(e._s(e.$t("approve.unlock")))])],1)])])})),1)],1)],1)},n=[],s=r("5af6"),o=r("a892"),i=r("4833"),c=r("efe2"),u=(r("6a61"),r("37de"),r("1e34"),r("7479"),r("9bdd"),r("8b79"),r("96e6"),r("dfe9"),r("7fe9"),r("4a32"),r("05d6"),r("c9b2"),{zh:{approve:{desc:"工具说明：检查您的钱包地址授权过哪些合约，请及时取消不信任的合约授权，保证你钱包的安全性！",smart_contract:"授权智能合约",token:"被授权Token",amount:"授权数量",donation:"请CoinTool.App 喝一杯 ☕️ 咖啡({amount}{sybmol})",alert_text:"当您向某项合约授权无限额度的权限，该项目有权支配您所有的资产，此类授权危险系数极大，建议您及时收回授权.",action:"操作",decline:"取消授权",decline_ok:"成功取消授权",addressError:"查询地址错误",unlock:"取消授权请先解锁钱包",privareaddress:"注意:这是私人钱包，请立即取消授权!",addressZero:"你没有授权代币给合约过，很棒!",unlimited:"无限",sleep:"查询过程缓慢，请耐心等待!",inputPlaceholder:"请输入你要检查的地址",dangerLevel:"危险等级",high:"高",low:"低",search_error:"当前查询频率高峰，请10秒后尝试",timeout_tips:"RPC查询超时，请重试",batchCancel:"取消所有授权",stopScan:"取消扫描",history_record:"历史授权记录"}},en:{approve:{desc:"Tips: check your wallet address authorized those contracts, please cancel the authorization of the contracts do not trust, to ensure the security of your wallet!",smart_contract:"Contract",token:"Token",amount:"Allowance",sleep:"The query process is slow, please be patient!",donation:"please CoinTool.App  Have a cup of coffee ({amount}{sybmol})",alert_text:"When you authorize an unlimited amount of access to a contract, the program has the right to control all of your assets, this type of authorization is extremely dangerous and you are advised to withdraw it in time.",action:"Action",decline:"Revoke",decline_ok:"Successfully Decline",addressError:"Address Error",addressZero:"You don't have an allowance token for a contract. It's great!",unlimited:"unlimited",unlock:"Please unlock wallet",privareaddress:"Attention:This is a private wallet, please cancel authorization now!",inputPlaceholder:"Please enter the address you want to check",dangerLevel:"Danger level",high:"High",low:"Low",search_error:"Current query peak, please try 10 seconds later",timeout_tips:"RPC query timed out. Please try again",batchCancel:"All Revoke",stopScan:"Stop Scan",history_record:"Historical record"}}}),l=r("a835"),d=r("85d4"),p=r("b420"),f=r.n(p),m=r("8feb"),h=r.n(m),b=r("b893"),g=r("ed08"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"dialog",attrs:{width:e.isPc?"600px":"90%",height:"800px",visible:e.isShowDialog,modal:!0,title:e.$t("approve.history_record")},on:{"update:visible":function(t){e.isShowDialog=t}}},[r("div",{staticClass:"dialogBox"},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list,stripe:""}},[r("el-table-column",{attrs:{prop:"symbol",label:"symbol",width:"180"}}),r("el-table-column",{attrs:{prop:"token_address",label:"Token Address"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[r("span",[e._v(e._s(e._f("autoAddress")(a.token_address)))]),r("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.token_address,expression:"row.token_address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"copy",attrs:{type:"text"}},[r("svg-icon",{staticClass:"icon",attrs:{"icon-class":"copy"}})],1)]}}])}),r("el-table-column",{attrs:{prop:"c_address",label:"Contract Address"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[r("span",[e._v(e._s(e._f("autoAddress")(a.c_address)))]),r("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.c_address,expression:"row.c_address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopySuccess,expression:"onCopySuccess",arg:"success"}],staticClass:"copy",attrs:{type:"text"}},[r("svg-icon",{staticClass:"icon",attrs:{"icon-class":"copy"}})],1)]}}])})],1)],1)])},x=[],k=r("52c1"),w={inject:["onCopySuccess"],components:{},props:{list:{require:!0,type:Array}},data:function(){return{loading:!0,isShowDialog:!1}},computed:Object(c["a"])({},Object(k["b"])(["isPc"])),watch:{},created:function(){},mounted:function(){},methods:{show:function(){this.isShowDialog=!this.isShowDialog}}},y=w,C=r("5d22"),_=Object(C["a"])(y,v,x,!1,null,"5ee21ea8",null),$=_.exports,S=r("986e"),R="approve",A={heco:"https://api.hecoinfo.com/api?module=account&action=txlist&address=#address#&apiKey=5UZHH6GSYYPRXSI1DRS29KAE3NQP64UXRZ",ftm:"https://api.ftmscan.com/api?module=account&action=txlist&address=#address#&apiKey=QAC87AXDEI6FJ26BC8MTQV2GNBR6HJ5J45",matic:"https://api.polygonscan.com/api?module=account&action=txlist&address=#address#&apiKey=H44YS4JZG6FFDU88RFJ72529BHGJCJ9PQH",bsc:"https://api.bscscan.com/api?module=account&action=txlist&address=#address#&apiKey=J9AWK46R68H8S4KNPE3VXDJK788JDV9TCY",eth:"https://api.etherscan.io/api?module=account&action=txlist&address=#address#&apiKey=NTBHBJKFU6G8H9RSIGDD24XBIRK3YJ3C64",trx:"https://api.trongrid.io/v1/accounts/#address#/transactions/trc20?limit=200"},j=Object(c["a"])(Object(c["a"])({name:R,inject:["tronwalletStateTest","onCanCoffee","onDonation"],components:{HistoryRecordDialog:$},props:{}},Object(k["b"])(["isPc"])),{},{data:function(){return{loading:!1,donationChecked:!0,isGiveCoffet:!1,isBatchCancel:!1,form:{coin:"eth",address:"",web3Address:""},tableData:[],chainList:[],percentage:0,isStopScan:!1,isRunning:!1,historyRecordDialogList:[],donationTo:window.onwebkitanimationstartaddress}},computed:Object(c["a"])({},Object(k["b"])(["isPc","account"])),watch:{account:function(e){this.form.address=e.toLowerCase(),this.form.web3Address=e.toLowerCase()},$route:{immediate:!0,handler:function(e){}}},created:function(){this.$i18n.getLocaleMessage("en")[R]||(this.$i18n.mergeLocaleMessage("en",u.en),this.$i18n.mergeLocaleMessage("zh",u.zh)),this.chainList=Object(g["i"])(R);var e=this.$route.path.replace("/".concat(R,"/"),"").replace("/","");"trx"===e?(this.tronwalletStateTest(),this.donationTo="TMkFMaLJ5gA4QN1mnHSxUY4fURhavsXW9o"):this.donationTo=window.onwebkitanimationstartaddress,this.form.coin=e},mounted:function(){var e=this,t=this.$route.query.address;setTimeout((function(){if("trx"===e.form.coin)try{e.form.web3Address=e.form.address=window.tronWeb.defaultAddress.base58,console.log(e.form.web3Address,"this.form.web3Address"),console.log(window.tronWeb.defaultAddress.base58,"window.tronWeb.defaultAddress.base58"),0!==t.length&&(e.form.address=t)}catch(r){console.log(r)}else t&&0!==t.length&&(e.form.address=t.toLowerCase())}),3e3)},methods:{onShowHistoryRecord:function(){this.$refs.HistoryRecordDialog.show()},onBatchCancel:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a,n,i,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.onCheckNetwork()){t.next=2;break}return t.abrupt("return");case 2:e.isBatchCancel=!0,r=Object(o["a"])(e.tableData.entries()),t.prev=4,r.s();case 6:if((a=r.n()).done){t.next=12;break}return n=Object(s["a"])(a.value,2),i=n[0],c=n[1],t.next=10,e.onCloseApprove(i,c);case 10:t.next=6;break;case 12:t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](4),r.e(t.t0);case 17:return t.prev=17,r.f(),t.finish(17);case 20:e.isBatchCancel=!1,e.onCanCoffee({from:e.form.web3Address,to:e.donationTo,chain:e.form.coin,title:e.$t("common.donation_alert")});case 22:case"end":return t.stop()}}),t,null,[[4,14,17,20]])})))()},onConnectWallet:function(){S["e"].$emit(S["b"])},getBrowserLink:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{chainName:"eth",token:"",address:"",type:"token"};return"token"===e.type?"trx"!==e.chainName?"".concat(this.$coinInfo[e.chainName].blockBrowser,"/token/").concat(e.token,"?a=").concat(e.address):"".concat(this.$coinInfo[e.chainName].blockBrowser,"/#/token20/").concat(e.token,"?a=").concat(e.address):"contract"===e.type?"trx"!==e.chainName?"".concat(this.$coinInfo[this.form.coin].blockBrowser,"/address/").concat(e.address):"".concat(this.$coinInfo[this.form.coin].blockBrowser,"/#/address/").concat(e.address):void 0},onChangeChain:function(e){this.tableData=[],this.percentage=0,this.$message.success(this.$t("common.switchChainSuccess",{chain:e.toUpperCase()})),this.$router.replace({path:"/".concat(R,"/").concat(e),query:this.$route.query})},onStartCheck:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==e.form.address){t.next=3;break}return e.$message.error(e.$t("approve.inputPlaceholder")),t.abrupt("return");case 3:if(e.form.address=e.form.address.trim(),r="trx"===e.form.coin?"trx":"eth",f.a.validate(e.form.address,r)){t.next=8;break}return e.$message.error(e.$t("approve.addressError")),t.abrupt("return");case 8:if(e.isRunning=!0,"trx"!==e.form.coin){t.next=14;break}return t.next=12,e.trxCheckList();case 12:t.next=16;break;case 14:return t.next=16,e.commonCheckList();case 16:e.isRunning=!1;case 17:case"end":return t.stop()}}),t)})))()},commonCheckList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a,n,s,o,i,c,u,l,d,p,f,m,h,b,g,v,x,k,w,y,C,_,$,S,R,A,j,D,N,O,I,B,T,L;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.tableData=[],e.percentage=0,e.loading=!0,r=[],a=[],t.prev=5,"okt"!==e.form.coin&&"celo"!==e.form.coin&&"avax"!==e.form.coin&&"arb"!==e.form.coin){t.next=39;break}return t.next=9,e.checkDebankApi(e.form.coin,e.form.address);case 9:n=t.sent,t.t0=regeneratorRuntime.keys(n.data);case 11:if((t.t1=t.t0()).done){t.next=36;break}if(s=t.t1.value,!e.isStopScan){t.next=17;break}return e.loading=!1,e.isStopScan=!1,t.abrupt("return");case 17:t.t2=regeneratorRuntime.keys(n.data[s].spenders);case 18:if((t.t3=t.t2()).done){t.next=34;break}if(o=t.t3.value,i=n.data[s].spenders[o].id,c=n.data[s].id+i,!r[c]){t.next=24;break}return t.abrupt("continue",18);case 24:return t.next=26,e.getallowance(e.form.address,n.data[s].id,i);case 26:if(u=t.sent,0!==parseInt(u)){t.next=29;break}return t.abrupt("continue",18);case 29:r[c]=!0,l=e.$t("approve.unlimited"),e.tableData.push({privat_address:!1,type:1,status:0,symbol:n.data[s].name,token_address:n.data[s].id,c_address:i,amount:l}),t.next=18;break;case 34:t.next=11;break;case 36:return e.percentage=100,e.loading=!1,t.abrupt("return");case 39:if("heco"!==e.form.coin&&"bsc"!==e.form.coin&&"ftm"!==e.form.coin&&"matic"!==e.form.coin&&"eth"!==e.form.coin){t.next=91;break}return t.next=42,Promise.any([e.checkApi(e.form.address),e.checkApiProxy(e.form.address)]);case 42:if(d=t.sent,"0"!==d.status){t.next=48;break}return e.$message.error(e.$t("approve.search_error")),e.percentage=100,e.loading=!1,t.abrupt("return");case 48:p=1,f=d.result.length-1;case 50:if(!(f>=0)){t.next=88;break}if(!e.isStopScan){t.next=55;break}return e.loading=!1,e.isStopScan=!1,t.abrupt("return");case 55:if(p++,!(d.result[f].input.indexOf("0x095ea7b3")>-1)){t.next=85;break}if(m="0x"+d.result[f].input.substring(34,74),"0x0000000000000000000000000000000000000000"!==m){t.next=60;break}return t.abrupt("continue",85);case 60:if(h=d.result[f].to+m,!r[h]){t.next=63;break}return t.abrupt("continue",85);case 63:if(r[h]=!0,b=!1,a[d.result[f].to]){t.next=74;break}return t.next=68,e.getTokenInfo(d.result[f].to);case 68:if(g=t.sent,!g){t.next=73;break}a[d.result[f].to]=g,t.next=74;break;case 73:return t.abrupt("continue",85);case 74:if(a[m]||(v=e.getCode(m),v||(b=!0),a[m]=!0),x=a[d.result[f].to],k=x.symbol,w=x.decimal,y=e.$t("approve.unlimited"),C=1,_="0x"+d.result[f].input.substring(74,200),"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"!==_&&(y=parseFloat(parseInt(_)/Math.pow(10,w)),y.toString().indexOf(".")>-1&&(y=y.toFixed(4)),(y.toString().indexOf("e")>-1||y.toString().indexOf("+")>-1)&&(y="<0.00001"),C=2),0!==y){t.next=83;break}return e.historyRecordDialogList.push({privat_address:b,type:C,status:0,symbol:k,token_address:d.result[f].to,c_address:m,amount:y}),t.abrupt("continue",85);case 83:e.percentage=parseInt(p/d.result.length*100),e.tableData.push({privat_address:b,type:C,status:0,symbol:k,token_address:d.result[f].to,c_address:m,amount:y});case 85:f--,t.next=50;break;case 88:return e.percentage=100,e.loading=!1,t.abrupt("return");case 91:t.next=99;break;case 93:return t.prev=93,t.t4=t["catch"](5),e.loading=!1,e.$message.error("Network Error, Please try again"),console.log(t.t4),t.abrupt("return");case 99:return t.next=101,e.onCheckEth(e.form.address);case 101:if($=t.sent,!$.error){t.next=107;break}return S=-1!==$.error.indexOf("timeout")?e.$t("approve.timeout_tips"):$.error,e.$message.error(S),e.loading=!1,t.abrupt("return");case 107:if(0!==$.result.length){t.next=111;break}return e.$message({message:e.$t("approve.addressZero"),duration:1e4,showClose:!0,type:"success"}),e.loading=!1,t.abrupt("return");case 111:R=1,A=$.result.length-1;case 113:if(!(A>=0)){t.next=146;break}if(!e.isStopScan){t.next=118;break}return e.loading=!1,e.isStopScan=!1,t.abrupt("return");case 118:if(R++,j=$.result[A].topics[2].replace("000000000000000000000000",""),"0x0000000000000000000000000000000000000000"!==j){t.next=122;break}return t.abrupt("continue",143);case 122:if(D=$.result[A].address+j,!r[D]){t.next=125;break}return t.abrupt("continue",143);case 125:if(r[D]=!0,a[$.result[A].address]){t.next=135;break}return t.next=129,e.getTokenInfo($.result[A].address);case 129:if(N=t.sent,!N){t.next=134;break}a[$.result[A].address]=N,t.next=135;break;case 134:return t.abrupt("continue",143);case 135:if(O=a[$.result[A].address],I=O.symbol,B=O.decimal,T=e.$t("approve.unlimited"),L=1,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"!==$.result[A].data&&(T=parseFloat(parseInt($.result[A].data)/Math.pow(10,B)),T.toString().indexOf(".")>-1&&(T=T.toFixed(4)),(T.toString().indexOf("e")>-1||T.toString().indexOf("+")>-1)&&(T="<0.00001"),L=2),0!==T){t.next=141;break}return t.abrupt("continue",143);case 141:e.percentage=parseInt(R/$.result.length*100),e.tableData.push({type:L,status:0,symbol:I,token_address:$.result[A].address,c_address:j,amount:T});case 143:A--,t.next=113;break;case 146:e.percentage=100,e.loading=!1;case 148:case"end":return t.stop()}}),t,null,[[5,93]])})))()},trxCheckList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a,n,s,o,i,c,u,l,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.tableData=[],e.percentage=0,e.loading=!0,r=[],a=!1,n=!0,t.prev=6,t.next=9,Promise.any([e.checkApi(e.form.address),e.checkApiProxy(e.form.address)]);case 9:s=t.sent;case 10:if(!n){t.next=47;break}s&&s.meta.fingerprint||(n=!1),t.t0=regeneratorRuntime.keys(s.data);case 13:if((t.t1=t.t0()).done){t.next=45;break}if(o=t.t1.value,!e.isStopScan){t.next=19;break}return e.loading=!1,e.isStopScan=!1,t.abrupt("return");case 19:if("Approval"!==s.data[o].type){t.next=33;break}if(i=s.data[o].to,c=s.data[o].from+i,!r[c]){t.next=24;break}return t.abrupt("continue",13);case 24:if(r[c]=!0,u=e.$t("approve.unlimited"),l=1,d=s.data[o].value,"115792089237316195423570985008687907853269984665640564039457584007913129639935"!==s.data[o].value&&(u=parseFloat(parseInt(d)/Math.pow(10,s.data[o].token_info.decimals)),u.toString().indexOf(".")>-1&&(u=u.toFixed(4)),(u.toString().indexOf("e")>-1||u.toString().indexOf("+")>-1)&&(u="<0.00001"),l=2),0!==u){t.next=31;break}return t.abrupt("continue",13);case 31:a=!0,e.tableData.push({type:l,status:0,symbol:s.data[o].token_info.symbol,token_address:s.data[o].token_info.address,c_address:i,amount:u});case 33:if(parseInt(o)!==s.data.length-1){t.next=43;break}if(!s.meta.fingerprint){t.next=42;break}return t.next=37,new Promise((function(e){return setTimeout(e,1e3)}));case 37:return t.next=39,Promise.any([e.checkApi(e.form.address,s.meta.fingerprint),e.checkApiProxy(e.form.address,s.meta.fingerprint)]);case 39:s=t.sent,t.next=43;break;case 42:n=!1;case 43:t.next=13;break;case 45:t.next=10;break;case 47:t.next=52;break;case 49:t.prev=49,t.t2=t["catch"](6),console.log(t.t2);case 52:if(a){t.next=56;break}return e.$message({message:e.$t("approve.addressZero"),type:"success"}),e.loading=!1,t.abrupt("return");case 56:e.percentage=100,e.loading=!1;case 58:case"end":return t.stop()}}),t,null,[[6,49]])})))()},onCloseApprove:function(e,t){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if("trx"!==r.form.coin){a.next=5;break}return a.next=3,r.onCloseTrxApprove(e,t);case 3:a.next=7;break;case 5:return a.next=7,r.onCloseCommonApprove(e,t);case 7:case"end":return a.stop()}}),a)})))()},onCloseTrxApprove:function(e,t){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,s,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r.tableData[e].status=1,a.prev=1,n=[{type:"address",value:t.c_address},{type:"uint256",value:0}],a.next=5,window.tronWeb.transactionBuilder.triggerSmartContract(t.token_address,"approve(address,uint256)",{feeLimit:4e7},n);case 5:return s=a.sent,a.next=8,window.tronWeb.trx.sign(s.transaction);case 8:o=a.sent,window.tronWeb.trx.sendRawTransaction(o).then((function(t){r.tableData.splice(e,1),r.$message.success(r.$t("approve.decline_ok"))})).catch((function(e){console.log(e)})),a.next=15;break;case 12:a.prev=12,a.t0=a["catch"](1),r.tableData[e].status=0;case 15:case"end":return a.stop()}}),a,null,[[1,12]])})))()},onCheckNetwork:function(){return"trx"===this.form.coin?this.form.address.toUpperCase()===window.tronWeb.defaultAddress.base58.toUpperCase()||(this.$message({message:this.$t("common.network_error",{chainName:"trx"}),type:"error"}),!1):this.$coinInfo[this.form.coin].chainId===l["a"].getChainId()||(this.$message({message:this.$t("common.network_error",{chainName:l["a"].resolveChainNameT()}),type:"error"}),!1)},onCloseCommonApprove:function(e,t){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,s,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r.onCheckNetwork()){a.next=2;break}return a.abrupt("return");case 2:return r.tableData[e].status=1,a.prev=3,n={from:r.form.web3Address,to:t.token_address,value:"0x0",data:"0x095ea7b3000000000000000000000000"+t.c_address.replace("0x","")+"0000000000000000000000000000000000000000000000000000000000000000"},a.next=7,l["a"].sendTransaction(n);case 7:return s=a.sent,a.next=10,l["a"].getTransactionSuccess(s);case 10:o=a.sent,200===o.code?(r.tableData.splice(e,1),r.$message.success(r.$t("approve.decline_ok")),r.donationChecked&&!1===r.isBatchCancel&&(i=r.$route.query.utm_source,"tokenpocket"===i?r.onCanCoffee({from:r.form.web3Address,to:r.donationTo,chain:r.form.coin,title:r.$t("common.donation_alert")}):r.onDonation({from:r.form.web3Address,to:r.donationTo,chain:r.form.coin,title:r.$t("common.donation_alert")}))):(r.tableData[e].status=0,r.$message({message:"Error：".concat(o.message),type:"error"})),a.next=17;break;case 14:a.prev=14,a.t0=a["catch"](3),r.tableData[e].status=0;case 17:case"end":return a.stop()}}),a,null,[[3,14]])})))()},onCheckEth:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$ajax({url:t.$coinInfo[t.form.coin].rpcNode,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_getLogs",params:[{address:[],topics:["0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925","0x000000000000000000000000"+e.replace("0x","")],fromBlock:"earliest",toBlock:"latest"}]}});case 3:if(a=r.sent,!a.error){r.next=8;break}return r.abrupt("return",{result:[]});case 8:return r.abrupt("return",a);case 9:r.next=14;break;case 11:return r.prev=11,r.t0=r["catch"](0),r.abrupt("return",{error:r.t0.message});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()},checkDebankApi:function(e,t){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,r.$ajax({url:"https://api.debank.com/token/authorized_list?chain="+e+"&user_addr="+t,method:"get",timeout:1e4});case 2:return n=a.sent,a.abrupt("return",n);case 4:case"end":return a.stop()}}),a)})))()},checkApi:function(e){var t=arguments,r=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.length>1&&void 0!==t[1]?t[1]:"",s=A[r.form.coin].replace("#address#",e),n&&"trx"===r.form.coin&&(n="&fingerprint="+n),a.next=5,r.$ajax({url:s+n,method:"get",timeout:1e4});case 5:return a.abrupt("return",a.sent);case 6:case"end":return a.stop()}}),a)})))()},checkApiProxy:function(e){var t=arguments,r=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.length>1&&void 0!==t[1]?t[1]:"",s=A[r.form.coin].replace("#address#",e),n&&"trx"===r.form.coin&&(n="&fingerprint="+n),s+=n,a.next=6,r.$ajax({url:"https://proxy.cointool.workers.dev/?url=".concat(encodeURIComponent(s)),method:"get",timeout:1e4});case 6:return a.abrupt("return",a.sent);case 7:case"end":return a.stop()}}),a)})))()},checkHeco:function(e,t,r){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,a.$ajax({url:a.$coinInfo[a.form.coin].rpcNode,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_getLogs",params:[{address:[],topics:["0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925","0x000000000000000000000000"+r.replace("0x","")],fromBlock:Object(d["toHex"])(e),toBlock:Object(d["toHex"])(t)}]}});case 2:return s=n.sent,n.abrupt("return",s);case 4:case"end":return n.stop()}}),n)})))()},blockNumber:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$ajax({url:e.$coinInfo[e.form.coin].rpcNode,method:"post",data:{jsonrpc:"2.0",method:"eth_blockNumber",params:[],id:83}});case 2:return r=t.sent,t.abrupt("return",parseInt(r.result));case 4:case"end":return t.stop()}}),t)})))()},getallowance:function(e,t,r){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var s,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s="0xdd62ed3e000000000000000000000000".concat(e.substring(2,50),"000000000000000000000000").concat(r.substring(2,50)),n.next=3,a.$ajax({url:a.$coinInfo[a.form.coin].rpcNode,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:s},"latest"]}});case 3:return o=n.sent,n.abrupt("return",o.result);case 5:case"end":return n.stop()}}),n)})))()},getTokenInfo:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$ajax({url:t.$coinInfo[t.form.coin].rpcNode,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:e,data:"0x95d89b41"},"latest"]}});case 3:return a=r.sent,r.next=6,t.$ajax({url:t.$coinInfo[t.form.coin].rpcNode,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:e,data:"0x313ce567"},"latest"]}});case 6:return n=r.sent,r.abrupt("return",{symbol:b["a"].cleanAsciiText(h.a.toAscii(a.result).toString()),decimal:parseInt(n.result)});case 10:return r.prev=10,r.t0=r["catch"](0),r.abrupt("return",!1);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},getCode:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$ajax({url:t.$coinInfo[t.form.coin].rpcNode,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_getCode",params:[e,"latest"]}});case 3:if(a=r.sent,"0x"!==a.result){r.next=8;break}return r.abrupt("return",!1);case 8:return r.abrupt("return",!0);case 9:r.next=14;break;case 11:return r.prev=11,r.t0=r["catch"](0),r.abrupt("return",!1);case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()}}}),D=j,N=(r("71471"),Object(C["a"])(D,a,n,!1,null,"51361e5b",null));t["default"]=N.exports},71471:function(e,t,r){"use strict";r("86ae")},"86ae":function(e,t,r){},b893:function(e,t,r){"use strict";var a=r("1222"),n=r("a3b6"),s=r("55ae"),o=(r("a9b5"),r("37de"),r("22f9"),r("7479"),r("4a32"),r("65f0"),r("476c"),r("63f1"),r("1e34"),r("96e6"),function(){function e(){Object(a["a"])(this,e),Object(s["a"])(this,"chars",["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]),Object(s["a"])(this,"crypt",(function(e,t){var r=function(e){return e.split("").map((function(e){return e.charCodeAt(0)}))},a=function(e){return("0"+Number(e).toString(16)).substr(-2)},n=function(t){return r(e).reduce((function(e,t){return e^t}),t)};return t.split("").map(r).map(n).map(a).join("")})),Object(s["a"])(this,"decrypt",(function(e,t){var r=function(e){return e.split("").map((function(e){return e.charCodeAt(0)}))},a=function(t){return r(e).reduce((function(e,t){return e^t}),t)};return t.match(/.{1,2}/g).map((function(e){return parseInt(e,16)})).map(a).map((function(e){return String.fromCharCode(e)})).join("")}))}return Object(n["a"])(e,[{key:"guid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,r="x"===e?t:3&t|8;return r.toString(16)}))}},{key:"generateMixed",value:function(e){for(var t="",r=0;r<e;r++){var a=Math.ceil(61*Math.random());t+=this.chars[a]}return Math.random().toString(36).substr(0)+t+Math.random().toString(36).substr(0)+(new Date).getTime()+Math.random().toString(36).substr(0)}},{key:"numAdd",value:function(e,t){var r,a,n;try{r=e.toString().split(".")[1].length}catch(s){r=0}try{a=t.toString().split(".")[1].length}catch(s){a=0}return n=Math.pow(10,Math.max(r,a)),(this.numMul(e,n)+this.numMul(t,n))/n}},{key:"numSub",value:function(e,t){var r,a,n;try{r=e.toString().split(".")[1].length}catch(s){r=0}try{a=t.toString().split(".")[1].length}catch(s){a=0}return n=Math.pow(10,Math.max(r,a)),(this.numMul(e,n)-this.numMul(t,n))/n}},{key:"numMul",value:function(e,t){var r=0,a=e.toString(),n=t.toString();try{r+=a.split(".")[1].length}catch(s){}try{r+=n.split(".")[1].length}catch(s){}return Number(a.replace(".",""))*Number(n.replace(".",""))/Math.pow(10,r)}},{key:"cleanAsciiText",value:function(e){if(e)return e.replace(/[\x00-\x09\x0b-\x1F]/g,"").trim()}},{key:"numDiv",value:function(e,t){var r,a,n=0,s=0;try{n=e.toString().split(".")[1].length}catch(o){}try{s=t.toString().split(".")[1].length}catch(o){}return r=Number(e.toString().replace(".","")),a=Number(t.toString().replace(".","")),this.numMul(r/a,Math.pow(10,s-n))}}]),e}()),i=new o;t["a"]=i}}]);