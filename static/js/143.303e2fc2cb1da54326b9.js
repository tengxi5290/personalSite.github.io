webpackJsonp([143],{SbpQ:function(t,e,n){var a=n("UH5i");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("60d1e388",a,!0,{})},UH5i:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.model-select[data-v-34e83f66]{\n        margin-bottom: 12px;\n}\n.input-list[data-v-34e83f66] {\n  width: 200px;\n  position: relative;\n  display: inline-block;\n  height: 200px;\n  z-index: 10;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);\n          box-shadow: 0 2px 12px 0 rgba(0,0,0,.1); \n  overflow: auto;\n}\n.triangle[data-v-34e83f66] {\n  margin-top: 10px;\n  margin-left: 15px;\n  width:0;\n  height:0;\n  border-width:0 7px 7px;\n  border-style:solid;\n  border-color:transparent transparent #333;/*透明 透明  灰*/\n  position:relative;\n  z-index: 9;\n}\n.triangle[data-v-34e83f66]::after {\n  content: '';\n  margin-left: -6px;\n  display: block;\n  width:0;\n  height:0;\n  border-style:solid;\n  border-width:0 6.5px 6.5px;\n  border-color:transparent transparent white;\n}\n.input-list>ul[data-v-34e83f66] {\n  width: 100%;\n  display: inline-block;\n}\n.has-arrow[data-v-34e83f66], .has-not-arrow[data-v-34e83f66] {\n  font-size: 14px;\n  padding: 8px 20px;\n  position: relative;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #606266;\n  height: 34px;\n  line-height: 1.5;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  cursor: pointer;\n  outline: 0;\n}\n.has-arrow[data-v-34e83f66]:after {\n  content: '>';\n  float: right;\n  color: #666666;\n}\n.has-not-arrow[data-v-34e83f66]:after {\n  content: '>';\n  float: right;\n  color: transparent;\n}\n",""])},"Vi+y":function(t,e,n){"use strict";function a(t){n("SbpQ")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("lcoF"),o=n("mtWM"),s=n.n(o),l=n("nSkA"),r=n("x1ym"),d={mixins:[i.a],data:function(){var t=r.a.required(),e=r.a.number(),n=r.a.string(),a=r.a.channelPath("栏目路径不能重复","");return{params:this.$route.query,rules:{name:[t],enable:[t],metaTitle:[t],uri:[t],path:[t,a,n],priority:[t,e],display:[t]},fieldRequied:[{required:!0,validator:function(t,e,n){/^\s*$/g.test(e)?n(new Error("此项必填")):n()},message:"此项必填",trigger:"change"}],dataState:!1,channelList:[{hasChild:!0,id:"",name:"根栏目"}],itemList:[],modelList:[],tplList:[],groupList:[],tplAll:[],info:{name:"",uri:"",enable:!0,metaTitle:"",metaKeyword:"",metaDesc:"",parentId:""},parentChannel:null,tplContentVisbile:!1,ue:[],showInputList:!1,selectedChannel:null,showChildList:!1,childrenList:[],showGrandList:!1,grandList:[],chosenList:[],finalChannelId:null,chosenSubChannelList:[],chosenSubChannelArray:[],currentLevel:""}},methods:{back:function(){this.routerLink("/channel/list","list",this.params.parentId)},getChannelId:function(t,e){e.isLeaf?this.routerLink("/channel/update","update",t.id):-1==t.id?this.routerLink("list"):(this.breadState=!0,this.routerLink("/channel/list","",t.id))},getPath:function(t){var e=this;""!=t.target.value&&s.a.post(this.$api.channelCreatPath,{name:t.target.value}).then(function(t){e.info.path=t.body})},getMediaPath:function(t,e){this.info[e]=t},getUeditor:function(t,e){this.ue[e]=t},getFieldImg:function(t,e,n,a){this.info[e]=t},getTitleImg:function(t){this.info.titleImg=t},getContentImg:function(t){this.info.contentImg=t},getDataInfo:function(t){var e=this;this.loading=!1;var n={modelId:this.params.modelId,isChannel:!0};s.a.post(this.$api.itemList,n).then(function(t){e.loading=!1,e.$refs.form.resetFields(),e.info.titleImg="",e.info.contentImg="";var n=t.body;for(var a in n)n[a].custom?7==n[a].dataType?e.$set(e.info,"attr_"+n[a].field,n[a].defValue.split(",")):e.$set(e.info,"attr_"+n[a].field,n[a].defValue):7==n[a].dataType?e.$set(e.info,n[a].field,n[a].defValue.split(",")):e.$set(e.info,n[a].field,n[a].defValue);e.getAllList(),e.getDefaultInfo(e.params.id),e.itemList=n}).catch(function(t){e.loading=!1})},getDefaultInfo:function(t){0==t&&(this.info.display=!0,this.info.allowShare=!0,this.info.allowScore=!0,this.info.allowUpdown=!0,this.info.commentControl=3,this.info.pageSize=20,this.info.priority=10)},getAllList:function(){this.loading=!1},getEditorContent:function(){void 0!=this.info.txt&&(this.info.txt=this.ue[0].getContent()),void 0!=this.info.txt1&&(this.info.txt1=this.ue[1].getContent()),void 0!=this.info.txt2&&(this.info.txt2=this.ue[2].getContent()),void 0!=this.info.txt3&&(this.info.txt3=this.ue[3].getContent())},getParams:function(){var t={};for(var e in this.info)t[e]=this.info[e];return t.parentId=t.parentId[0],t},add:function(t){var e=this;this.$refs.form.validate(function(n){if(!n)return!1;e.loading=!1;var a=e.getParams(),i=e.$api.channel,o=localStorage.getItem("chosenId");-1==o&&(o=null),a.parentId=o,l.a.post(i,a).then(function(n){"0"==n.data.errorCode?(e.successMessage("操作成功"),t?location.reload():setTimeout(function(){e.back()},1e3)):n.data.errorMessage?e.errorMessage(n.data.errorMessage):e.errorMessage("操作失败")}).catch(function(t){console.log(t)})})},getCurrentChannel:function(t,e){console.log("父组件中的获取当前选中的channel"),void 0==e.parent.data&&(this.selectedChannel="根目录"),void 0!=e.parent.data&&(this.selectedChannel=t.name,void 0!=e.parent.parent.data&&(this.selectedChannel=e.parent.data.name+"/"+t.name,void 0!=e.parent.parent.parent.data&&(this.selectedChannel=e.parent.parent.data.name+"/"+e.parent.data.name+"/"+t.name))),this.finalChannelId=t.id,this.showInputList=!1,window.localStorage.setItem("channelShowList",this.selectedChannel),window.localStorage.setItem("chosenId",this.finalChannelId)},toggleShow:function(){0==this.showInputList?this.showInputList=!0:this.showInputList=!1}},created:function(){this.getAllList()},mounted:function(){var t=this;this.$store.dispatch("setCollapse",!0),this.dataState=!0;var e=window.localStorage.getItem("currentChannel");void 0!=e&&l.a.get(this.$api.channelInfo+"/"+e).then(function(e){console.log("获取栏目的详细信息，主要是要名字"),console.log(e),"0"==e.data.errorCode&&(t.parentChannel=e.data.data.name,t.selectedChannel=e.data.data.name)}).catch(function(t){console.log(t)})}},c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"cms-body flex"},[n("a",{staticClass:"cms-back",attrs:{href:"javascript:void(0)"},on:{click:t.back}}),t._v(" "),n("cms-tree",{attrs:{treeType:"page",copy:!0,defaultOpen:[16,18]},on:{click:t.getChannelId}}),t._v(" "),n("div",{staticClass:"cms-content-right"},[n("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:t.info,rules:t.rules,"label-width":"162px"}},[n("el-form-item",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"flex-50",attrs:{label:"上级栏目",prop:"parentId"}},[n("el-input",{staticClass:"cms-width",attrs:{value:t.selectedChannel,readonly:""},on:{focus:t.toggleShow}}),t._v(" "),t.showInputList?n("div",{staticStyle:{width:"100%"}},[n("div",{staticClass:"triangle"}),t._v(" "),n("div",{staticClass:"input-list"},[n("cms-tree",{attrs:{treeType:"page"},on:{click:t.getCurrentChannel}})],1)]):t._e()],1),t._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"栏目名称",prop:"name"}},[n("el-input",{staticClass:"cms-width",model:{value:t.info.name,callback:function(e){t.$set(t.info,"name",e)},expression:"info.name"}})],1),t._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"访问路径",prop:"uri"}},[n("el-input",{staticClass:"cms-width",model:{value:t.info.uri,callback:function(e){t.$set(t.info,"uri",e)},expression:"info.uri"}})],1),t._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"是否可用",prop:"enable"}},[n("el-radio",{attrs:{label:!0},model:{value:t.info.enable,callback:function(e){t.$set(t.info,"enable",e)},expression:"info.enable"}},[t._v("是")]),t._v(" "),n("el-radio",{attrs:{label:!1},model:{value:t.info.enable,callback:function(e){t.$set(t.info,"enable",e)},expression:"info.enable"}},[t._v("否")])],1),t._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"meta标题",prop:"metaTitle"}},[n("el-input",{staticClass:"cms-width",model:{value:t.info.metaTitle,callback:function(e){t.$set(t.info,"metaTitle",e)},expression:"info.metaTitle"}})],1),t._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"meta关键字",prop:"metaKeyword"}},[n("el-input",{staticClass:"cms-width",model:{value:t.info.metaKeyword,callback:function(e){t.$set(t.info,"metaKeyword",e)},expression:"info.metaKeyword"}})],1),t._v(" "),n("el-form-item",{staticClass:"flex-100",attrs:{label:"meta描述",prop:"metaDesc"}},[n("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.info.metaDesc,callback:function(e){t.$set(t.info,"metaDesc",e)},expression:"info.metaDesc"}})],1),t._v(" "),n("div",{staticClass:"form-footer"},[n("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/channel/save",expression:"'/channel/save'"}],attrs:{type:"warning"},on:{click:function(e){t.add(!0)}}},[t._v("提交并继续添加")]),t._v(" "),n("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/channel/save",expression:"'/channel/save'"}],attrs:{type:"primary"},on:{click:function(e){t.add(!1)}}},[t._v("提交")]),t._v(" "),n("el-button",{attrs:{type:"info"},on:{click:t.$reset}},[t._v("重置")])],1)],1)],1)],1)},f=[],h={render:c,staticRenderFns:f},p=h,u=n("VU/8"),m=a,g=u(d,p,!1,m,"data-v-34e83f66",null);e.default=g.exports}});