webpackJsonp([28],{"3QW4":function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,"\n.w-120[data-v-da168142]{\r\n    width: 128px !important;\n}\r\n",""])},"673k":function(t,a,e){var s=e("3QW4");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("0f5bd9a0",s,!0,{})},"fp/a":function(t,a,e){"use strict";function s(t){e("673k")}Object.defineProperty(a,"__esModule",{value:!0});var n=e("lcoF"),o=e("mtWM"),l=e.n(o),i=e("x1ym"),r={mixins:[n.a],data:function(){var t=i.a.required(),a=i.a.number();return{params:{queryUsername:"",https:""},rules:{on:[t],content:[t],pos:[t],minHeight:[a],minWidth:[t,a],offsetX:[a],offsetY:[a],alpha:[a],size:[t,a]}}},methods:{getPath:function(t){this.dataInfo.imagePath="/jeecmsv9f"+t},getDataInfo:function(){var t=this,a=this.$api;l.a.all([l.a.post(a.configMarkGet)]).then(l.a.spread(function(a){t.dataInfo=a.body,t.$refs.form.resetFields(),t.loading=!1})).catch(function(a){t.loading=!1})},update:function(){return""==this.dataInfo.minWidth||""==this.dataInfo.minHeight?(this.errorMessage("图片尺寸控制未填写，请确认!"),!1):""==this.dataInfo.size||""==this.dataInfo.alpha||""==this.dataInfo.color||null==this.dataInfo.color?(this.errorMessage("水印配置未填写，请确认!"),!1):""===this.dataInfo.offsetX||""===this.dataInfo.offsetY?(this.errorMessage("位置未填写，请确认!"),!1):void this.updateDataInfo(this.$api.configMarkUpdate,this.dataInfo,"")}},created:function(){this.getDataInfo()}},f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"cms-body"},[e("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:t.dataInfo,rules:t.rules,"label-width":"162px"}},[e("el-form-item",{staticClass:"flex-100",attrs:{label:"开启水印",prop:"on"}},[e("el-radio",{attrs:{label:!0},model:{value:t.dataInfo.on,callback:function(a){t.$set(t.dataInfo,"on",a)},expression:"dataInfo.on"}},[t._v("是")]),t._v(" "),e("el-radio",{attrs:{label:!1},model:{value:t.dataInfo.on,callback:function(a){t.$set(t.dataInfo,"on",a)},expression:"dataInfo.on"}},[t._v("否")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"图片尺寸控制",prop:"minWidth"}},[e("el-input",{staticClass:"w-120",attrs:{type:"number"},model:{value:t.dataInfo.minWidth,callback:function(a){t.$set(t.dataInfo,"minWidth",a)},expression:"dataInfo.minWidth"}}),t._v(" ×\n                "),e("el-input",{staticClass:"w-120",attrs:{type:"number"},model:{value:t.dataInfo.minHeight,callback:function(a){t.$set(t.dataInfo,"minHeight",a)},expression:"dataInfo.minHeight"}}),t._v(" "),e("span",{staticClass:"gray"},[t._v("宽 × 高 ；小于该尺寸的图片不添加水印")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"水印图片"}},[e("cms-upload",{attrs:{src:"/jeecmsv9f"+t.dataInfo.imagePath},on:{change:t.getPath}}),t._v(" "),e("span",{staticClass:"gray"},[t._v("留空则使用文字水印")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"水印文字",prop:"content"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.content,callback:function(a){t.$set(t.dataInfo,"content",a)},expression:"dataInfo.content"}}),t._v(" "),e("span",{staticClass:"gray"},[t._v("使用中文有可能出现乱码")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-50"}),t._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"水印配置",prop:"size"}},[e("div",{staticClass:"flex"},[e("span",{staticStyle:{"margin-right":"12px"}},[t._v("文本大小")]),t._v(" "),e("el-input",{staticClass:"w-120",staticStyle:{"margin-right":"12px"},attrs:{type:"number"},model:{value:t.dataInfo.size,callback:function(a){t.$set(t.dataInfo,"size",a)},expression:"dataInfo.size"}}),t._v(" "),e("span",{staticStyle:{"margin-right":"12px"}},[t._v("颜色")]),t._v(" "),e("el-color-picker",{staticStyle:{"margin-right":"12px"},model:{value:t.dataInfo.color,callback:function(a){t.$set(t.dataInfo,"color",a)},expression:"dataInfo.color"}}),t._v(" "),e("span",{staticStyle:{"margin-right":"12px"}},[t._v("文字透明度")]),t._v(" "),e("el-input",{staticClass:"w-120",staticStyle:{"margin-right":"12px"},attrs:{type:"number"},model:{value:t.dataInfo.alpha,callback:function(a){t.$set(t.dataInfo,"alpha",a)},expression:"dataInfo.alpha"}})],1),t._v(" "),e("span",{staticClass:"gray"},[t._v("0-100，越小越透明")])]),t._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"位置",prop:"pos"}},[e("el-select",{model:{value:t.dataInfo.pos,callback:function(a){t.$set(t.dataInfo,"pos",a)},expression:"dataInfo.pos"}},[e("el-option",{attrs:{value:0,label:"随机"}}),t._v(" "),e("el-option",{attrs:{value:1,label:"左上"}}),t._v(" "),e("el-option",{attrs:{value:2,label:"右上"}}),t._v(" "),e("el-option",{attrs:{value:3,label:"左下"}}),t._v(" "),e("el-option",{attrs:{value:4,label:"右下"}}),t._v(" "),e("el-option",{attrs:{value:5,label:"居中"}})],1),t._v(" "),e("span",{staticStyle:{margin:"0 12px"}},[t._v("水平偏移量")]),t._v(" "),e("el-input",{staticClass:"w-120",attrs:{type:"number"},model:{value:t.dataInfo.offsetX,callback:function(a){t.$set(t.dataInfo,"offsetX",a)},expression:"dataInfo.offsetX"}}),t._v(" "),e("span",[t._v("垂直偏移量")]),t._v(" "),e("el-input",{staticClass:"w-120",attrs:{type:"number"},model:{value:t.dataInfo.offsetY,callback:function(a){t.$set(t.dataInfo,"offsetY",a)},expression:"dataInfo.offsetY"}})],1),t._v(" "),e("div",{staticClass:"form-footer"},[e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/globel/markUpdate",expression:"'/globel/markUpdate'"}],attrs:{type:"primary"},on:{click:function(a){t.update()}}},[t._v("修改")]),t._v(" "),e("el-button",{attrs:{type:"info"},on:{click:t.$reset}},[t._v("重置")])],1)],1)],1)},c=[],d={render:f,staticRenderFns:c},p=d,m=e("VU/8"),u=s,v=m(r,p,!1,u,"data-v-da168142",null);a.default=v.exports}});