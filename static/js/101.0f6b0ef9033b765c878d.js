webpackJsonp([101],{JFsn:function(n,a,e){"use strict";function t(n){e("toKJ")}Object.defineProperty(a,"__esModule",{value:!0});var s=e("bOdI"),o=e.n(s),l=e("lcoF"),i=(e("mtWM"),e("x1ym")),r=e("nSkA"),d={mixins:[l.a],data:function(){var n,a=i.a.required("此项必填");i.a.number("只能输入数字");return n={fileList:[],cookie:!0,limit:1,dialogImageUrl:"",dialogVisible:!1,root:this.$route.query.pid,params:{queryUsername:"",https:""},domainCheck:!1,accessPathCheck:!1,rules:{name:[a],domain:[a],enable:[a],rootPath:[a],logo:[a],appId:[a],appKey:[a],spid:[a],shortName:[a],appSecret:[a]},ftpList:[],ossList:[],tplList:[],editTable:!1,dateList:!0},o()(n,"domainCheck",!1),o()(n,"accessPathCheck",!1),o()(n,"siteIdCheckRes",!1),n},methods:{getUrl:function(n){this.dataInfo.logo=n},handlePictureCardPreview:function(n){this.dialogImageUrl=n.url,this.dialogVisible=!0},getFieldImg:function(n,a){this.dataInfo.logo=n},remove:function(n,a){"remove"==n&&delete this.dataInfo.logo},getUserInfo:function(){var n=this;r.a.get(this.$api.user).then(function(a){"0"==a.data.errorCode?(Object(r.c)(a),n.loading=!1):a.data.errorMessage?n.errorMessage(a.data.errorMessage):n.errorMessage("请求失败")})},save:function(){var n=this;r.a.post(this.$api.site,{name:this.dataInfo.name,shortName:this.dataInfo.shortName,domain:this.dataInfo.domain,enable:this.dataInfo.enable,rootPath:this.dataInfo.rootPath,appId:this.dataInfo.appId,appKey:this.dataInfo.appKey,spid:this.dataInfo.spid,logo:this.dataInfo.logo,appSecret:this.dataInfo.appSecret}).then(function(a){"0"==a.data.errorCode?(n.successMessage("操作成功"),n.routerLink("/site/list")):a.data.errorMessage?n.errorMessage(a.data.errorMessage):n.errorMessage("操作失败")}).catch(function(n){console.log(n)})}},created:function(){this.loading=!0,this.getUserInfo(),this.$store.dispatch("setCollapse",!0)}},c=function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[e("cms-back"),n._v(" "),e("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"162px"}},[e("el-form-item",{staticClass:"flex-50",attrs:{label:"名称",prop:"name"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.name,callback:function(a){n.$set(n.dataInfo,"name",a)},expression:"dataInfo.name"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"站点简称",prop:"shortName"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.shortName,callback:function(a){n.$set(n.dataInfo,"shortName",a)},expression:"dataInfo.shortName"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"域名",prop:"domain"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.domain,callback:function(a){n.$set(n.dataInfo,"domain",a)},expression:"dataInfo.domain"}}),n._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:n.domainCheck,expression:"domainCheck"}],staticClass:"red"},[n._v("域名已存在，无法使用")])],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"是否可用",prop:"enable"}},[e("el-radio",{attrs:{label:!0},model:{value:n.dataInfo.enable,callback:function(a){n.$set(n.dataInfo,"enable",a)},expression:"dataInfo.enable"}},[n._v("是")]),n._v(" "),e("el-radio",{attrs:{label:!1},model:{value:n.dataInfo.enable,callback:function(a){n.$set(n.dataInfo,"enable",a)},expression:"dataInfo.enable"}},[n._v("否")])],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"根目录",prop:"rootPath"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.rootPath,callback:function(a){n.$set(n.dataInfo,"rootPath",a)},expression:"dataInfo.rootPath"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"appId",prop:"appId"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.appId,callback:function(a){n.$set(n.dataInfo,"appId",a)},expression:"dataInfo.appId"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"appKey",prop:"appKey"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.appKey,callback:function(a){n.$set(n.dataInfo,"appKey",a)},expression:"dataInfo.appKey"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"用户秘钥",prop:"appSecret"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.appSecret,callback:function(a){n.$set(n.dataInfo,"appSecret",a)},expression:"dataInfo.appSecret"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"站点图标",prop:"logo"}},[e("uploader",{on:{change:n.getUrl}})],1),n._v(" "),e("div",{staticClass:"form-footer"},[e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/site/add",expression:"'/site/add'"}],attrs:{type:"primary"},on:{click:function(a){n.save()}}},[n._v("提交")]),n._v(" "),e("el-button",{attrs:{type:"info"},on:{click:n.$reset}},[n._v("重置")])],1)],1)],1)},p=[],f={render:c,staticRenderFns:p},m=f,u=e("VU/8"),h=t,I=u(d,m,!1,h,null,null);a.default=I.exports},k6Nl:function(n,a,e){a=n.exports=e("FZ+f")(!1),a.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},toKJ:function(n,a,e){var t=e("k6Nl");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);e("rjj0")("4973573b",t,!0,{})}});