webpackJsonp([106],{bsT5:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=t("5HJ5"),s={mixins:[l.a],data:function(){return{params:{queryUsername:"",queryTitle:"",queryIp:"",category:"",pageNo:"",pageSize:""}}},created:function(){this.initTableData(this.$api.logList,this.params)}},r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-body"},[t("div",{staticClass:"cms-list-header"},[t("cms-input",{attrs:{label:"用户名"},model:{value:e.params.queryUsername,callback:function(a){e.$set(e.params,"queryUsername",a)},expression:"params.queryUsername"}}),e._v(" "),t("cms-input",{attrs:{label:"标题"},model:{value:e.params.queryTitle,callback:function(a){e.$set(e.params,"queryTitle",a)},expression:"params.queryTitle"}}),e._v(" "),t("cms-input",{attrs:{label:"IP"},model:{value:e.params.queryIp,callback:function(a){e.$set(e.params,"queryIp",a)},expression:"params.queryIp"}}),e._v(" "),t("label",{staticClass:"cms-label"},[e._v("日志类型")]),e._v(" "),t("el-select",{on:{change:e.query},model:{value:e.params.category,callback:function(a){e.$set(e.params,"category",a)},expression:"params.category"}},[t("el-option",{attrs:{label:"操作日志",value:"3"}}),e._v(" "),t("el-option",{attrs:{label:"登录成功日志",value:"1"}}),e._v(" "),t("el-option",{attrs:{label:"登录失败日志",value:"2"}})],1),e._v(" "),t("el-button",{on:{click:e.query}},[e._v("查询")])],1),e._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.checkIds}},[t("el-table-column",{attrs:{type:"selection",width:"65",align:"right"}}),e._v(" "),t("el-table-column",{attrs:{prop:"id",label:"ID",width:"50",align:"center"}}),e._v(" "),2!=e.params.category?t("el-table-column",{attrs:{prop:"userName",label:"用户名",align:"center"}}):e._e(),e._v(" "),t("el-table-column",{attrs:{prop:"time",label:"时间",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"ip",label:"IP",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"title",label:"标题",align:"center"}}),e._v(" "),1!=e.params.category?t("el-table-column",{attrs:{prop:"content",label:"内容",align:"center"}}):e._e()],1),e._v(" "),t("div",{staticClass:"cms-list-footer "},[t("div",{staticClass:"cms-left"}),e._v(" "),t("cms-pagination",{attrs:{total:e.total},on:{change:e.getPages}})],1)],1)},n=[],i={render:r,staticRenderFns:n},c=i,o=t("VU/8"),p=o(s,c,!1,null,null,null);a.default=p.exports}});