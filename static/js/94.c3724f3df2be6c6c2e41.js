webpackJsonp([94],{"9s9y":function(n,e,t){var a=t("OMts");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t("rjj0")("7294d93b",a,!0,{})},OMts:function(n,e,t){e=n.exports=t("FZ+f")(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},"kJL/":function(n,e,t){"use strict";function a(n){t("9s9y")}Object.defineProperty(e,"__esModule",{value:!0});var s=t("woOf"),o=t.n(s),r=t("lcoF"),l=t("P9l9"),i=t("mtWM"),d=t.n(i),c=t("x1ym"),u={mixins:[r.a],data:function(){var n=this;return{params:{},dataInfo:{username:"",groupId:"",msgContent:"",msgTitle:""},rules:{msgTitle:[c.a.required("此项必填")],username:[{validator:function(e,t,a){""==t?""==n.dataInfo.groupId?a(new Error("用户名和用户组,必填一项")):a():d.a.post(l.a.memberCheckName,{username:t}).then(function(n){"200"==n.code?n.body.result?a(new Error("用户名不存在")):a():a(new Error("服务器响应异常"))})},trigger:"blur"}]},groups:[]}},methods:{getRoleIds:function(n){},getDataInfo:function(n){var e=this,t=this.$api;d.a.all([d.a.post(t.messageGet,{id:n}),d.a.post(t.groupList)]).then(d.a.spread(function(n,t){e.dataInfo=o()(e.dataInfo,n.body),e.groups=t.body,e.$refs.form.resetFields(),e.loading=!1})).catch(function(n){e.loading=!1})},add:function(n){null!=n?this.saveDataInfo(n,this.$api.messageSend,this.dataInfo,"list"):this.saveDataInfo(!1,this.$api.messageSave,this.dataInfo,"list")}},created:function(){this.getDataInfo(this.id)}},m=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[t("cms-back"),n._v(" "),t("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"162px"}},[t("el-form-item",{staticClass:"flex-50",attrs:{label:"收件人",prop:"username"}},[t("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.username,callback:function(e){n.$set(n.dataInfo,"username",e)},expression:"dataInfo.username"}})],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"会员组管理",prop:"groupId"}},[t("el-select",{model:{value:n.dataInfo.groupId,callback:function(e){n.$set(n.dataInfo,"groupId",e)},expression:"dataInfo.groupId"}},[t("el-option",{attrs:{label:"请选择",value:""}}),n._v(" "),n._l(n.groups,function(n,e){return t("el-option",{key:e,attrs:{label:n.name,value:n.id}})})],2),n._v(" "),t("span",{staticClass:"gray"},[n._v("请填写收件人或者选择会员组（两者必选其一，选择会员组批量发送站内信）")])],1),n._v(" "),t("el-form-item",{staticClass:"flex-100",attrs:{label:"标题",prop:"msgTitle"}},[t("el-input",{staticClass:"cms-width",attrs:{type:"required"},model:{value:n.dataInfo.msgTitle,callback:function(e){n.$set(n.dataInfo,"msgTitle",e)},expression:"dataInfo.msgTitle"}})],1),n._v(" "),t("el-form-item",{staticClass:"flex-100",attrs:{label:"内容",prop:"msgContent"}},[t("el-input",{attrs:{type:"textarea",rows:15,placeholder:"请输入内容"},model:{value:n.dataInfo.msgContent,callback:function(e){n.$set(n.dataInfo,"msgContent",e)},expression:"dataInfo.msgContent"}})],1),n._v(" "),t("div",{staticClass:"form-footer"},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/message/add",expression:"'/message/add'"}],attrs:{type:"warning"},on:{click:function(e){n.add(!0)}}},[n._v("发送并继续添加")]),n._v(" "),t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/message/add",expression:"'/message/add'"}],attrs:{type:"primary"},on:{click:function(e){n.add(!1)}}},[n._v("发送")]),n._v(" "),t("el-button",{attrs:{type:"info"},on:{click:n.$reset}},[n._v("重置")])],1)],1)],1)},f=[],p={render:m,staticRenderFns:f},g=p,v=t("VU/8"),I=a,b=v(u,g,!1,I,null,null);e.default=b.exports}});