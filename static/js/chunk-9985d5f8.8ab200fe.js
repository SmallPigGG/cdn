(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9985d5f8"],{12:function(e,t){},"49e7":function(e,t,r){"use strict";r("feb5")},"6d89":function(e,t,r){},8861:function(e,t,r){"use strict";r.r(t);var n,a,o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("el-row",{staticStyle:{"padding-right":"8px","margin-bottom":"30px"},attrs:{gutter:0}},[r("el-col",{attrs:{xs:24}},[r("div",{staticClass:"operationBtn"},[r("el-button",{attrs:{type:"primary",icon:"el-icon-setting"},on:{click:function(t){e.dialogOne=!0}}},[e._v(e._s(e.$t("ethMoreToOne.settings")))]),r("el-button",{attrs:{type:"primary",icon:"el-icon-sort-down"},on:{click:function(t){e.dialogThree=!0}}},[e._v(e._s(e.$t("ethMoreToOne.import")))]),r("el-button",{attrs:{type:"primary",icon:"el-icon-sort-up"},on:{click:e.onExportTable}},[e._v(e._s(e.$t("ethMoreToOne.export")))]),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:e.onDelAllSelectList}},[e._v(e._s(e.$t("ethMoreToOne.delete")))])],1)])],1),r("el-row",{staticStyle:{"margin-bottom":"30px"},attrs:{gutter:0}},[r("el-col",{attrs:{xs:{span:24}}},[r("TransactionTable",{attrs:{list:e.list,"block-url":e.blockUrl},on:{onSelectTableList:e.onSelectTableList}})],1)],1),r("el-row",{staticClass:"formBox",attrs:{gutter:0}},[r("el-tabs",{attrs:{type:"border-card"}},[r("el-tab-pane",{attrs:{label:e.$t("ethMoreToOne.Basics")}},[r("el-col",{attrs:{xs:{span:24}}},[r("ExecuteForm",{attrs:{form:e.form},on:{onMaxNum:e.onMaxNum}})],1),r("el-col",{staticStyle:{"text-align":"center"}},[r("el-button",{attrs:{type:"primary"},on:{click:e.onQuerybalance}},[e._v(e._s(e.$t("ethMoreToOne.check_balance")))]),r("el-button",{attrs:{type:"primary"},on:{click:e.onExecute}},[e._v(e._s(e.$t("ethMoreToOne.execute")))])],1)],1)],1)],1),r("el-dialog",{attrs:{title:e.$t("ethMoreToOne.settings"),visible:e.dialogOne},on:{"update:visible":function(t){e.dialogOne=t}}},[r("el-form",{attrs:{model:e.form}},[r("el-form-item",{attrs:{label:e.$t("ethMoreToOne.rpc_node")}},[r("el-input",{staticStyle:{color:"#000","font-size":"x-large"},attrs:{autocomplete:"off"},model:{value:e.form.rpc_node,callback:function(t){e.$set(e.form,"rpc_node",t)},expression:"form.rpc_node"}}),r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1),r("el-form-item",{attrs:{label:e.$t("ethMoreToOne.threads")}},[r("el-input",{staticStyle:{color:"#000","font-size":"x-large"},attrs:{autocomplete:"off"},model:{value:e.form.task_num,callback:function(t){e.$set(e.form,"task_num",t)},expression:"form.task_num"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogOne=!1}}},[e._v(e._s(e.$t("ethMoreToOne.close")))]),r("el-button",{attrs:{type:"primary"},on:{click:e.onSetting}},[e._v(e._s(e.$t("ethMoreToOne.confirm")))])],1)],1),r("el-dialog",{attrs:{title:e.$t("ethMoreToOne.import_address"),visible:e.dialogThree},on:{"update:visible":function(t){e.dialogThree=t}}},[r("el-form",{attrs:{model:e.form}},[r("el-form-item",{attrs:{label:e.$t("ethMoreToOne.input_alert_1")}},[r("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.form.prvlist,callback:function(t){e.$set(e.form,"prvlist",t)},expression:"form.prvlist"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogThree=!1}}},[e._v(e._s(e.$t("ethMoreToOne.close")))]),r("el-button",{attrs:{type:"primary"},on:{click:e.onLead}},[e._v(e._s(e.$t("ethMoreToOne.import")))])],1)],1)],1)},s=[],l=r("4833"),i=(r("65f0"),r("a9b5"),r("fdea"),r("403f"),r("297b"),r("37de"),r("22f9"),r("7479"),r("9bdd"),r("7fe9"),r("4a32"),r("6a61"),{zh:{ethMoreToOne:{settings:"设置",Basics:"基础",advanced:"高级",hexdata:"十六进制数据",add_contract:"添加代币",contract_address:"代币地址",contract_address_error:"代币地址错误",contract_added:"代币已添加",contract_error:"代币合约错误，请重试!",import:"导入小号",import_address:"导入地址",import_succeeded:"导入成功",export_succeeded:"导出成功",export:"导出选中",delete:"删除选中",all_amount:"全部数量",delete_err:"不能删除默认SOL",delete_token:"删除Token",rpc_node:"RPC 节点",threads:"线程",network_error_auto:"网络错误自动连接",open:"开启",close:"关闭",confirm:"确认",contract:"选择代币:",gasPrice:"Gas Price(gwei):",gasLimit:"Gas Limit:",sendNumber:"发送数量:",receiveAddress:"接收地址:",input_alert_1:"格式:私钥一行一个",input_alert_2:"合约地址转账 Gas Limit 21000会超出限制!请调整!!",input_alert_3:"SOL 余额不足以支付 gas!!",input_alert_4:"Token余额不足",input_alert_5:"导入发生错误，可能格式错误!",input_alert_6:"导入发生错误，可能密码错误!",input_alert_7:"查询余额完毕",input_alert_8:"注意:Token归集请按照Token实际的上限填写。否则失败，具体可查看Token区块交易",eth_balance:"SOL余额 ({allBalance})",token_balance:"Token余额({allBalance})",nonce:"交易数({nonce})",result:"结果",result_0:"未执行",result_1:"成功",result_2:"失败",result_3:"手续费不足 : gas * price + value",result_4:"余额不足",result_5:"nonce太小 : 请先查询余额",option:"选项",select_1:"选中 Token 0 余额",select_2:"选中 SOL 0 余额",select_3:"选中 0 交易",select_4:"选中 错误",type:"类型",run_out:"执行完毕",password:"密码",get_gasprice:"获取最新Gas Price",check_balance:"查询余额",privatkey:"私钥",receiving_address_t:"输入接收地址",mnemonic:"助记词",receiveAddress_error:"接收地址错误",address:"地址",execute:"执行"}},en:{ethMoreToOne:{settings:"Settings",Basics:"Basics",advanced:"Advanced",hexdata:"Hex Data",add_contract:"Add Token",contract_address:"Token address",contract_address_error:"Token address error",contract_error:"Token Contract error, please try again!",contract_added:"Token added",import:"Import address",import_address:"import address",import_succeeded:"Import succeeded",export_succeeded:"Export succeeded",export:"Export selected",delete:"Delete selected",delete_err:"Default eth cannot be deleted",delete_token:"Delete token",all_amount:"All Amount",rpc_node:"RPC Node",threads:"threads",network_error_auto:"Network error Auto Connection",open:"Open",close:"Close",confirm:"Confirm",contract:"Token:",gasPrice:"Gas Price(gwei):",gasLimit:"Gas Limit:",sendNumber:"Coin Number:",receiveAddress:"Receive Address:",input_alert_1:"Format: one per line",input_alert_2:"The gas limit 21000 of contract address transfer will exceed the limit! Please adjust!!",input_alert_3:"The SOL balance is insufficient to cover gas!!",input_alert_4:"Insufficient token balance",input_alert_5:"Import error, possible format error!",input_alert_6:"Import error, maybe password error!",input_alert_7:"End of balance inquiry",input_alert_8:"Note: Please fill in token collection according to the actual upper limit of token. Otherwise, it fails. You can check the token block transaction for details",eth_balance:"SOL balance({allBalance})",token_balance:"Token balance({allBalance})",nonce:"Nonce({nonce})",result:"Result",result_0:"unenforced",result_1:"success",result_2:"failed",result_3:"Insufficient fee : gas * price + value",result_4:"Insufficient Balance",result_5:"nonce Too small : Please check the balance first",option:"Option",select_1:"Select token 0 balance",select_2:"Select Sol 0 balance",select_3:"Selected 0 transactions",select_4:"Selected error",type:"Type",check_balance:"Check balance",run_out:"completion of enforcement",password:"Password",get_gasprice:"Get latest Gas Price",privatkey:"Privatkey",receiving_address_t:"Please enter the receiving address",mnemonic:"Mnemonic",receiveAddress_error:"Receive address error",address:"Address",execute:"Execute"}}}),c=r("5c0e"),u=r("5dec"),d=r("7921"),m=r.n(d),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"transactionTable"},[r("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.list,"max-height":300},on:{"selection-change":e.onSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55"}}),r("el-table-column",{attrs:{type:"index",label:"ID",width:"50",align:"center"}}),r("el-table-column",{attrs:{label:e.$t("ethMoreToOne.address")+"("+e.list.length+")","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("a",{attrs:{target:"_blank",href:e.blockUrl+"/address/"+n.address}},[e._v(e._s(n.address))])]}}])}),r("el-table-column",{attrs:{label:e.$t("ethMoreToOne.eth_balance",{allBalance:e.allBalance}),width:"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(" "+e._s(r.balance)+" ")]}}])}),r("el-table-column",{attrs:{label:e.$t("ethMoreToOne.result"),width:"600",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[88!==n.result.length?r("el-tag",{attrs:{type:e._f("resultTagStyleFilter")(n.result)}},[e._v(" "+e._s(e._f("resultTagFilter")(n.result))+" ")]):r("el-tag",{attrs:{type:n.result}},[r("a",{attrs:{target:"_blank",href:e.blockUrl+"/tx/"+n.result}},[e._v(e._s(n.result))])])]}}])}),r("el-table-column",{attrs:{label:e.$t("ethMoreToOne.option"),width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete",circle:""},nativeOn:{click:function(r){return r.preventDefault(),e.onDeleteRow(t.$index)}}})]}}])})],1),r("div",{staticClass:"operationBtn"},[r("el-button",{attrs:{type:"primary",plain:""},on:{click:e.onSelectBalanceZero}},[e._v(e._s(e.$t("ethMoreToOne.select_2")))]),r("el-button",{attrs:{type:"danger",plain:""},on:{click:e.onSelectResultError}},[e._v(e._s(e.$t("ethMoreToOne.select_4")))])],1)],1)},f=[],h=(r("c9b2"),r("f597"),r("ed08")),_={filters:{resultTagStyleFilter:function(e){var t={0:"info",1:"success",2:"danger"};return t[e]?t[e]:"info"},resultTagFilter:function(e){var t={0:n.$t("ethMoreToOne.result_0"),1:n.$t("ethMoreToOne.result_1"),2:n.$t("ethMoreToOne.result_2"),3:n.$t("ethMoreToOne.result_3"),4:n.$t("ethMoreToOne.result_4"),5:n.$t("ethMoreToOne.result_5")};return t[e]?t[e]:e},orderNoFilter:function(e){return e.substring(0,30)}},props:{list:{type:Array,required:!0},blockUrl:{type:String,required:!0}},data:function(){return{}},computed:{allBalance:function(){return Object(h["b"])(this.list,"balance")}},created:function(){n=this},methods:{onDeleteRow:function(e){this.list.splice(e,1),localStorage.setItem("privatekeyObj",JSON.stringify(this.list.map((function(e){return e.result=0,e}))))},onSelectionChange:function(e){this.$emit("onSelectTableList",e)},onSelectTokenBalanceZero:function(){var e=this;this.$refs.multipleTable.clearSelection(),this.list.forEach((function(t){0!==t.tokenBalance&&"0"!==t.tokenBalance||e.$refs.multipleTable.toggleRowSelection(t)}))},onSelectBalanceZero:function(){var e=this;this.$refs.multipleTable.clearSelection(),this.list.forEach((function(t){0!==t.balance&&"0"!==t.balance||e.$refs.multipleTable.toggleRowSelection(t)}))},onSelectNonceZero:function(){var e=this;this.$refs.multipleTable.clearSelection(),this.list.forEach((function(t){0===t.nonce&&e.$refs.multipleTable.toggleRowSelection(t)}))},onSelectResultError:function(){var e=this;this.$refs.multipleTable.clearSelection(),this.list.forEach((function(t){1===t.result&&0===t.result||e.$refs.multipleTable.toggleRowSelection(t)}))}}},b=_,g=(r("49e7"),r("5d22")),v=Object(g["a"])(b,p,f,!1,null,"f572c6e6",null),k=v.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"150px"}},[r("el-form-item",{attrs:{label:e.$t("ethMoreToOne.sendNumber")}},[r("el-input-number",{staticClass:"inputNum",attrs:{disabled:e.sendNumberStatus,min:0},model:{value:e.form.sendNumber,callback:function(t){e.$set(e.form,"sendNumber",t)},expression:"form.sendNumber"}}),r("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",plain:"",size:"small"},on:{click:e.onMaxNum}},[e._v(e._s(e.$t("ethMoreToOne.all_amount")))])],1),r("el-form-item",{attrs:{label:e.$t("ethMoreToOne.receiveAddress")}},[r("el-input",{staticClass:"inputNum",attrs:{placeholder:e.$t("ethMoreToOne.receiving_address_t"),min:0},model:{value:e.form.receiveAddress,callback:function(t){e.$set(e.form,"receiveAddress",t)},expression:"form.receiveAddress"}})],1)],1)},x=[],w={props:{form:{type:Object,required:!1}},data:function(){return{sendNumberStatus:!1,gas_price_option:[]}},watch:{},mounted:function(){return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{onMaxNum:function(){this.sendNumberStatus?this.sendNumberStatus=!1:this.sendNumberStatus=!0,this.$emit("onMaxNum",this.sendNumberStatus)}}},O=w,S=Object(g["a"])(O,T,x,!1,null,null,null),y=S.exports,$=r("9905"),M="ethMoreToOne",N="batchCollection",L="1",R="https://solana-api.projectserum.com",A=void 0,B={name:N,components:{TransactionTable:k,ExecuteForm:y},data:function(){return{dialogOne:!1,dialogThree:!1,importType:[],blockUrl:"",form:{gasPrice:"20",maxNum:!1,sendNumber:0,receiveAddress:"",importTypeRadio:1,prvlist:"",password:"",task_num:"1",rpc_node:"",token_conTractAddress:""},selectedList:[],list:[]}},created:function(){this.$i18n.getLocaleMessage("en")[M]||(this.$i18n.mergeLocaleMessage("en",i.en),this.$i18n.mergeLocaleMessage("zh",i.zh))},mounted:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:A=e,localStorage.getItem("task_num")&&(L=localStorage.getItem("task_num")),localStorage.getItem("sol_privatekeyObj")&&(e.list=JSON.parse(localStorage.getItem("sol_privatekeyObj"))),localStorage.getItem("task_num")&&(L=localStorage.getItem("task_num"),e.form.task_num=L),e.form.task_num=L,e.blockUrl="https://explorer.solana.com",localStorage.getItem("sol_rpc_node")&&(R=localStorage.getItem("sol_rpc_node")),e.form.rpc_node=R,a=new c["b"](R);case 9:case"end":return t.stop()}}),t)})))()},methods:{onSelectTableList:function(e){this.selectedList=e},onExecute:function(){if(0!==this.selectedList.length)for(var e in this.selectedList){var t=0;t=this.form.maxNum?new m.a(this.selectedList[e].balance).minus(5e-6).toNumber():this.form.sendNumber,new m.a(t).plus(5e-6).toNumber()>Number(this.selectedList[e].balance)||t<0?A.onUpTableData(this.selectedList[e].address,-1,this.$t("ethMoreToOne.input_alert_3")):C.push({prv:this.selectedList[e].prv,sendAddress:this.selectedList[e].address,receiveAddress:this.form.receiveAddress,balance:this.selectedList[e].balance,amount:t})}else this.$message.error(this.$t("common.no_select_data"))},onDelAllSelectList:function(){var e=this.selectedList.map((function(e){return e.address})),t=this.list.filter((function(t){return!e.includes(t.address)}));this.list=t,localStorage.setItem("sol_privatekeyObj",JSON.stringify(t))},onLead:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e.form.prvlist.split("\n"),n={},t.t0=regeneratorRuntime.keys(r);case 3:if((t.t1=t.t0()).done){t.next=11;break}if(a=t.t1.value,r[a]){t.next=7;break}return t.abrupt("continue",3);case 7:o=e.decodeAccount(r[a]),o&&(n[r[a]]=o.publicKey.toBase58()),t.next=3;break;case 11:for(s in n)e.onUpTableData(n[s],0,0,s);localStorage.setItem("sol_privatekeyObj",JSON.stringify(e.list.map((function(e){return e.result=0,e})))),e.$message.success(e.$t("ethMoreToOne.import_succeeded")),e.dialogThree=!1;case 15:case"end":return t.stop()}}),t)})))()},decodeAccount:function(e){try{return new c["a"](JSON.parse(e))}catch(t){try{return new c["a"](u["decode"](e))}catch(t){return}}},onQuerybalance:function(){if(0!==this.selectedList.length)for(var e in this.selectedList)j.push(this.selectedList[e].address);else this.$message.error(this.$t("common.no_select_data"))},onUpTableData:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];for(var a in this.list)if(this.list[a].address===e)return this.list[a].balance=parseFloat(t)>=0?t:this.list[a].balance,this.list[a].result=r,!0;return this.list.push({address:e,balance:t,prv:n,result:r}),!0},onSetting:function(){L=this.form.task_num,localStorage.setItem("task_num",L),R=this.form.rpc_node,localStorage.setItem("sol_rpc_node",R),location.reload()},onMaxNum:function(e){this.form.maxNum=e},onExportTable:function(){var e=this;Promise.all([r.e("chunk-36146400"),r.e("chunk-f90fff12"),r.e("chunk-1578a11e")]).then(r.bind(null,"4bf8")).then((function(t){var r=["Address","Balance","Result"],n=["address","balance","result"],a=e.formatJson(n,e.selectedList);t.export_json_to_excel({header:r,data:a,filename:"list",autoWidth:!0,bookType:"xlsx"}),e.$message.success(e.$t("ethMoreToOne.export_succeeded"))}))},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))},signAndSendTransaction:function(e,t,r,n){var a=arguments;return Object(l["a"])(regeneratorRuntime.mark((function n(){var o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=a.length>4&&void 0!==a[4]&&a[4],n.next=3,e.getRecentBlockhash("max");case 3:return t.recentBlockhash=n.sent.blockhash,t.partialSign(r),s=t.serialize(),n.next=8,e.sendRawTransaction(s,{skipPreflight:o,preflightCommitment:"single"});case 8:return n.abrupt("return",n.sent);case 9:case"end":return n.stop()}}),n)})))()},nativeTransfer:function(e,t,r,n){var a=this;return Object(l["a"])(regeneratorRuntime.mark((function o(){var s,l;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return s=(new c["e"]).add(c["d"].transfer({fromPubkey:t.publicKey,toPubkey:r,lamports:n})),s.feePayer=t.publicKey,o.next=4,a.signAndSendTransaction(e,s,t,[]);case 4:return l=o.sent,o.abrupt("return",l);case 6:case"end":return o.stop()}}),o)})))()}}},j=$["a"].queue(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new c["c"](t),e.prev=1,e.next=4,a.getBalance(n);case 4:o=e.sent,A.onUpTableData(t,new m.a(o).div(Math.pow(10,9)).toString(10),1),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),A.onUpTableData(t,-1,2);case 11:r();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}(),L);j.drain(Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:A.$message.success(A.$t("ethMoreToOne.input_alert_7"));case 1:case"end":return e.stop()}}),e)}))));var C=$["a"].queue(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=A.decodeAccount(t.prv),e.prev=1,e.next=4,A.nativeTransfer(a,n,t.receiveAddress,new m.a(t.amount).times(Math.pow(10,9)).toString(10));case 4:o=e.sent,A.onUpTableData(t.sendAddress,t.balance-t.amount,o),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),A.onUpTableData(t.sendAddress,-1,2);case 11:r();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}(),L);C.drain(Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:A.$message.success(A.$t("ethMoreToOne.run_out"));case 1:case"end":return e.stop()}}),e)}))));var I=B,P=(r("9265"),r("f453"),Object(g["a"])(I,o,s,!1,null,"398519a4",null));t["default"]=P.exports},9265:function(e,t,r){"use strict";r("aebf")},aebf:function(e,t,r){},f453:function(e,t,r){"use strict";r("6d89")},feb5:function(e,t,r){}}]);