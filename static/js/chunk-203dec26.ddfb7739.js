(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-203dec26"],{4779:function(e,t,a){"use strict";a("7502")},"4e2c":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{directives:[{name:"show",rawName:"v-show",value:e.list.length>0,expression:"list.length > 0"}],staticClass:"dealList"},e._l(e.list,(function(t,n){return a("li",{key:t.address},[a("div",{staticClass:"left"},[a("span",{staticClass:"index"},[e._v(e._s(n+1))]),a("a",{staticClass:"address",attrs:{target:"_blank",href:e.blockTxurl+"/tx/"+t.address}},[e._v(e._s(t.address))])]),a("div",{staticClass:"right"},[a("span",{staticClass:"status"},[0===t.status?a("i",{staticClass:"el-icon-loading"}):1===t.status?a("i",{staticClass:"el-icon-success"}):2===t.status?a("i",{staticClass:"el-icon-error",staticStyle:{color:"#F05252"}}):e._e()])])])})),0)},s=[],i={props:{list:{type:Array,required:!0},blockTxurl:{type:String,required:!0}},data:function(){return{}},created:function(){},mounted:function(){},methods:{}},r=i,o=(a("4779"),a("5d22")),l=Object(o["a"])(r,n,s,!1,null,"cfd1f11a",null);t["a"]=l.exports},"5a12":function(e,t,a){},7502:function(e,t,a){},b320:function(e,t,a){"use strict";a("5a12")},b51f:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},["zh"!==e.language&&"zh-CN"!==e.navigatorLanguage||"development"===e.$NODE_ENV?a("Card",{attrs:{icon:"coin-trx",title:e.$t("route.trxCreateToken"),desc:e.$t("trxCreateToken.pageDesc")}},[a("div",{staticClass:"flexCenter"},[a("el-form",{ref:"form",staticClass:"form",attrs:{"label-position":e.isPc?"left":"top",rules:e.rules,model:e.form,"label-width":"160px"}},[a("el-form-item",{attrs:{label:e.$t("trxCreateToken.tokenName"),prop:"tokenName"}},[a("el-input",{model:{value:e.form.tokenName,callback:function(t){e.$set(e.form,"tokenName",t)},expression:"form.tokenName"}})],1),a("el-form-item",{attrs:{label:e.$t("trxCreateToken.symbol"),prop:"symbol"}},[a("el-input",{model:{value:e.form.symbol,callback:function(t){e.$set(e.form,"symbol",t)},expression:"form.symbol"}})],1),a("el-form-item",{attrs:{label:e.$t("trxCreateToken.initialSupply"),prop:"initialSupply"}},[a("el-input-number",{staticClass:"inputNum",attrs:{min:1},model:{value:e.form.initialSupply,callback:function(t){e.$set(e.form,"initialSupply",t)},expression:"form.initialSupply"}})],1),a("el-form-item",{attrs:{label:e.$t("trxCreateToken.decimals"),prop:"decimals"}},[a("el-input-number",{staticClass:"inputNum",attrs:{min:1,max:18},model:{value:e.form.decimals,callback:function(t){e.$set(e.form,"decimals",t)},expression:"form.decimals"}})],1),a("el-form-item",{attrs:{label:e.$t("trxCreateToken.adminAddress"),prop:"adminAddress"}},[a("el-input",{model:{value:e.form.adminAddress,callback:function(t){e.$set(e.form,"adminAddress",t)},expression:"form.adminAddress"}})],1),a("el-form-item",{staticClass:"btnBox"},[a("el-button",{staticClass:"item-btn",attrs:{loading:e.loading,size:"medium",type:"primary"},on:{click:e.onCreatToken}},[e._v(" "+e._s(e.$t("trxCreateToken.createBtn"))+" ")])],1)],1),a("el-card",{directives:[{name:"show",rawName:"v-show",value:e.txList.length>0,expression:"txList.length > 0"}],staticClass:"box-card",staticStyle:{"margin-top":"40px"}},[a("DealList",{attrs:{list:e.txList,"block-txurl":e.blockTxurl}}),a("el-alert",{directives:[{name:"show",rawName:"v-show",value:e.tx_status,expression:"tx_status"}],staticClass:"tips",attrs:{title:e.$t("trxCreateToken.success"),type:"success",closable:!1}})],1)],1)]):a("div",{staticClass:"tips_err"},[a("p",[e._v("CoinTool不提供任何技术支持！")]),a("p",[e._v("已关闭创建代币功能，请勿用于违法活动!")])])],1)},s=[],i=a("4833"),r=a("efe2"),o=(a("6a61"),a("52c1")),l={zh:{trxCreateToken:{tokenName:"代币名称:",tokenNameValidate:"请输入代币名称",symbol:"缩写符号:",symbolValidate:"请输入缩写符号",initialSupply:"发行数量:",initialSupplyValidate:"请输入发行数量",decimals:"小数位数(1-18):",decimalsValidate:"请输入小数位数",config:"其他配置:",createBtn:"立即创建",success:"代币创建成功，请前往区块浏览器或钱包查看！",pageDesc:"简单、快速、便捷",adminAddress:"管理员地址",alert_text:"抱歉，TRC20 Token自动创建功能暂未开通，请前往首页联系我们，由我们代为您发布TRC20 Token"}},en:{trxCreateToken:{tokenName:"Token Name:",tokenNameValidate:"Please enter token name",symbol:"Symbol:",symbolValidate:"Please enter symbol",initialSupply:"Initial Supply:",initialSupplyValidate:"Please enter initial supply",decimals:"Decimals(1-18):",decimalsValidate:"Please enter decimals",adminAddress:"Admin Address",config:"Other Config:",createBtn:"Create Token",success:"Token created successfully, please go to the block browser or wallet to check!",pageDesc:"Simple, Fast, Convenient",alert_text:"Sorry, the automatic creation function of trc20 has not been activated yet. Please contact us on the home page and we will release the trc20 token for you"}}},d=a("4e2c"),c=a("12f9"),u="trxCreateToken",b={name:u,inject:["tronwalletStateTest"],components:{Card:c["a"],DealList:d["a"]},data:function(){return{txList:[],blockTxurl:"",c_address:"",tx_status:!1,loading:!1,rules:{},form:{tokenName:"",symbol:"",initialSupply:21e6,adminAddress:"",decimals:6}}},computed:Object(r["a"])({},Object(o["b"])(["isConnect","account","navigatorLanguage","language","isPc"])),created:function(){this.$i18n.getLocaleMessage("en")[u]||(this.$i18n.mergeLocaleMessage("en",l.en),this.$i18n.mergeLocaleMessage("zh",l.zh)),this.rules={tokenName:[{required:!0,message:this.$t("trxCreateToken.tokenNameValidate"),trigger:"blur"}],symbol:[{required:!0,message:this.$t("trxCreateToken.symbolValidate"),trigger:"blur"}],initialSupply:[{required:!0,message:this.$t("trxCreateToken.initialSupplyValidate"),trigger:"blur"}],decimals:[{required:!0,message:this.$t("trxCreateToken.decimalsValidate"),trigger:"blur"}]}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e,e.blockTxurl="https://tronscan.io/#/transaction/",setTimeout((function(){try{a.form.adminAddress=a.form.address=window.tronWeb.defaultAddress.base58}catch(e){console.log(e)}}),1500);case 3:case"end":return t.stop()}}),t)})))()},methods:{resetState:function(){this.blockHash=""},onCreatToken:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.tronwalletStateTest();case 2:if(t.sent){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,e.$refs["form"].validate();case 6:return t.next=8,window.tronWeb.transactionBuilder.createSmartContract({abi:JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"},{"name":"_decimals","type":"uint256"},{"name":"_totalSupply","type":"uint256"},{"name":"owner","type":"address"},{"name":"feeaddress","type":"address"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"}]'),bytecode:"608060405260405161098b38038061098b8339810160409081528151602080840151838501516060860151608087015160a0880151600a84900a83026003819055600160a060020a0383166000908152600488529889205595880180519098949094019692959194909391926100799290918901906100d4565b50845161008d9060019060208801906100d4565b506002849055604051600160a060020a038216903480156108fc02916000818181858888f193505050501580156100c8573d6000803e3d6000fd5b5050505050505061016f565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061011557805160ff1916838001178555610142565b82800160010185558215610142579182015b82811115610142578251825591602001919060010190610127565b5061014e929150610152565b5090565b61016c91905b8082111561014e5760008155600101610158565b90565b61080d8061017e6000396000f3006080604052600436106100955763ffffffff60e060020a60003504166306fdde03811461009a578063095ea7b31461013e57806318160ddd1461019057806323b872dd146101d1578063313ce5671461021557806342966c681461024457806370a082311461027657806379cc6790146102b157806395d89b41146102ef578063a9059cbb1461031e578063dd62ed3e1461035c575b600080fd5b3480156100a657600080fd5b50d380156100b357600080fd5b50d280156100c057600080fd5b506100c961039d565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101035781810151838201526020016100eb565b50505050905090810190601f1680156101305780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561014a57600080fd5b50d3801561015757600080fd5b50d2801561016457600080fd5b5061017c600160a060020a036004351660243561042b565b604080519115158252519081900360200190f35b34801561019c57600080fd5b50d380156101a957600080fd5b50d280156101b657600080fd5b506101bf610491565b60408051918252519081900360200190f35b3480156101dd57600080fd5b50d380156101ea57600080fd5b50d280156101f757600080fd5b5061017c600160a060020a0360043581169060243516604435610497565b34801561022157600080fd5b50d3801561022e57600080fd5b50d2801561023b57600080fd5b506101bf610506565b34801561025057600080fd5b50d3801561025d57600080fd5b50d2801561026a57600080fd5b5061017c60043561050c565b34801561028257600080fd5b50d3801561028f57600080fd5b50d2801561029c57600080fd5b506101bf600160a060020a0360043516610572565b3480156102bd57600080fd5b50d380156102ca57600080fd5b50d280156102d757600080fd5b5061017c600160a060020a0360043516602435610584565b3480156102fb57600080fd5b50d3801561030857600080fd5b50d2801561031557600080fd5b506100c9610643565b34801561032a57600080fd5b50d3801561033757600080fd5b50d2801561034457600080fd5b5061017c600160a060020a036004351660243561069d565b34801561036857600080fd5b50d3801561037557600080fd5b50d2801561038257600080fd5b506101bf600160a060020a03600435811690602435166106b3565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104235780601f106103f857610100808354040283529160200191610423565b820191906000526020600020905b81548152906001019060200180831161040657829003601f168201915b505050505081565b336000818152600560209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60035481565b600160a060020a03831660009081526005602090815260408083203384529091528120548211156104c757600080fd5b600160a060020a03841660009081526005602090815260408083203384529091529020805483900390556104fc8484846106d0565b5060019392505050565b60025481565b3360009081526004602052604081205482111561052857600080fd5b3360008181526004602090815260409182902080548690039055600380548690039055815185815291516000805160206107c28339815191529281900390910190a2506001919050565b60046020526000908152604090205481565b600160a060020a0382166000908152600460205260408120548211156105a957600080fd5b600160a060020a03831660009081526005602090815260408083203384529091529020548211156105d957600080fd5b600160a060020a0383166000818152600460209081526040808320805487900390556005825280832033845282529182902080548690039055600380548690039055815185815291516000805160206107c28339815191529281900390910190a250600192915050565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104235780601f106103f857610100808354040283529160200191610423565b60006106aa3384846106d0565b50600192915050565b600560209081526000928352604080842090915290825290205481565b600160a060020a0383166000908152600460205260408120548211156106f557600080fd5b600160a060020a038316600090815260046020526040902054828101101561071c57600080fd5b50600160a060020a038083166000818152600460209081526040808320805495891680855282852080548981039091559486905281548801909155815187815291519390950194927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a3600160a060020a038084166000908152600460205260408082205492871682529020540181146107bb57fe5b505050505600cc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5a165627a7a723058203cc460ef7ce243bc659b70d22026c5e7480996ac2bba337700261e0092fdcca90029",feeLimit:1e9,callValue:2e9,name:"CoinToken",userFeePercentage:1,originEnergyLimit:1e7,parameters:[e.form.tokenName,e.form.symbol,e.form.decimals,e.form.initialSupply,window.tronWeb.address.toHex(e.form.adminAddress),window.tronWeb.address.toHex("TK21BHkSvTrzSmgjQ933PPpnMybumy8Syn")]},window.tronWeb.defaultAddress.hex);case 8:return a=t.sent,t.next=11,window.tronWeb.trx.sign(a);case 11:return n=t.sent,t.next=14,window.tronWeb.trx.sendRawTransaction(n);case 14:s=t.sent,e.txList.push({address:s.txid,status:1});case 16:case"end":return t.stop()}}),t)})))()}}},f=b,m=(a("b320"),a("5d22")),p=Object(m["a"])(f,n,s,!1,null,"43430da7",null);t["default"]=p.exports}}]);