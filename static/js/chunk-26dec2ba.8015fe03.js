(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26dec2ba"],{"0171":function(t,e,i){t.exports=i.p+"static/img/elon.71779025.jpg"},"078c9":function(t,e,i){"use strict";i("4fa0")},"1fe4":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("ShareDialog",{ref:"ShareDialog",attrs:{text:"Are you a true Crypto enthusiast? Choose your laser eyes and tell the world! Update your profile picture today! ","twitter-tags":"LaserRayUntil100K"}}),i("div",{staticClass:"content"},[i("div",{staticClass:"topBox"},[i("div",{staticClass:"leftBox"},[i("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.$t("cryptoEyes.title"))}}),i("p",{staticClass:"desc",domProps:{innerHTML:t._s(t.$t("cryptoEyes.desc"))}}),i("div",{staticClass:"btnBox",on:{click:t.handleUploadClick}},[i("button",[i("i",{staticClass:"el-icon-camera-solid icon"}),i("span",[t._v(t._s(t.$t("cryptoEyes.pickPhoto")))])]),i("input",{ref:"inputUpload",staticStyle:{display:"none"},attrs:{type:"file",multiple:"",accept:"image/*"},on:{change:t.handleImgUploadChange}})])]),i("div",{staticClass:"rightBox"},[i("div",{staticClass:"rightBoxSize"}),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShowNewAvatar,expression:"!isShowNewAvatar"}],staticClass:"board"},[i("div",{ref:"bgImg",staticClass:"imgBox",style:t.bgImg.style},t._l(t.maskList,(function(e,a){return i("vue-draggable-resizable",{key:a,attrs:{w:e.width,h:e.height,x:e.x,y:e.y,"min-width":50,"min-height":50,handles:["tl","tm","mr","br","bm","bl","ml"],"class-name":"dragBox"},on:{dragging:t.onDrag,resizing:t.onResize,activated:function(e){return t.onActivated(a)}}},[i("div",{staticClass:"closeBox",on:{click:function(e){return t.onRemoveMask(a)}}},[i("i",{staticClass:"el-icon-error icon"})]),i("div",{staticClass:"maskBox"},[i("img",{attrs:{src:e.imgUrl,alt:"img err"}})])])})),1)]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShowBgImg,expression:"!isShowBgImg"}],staticClass:"imgTips"},[t._v(" "+t._s(t.$t("cryptoEyes.selectTips"))+" ")]),i("img",{directives:[{name:"show",rawName:"v-show",value:t.isShowNewAvatar,expression:"isShowNewAvatar"}],staticClass:"new-avatar",attrs:{src:t.newAvatar.imgUrl}}),i("div",{staticClass:"opBox"},[i("div",{staticClass:"iconBtn",on:{click:t.onShare}},[i("i",{staticClass:"el-icon-share icon"}),i("span",{staticClass:"label"},[t._v(t._s(t.$t("cryptoEyes.share")))])]),i("div",{staticClass:"iconBtn",on:{click:t.onDownload}},[i("i",{staticClass:"el-icon-download icon"}),i("span",{staticClass:"label"},[t._v(t._s(t.$t("cryptoEyes.download")))])])])])]),i("MaskList",{on:{onAddMask:t.onAddMask}}),i("p",{staticClass:"copyright"},[i("el-link",{attrs:{type:"success",target:"_blank",href:this.$origin}},[t._v("CoinTool.App")])],1)],1)],1)},s=[],n=i("4833"),o=i("efe2"),c=(i("7479"),i("c9b2"),i("f597"),i("6a61"),i("52c1")),r={zh:{cryptoEyes:{title:"CREATE<br>CRYPTO EYES",desc:"你是一个真正的加密货币爱好者吗?<br>选择你的激光眼，告诉全世界!",pickPhoto:"选择图片",selectTips:"请选择图片",share:"分享",download:"下载",placeUploadImg:"请先上传图片",isShowNewAvatarTips:"已生成，请重新选择图片",phoneSave:"生成图片成功，请长按图片保存",pcSave:"图片下载成功"}},en:{cryptoEyes:{title:"CREATE<br>CRYPTO EYES",desc:"Are you a true Crypto enthusiast? <br>Choose your laser eyes and tell the world!",pickPhoto:"Pick Photo",selectTips:"Please select picture",share:"Share",download:"Download",placeUploadImg:"Please pick a picture first",isShowNewAvatarTips:"Already generated, please re-select the image",phoneSave:"Image generated successful. please hold down the image to save",pcSave:"图片下载成功"}}},l=i("dc5e"),h=i("624b"),g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"maskList"},[i("ul",{staticClass:"ul"},t._l(t.list,(function(e,a){return i("li",{key:a,staticClass:"li",style:{backgroundImage:"url("+e.imgUrl+")"},on:{click:function(i){return t.handleSelectClick(e.imgUrl)}}})})),0)])},u=[],d=i("8252"),p=i.n(d),m=i("aa1b"),w=i.n(m),f=i("daf6"),v=i.n(f),b=i("42c1"),y=i.n(b),k=i("91b1"),C=i.n(k),S=i("cb20"),x=i.n(S),U=i("ecac"),A=i.n(U),I=i("45bbf"),$=i.n(I),E={data:function(){return{list:[{name:"light-hit-1",imgUrl:p.a},{name:"light-hit-2",imgUrl:w.a},{name:"light-hit-3",imgUrl:v.a},{name:"light-hit-4",imgUrl:y.a},{name:"light-hit-5",imgUrl:C.a},{name:"light-hit-6",imgUrl:x.a},{name:"light-hit-7",imgUrl:A.a},{name:"light-hit-8",imgUrl:$.a}]}},created:function(){},methods:{handleSelectClick:function(t){this.$emit("onAddMask",t)}}},L=E,P=(i("9e07"),i("5d22")),O=Object(P["a"])(L,g,u,!1,null,"3708c266",null),B=O.exports,N=i("20e7"),R=i.n(N),_=i("548a"),j=i.n(_),T=(i("e764"),i("0171")),D=i.n(T),M="cryptoEyes",z={name:M,inject:["onCheckConnect"],components:{ShareDialog:l["a"],VueDraggableResizable:R.a,MaskList:B},data:function(){return{isShowBgImg:!1,bgImg:{width:360,height:360,imgUrl:null,style:null},isShowNewAvatar:!1,newAvatar:{imgUrl:"",width:360,height:360},maskListActiveIndex:0,maskList:[]}},computed:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["isConnect","account","isPc","language","isAndroid"])),{},{scaleNumber:function(){return this.isPc?1:2}}),created:function(){this.$i18n.getLocaleMessage("en")[M]||(this.$i18n.mergeLocaleMessage("en",r.en),this.$i18n.mergeLocaleMessage("zh",r.zh))},mounted:function(){this.onViewDemo()},methods:{onViewDemo:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(h["a"])(D.a,"elon");case 2:return i=e.sent,e.next=5,t.handleImgUploadChange(i,!0);case 5:t.isPc&&(t.maskList=[{width:75,height:75,x:114,y:90,imgUrl:x.a},{width:75,height:75,x:155,y:90,imgUrl:x.a}]);case 6:case"end":return e.stop()}}),e)})))()},onReupload:function(){this.isShowNewAvatar=!1,this.isShowBgImg=!1,this.maskList=[]},handleImgUploadChange:function(t){var e=arguments,i=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=e.length>1&&void 0!==e[1]&&e[1],a.prev=1,a.abrupt("return",new Promise((function(e){var a=null;a=s?t:t.target.files[0];var n=new FileReader;if(i.isShowNewAvatar&&(i.isShowNewAvatar=!1),!/image.*/.test(a.type))return e(),!1;i.onReupload(),n.readAsDataURL(a),n.onload=function(t){var a=new Image;a.src=t.target.result,a.onload=function(){var s=a.height*(i.$refs.bgImg.offsetWidth/a.width);i.bgImg.height=s*i.scaleNumber,i.bgImg.width=i.$refs.bgImg.offsetWidth*i.scaleNumber,i.bgImg.imgUrl=t.target.result,i.bgImg.style={backgroundImage:"url(".concat(t.target.result,")"),backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",height:"".concat(s,"px")},i.isShowBgImg=!0,e()}}})));case 5:return a.prev=5,a.t0=a["catch"](1),a.abrupt("return",!1);case 8:case"end":return a.stop()}}),a,null,[[1,5]])})))()},handleUploadClick:function(){this.$refs["inputUpload"].click()},onResize:function(t,e,i,a){var s=Object(o["a"])(Object(o["a"])({},this.maskList[this.maskListActiveIndex]),{},{x:t,y:e,width:i,height:a});this.$set(this.maskList,this.maskListActiveIndex,s)},onRemoveMask:function(t){this.maskList.splice(t,1)},onActivated:function(t){this.maskListActiveIndex=t},onDrag:function(t,e){var i=Object(o["a"])(Object(o["a"])({},this.maskList[this.maskListActiveIndex]),{},{x:t,y:e});this.$set(this.maskList,this.maskListActiveIndex,i)},onAddMask:function(t){if(this.isShowBgImg)if(this.isShowNewAvatar)this.$message.error(this.$t("cryptoEyes.isShowNewAvatarTips"));else if(0===this.maskList.length)this.maskList.push({width:75,height:75,x:this.isPc?100:20,y:this.isPc?100:40,imgUrl:t});else{var e=this.maskList[this.maskList.length-1];this.maskList.push(Object(o["a"])(Object(o["a"])({},e),{},{x:e.x+70,imgUrl:t}))}else this.$message.error(this.$t("cryptoEyes.placeUploadImg"))},onShare:function(){this.$refs.ShareDialog.show()},onDownloadImg:function(){var t=document.createElement("a");t.download="crypto-eyes.png",t.style.display="none",t.href=this.newAvatar.imgUrl,document.body.appendChild(t),t.click(),document.body.removeChild(t)},onDownload:function(){var t=this;if(this.isShowBgImg){var e=new j.a({width:this.bgImg.width,height:this.bgImg.height}),i=e.background(this.bgImg.imgUrl,{left:0,top:0,type:"contain"});this.maskList.forEach((function(e){i=i.add(e.imgUrl,{width:e.width*t.scaleNumber,height:e.height*t.scaleNumber,pos:{x:e.x*t.scaleNumber,y:e.y*t.scaleNumber}})})),i.draw({type:"png",quality:1,success:function(e){t.newAvatar.imgUrl=e,t.newAvatar.width=t.bgImg.width,t.newAvatar.height=t.bgImg.height,t.isShowNewAvatar=!0,t.isPc||t.isAndroid?(t.onDownloadImg(),t.$message.success(t.$t("cryptoEyes.pcSave"))):t.$message.success(t.$t("cryptoEyes.phoneSave"))}})}else this.$message.error(this.$t("cryptoEyes.placeUploadImg"))}}},F=z,q=(i("7c1c"),Object(P["a"])(F,a,s,!1,null,"39b563ad",null));e["default"]=q.exports},"42c1":function(t,e,i){t.exports=i.p+"static/img/light-hit-4.048c5de9.png"},"45bbf":function(t,e,i){t.exports=i.p+"static/img/light-hit-8.ecd3a90b.png"},"4fa0":function(t,e,i){},"624b":function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return c}));var a=i("4833"),s=(i("6a61"),i("37de"),i("22f9"),i("63f1"),i("e3a7"),i("7479"),i("91cc"),i("2c1c"),i("48c5"),i("0f02"),i("782e"),i("fceb"),i("e5cb"),i("ecfe"),i("0e9c"),i("cfa9"),i("6bfd"),i("583c"),i("1e68"),i("b0c7"),i("6237"),i("7ad5"),i("ff5e"),i("b606"),i("3a56"),i("7e59"),i("5bf0"),i("f6ed"),i("3f1a"),i("eb26"),function(t,e){var i=document.createElement("canvas"),a=i.getContext("2d"),s=new Image;s.crossOrigin="Anonymous",s.onload=function(){i.height=s.height,i.width=s.width,a.drawImage(s,0,0);var t=i.toDataURL("image/png");e(t),i=null},s.src=t}),n=function(t,e){var i=t.split(","),a=i[0].match(/:(.*?);/)[1],s=atob(i[1]),n=s.length,o=new Uint8Array(n);while(n--)o[n]=s.charCodeAt(n);return new File([o],e,{type:a})},o=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var i,a=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=a.length>1&&void 0!==a[1]?a[1]:"imgName",t.abrupt("return",new Promise((function(t){s(e,(function(e){var a=n(e,i);t(a)}))})));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=document.createElement("a");e.setAttribute("href",t),e.setAttribute("download","");var i=document.createEvent("MouseEvents");i.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!0,!1,0,null),e.dispatchEvent(i)}},"7c1c":function(t,e,i){"use strict";i("aa3c4")},8252:function(t,e,i){t.exports=i.p+"static/img/light-hit-1.808de3e1.png"},"91b1":function(t,e,i){t.exports=i.p+"static/img/light-hit-5.8047e00b.png"},"9e07":function(t,e,i){"use strict";i("c27f")},aa1b:function(t,e,i){t.exports=i.p+"static/img/light-hit-2.35b3bce3.png"},aa3c4:function(t,e,i){},c27f:function(t,e,i){},cb20:function(t,e,i){t.exports=i.p+"static/img/light-hit-6.d5d80367.png"},daf6:function(t,e,i){t.exports=i.p+"static/img/light-hit-3.c4f099c3.png"},dc5e:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{staticClass:"dialog",attrs:{width:t.isPc?"400px":"90%",height:"800px",visible:t.isShowDialog,modal:!0,top:"35vh",title:"Share"},on:{"update:visible":function(e){t.isShowDialog=e}}},[i("div",{staticClass:"dialogBox"},[i("ul",[i("li",{on:{click:t.onShareTwitter}},[i("div",{staticClass:"iconBox"},[i("svg-icon",{staticClass:"icon",attrs:{"icon-class":"twitter"}})],1),i("p",[t._v("Twitter")])]),i("li",{on:{click:t.onShareFacebook}},[i("div",{staticClass:"iconBox"},[i("svg-icon",{staticClass:"icon",staticStyle:{color:"#3C5A99"},attrs:{"icon-class":"facebook"}})],1),i("p",[t._v("Facebook")])]),i("li",{on:{click:t.onShareTelegram}},[i("div",{staticClass:"iconBox"},[i("svg-icon",{staticClass:"icon",attrs:{"icon-class":"telegram"}})],1),i("p",[t._v("Telegram")])]),i("li",{on:{click:t.onShareReddit}},[i("div",{staticClass:"iconBox"},[i("svg-icon",{staticClass:"icon",staticStyle:{color:"#F54504"},attrs:{"icon-class":"reddit"}})],1),i("p",[t._v("Reddit")])]),i("li",{on:{click:t.onShareWhatsApp}},[i("div",{staticClass:"iconBox"},[i("svg-icon",{staticClass:"icon",attrs:{"icon-class":"whatsapp"}})],1),i("p",[t._v("WhatsApp")])]),i("li",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:""+t.$origin+t.$route.fullPath,expression:"`${$origin}${$route.fullPath}`",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}]},[i("div",{staticClass:"iconBox"},[i("svg-icon",{staticClass:"icon",staticStyle:{color:"#2F3CF4"},attrs:{"icon-class":"copy"}})],1),i("p",[t._v("Copy Link")])])])])])},s=[],n=i("efe2"),o=(i("5502"),i("f597"),i("8b79"),i("52c1")),c={inject:["onCopySuccess"],components:{},props:{text:{type:String,require:!0},url:{type:String,require:!1},twitterTags:{type:String,require:!1,default:"crypto"}},data:function(){return{loading:!0,isShowDialog:!1,appUrl:"https://cointool.app"}},computed:Object(n["a"])(Object(n["a"])({},Object(o["b"])(["isPc"])),{},{shareUrl:function(){return this.url&&""!==this.url?this.url:"https://cointool.app".concat(this.$route.fullPath)}}),watch:{},created:function(){},mounted:function(){},methods:{show:function(){this.isShowDialog=!this.isShowDialog},getUrlParamStr:function(t){var e="",i=Object.keys(t);return i.forEach((function(a,s){e+="".concat(a,"=").concat(encodeURIComponent(t[a])),s!==i.length-1&&(e+="&")})),e},onShareTwitter:function(){var t={text:this.text,url:this.shareUrl,hashtags:this.twitterTags,via:"CoinTool"};this.windowOpen("https://twitter.com/intent/tweet?".concat(this.getUrlParamStr(t)))},onShareFacebook:function(){var t={u:this.shareUrl,quote:this.text};this.windowOpen("https://www.facebook.com/sharer/sharer.php?".concat(this.getUrlParamStr(t)))},onShareTelegram:function(){var t={text:this.text,url:this.shareUrl};this.windowOpen("https://t.me/share?".concat(this.getUrlParamStr(t)))},onShareReddit:function(){var t={title:this.text,url:this.shareUrl};this.windowOpen("https://www.reddit.com/submit?".concat(this.getUrlParamStr(t)))},onShareWhatsApp:function(){var t={text:"".concat(this.text," ").concat(this.shareUrl)};this.windowOpen("https://api.whatsapp.com/send/?".concat(this.getUrlParamStr(t)))},windowOpen:function(t){window.open(t,"","height=500, width=600, top=50, left=50, resizable=yes, location=yes, status=yes, toolbar=yes, menubar=yes")}}},r=c,l=(i("078c9"),i("5d22")),h=Object(l["a"])(r,a,s,!1,null,"54a3430f",null);e["a"]=h.exports},ecac:function(t,e,i){t.exports=i.p+"static/img/light-hit-7.4d971ba1.png"}}]);