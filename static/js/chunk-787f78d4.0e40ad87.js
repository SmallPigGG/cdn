(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-787f78d4"],{"76a3":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"header"},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"coin-wallet2"}}),a("span",[e._v("CoinTool - Usage fee")])],1),a("div",{staticClass:"content"},e._l(e.list,(function(t,n){return a("div",{key:n,staticClass:"box"},[a("h3",[a("svg-icon",{staticClass:"title-icon",style:"color: "+e.$coinInfo[t.chainName].color,attrs:{"icon-class":e.$coinInfo[t.chainName].icon}}),a("span",[e._v(e._s(t.chainName.toUpperCase()))])],1),a("ul",[a("li",[a("span",{staticClass:"label"},[e._v(e._s(e.$t("route.createToken")))]),a("span",{staticClass:"value"},[e._v(" "+e._s(e._f("price")(t.createToken))+" "+e._s("number"===typeof t.createToken?e.$coinInfo[t.chainName].symbol:"")+" ")])]),a("li",[a("span",{staticClass:"label"},[e._v(e._s(e.$t("route.createPresale")))]),a("span",{staticClass:"value"},[e._v(" "+e._s(e._f("price")(t.createPresale))+" "+e._s("number"===typeof t.createPresale?e.$coinInfo[t.chainName].symbol:"")+" ")])]),a("li",[a("span",{staticClass:"label"},[e._v(e._s(e.$t("route.createLocker")))]),a("span",{staticClass:"value"},[e._v(" "+e._s(e._f("price")(t.createLocker))+" "+e._s("number"===typeof t.createLocker?e.$coinInfo[t.chainName].symbol:"")+" ")])]),a("li",[a("span",{staticClass:"label"},[e._v(e._s(e.$t("route.nftCreate")))]),a("span",{staticClass:"value"},[e._v(" "+e._s(e._f("price")(t.nftCreate))+" "+e._s("number"===typeof t.nftCreate?e.$coinInfo[t.chainName].symbol:"")+" ")])]),a("li",[a("span",{staticClass:"label"},[e._v(e._s(e.$t("route.createTokenView")))]),a("span",{staticClass:"value"},[e._v(" "+e._s(e._f("price")(e.$coinInfo[t.chainName].approveDonateCost))+" "+e._s(t.createTokenView?e.$coinInfo[t.chainName].symbol:"")+" ")])]),a("li",[a("span",{staticClass:"label"},[e._v(e._s(e.$t("route.multiSender")))]),a("span",{staticClass:"value"},[e._v(" "+e._s(e._f("price")(t.multiSender))+" "+e._s("number"===typeof t.multiSender?e.$coinInfo[t.chainName].symbol:"")+" ")])]),a("li",[a("div",{staticClass:"vipBox"},[a("div",{staticClass:"goods"},[e._v("1 Day")]),a("div",{staticClass:"price"},[e._v(e._s(t.multiSenderVip[0])+" "+e._s(e.$coinInfo[t.chainName].symbol))])]),a("div",{staticClass:"vipBox"},[a("div",{staticClass:"goods"},[e._v("7 Day")]),a("div",{staticClass:"price"},[e._v(e._s(t.multiSenderVip[1])+" "+e._s(e.$coinInfo[t.chainName].symbol))])]),a("div",{staticClass:"vipBox"},[a("div",{staticClass:"goods"},[e._v("Permanent")]),a("div",{staticClass:"price"},[e._v(e._s(t.multiSenderVip[2])+" "+e._s(e.$coinInfo[t.chainName].symbol))])])])])])})),0)])},s=[],r=a("4833"),c=a("efe2"),i=(a("6a61"),a("5502"),a("a9b5"),a("fdea"),a("a835")),o=a("8feb"),l=a.n(o),u=a("52c1"),p={zh:{demo:{}},en:{demo:{}}},d="price",m={name:d,inject:["onCheckConnect"],components:{},filters:{price:function(e){return e||"nonsupport"}},data:function(){return{data:{eth:{multiSender:1,multiSenderVip:[0,0,0],createToken:1,createPresale:1,createLocker:1,nftCreate:1,createTokenView:1},bsc:{multiSender:1,multiSenderVip:[0,0,0],createToken:1,createPresale:1,createLocker:1,nftCreate:1,createTokenView:1},heco:{multiSender:1,multiSenderVip:[0,0,0],createToken:1,createPresale:1,createLocker:1,nftCreate:1,createTokenView:1},ftm:{multiSender:1,multiSenderVip:[0,0,0],createToken:1,createPresale:1,createLocker:1,nftCreate:1,createTokenView:1},matic:{multiSender:1,multiSenderVip:[0,0,0],createToken:1,createPresale:1,createLocker:1,nftCreate:1,createTokenView:1},avax:{multiSender:1,multiSenderVip:[0,0,0],createToken:1,createPresale:1,createLocker:1,nftCreate:1,createTokenView:1},xdai:{multiSender:1,multiSenderVip:[1,2,3],createToken:1,createPresale:1,createLocker:1,nftCreate:1,createTokenView:1},celo:{multiSender:1,multiSenderVip:[1,2,3],createToken:1,createPresale:1,createLocker:1,nftCreate:1,createTokenView:1},trx:{multiSender:1,multiSenderVip:[0,0,0],createToken:1,createPresale:1,createLocker:1,nftCreate:1,createTokenView:null}}}},computed:Object(c["a"])(Object(c["a"])({},Object(u["b"])(["isConnect","account","isPc","language"])),{},{list:function(){var e=this,t=Object.keys(this.data);return t.map((function(t){return Object(c["a"])({chainName:t},e.data[t])}))}}),created:function(){this.$i18n.getLocaleMessage("en")[d]||(this.$i18n.mergeLocaleMessage("en",p.en),this.$i18n.mergeLocaleMessage("zh",p.zh))},mounted:function(){for(var e=Object.keys(this.data).filter((function(e){return"trx"!==e})),t=0;t<e.length;t++){var a=this.$coinInfo[e[t]].chainId;this.getVipPrice(a,e[t])}},methods:{getVipPrice:function(e,t){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var s,r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=i["a"].rpcNode(e),n.next=3,a.$ajax({url:s,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:i["a"].resolveOneToMoreVIPAddress(e),data:"0xcc6c8e00"},"latest"]}});case 3:r=n.sent,c=l.a.abi.decodeParams(["uint256","uint256","uint256"],r.result),a.data[t].multiSenderVip=[parseInt(c[0])/Math.pow(10,18),parseInt(c[1])/Math.pow(10,18),parseInt(c[2])/Math.pow(10,18)];case 6:case"end":return n.stop()}}),n)})))()}}},f=m,v=(a("c122"),a("5d22")),_=Object(v["a"])(f,n,s,!1,null,"e33bdb5a",null);t["default"]=_.exports},a5a7:function(e,t,a){},c122:function(e,t,a){"use strict";a("a5a7")}}]);