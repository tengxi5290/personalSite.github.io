webpackJsonp([121],{"9JiU":function(t,e,n){"use strict";function o(t){n("l3zu")}Object.defineProperty(e,"__esModule",{value:!0});var a=(n("mtWM"),n("nSkA")),s=(n("x1ym"),{data:function(){return{tableData:[],bottomButtonDisable:!0,selection:[]}},methods:{getSpList:function(){var t=this;a.a.get(this.$api.spList).then(function(e){0==e.data.errorCode?t.tableData=e.data.data:e.data.errorMessage?t.errorMessage(e.data.errorMessage):t.errorMessage("操作失败")}).catch(function(t){console.log(t)})},toEdit:function(t){this.routerLink("/sp/edit","update",t.id,t)},omitSp:function(t){var e=this;this.$confirm("是否确认删除?","警告",{type:"error"}).then(function(n){a.a.delete(e.$api.spDelete+"?ids="+t.id).then(function(t){0==t.data.errorCode?(e.successMessage("操作成功"),e.getSpList()):t.data.errorMessage?e.errorMessage(t.data.errorMessage):e.errorMessage("操作失败")}).catch(function(t){console.log(t)})})},multiOmitSp:function(){var t=this,e=[];for(var n in this.selection)e.push(this.selection[n].id);var o=e.join(",");this.$confirm("是否确认删除?","警告",{type:"error"}).then(function(e){a.a.delete(t.$api.spDelete+"?ids="+o).then(function(e){0==e.data.errorCode?(t.successMessage("操作成功"),t.getSpList()):e.data.errorMessage?t.errorMessage(e.data.errorMessage):t.errorMessage("操作失败")}).catch(function(t){console.log(t)})})},addSp:function(){this.routerLink("/sp/add","add","")},getSps:function(t){this.selection=t,t.length>0?this.bottomButtonDisable=!1:this.bottomButtonDisable=!0}},created:function(){this.$store.dispatch("setCollapse",!0)},mounted:function(){this.getSpList()}}),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"cms-list-header"},[n("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.addSp}},[t._v("添加")])],1),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""},on:{"selection-change":t.getSps}},[n("el-table-column",{attrs:{type:"selection",width:"65",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"id",label:"spID",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"name",label:"sp名称",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"spDesc",label:"详情",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"spLiveNotice",label:"房间公告",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"icon",label:"缩略图",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return n("div",{},[n("img",{attrs:{src:t.row.icon,alt:"",width:"auto",height:"48"}})])}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return n("div",{},[n("cms-button",{attrs:{type:"edit"},on:{click:function(n){t.toEdit(e.row)}}}),t._v(" "),n("cms-button",{attrs:{type:"delete"},on:{click:function(n){t.omitSp(e.row)}}})],1)}}])})],1),t._v(" "),n("div",{staticClass:"content-fiexd"},[n("el-button",{attrs:{disabled:t.bottomButtonDisable},on:{click:t.multiOmitSp}},[t._v("批量删除")])],1)],1)},r=[],l={render:i,staticRenderFns:r},c=l,u=n("VU/8"),d=o,p=u(s,c,!1,d,null,null);e.default=p.exports},cMBi:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.content-fiexd {\n     bottom: auto;\n} \n",""])},l3zu:function(t,e,n){var o=n("cMBi");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("rjj0")("792d8ff4",o,!0,{})}});