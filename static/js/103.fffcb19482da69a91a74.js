webpackJsonp([103],{FUHs:function(n,t,e){"use strict";function a(n){e("sFZ2")}Object.defineProperty(t,"__esModule",{value:!0});var s=(e("mtWM"),e("nSkA")),o=(e("x1ym"),{data:function(){return{dataInfo:{id:null,name:null,icon:null,spDesc:null,spLiveNotice:null},pageType:"",showImage:!0}},methods:{reset:function(){var n=this;this.dataInfo.id=null,this.dataInfo.name=null,this.dataInfo.spLiveNotice=null,this.dataInfo.icon=null,this.dataInfo.spDesc=null,this.showImage=!1,setTimeout(function(){n.showImage=!0},100)},getUrl:function(n){this.dataInfo.icon=n},addSp:function(n){var t=this;s.a.post(this.$api.spAdd,this.dataInfo).then(function(n){0==n.data.errorCode?(t.successMessage("操作成功"),t.routerLink("/sp/list","","")):n.data.errorMessage?t.errorMessage(n.data.errorMessage):t.errorMessage("操作失败")}).catch(function(n){console.log(n)})}},created:function(){this.$store.dispatch("setCollapse",!0)},mounted:function(){var n=this;this.$route.query.id;this.pageType=this.$route.query.type,"update"==this.pageType&&(this.dataInfo.name=this.$route.query.name,this.dataInfo.icon=this.$route.query.icon,this.dataInfo.id=this.$route.query.id,this.dataInfo.spDesc=this.$route.query.spDesc,this.dataInfo.spLiveNotice=this.$route.query.spLiveNotice,this.showImage=!1,setTimeout(function(){n.showImage=!0},100))}}),i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{staticClass:"cms-body"},[e("cms-back"),n._v(" "),e("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,"label-width":"162px"}},[e("el-form-item",{staticClass:"flex-50",attrs:{label:"spId",prop:"id"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.id,callback:function(t){n.$set(n.dataInfo,"id",t)},expression:"dataInfo.id"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"sp名称",prop:"name"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.name,callback:function(t){n.$set(n.dataInfo,"name",t)},expression:"dataInfo.name"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"详情",prop:"spDesc"}},[e("el-input",{attrs:{type:"textarea",rows:2,resize:"none"},model:{value:n.dataInfo.spDesc,callback:function(t){n.$set(n.dataInfo,"spDesc",t)},expression:"dataInfo.spDesc"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"房间公告",prop:"spLiveNotice"}},[e("el-input",{attrs:{type:"textarea",rows:2,resize:"none"},model:{value:n.dataInfo.spLiveNotice,callback:function(t){n.$set(n.dataInfo,"spLiveNotice",t)},expression:"dataInfo.spLiveNotice"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"缩略图",prop:"icon"}},[n.showImage?e("uploader",{attrs:{default:n.dataInfo.icon},on:{change:n.getUrl}}):n._e()],1),n._v(" "),e("div",{staticClass:"form-footer"},["add"==n.pageType?e("el-button",{attrs:{type:"primary"},on:{click:function(t){n.addSp("add")}}},[n._v("提交")]):n._e(),n._v(" "),"update"==n.pageType?e("el-button",{attrs:{type:"primary"},on:{click:function(t){n.addSp("update")}}},[n._v("更新")]):n._e(),n._v(" "),e("el-button",{attrs:{type:"info"},on:{click:n.reset}},[n._v("重置")])],1)],1)],1)},r=[],l={render:i,staticRenderFns:r},c=l,d=e("VU/8"),p=a,u=d(o,c,!1,p,null,null);t.default=u.exports},qKrY:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},sFZ2:function(n,t,e){var a=e("qKrY");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("59013cd0",a,!0,{})}});