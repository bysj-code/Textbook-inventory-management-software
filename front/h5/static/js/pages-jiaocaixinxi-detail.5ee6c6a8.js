(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jiaocaixinxi-detail"],{"08ee":function(t,i,e){"use strict";var r=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("28a5"),e("f559"),e("55dd"),e("96cf");var n=r(e("3b8d")),a={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=i.id,i.userid&&(this.userid=i.userid),this.init();case 3:case"end":return t.stop()}}),t,this)})));function i(i){return t.apply(this,arguments)}return i}(),onUnload:function(){this.timer&&clearInterval(this.timer)},onShow:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(i){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=uni.getStorageSync("nowTable"),t.next=3,this.$api.session(e);case 3:r=t.sent,this.user=r.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()}));case 6:case"end":return t.stop()}}),t,this)})));function i(i){return t.apply(this,arguments)}return i}(),destroyed:function(){},methods:{onPayTap:function(){uni.setStorageSync("paytable","jiaocaixinxi"),uni.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(t){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(t.id,"&userid=")+this.userid)},onAcrossTap:function(t,i,e,r,n){if(uni.setStorageSync("crossTable","jiaocaixinxi"),uni.setStorageSync("crossObj",this.detail),uni.setStorageSync("statusColumnName",e),uni.setStorageSync("statusColumnValue",n),uni.setStorageSync("tips",r),""!=e&&!e.startsWith("[")){var a=uni.getStorageSync("crossObj");for(var o in a)if(o==e&&a[o]==n)return void this.$utils.msg(r)}this.$utils.jump("../".concat(t,"/add-or-update?cross=true"))},init:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.timer&&clearInterval(this.timer),t.next=3,this.$api.info("jiaocaixinxi",this.id);case 3:i=t.sent,this.detail=i.data,this.swiperList=this.detail.jiaocaifengmian?this.detail.jiaocaifengmian.split(","):[];case 6:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i.endSuccess(i.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function i(i){return t.apply(this,arguments)}return i}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(t){var i=this;t=i.$base.url+t,uni.downloadFile({url:t,success:function(e){200===e.statusCode&&(i.$utils.msg("下载成功"),window.open(t))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$utils.jump("../discussjiaocaixinxi/add-or-update?refid=".concat(this.id));case 1:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),onSHTap:function(){this.$refs.popup.open()}}};i.default=a},"0be8":function(t,i,e){var r=e("61fb");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=e("4f06").default;n("1a997373",r,!0,{sourceMap:!1,shadowMode:!1})},"456b":function(t,i,e){"use strict";var r=e("0be8"),n=e.n(r);n.a},"581e":function(t,i,e){"use strict";e.r(i);var r=e("08ee"),n=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(i,t,(function(){return r[t]}))}(a);i["default"]=n.a},"61fb":function(t,i,e){var r=e("24fb");i=r(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-05cb6b77]{min-height:calc(100vh - 44px);box-sizing:border-box}.seat-list[data-v-05cb6b77]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;background:#fff;margin:%?20?%;border-radius:%?20?%;padding:%?20?%;font-size:%?30?%}.seat-list .seat-item[data-v-05cb6b77]{width:33.33%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:%?20?%}.seat-list .seat-item .seat-icon[data-v-05cb6b77]{width:%?50?%;height:%?50?%;margin-bottom:%?10?%}uni-audio[data-v-05cb6b77]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.audio[data-v-05cb6b77] .uni-audio-default{width:inherit}',""]),t.exports=i},"7ef9":function(t,i,e){"use strict";var r={"mescroll-uni":e("f05e").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("mescroll-uni",{attrs:{up:t.upOption,down:t.downOption},on:{init:function(i){arguments[0]=i=t.$handleEvent(i),t.mescrollInit.apply(void 0,arguments)},down:function(i){arguments[0]=i=t.$handleEvent(i),t.downCallback.apply(void 0,arguments)},up:function(i){arguments[0]=i=t.$handleEvent(i),t.upCallback.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"container",style:{minHeight:"100vh",width:"100%",padding:"0px 0 132rpx",position:"relative",background:"url() fixed,#fff",height:"auto"}},[e("v-uni-swiper",{staticClass:"swiper",style:{border:"0px dotted #f7de91",padding:"0px ",margin:"40rpx auto",borderColor:"#f4e5e2",alignItems:"center",display:"flex",justifyContent:"center",borderRadius:"40rpx",background:"#fff",borderWidth:"0px",width:"calc(100% - 48rpx)",borderStyle:"solid",height:"480rpx"},attrs:{"indicator-dots":!1,autoplay:!0,circular:!1,"indicator-active-color":"#000000","indicator-color":"rgba(0, 0, 0, .3)",duration:500,interval:5e3,vertical:!1}},t._l(t.swiperList,(function(i,r){return e("v-uni-swiper-item",{key:r,style:{width:"100%",height:"100%"}},["http"==i.substring(0,4)?e("v-uni-image",{style:{width:"auto",margin:"0px auto",maxHeight:"100%",display:"block",height:"100%",maxWidth:"100%"},attrs:{mode:"aspectFill",src:i}}):e("v-uni-image",{style:{width:"auto",margin:"0px auto",maxHeight:"100%",display:"block",height:"100%",maxWidth:"100%"},attrs:{mode:"aspectFill",src:t.baseUrl+i}})],1)})),1),e("v-uni-view",{staticClass:"detail-content",style:{padding:"0px 24rpx 24rpx",flexWrap:"wrap",background:"none",display:"flex",width:"100%",justifyContent:"space-between",height:"auto"}},[e("v-uni-view",{staticClass:"detail-list-item title",style:{padding:"2rpx 12rpx 2rpx",margin:"0px 0 20rpx 0",borderColor:"#d9eff0",borderRadius:"0px",flexWrap:"wrap",borderWidth:"0 0 2rpx",background:"#fff",display:"flex",width:"100%",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"8rpx 8rpx 0",color:"#11999e",textAlign:"right",width:"auto",lineHeight:"48rpx",fontSize:"28rpx",minWidth:"180rpx",fontWeight:"600"}},[t._v("教材标题：")]),e("v-uni-view",{staticClass:"text",style:{padding:"8rpx 8rpx 20rpx",margin:"0px 0 0",color:"#666",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.jiaocaibiaoti))])],1),e("v-uni-view",{staticClass:"detail-list-item title",style:{padding:"2rpx 12rpx 2rpx",margin:"0px 0 20rpx 0",borderColor:"#d9eff0",borderRadius:"0px",flexWrap:"wrap",borderWidth:"0 0 2rpx",background:"#fff",display:"flex",width:"100%",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"8rpx 8rpx 0",color:"#11999e",textAlign:"right",width:"auto",lineHeight:"48rpx",fontSize:"28rpx",minWidth:"180rpx",fontWeight:"600"}},[t._v("教材分类：")]),e("v-uni-view",{staticClass:"text",style:{padding:"8rpx 8rpx 20rpx",margin:"0px 0 0",color:"#666",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.jiaocaifenlei))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"2rpx 12rpx 2rpx",margin:"0px 0 20rpx 0",borderColor:"#d9eff0",borderRadius:"0px",flexWrap:"wrap",borderWidth:"0 0 2rpx",background:"#fff",display:"flex",width:"100%",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"8rpx 8rpx 0",color:"#11999e",textAlign:"right",width:"auto",lineHeight:"48rpx",fontSize:"28rpx",minWidth:"180rpx",fontWeight:"600"}},[t._v("所属学院：")]),e("v-uni-view",{staticClass:"text",style:{padding:"8rpx 8rpx 20rpx",margin:"0px 0 0",color:"#666",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.xueyuan))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"2rpx 12rpx 2rpx",margin:"0px 0 20rpx 0",borderColor:"#d9eff0",borderRadius:"0px",flexWrap:"wrap",borderWidth:"0 0 2rpx",background:"#fff",display:"flex",width:"100%",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"8rpx 8rpx 0",color:"#11999e",textAlign:"right",width:"auto",lineHeight:"48rpx",fontSize:"28rpx",minWidth:"180rpx",fontWeight:"600"}},[t._v("所属专业：")]),e("v-uni-view",{staticClass:"text",style:{padding:"8rpx 8rpx 20rpx",margin:"0px 0 0",color:"#666",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.zhuanye))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"2rpx 12rpx 2rpx",margin:"0px 0 20rpx 0",borderColor:"#d9eff0",borderRadius:"0px",flexWrap:"wrap",borderWidth:"0 0 2rpx",background:"#fff",display:"flex",width:"100%",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"8rpx 8rpx 0",color:"#11999e",textAlign:"right",width:"auto",lineHeight:"48rpx",fontSize:"28rpx",minWidth:"180rpx",fontWeight:"600"}},[t._v("所属年级：")]),e("v-uni-view",{staticClass:"text",style:{padding:"8rpx 8rpx 20rpx",margin:"0px 0 0",color:"#666",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.nianji))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"2rpx 12rpx 2rpx",margin:"0px 0 20rpx 0",borderColor:"#d9eff0",borderRadius:"0px",flexWrap:"wrap",borderWidth:"0 0 2rpx",background:"#fff",display:"flex",width:"100%",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"8rpx 8rpx 0",color:"#11999e",textAlign:"right",width:"auto",lineHeight:"48rpx",fontSize:"28rpx",minWidth:"180rpx",fontWeight:"600"}},[t._v("库存：")]),e("v-uni-view",{staticClass:"text",style:{padding:"8rpx 8rpx 20rpx",margin:"0px 0 0",color:"#666",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.shuliang))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"2rpx 12rpx 2rpx",margin:"0px 0 20rpx 0",borderColor:"#d9eff0",borderRadius:"0px",flexWrap:"wrap",borderWidth:"0 0 2rpx",background:"#fff",display:"flex",width:"100%",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"8rpx 8rpx 0",color:"#11999e",textAlign:"right",width:"auto",lineHeight:"48rpx",fontSize:"28rpx",minWidth:"180rpx",fontWeight:"600"}},[t._v("规格：")]),e("v-uni-view",{staticClass:"text",style:{padding:"8rpx 8rpx 20rpx",margin:"0px 0 0",color:"#666",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.guige))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"2rpx 12rpx 2rpx",margin:"0px 0 20rpx 0",borderColor:"#d9eff0",borderRadius:"0px",flexWrap:"wrap",borderWidth:"0 0 2rpx",background:"#fff",display:"flex",width:"100%",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"8rpx 8rpx 0",color:"#11999e",textAlign:"right",width:"auto",lineHeight:"48rpx",fontSize:"28rpx",minWidth:"180rpx",fontWeight:"600"}},[t._v("教材简介")]),e("v-uni-view",{staticClass:"text",style:{padding:"8rpx 8rpx 20rpx",margin:"0px 0 0",color:"#666",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.jiaocaijianjie))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"2rpx 12rpx 2rpx",margin:"0px 0 20rpx 0",borderColor:"#d9eff0",borderRadius:"0px",flexWrap:"wrap",borderWidth:"0 0 2rpx",background:"#fff",display:"flex",width:"100%",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"8rpx 8rpx 0",color:"#11999e",textAlign:"right",width:"auto",lineHeight:"48rpx",fontSize:"28rpx",minWidth:"180rpx",fontWeight:"600"}},[t._v("教材详情")]),e("v-uni-view",{staticClass:"text",style:{padding:"8rpx 8rpx 20rpx",margin:"0px 0 0",color:"#666",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.jiaocaixiangqing))])],1),e("v-uni-view",{staticClass:"bottom-content bg-white tabbar border shop",style:{width:"100%",padding:"20rpx 0px",flexWrap:"wrap",background:"none",display:"flex",height:"auto"}},[t.userid&&t.isAuth("jiaocaixinxi","教材入库")?e("v-uni-button",{staticClass:"cu-btn bg-brown round shadow-blur",style:{border:"0",padding:"0 20rpx",margin:"0",color:"rgb(255, 255, 255)",background:"rgb(255, 170, 51)",width:"auto",fontSize:"28rpx",height:"80rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onAcrossTap("jiaocairuku","","","")}}},[t._v("教材入库")]):t._e(),!t.userid&&t.isAuthFront("jiaocaixinxi","教材入库")?e("v-uni-button",{staticClass:"cu-btn bg-brown round shadow-blur",style:{border:"0",padding:"0 20rpx",margin:"0",color:"rgb(255, 255, 255)",background:"rgb(255, 170, 51)",width:"auto",fontSize:"28rpx",height:"80rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onAcrossTap("jiaocairuku","","","")}}},[t._v("教材入库")]):t._e(),t.userid&&t.isAuth("jiaocaixinxi","教材出库")?e("v-uni-button",{staticClass:"cu-btn bg-brown round shadow-blur",style:{border:"0",padding:"0 20rpx",margin:"0",color:"rgb(255, 255, 255)",background:"rgb(255, 170, 51)",width:"auto",fontSize:"28rpx",height:"80rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onAcrossTap("jiaocaichuku","","","")}}},[t._v("教材出库")]):t._e(),!t.userid&&t.isAuthFront("jiaocaixinxi","教材出库")?e("v-uni-button",{staticClass:"cu-btn bg-brown round shadow-blur",style:{border:"0",padding:"0 20rpx",margin:"0",color:"rgb(255, 255, 255)",background:"rgb(255, 170, 51)",width:"auto",fontSize:"28rpx",height:"80rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onAcrossTap("jiaocaichuku","","","")}}},[t._v("教材出库")]):t._e()],1)],1)],1)],1)],1)],1)},a=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return r}))},ad0c:function(t,i,e){"use strict";e.r(i);var r=e("7ef9"),n=e("581e");for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);e("456b");var o,s=e("f0c5"),d=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"05cb6b77",null,!1,r["a"],o);i["default"]=d.exports}}]);