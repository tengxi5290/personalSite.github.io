webpackJsonp([155],{"23rQ":function(e,t,a){"use strict";function s(e){a("yImo")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("5HJ5"),r=(a("mtWM"),a("x1ym")),i=a("nSkA"),o={mixins:[n.a],data:function(){var e=r.a.required("此项必填");r.a.number("只能输入数字");return{props:{label:"name",children:"zones",isLeaf:"isChild",id:"id"},count:1,dataInfo:{name:""},rules:{name:[e]},unableChannelList:[],buttonDisable:!0,checkStrict:!0,currentChannel:null,refresh:!0}},methods:{reload:function(){var e=this;this.refresh=!1,setTimeout(function(){e.refresh=!0},0)},check:function(e,t){var a=[];a.push(e.id),this.currentChannel=e,this.$refs.tree.setCheckedKeys(a,!1)},getTreeNodes:function(e,t,a){var s=this;this.rotating=!0,i.a.get(this.$api.modelList).then(function(e){if("0"==e.data.errorCode){s.rotating=!1;var a=[];for(var n in e.data.data){var r={};-1!=s.unableChannelList.indexOf(e.data.data[n].id)&&(r.disabled=!0),r.id=e.data.data[n].id,r.isChild=!e.data.data[n].haveChildren,r.name=e.data.data[n].showName,r.data=e.data.data,a.push(r)}return t(a)}e.data.errorMessage?s.errorMessage(e.data.errorMessage):s.errorMessage("请求失败")}).catch(function(e){s.rotating=!1})},loadNode:function(e,t){var a=this;this.unableChannelList=[],this.getUnableCahnnelList(function(){0===e.level&&a.getTreeNodes(e,t,0),e.level>0&&a.getTreeNodes(e,t,e.data.id)})},add:function(){var e=this,t={};t.modelId=this.currentChannel.id,t.modelName=this.currentChannel.name,t.syncModel=this.dataInfo.name,i.a.post(this.$api.syncModel,t).then(function(t){"0"==t.data.errorCode?(e.successMessage("操作成功"),setTimeout(function(){e.routerLink("/sync/model","","")},1e3)):t.data.errorMessage?e.errorMessage(t.data.errorMessage):e.errorMessage("操作失败")}).catch(function(e){console.log(e)})},getUnableCahnnelList:function(e){var t=this;i.a.get(this.$api.syncModelList).then(function(a){if("0"==a.data.errorCode){for(var s in a.data.data)t.unableChannelList.push(a.data.data[s].modelId);e()}else a.data.errorMessage?t.errorMessage(a.data.errorMessage):t.errorMessage("操作失败")}).catch(function(e){console.log(e)})}},mounted:function(){var e=document.body.clientHeight;$(".cms-body").css("minHeight",e-110+"px"),this.$store.dispatch("setCollapse",!0)}},l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"cms-body flex"},[a("div",{staticClass:"cms-content-left"},[a("div",{staticClass:"tree-layout"},[a("div",{staticClass:"tree"},[a("div",{staticClass:"reflash"},[a("div",{on:{click:e.reload}},[a("span",{staticClass:"el-icon-refresh"}),e._v(" 刷新 ")])]),e._v(" "),e.refresh?a("el-tree",{ref:"tree",attrs:{props:e.props,load:e.loadNode,lazy:"","show-checkbox":"",indent:16,"node-key":e.props.id,"check-strictly":e.checkStrict},on:{check:e.check},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.node,n=t.data;return a("span",{staticClass:"custom-tree-node"},[a("span",{attrs:{title:s.label}},[e._v(e._s(s.label)+" "+e._s(n.id))])])}}])}):e._e()],1)])]),e._v(" "),a("div",{staticClass:"cms-content-right"},[a("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:e.dataInfo,rules:e.rules,"label-width":"162px"}},[a("el-form-item",{staticClass:"flex-50",attrs:{label:"同步字段",prop:"name"}},[a("el-input",{staticClass:"cms-width",model:{value:e.dataInfo.name,callback:function(t){e.$set(e.dataInfo,"name",t)},expression:"dataInfo.name"}})],1),e._v(" "),a("div",{staticClass:"cms-list-footer"},[a("el-button",{staticStyle:{margin:"0 auto"},attrs:{type:"primary",disabled:""!=e.dataInfo.name&&null==e.currentChannel},on:{click:e.add}},[e._v("添加")])],1)],1)],1)])},d=[],c={render:l,staticRenderFns:d},u=c,h=a("VU/8"),f=s,m=h(o,u,!1,f,null,null);t.default=m.exports},Diym:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])},yImo:function(e,t,a){var s=a("Diym");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("311ef54a",s,!0,{})}});