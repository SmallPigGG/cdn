(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0af8d290"],{"0000":function(e,t,a){},"1edf":function(e,t,a){},"3f3a":function(e,t,a){"use strict";a("bd7c")},4779:function(e,t,a){"use strict";a("0000")},"4aba":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("el-dialog",{attrs:{width:e.isPc?"600px":"auto",title:e.$t("createToken.success"),visible:e.isShowTokenCreateSuccessDialog},on:{"update:visible":function(t){e.isShowTokenCreateSuccessDialog=t}}},[a("p",[e._v(e._s(e.$t("createToken.tokenaddress")))]),a("el-tag",[a("a",{attrs:{target:"_blank",href:e.blockTxurl+"/token/"+e.createTokenAddress}},[e._v(e._s(e.createTokenAddress))])]),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.isShowTokenCreateSuccessDialog=!1}}},[e._v(e._s(e.$t("createToken.confirm")))])],1)],1),a("el-dialog",{attrs:{width:e.isPc?"600px":"auto",title:e.$t("createToken.ido_success"),visible:e.isShowIdoCreateSuccessDialog},on:{"update:visible":function(t){e.isShowIdoCreateSuccessDialog=t}}},[a("p",[e._v(e._s(e.$t("createToken.idoaddress"))+": "),a("el-tag",[e._v(e._s(e.createTokenAddress))])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:1===e.idoForm.idoType,expression:"idoForm.idoType === 1"}]},[a("el-tag",[a("a",{attrs:{target:"_blank",href:"https://cointool.app/ido/exchange?menu=1&contact=1&address="+e.createTokenAddress+"&c="+e.chainId}},[e._v(e._s(e.createTokenAddress))])]),a("p",[e._v("Please send "),a("el-tag",{attrs:{type:"danger"}},[e._v(" "+e._s(e.totalToken))]),e._v(" tokens to the Ido contract address,For claim after Ido")],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:2===e.idoForm.idoType,expression:"idoForm.idoType === 2"}]},[a("p",[e._v("Please send "),a("el-tag",{attrs:{type:"danger"}},[e._v(" "+e._s(e.totalToken))]),e._v(" tokens to the Ido contract address,Used for IDO sending to users")],1),a("p",[e._v("Send "+e._s(e.symbol)+" to IDO contract address ，Get instant tokens")])]),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.isShowIdoCreateSuccessDialog=!1}}},[e._v(e._s(e.$t("createToken.confirm")))])],1)]),a("Card",{attrs:{icon:e.route_icon,title:e.route_title,desc:e.$t("createToken.pageDesc"),"create-type":e.activeTabs}},[a("CreateTokenTab",{staticStyle:{margin:"40px 0"},attrs:{list:e.tabsList,active:e.activeTabs},on:{onChangeCreateTokenActive:e.onChangeCreateTokenActive}}),0===e.activeTabs?a("TokenForm",{attrs:{form:e.form,loading:e.loading},on:{onCreate:e.onCreateToken}}):a("IdoForm",{attrs:{form:e.idoForm,loading:e.loading},on:{onCreate:e.onCreateIDO}}),a("el-card",{directives:[{name:"show",rawName:"v-show",value:e.txList.length>0,expression:"txList.length > 0"}],staticClass:"box-card",staticStyle:{"margin-top":"40px"}},[a("DealList",{attrs:{list:e.txList,"block-txurl":e.blockTxurl}}),a("el-alert",{directives:[{name:"show",rawName:"v-show",value:e.tx_status,expression:"tx_status"}],staticClass:"tips",attrs:{title:e.$t("createToken.success"),type:"success",closable:!1}})],1)],1)],1)},n=[],r=(a("2eeb"),a("053b"),a("e18c"),a("e35a"),a("1c2e"),a("5e9f"),a("6a61"),a("2e91")),o=a("d211"),i=a("52c1"),c={zh:{createToken:{tokenaddress:"代币地址:",idoaddress:"IDO地址:",tokenaddress_tip:"您的代币合约地址，不是你的私人地址!",rate_tip:"1 {a} 获得 N 个代币",cap_tip:"总共募集{a}的数量",uplimit_tip:"每个用户{a}兑换额度上限，0 无限制",startTime_tip:"IDO启动时间",endDays_tip:"IDO总共持续天数",lockDays_tip:"IDO结束后，Claim 锁定天数，0 不锁定",adminAddress_tip:"用于管理IDO合约和接收募集代币",rate:"兑换比例:",cap:"募集总量({a}):",no_null:"不能为空!",idoType:"领取类型",idoType1:"手动领取",idoType2:"自动领取",idoType_tip1:"需要用户手动在页面Claim领取",idoType_tip2:"用户发送{a}到IDO合约，将会自动发送Token给用户",uplimit:"最大额度:",startTime:"启动时间:",endDays:"募集天数:",lockDays:"锁定天数:",adminAddress:"管理员地址:",tokenName:"代币名称:",tokenNameValidate:"请输入代币名称",symbol:"缩写符号:",symbolValidate:"请输入缩写符号",initialSupply:"发行数量:",initialSupplyValidate:"请输入发行数量",decimals:"小数位数(1-18):",decimalsValidate:"请输入小数位数",config:"其他配置:",createBtn:"立即创建",alert:"创建成功后会自动把代币转入创建者地址中",success:"代币创建成功，请前往区块浏览器或钱包查看！",ido_success:"IDO创建成功，请前往区块浏览器或钱包查看！",pageDesc:"简单、快速、便捷",confirm:"确定",config_0:"可销毁",config_1:"可增发",config_2:"可暂停",config_3:"提取以太",config_4:"提取代币",config_5:"黑名单",config0_tips:"可销毁发行数量",config1_tips:"可增发发行数量",config2_tips:"暂停所有地址的转账等操作",config5_tips:"可添加某个地址为黑名单，限制转账操作",createTab1:"创建代币",createTab2:"IDO创建"}},en:{createToken:{tokenaddress:"Token Address:",idoaddress:"IDO Address:",tokenaddress_tip:"Your token contract address, not your personal address!",rate_tip:"1 {a} Get N Token",cap_tip:"Total number of {a} sale",uplimit_tip:"Each user {a} exchange limit, 0 unlimited",startTime_tip:"Ido start time",endDays_tip:"Ido total sale days",lockDays_tip:"After Ido, claim is locked for days, 0 is not locked",adminAddress_tip:"Used to manage Ido contracts and receive raised tokens",rate:"Rate:",cap:"To raise({a}):",uplimit:"Max. contribution:",no_null:"Cannot be empty!",startTime:"Start time:",endDays:"Sale Days:",lockDays:"Lock Days:",adminAddress:"Admin address:",tokenName:"Token Name:",tokenNameValidate:"Please enter token name",symbol:"Symbol:",symbolValidate:"Please enter symbol",initialSupply:"Initial Supply:",initialSupplyValidate:"Please enter initial supply",decimals:"Decimals(1-18):",decimalsValidate:"Please enter decimals",config:"Other Config:",createBtn:"Create Token",alert:"After successful creation, the token will be automatically transferred to the creator's address",success:"Token created successfully, please go to the block browser or wallet to check!",ido_success:"IDO created successfully, please go to the block browser or wallet to check!",pageDesc:"Simple, Fast, Convenient",idoType:"Type of claim",idoType1:"Manual claim",idoType2:"Automatic claim",idoType_tip1:"You need to claim it manually on the claim page",idoType_tip2:"If the user sends {a} to the Ido contract,Get instant tokens",confirm:"Confirm",config_0:"Can Burn",config_1:"Can Mint",config_2:"Can Pause",config_3:"Extract Eth",config_4:"Extract Token",config_5:"Blacklist",config0_tips:"This check specifies whether your tokens can be burned to decrease the supply.",config1_tips:"Minting specifies the opposite, whether more tokens can be created to increase the initial supply.",config2_tips:"This check specifies whether your token and all associated operations can be halted and resumed whenever needed. This pausing operation can be used in case of a software vulnerability or a malicious attack. Be aware that enabling pausing gives authority to whoever is allowed to pause or unpause, such as the creator of the token, and this central authority may not suit certain use cases.",config5_tips:"Accounts can also be blacklisted if they act malicius. Depending on the use case, it may be better for some tokens to have this feature turned off. Similar to the pausing feature, enabling blacklists causes central authority, which may not suit certain use cases.",createTab1:"Create Token",createTab2:"IDO Create"}}},l=a("a835"),d=a("4e2c"),u=a("12f9"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"tabs"},e._l(e.list,(function(t){return a("li",{key:t.value,class:{on:e.active===t.value},on:{click:function(a){return e.onChangeCreateTokenActive(t.value)}}},[e._v(e._s(t.label))])})),0)},p=[],f=(a("513c"),{name:"CreateTokenTab",components:{},props:{list:{type:Array,default:function(){return[]}},active:{type:[Number,String],require:!0}},data:function(){return{}},methods:{onChangeCreateTokenActive:function(e){this.$emit("onChangeCreateTokenActive",e)}}}),h=f,k=(a("8950"),a("5d22")),b=Object(k["a"])(h,m,p,!1,null,"6de644b8",null),g=b.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",staticClass:"form",attrs:{"label-position":e.isPc?"left":"top",rules:e.rules,model:e.form,"label-width":"160px"}},[a("el-form-item",{attrs:{label:e.$t("createToken.tokenName"),prop:"tokenName"}},[a("el-input",{attrs:{placeholder:"e.g. Good Luck Token"},model:{value:e.form.tokenName,callback:function(t){e.$set(e.form,"tokenName",t)},expression:"form.tokenName"}})],1),a("el-form-item",{attrs:{label:e.$t("createToken.symbol"),prop:"symbol"}},[a("el-input",{attrs:{placeholder:"e.g. GLT"},model:{value:e.form.symbol,callback:function(t){e.$set(e.form,"symbol",t)},expression:"form.symbol"}})],1),a("el-form-item",{attrs:{label:e.$t("createToken.initialSupply"),prop:"initialSupply"}},[a("el-input-number",{staticClass:"inputNum",attrs:{min:1},model:{value:e.form.initialSupply,callback:function(t){e.$set(e.form,"initialSupply",t)},expression:"form.initialSupply"}})],1),a("el-form-item",{attrs:{label:e.$t("createToken.decimals"),prop:"decimals"}},[a("el-input-number",{staticClass:"inputNum",attrs:{min:1,max:18},model:{value:e.form.decimals,callback:function(t){e.$set(e.form,"decimals",t)},expression:"form.decimals"}})],1),a("el-form-item",{attrs:{label:e.$t("createToken.config"),prop:"config"}},[a("el-checkbox-group",{model:{value:e.form.config,callback:function(t){e.$set(e.form,"config",t)},expression:"form.config"}},e._l(e.options,(function(t){return a("el-checkbox",{key:t.value,attrs:{label:t.value}},[a("el-tooltip",{attrs:{effect:"dark",content:t.tips,placement:"top"}},[a("span",{staticClass:"checkboxText"},[e._v(e._s(t.label))])])],1)})),1)],1),a("el-form-item",[a("el-alert",{attrs:{title:e.$t("createToken.alert"),type:"warning",effect:"dark"}})],1),a("el-form-item",{staticClass:"btnBox"},[a("el-button",{staticClass:"item-btn",attrs:{loading:e.loading,size:"medium",type:"primary"},on:{click:e.onCreate}},[e._v(" "+e._s(e.$t("createToken.createBtn"))+" ")])],1)],1)},_=[],y="createToken",v={inject:["onCheckConnect"],components:{},props:{form:{type:Object},loading:{type:Boolean}},data:function(){return{options:[],rules:{}}},computed:Object(o["a"])({},Object(i["b"])(["isConnect","account","isPc"])),created:function(){this.$i18n.getLocaleMessage("en")[y]||(this.$i18n.mergeLocaleMessage("en",c.en),this.$i18n.mergeLocaleMessage("zh",c.zh)),this.rules={tokenName:[{required:!0,message:this.$t("createToken.tokenNameValidate"),trigger:"blur"}],symbol:[{required:!0,message:this.$t("createToken.symbolValidate"),trigger:"blur"}],initialSupply:[{required:!0,message:this.$t("createToken.initialSupplyValidate"),trigger:"blur"}],decimals:[{required:!0,message:this.$t("createToken.decimalsValidate"),trigger:"blur"}]},this.options=[{value:0,label:this.$t("createToken.config_0"),tips:this.$t("createToken.config0_tips")},{value:1,label:this.$t("createToken.config_1"),tips:this.$t("createToken.config1_tips")},{value:2,label:this.$t("createToken.config_2"),tips:this.$t("createToken.config2_tips")},{value:5,label:this.$t("createToken.config_5"),tips:this.$t("createToken.config5_tips")}]},mounted:function(){},methods:{onCreate:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs["form"].validate();case 2:if(e.onCheckConnect()){t.next=4;break}return t.abrupt("return");case 4:e.$emit("onCreate");case 5:case"end":return t.stop()}}),t)})))()}}},x=v,C=(a("3f3a"),Object(k["a"])(x,T,_,!1,null,"c1091b8e",null)),w=C.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",staticClass:"form",attrs:{"label-position":e.isPc?"right":"top",rules:e.rules,model:e.form,"label-width":"160px"}},[a("el-form-item",{attrs:{label:e.$t("createToken.tokenaddress"),prop:"tokenaddress"}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.$t("createToken.tokenaddress_tip"),placement:"top"}},[a("el-input",{attrs:{placeholder:"e.g. 0x111111111111111"},model:{value:e.form.tokenaddress,callback:function(t){e.$set(e.form,"tokenaddress",t)},expression:"form.tokenaddress"}})],1),a("el-tag",{directives:[{name:"show",rawName:"v-show",value:!e.isPc,expression:"!isPc"}],attrs:{type:"info"}},[e._v(e._s(e.$t("createToken.tokenaddress_tip")))])],1),a("el-form-item",{attrs:{label:e.$t("createToken.rate"),prop:"rate"}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.$t("createToken.rate_tip",{a:e.symbol}),placement:"top"}},[a("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'')"},model:{value:e.form.rate,callback:function(t){e.$set(e.form,"rate",t)},expression:"form.rate"}})],1),a("el-tag",{directives:[{name:"show",rawName:"v-show",value:!e.isPc,expression:"!isPc"}],attrs:{type:"info"}},[e._v(e._s(e.$t("createToken.rate_tip",{a:e.symbol})))])],1),a("el-form-item",{attrs:{label:e.$t("createToken.cap",{a:e.symbol}),prop:"cap"}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.$t("createToken.cap_tip",{a:e.symbol}),placement:"top"}},[a("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'')"},model:{value:e.form.cap,callback:function(t){e.$set(e.form,"cap",t)},expression:"form.cap"}})],1),a("el-tag",{directives:[{name:"show",rawName:"v-show",value:!e.isPc,expression:"!isPc"}],attrs:{type:"info"}},[e._v(e._s(e.$t("createToken.cap_tip",{a:e.symbol})))])],1),a("el-form-item",{attrs:{label:e.$t("createToken.uplimit"),prop:"uplimit"}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.$t("createToken.uplimit_tip",{a:e.symbol}),placement:"top"}},[a("el-input",{model:{value:e.form.uplimit,callback:function(t){e.$set(e.form,"uplimit",t)},expression:"form.uplimit"}})],1),a("el-tag",{directives:[{name:"show",rawName:"v-show",value:!e.isPc,expression:"!isPc"}],attrs:{type:"info"}},[e._v(e._s(e.$t("createToken.uplimit_tip",{a:e.symbol})))])],1),a("el-form-item",{attrs:{label:e.$t("createToken.startTime"),prop:"startTime"}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.$t("createToken.startTime_tip"),placement:"top"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime"},model:{value:e.form.startTime,callback:function(t){e.$set(e.form,"startTime",t)},expression:"form.startTime"}})],1),a("el-tag",{directives:[{name:"show",rawName:"v-show",value:!e.isPc,expression:"!isPc"}],attrs:{type:"info"}},[e._v(e._s(e.$t("createToken.startTime_tip")))])],1),a("el-form-item",{attrs:{label:e.$t("createToken.endDays"),prop:"endDays"}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.$t("createToken.endDays_tip"),placement:"top"}},[a("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'')"},model:{value:e.form.endDays,callback:function(t){e.$set(e.form,"endDays",t)},expression:"form.endDays"}})],1),a("el-tag",{directives:[{name:"show",rawName:"v-show",value:!e.isPc,expression:"!isPc"}],attrs:{type:"info"}},[e._v(e._s(e.$t("createToken.endDays_tip")))])],1),a("el-form-item",{attrs:{label:e.$t("createToken.idoType"),prop:"idoType"}},[a("el-radio-group",{model:{value:e.form.idoType,callback:function(t){e.$set(e.form,"idoType",t)},expression:"form.idoType"}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.$t("createToken.idoType_tip1"),placement:"top"}},[a("el-radio",{attrs:{label:1}},[e._v(e._s(e.$t("createToken.idoType1")))])],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.$t("createToken.idoType_tip2",{a:e.symbol}),placement:"top"}},[a("el-radio",{attrs:{label:2}},[e._v(e._s(e.$t("createToken.idoType2")))])],1)],1),a("el-tag",{directives:[{name:"show",rawName:"v-show",value:!e.isPc,expression:"!isPc"}],attrs:{type:"info"}},[e._v(e._s(e.$t("createToken.idoType_tip")))])],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:1==e.form.idoType,expression:"form.idoType==1"}],attrs:{label:e.$t("createToken.lockDays"),prop:"lockDays"}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.$t("createToken.lockDays_tip"),placement:"top"}},[a("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'')"},model:{value:e.form.lockDays,callback:function(t){e.$set(e.form,"lockDays",t)},expression:"form.lockDays"}})],1),a("el-tag",{directives:[{name:"show",rawName:"v-show",value:!e.isPc,expression:"!isPc"}],attrs:{type:"info"}},[e._v(e._s(e.$t("createToken.lockDays_tip")))])],1),a("el-form-item",{attrs:{label:e.$t("createToken.adminAddress"),prop:"adminAddress"}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.$t("createToken.adminAddress_tip"),placement:"top"}},[a("el-input",{attrs:{placeholder:"e.g. 0x111111111111111"},model:{value:e.form.adminAddress,callback:function(t){e.$set(e.form,"adminAddress",t)},expression:"form.adminAddress"}})],1),a("el-tag",{directives:[{name:"show",rawName:"v-show",value:!e.isPc,expression:"!isPc"}],attrs:{type:"info"}},[e._v(e._s(e.$t("createToken.adminAddress_tip")))])],1),a("el-form-item",{attrs:{label:"Claim Demo:"}},[a("el-tag",{staticStyle:{"margin-right":"20px"}},[a("a",{attrs:{target:"_blank",href:"https://cointool.app/ido/exchange?menu=1&contact=1&address=0x80015c80182d8294fc6cccd263e0a73674ef051e&c=42"}},[e._v("Kovan Test1")])]),a("el-tag",{staticStyle:{"margin-right":"20px"}},[a("a",{attrs:{target:"_blank",href:"https://cointool.app/ido/exchange?menu=1&contact=1&address=0x806675afcd10faceac5505f50f3d9bd8057440b1&c=42"}},[e._v("Kovan Test2")])]),a("el-tag",{staticStyle:{"margin-right":"20px"}},[a("a",{attrs:{target:"_blank",href:"https://cointool.app/ido/exchange?menu=1&contact=1&address=0xaafed7d13be1ba4bc8dcc28e98062c240a20f1a9&c=97"}},[e._v("BSC TESTNET Test1")])])],1),a("el-form-item",{attrs:{label:"Auto Send Demo:"}},[a("el-tag",{staticStyle:{"margin-right":"20px"}},[e._v("Kovan network: Send Eth to 0xccc3f8507a7a754b49b0e7ae6da17febd7955e40")]),a("el-tag",{staticStyle:{"margin-right":"20px"}},[e._v("Bsc Test network: Send Bnb to 0xe8c3c11879a3ad9024897a2772b496e82dd8ad5d")])],1),a("el-form-item",{staticClass:"btnBox"},[a("el-button",{staticClass:"item-btn",attrs:{loading:e.loading,size:"medium",type:"primary"},on:{click:e.onCreate}},[e._v(" "+e._s(e.$t("createToken.createBtn"))+" ")])],1)],1)},I=[],D="createToken",S={inject:["onCheckConnect"],components:{},props:{form:{type:Object},loading:{type:Boolean}},data:function(){return{symbol:"",options:[],rules:{}}},computed:Object(o["a"])({},Object(i["b"])(["isConnect","account","isPc"])),created:function(){var e="ETH";switch(window.route_name){case"HecocreateToken":e="HT";break;case"BsccreateToken":e="BNB";break}this.symbol=e,this.$i18n.getLocaleMessage("en")[D]||(this.$i18n.mergeLocaleMessage("en",c.en),this.$i18n.mergeLocaleMessage("zh",c.zh)),this.rules={tokenaddress:[{required:!0,message:this.$t("createToken.no_null"),trigger:"blur"}],rate:[{required:!0,message:this.$t("createToken.no_null"),trigger:"blur"}],cap:[{required:!0,message:this.$t("createToken.no_null"),trigger:"blur"}],uplimit:[{required:!0,message:this.$t("createToken.no_null"),trigger:"blur"}],startTime:[{required:!0,message:this.$t("createToken.no_null"),trigger:"blur"}],endDays:[{required:!0,message:this.$t("createToken.no_null"),trigger:"blur"}],adminAddress:[{required:!0,message:this.$t("createToken.no_null"),trigger:"blur"}],lockDays:[{required:!0,message:this.$t("createToken.no_null"),trigger:"blur"}]}},mounted:function(){},methods:{onCreate:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs["form"].validate();case 2:if(e.onCheckConnect()){t.next=4;break}return t.abrupt("return");case 4:e.$emit("onCreate");case 5:case"end":return t.stop()}}),t)})))()}}},A=S,O=Object(k["a"])(A,$,I,!1,null,"31a0f632",null),N=O.exports,E=a("ed08"),L=a("c1d4"),B=a("97bd"),P=a.n(B),j=a("4360"),F=a("7742"),H=a.n(F),M="createToken",q=[{constant:!1,inputs:[{name:"_name",type:"string"},{name:"_symbol",type:"string"},{name:"_decimals",type:"uint256"},{name:"_supply",type:"uint256"}],name:"generateToken",outputs:[{name:"",type:"address"}],payable:!0,stateMutability:"payable",type:"function"}],R=[{constant:!1,inputs:[{name:"_tokenAddr",type:"address"},{name:"_RATE",type:"uint256"},{name:"_CAP",type:"uint256"},{name:"_UPLIMIT",type:"uint256"},{name:"_START",type:"uint256"},{name:"_LOCKTIME",type:"uint256"},{name:"_DAYS",type:"uint256"},{name:"_IDOTYPE",type:"bool"},{name:"_beneficiary",type:"address"}],name:"generate",outputs:[{name:"",type:"address"}],payable:!0,stateMutability:"payable",type:"function"}],V={name:"CreateToken",inject:["onCheckConnect"],components:{Card:u["a"],CreateTokenTab:g,DealList:d["a"],TokenForm:w,IdoForm:N},data:function(){return{activeTabs:0,tabsList:[],isShowTokenCreateSuccessDialog:!1,isShowIdoCreateSuccessDialog:!1,createTokenAddress:"",options:[],txList:[],route_title:"",chainId:0,totalToken:0,route_icon:"",symbol:"",blockTxurl:"",c_address:"",tx_status:!1,loading:!1,rules:{},form:{tokenName:"",symbol:"",initialSupply:21e6,decimals:18,config:[]},idoForm:{tokenaddress:"",startTime:"",adminAddress:"",idoType:2,uplimit:"0",rate:"3000",cap:"100",endDays:"3",lockDays:"0"}}},computed:Object(o["a"])({},Object(i["b"])(["isConnect","account","isPc"])),created:function(){this.$i18n.getLocaleMessage("en")[M]||(this.$i18n.mergeLocaleMessage("en",c.en),this.$i18n.mergeLocaleMessage("zh",c.zh)),this.tabsList=[{value:0,label:this.$t("createToken.createTab1")},{value:1,label:this.$t("createToken.createTab2")}]},mounted:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:window.route_name=e.$route.name,a="ETH",t.t0=window.route_name,t.next="HecocreateToken"===t.t0?5:"BsccreateToken"===t.t0?9:13;break;case 5:return a="HT",e.route_title=e.$t("route.hecocreateToken"),e.route_icon="coin-heco",t.abrupt("break",15);case 9:return a="BNB",e.route_title=e.$t("route.bsccreateToken"),e.route_icon="coin-bnb",t.abrupt("break",15);case 13:e.route_title=e.$t("route.createToken"),e.route_icon="coin-eth2";case 15:e.symbol=a;case 16:case"end":return t.stop()}}),t)})))()},methods:{onChangeCreateTokenActive:function(e){this.activeTabs=e},resetState:function(){this.blockHash="",console.log(this.isConnect,this.account)},onRecommendAddMetamask:function(){var e=arguments,t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=e.length>0&&void 0!==e[0]?e[0]:"default",a.prev=1,a.next=4,window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:s,symbol:t.form.symbol,decimals:t.form.decimals}}});case 4:n=a.sent,n?console.log("Thanks for your interest!"):console.log("Your loss!"),a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](1),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[1,8]])})))()},onCreateIDO:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,s,n,r,o,i,c,d,u,m,p,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("onCreateIDO",e.idoForm),t.t0=window.route_name,t.next="HecocreateToken"===t.t0?4:"BsccreateToken"===t.t0?15:26;break;case 4:if(128===l["a"].getChainId()||256===l["a"].getChainId()){t.next=14;break}return e.$notify.info({title:"Alert",message:e.$t("common.no_connect_heconetwork"),duration:0}),t.prev=6,t.next=9,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x80",chainName:"HECO Mainnet",nativeCurrency:{name:"Huobi Token",symbol:"HT",decimals:18},rpcUrls:["https://http-mainnet-node.huobichain.com"],blockExplorerUrls:["https://scan.hecochain.com/"]}]});case 9:t.next=13;break;case 11:t.prev=11,t.t1=t["catch"](6);case 13:return t.abrupt("return");case 14:return t.abrupt("break",26);case 15:if(56===l["a"].getChainId()||97===l["a"].getChainId()){t.next=25;break}return e.$notify.info({title:"Alert",message:e.$t("common.no_connect_bsc_network"),duration:0}),t.prev=17,t.next=20,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x38",chainName:"BSC Mainnet",nativeCurrency:{name:"Binance Coin",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed.binance.org"],blockExplorerUrls:["https://bscscan.com/"]}]});case 20:t.next=24;break;case 22:t.prev=22,t.t2=t["catch"](17);case 24:return t.abrupt("return");case 25:return t.abrupt("break",26);case 26:return e.resetState(),e.loading=!0,e.chainId=l["a"].getChainId(),e.c_address=l["a"].resolveCreateIdoAddress(),e.blockTxurl=l["a"].resolveLinkOnEtherscan(),t.t3=parseInt,t.next=34,l["a"].sendEthcall({to:e.c_address,data:"0x"+H.a.methodID("txFee",[]).toString("hex")});case 34:if(t.t4=t.sent,a=(0,t.t3)(t.t4),t.prev=36,56!==l["a"].getChainId()){t.next=44;break}return t.t5=parseInt,t.next=41,l["a"].sendEthgetBalance(l["a"].getAccount());case 41:t.t6=t.sent,s=(0,t.t5)(t.t6),s<=a&&s-2e16>5e17&&(a=s-2e16);case 44:if(128!==l["a"].getChainId()){t.next=51;break}return t.t7=parseInt,t.next=48,l["a"].sendEthgetBalance(l["a"].getAccount());case 48:t.t8=t.sent,n=(0,t.t7)(t.t8),n<=a&&n-2e16>5e18&&(a=n-2e16);case 51:t.next=55;break;case 53:t.prev=53,t.t9=t["catch"](36);case 55:return r=!1,1===e.idoForm.idoType&&(r=!0),o=new P.a(R,e.c_address),e.totalToken=e.idoForm.cap*e.idoForm.rate,t.next=61,o.methods.generate(e.idoForm.tokenaddress,e.idoForm.rate,e.idoForm.cap,e.idoForm.uplimit,new Date(e.idoForm.startTime).getTime()/1e3,e.idoForm.lockDays,e.idoForm.endDays,r,e.idoForm.adminAddress).encodeABI({from:l["a"].getAccount()});case 61:return i=t.sent,c=2e6,d={from:l["a"].getAccount(),to:e.c_address,value:Object(L["toHex"])(a),data:i,chainId:l["a"].getChainId(),gas:Object(L["toHex"])(c)},u=e,t.prev=65,t.next=68,l["a"].sendTransaction(d);case 68:m=t.sent,t.next=76;break;case 71:return t.prev=71,t.t10=t["catch"](65),e.$message({message:u.$t("common.transactionError")+": "+t.t10,type:"error"}),e.loading=!1,t.abrupt("return");case 76:return e.txList.push({address:m,status:0}),t.next=79,l["a"].getTransactionSuccess(m);case 79:if(p=t.sent,200!==p.code){t.next=90;break}return f=p.transactionHash,e.txList=e.txList.map((function(e){return e.address===f&&(e.status=1),e})),t.next=85,Object(E["i"])(3e3);case 85:e.tx_status=!0,e.loading=!1,e.idoLogoCheck(p.transactionHash),t.next=91;break;case 90:e.$message({message:"Error：".concat(p.message),type:"error"});case 91:case"end":return t.stop()}}),t,null,[[6,11],[17,22],[36,53],[65,71]])})))()},idoLogoCheck:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.t0=l["a"],a.t1=[],a.t2=["0xaf5370db702d221052a1706d74d1f85201c8ae176737aab0f8d85786b61ee46e","0x000000000000000000000000"+l["a"].getAccount().toLowerCase().replace("0x","")],a.t3=parseInt,a.next=6,l["a"].sendEthblockNumber();case 6:return a.t4=a.sent,a.t5=(0,a.t3)(a.t4),a.t6=(a.t5-20).toString(16),a.t7="0x"+a.t6,a.t8={address:a.t1,topics:a.t2,fromBlock:a.t7,toBlock:"latest"},a.next=13,a.t0.sendEthgetLogs.call(a.t0,a.t8);case 13:if(s=a.sent,!(s.length>0)){a.next=26;break}if(s[s.length-1].transactionHash.toLowerCase()!==e.toLowerCase()){a.next=21;break}console.log(s),t.isShowIdoCreateSuccessDialog=!0,t.createTokenAddress=s[s.length-1].topics[2].replace("0x000000000000000000000000","0x"),a.next=24;break;case 21:return a.next=23,Object(E["i"])(1e3);case 23:t.idoLogoCheck(e);case 24:a.next=29;break;case 26:return a.next=28,Object(E["i"])(1e3);case 28:t.idoLogoCheck(e);case 29:case"end":return a.stop()}}),a)})))()},onCreateToken:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,s,n,r,o,i,c,d,u,m,p,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:t.t0=window.route_name,t.next="HecocreateToken"===t.t0?3:"BsccreateToken"===t.t0?14:25;break;case 3:if(128===l["a"].getChainId()||256===l["a"].getChainId()){t.next=13;break}return e.$notify.info({title:"Alert",message:e.$t("common.no_connect_heconetwork"),duration:0}),t.prev=5,t.next=8,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x80",chainName:"HECO Mainnet",nativeCurrency:{name:"Huobi Token",symbol:"HT",decimals:18},rpcUrls:["https://http-mainnet-node.huobichain.com"],blockExplorerUrls:["https://scan.hecochain.com/"]}]});case 8:t.next=12;break;case 10:t.prev=10,t.t1=t["catch"](5);case 12:return t.abrupt("return");case 13:return t.abrupt("break",25);case 14:if(56===l["a"].getChainId()||97===l["a"].getChainId()){t.next=24;break}return e.$notify.info({title:"Alert",message:e.$t("common.no_connect_bsc_network"),duration:0}),t.prev=16,t.next=19,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x38",chainName:"BSC Mainnet",nativeCurrency:{name:"Binance Coin",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed.binance.org"],blockExplorerUrls:["https://bscscan.com/"]}]});case 19:t.next=23;break;case 21:t.prev=21,t.t2=t["catch"](16);case 23:return t.abrupt("return");case 24:return t.abrupt("break",25);case 25:return e.resetState(),e.loading=!0,e.c_address=l["a"].resolveCreateTokenAddress(),e.blockTxurl=l["a"].resolveLinkOnEtherscan(),t.t3=parseInt,t.next=32,l["a"].sendEthcall({to:e.c_address,data:"0x"+H.a.methodID("txFee",[]).toString("hex")});case 32:if(t.t4=t.sent,a=(0,t.t3)(t.t4),e.form.config.length>0&&(a+=a*e.form.config.length*.25),t.prev=35,56!==l["a"].getChainId()){t.next=43;break}return t.t5=parseInt,t.next=40,l["a"].sendEthgetBalance(l["a"].getAccount());case 40:t.t6=t.sent,s=(0,t.t5)(t.t6),s<=a&&s-2e16>5e17&&(a=s-2e16);case 43:if(128!==l["a"].getChainId()){t.next=50;break}return t.t7=parseInt,t.next=47,l["a"].sendEthgetBalance(l["a"].getAccount());case 47:t.t8=t.sent,n=(0,t.t7)(t.t8),n<=a&&n-2e16>5e18&&(a=n-2e16);case 50:t.next=54;break;case 52:t.prev=52,t.t9=t["catch"](35);case 54:return r=new P.a(q,e.c_address),t.next=57,r.methods.generateToken(e.form.tokenName,e.form.symbol,e.form.decimals,e.form.initialSupply).encodeABI({from:l["a"].getAccount()});case 57:return o=t.sent,i=2e6,c={from:l["a"].getAccount(),to:e.c_address,value:Object(L["toHex"])(a),data:o,chainId:l["a"].getChainId(),gas:Object(L["toHex"])(i)},d=e,t.prev=61,t.next=64,l["a"].sendTransaction(c);case 64:u=t.sent,t.next=72;break;case 67:return t.prev=67,t.t10=t["catch"](61),e.$message({message:d.$t("common.transactionError")+": "+t.t10,type:"error"}),e.loading=!1,t.abrupt("return");case 72:return e.txList.push({address:u,status:0}),t.next=75,l["a"].getTransactionSuccess(u);case 75:if(m=t.sent,200!==m.code){t.next=106;break}return p=m.transactionHash,e.txList=e.txList.map((function(e){return e.address===p&&(e.status=1),e})),t.next=81,Object(E["i"])(3e3);case 81:return e.tx_status=!0,e.loading=!1,t.t11=l["a"],t.t12=[],t.t13=["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x0000000000000000000000000000000000000000000000000000000000000000","0x000000000000000000000000"+l["a"].getAccount().toLowerCase().replace("0x","")],t.t14=parseInt,t.next=89,l["a"].sendEthblockNumber();case 89:return t.t15=t.sent,t.t16=(0,t.t14)(t.t15),t.t17=(t.t16-20).toString(16),t.t18="0x"+t.t17,t.t19={address:t.t12,topics:t.t13,fromBlock:t.t18,toBlock:"latest"},t.next=96,t.t11.sendEthgetLogs.call(t.t11,t.t19);case 96:if(f=t.sent,!(f.length>0)){t.next=104;break}if(f[f.length-1].transactionHash.toLowerCase()!==m.transactionHash.toLowerCase()){t.next=104;break}if(e.isShowTokenCreateSuccessDialog=!0,e.createTokenAddress=f[f.length-1].address,1!==j["a"].state.eth.walletType){t.next=104;break}return t.next=104,e.onRecommendAddMetamask(f[f.length-1].address);case 104:t.next=107;break;case 106:e.$message({message:"Error：".concat(m.message),type:"error"});case 107:case"end":return t.stop()}}),t,null,[[5,10],[16,21],[35,52],[61,67]])})))()}}},U=V,z=(a("8059"),Object(k["a"])(U,s,n,!1,null,"32ad7aad",null));t["default"]=z.exports},"4e2c":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{directives:[{name:"show",rawName:"v-show",value:e.list.length>0,expression:"list.length > 0"}],staticClass:"dealList"},e._l(e.list,(function(t,s){return a("li",{key:t.address},[a("div",{staticClass:"left"},[a("span",{staticClass:"index"},[e._v(e._s(s+1))]),a("a",{staticClass:"address",attrs:{target:"_blank",href:e.blockTxurl+"/tx/"+t.address}},[e._v(e._s(t.address))])]),a("div",{staticClass:"right"},[a("span",{staticClass:"status"},[0===t.status?a("i",{staticClass:"el-icon-loading"}):1===t.status?a("i",{staticClass:"el-icon-success"}):2===t.status?a("i",{staticClass:"el-icon-error",staticStyle:{color:"#F05252"}}):e._e()])])])})),0)},n=[],r={props:{list:{type:Array,required:!0},blockTxurl:{type:String,required:!0}},data:function(){return{}},created:function(){},mounted:function(){},methods:{}},o=r,i=(a("4779"),a("5d22")),c=Object(i["a"])(o,s,n,!1,null,"cfd1f11a",null);t["a"]=c.exports},8059:function(e,t,a){"use strict";a("1edf")},8950:function(e,t,a){"use strict";a("9efa")},"9efa":function(e,t,a){},bd7c:function(e,t,a){}}]);