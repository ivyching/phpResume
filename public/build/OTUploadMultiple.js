!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=696)}({61:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var o=function(){function t(e,n,o,i,r,a,l){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);this.field=e,this.id=o,this.uuid=n,this.func=a,this.type=l,this.references=[],this.funcDownloadRoute=i,this.funcDeleteRoute=r,$("#"+e).on("blur",this._selector.attachmentDropZone),$("#"+e).on("click",this._selector.delete,this._deleteFile.bind(this))}return function(t,e,o){e&&n(t.prototype,e),o&&n(t,o)}(t,[{key:"_deleteFile",value:function(t){var e=this,n={delete:t.currentTarget},o=$(n.delete),i=$(t.currentTarget).closest(".list-group-item");swal({title:"確定要刪除該筆資料嗎？",showCancelButton:!0,cancelButtonClass:"btn btn-danger",confirmButtonClass:"btn btn-primary save",buttonsStyling:!1}).then(function(t){t.value&&$.ajax({url:Routing.generate(e.funcDeleteRoute,{id:i.attr("data-id"),fieldName:e.field}),method:"Delete",success:function(t){swal({title:"該筆資料已刪除",confirmButtonClass:"btn btn-primary save",buttonsStyling:!1}),e._deleteRow(o)},error:function(){}})})}},{key:"_deleteRow",value:function(t){t.closest("p").remove()}},{key:"showMul",value:function(t){for(var e=0;e<t.length;e++){var n=t[e].originalName,o=this.type,i="";"new"!=o&&"edit"!=o&&(i="disabled");var r='\n                       <p class="list-group-item d-flex justify-content-between align-items-center lichnage" style="background-color: unset;border: unset" data-id="'.concat(t[e].id,'">\n                          <label  style="width: auto;">').concat(n,'</label>\n                           <span><a target="_blank" href="').concat(Routing.generate(this.funcDownloadRoute,{id:t[e].id}),'" class="btn btn-link btn-sm" style="vertical-align: middle">\n                           <span class="fa fa-download"></span></a>\n                           <button class="js-delete btn btn-link btn-sm" ')+i+' type="button">\n                               <span class="fa fa-trash-o"></span>\n                           </button>\n                           </span></p>\n           ';$("#"+this.field).find(this._selector.mainAttachmentList).prepend(r)}}},{key:"ID",get:function(){return this.id}},{key:"_selector",get:function(){return{mainList:"ul.js-attachment-list",filename:"label.js-attachment",download:"button#js-download",delete:"button.js-delete",save:"button#save",mainAttachmentList:"ul.js-attachment-list"}}}]),t}();window.UploadFile=o},696:function(t,e,n){"use strict";n.r(e);n(61);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}Dropzone.autoDiscover=!1;var u=function(t){function e(t,n,o,i,l,u,s){var c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(c=r(this,a(e).call(this,t,n,o,i,l,u,s))).initialDropZone(),c.refreshData(),c}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,UploadFile),function(t,e,n){e&&i(t.prototype,e),n&&i(t,n)}(e,[{key:"initialDropZone",value:function(){var t=this;new Dropzone("#"+t.field+" div.js-attachment-dropzone",{url:Routing.generate("OT_upload_multipleFiles",{uuid:t.uuid,fieldName:t.field,func:t.func}),paramName:"file",uploadMultiple:!0,dictInvalidFileType:"檔案格式不符！",dictFileTooBig:"檔案容量超出限制！",dictResponseError:"回應錯誤！",acceptedFiles:["image/*","application/pdf","application/msword","application/vnd.ms-excel","docm","dotm","xlam","xlsb","xlsm","xltm","odt","ods","txt","application/vnd.oasis.opendocument.text","application/vnd.oasis.opendocument.spreadsheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/octet-stream","application/vnd.oasis.opendocument.formula","application/x-zip-compressed","application/zip","text/plain"].join(","),init:function(){this.on("success",function(t,e){$(".dz-success-mark svg").css("background","#30991b").css("opacity",.5),setTimeout(function(t){this.removeFile(t)}.bind(this,t),1e3)}),this.on("successmultiple",function(e,n){t.showMul(n)}),this.on("error",function(t,e){$(".dz-error-mark svg g g").css("fill","#c00").css("opacity",.5),setTimeout(function(t){this.removeFile(t)}.bind(this,t),3e3)})}})}},{key:"refreshData",value:function(){var t=this;$.ajax({url:Routing.generate("OT_refresh_all_files",{uuid:t.uuid,fieldName:t.field}),method:"POST",datatype:"json",contentType:"application/json",success:function(e){t.showMul(e)},error:function(){}})}}]),e}();window.OTUploadMultiple=u}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL1VwbG9hZEZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL09UVXBsb2FkTXVsdGlwbGUuanMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJVcGxvYWRGaWxlIiwiZmllbGQiLCJ1dWlkIiwiaWQiLCJmdW5jRG93bmxvYWRSb3V0ZSIsImZ1bmNEZWxldGVSb3V0ZSIsImZ1bmMiLCJ0eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsInJlZmVyZW5jZXMiLCIkIiwib24iLCJfc2VsZWN0b3IiLCJhdHRhY2htZW50RHJvcFpvbmUiLCJkZWxldGUiLCJfZGVsZXRlRmlsZSIsImUiLCJzZWxmIiwiZGF0YSIsImN1cnJlbnRUYXJnZXQiLCJkZWxldGVCdG4iLCIkbGkiLCJjbG9zZXN0Iiwic3dhbCIsInRpdGxlIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNhbmNlbEJ1dHRvbkNsYXNzIiwiY29uZmlybUJ1dHRvbkNsYXNzIiwiYnV0dG9uc1N0eWxpbmciLCJ0aGVuIiwicmVzdWx0IiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsImF0dHIiLCJmaWVsZE5hbWUiLCJtZXRob2QiLCJzdWNjZXNzIiwiX2RlbGV0ZVJvdyIsImVycm9yIiwiJGxpbmsiLCJyZW1vdmUiLCJsZW5ndGgiLCJvcmlnaW5hbE5hbWUiLCJjYW5jbGVCdXR0b24iLCJodG1sIiwiY29uY2F0IiwiZmluZCIsIm1haW5BdHRhY2htZW50TGlzdCIsInByZXBlbmQiLCJtYWluTGlzdCIsImZpbGVuYW1lIiwiZG93bmxvYWQiLCJzYXZlIiwid2luZG93IiwiRHJvcHpvbmUiLCJhdXRvRGlzY292ZXIiLCJPVFVwbG9hZE11bHRpcGxlIiwiX3RoaXMiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9nZXRQcm90b3R5cGVPZiIsImluaXRpYWxEcm9wWm9uZSIsInJlZnJlc2hEYXRhIiwicGFyYW1OYW1lIiwidXBsb2FkTXVsdGlwbGUiLCJkaWN0SW52YWxpZEZpbGVUeXBlIiwiZGljdEZpbGVUb29CaWciLCJkaWN0UmVzcG9uc2VFcnJvciIsImFjY2VwdGVkRmlsZXMiLCJqb2luIiwiaW5pdCIsImZpbGUiLCJjc3MiLCJzZXRUaW1lb3V0IiwicmVtb3ZlRmlsZSIsInNob3dNdWwiLCJkYXRhdHlwZSIsImNvbnRlbnRUeXBlIl0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxLQUdBLFNBQUFDLEVBQUFDLEdBR0EsR0FBQUYsRUFBQUUsR0FDQSxPQUFBRixFQUFBRSxHQUFBQyxRQUdBLElBQUFDLEVBQUFKLEVBQUFFLElBQ0FHLEVBQUFILEVBQ0FJLEdBQUEsRUFDQUgsWUFVQSxPQU5BSSxFQUFBTCxHQUFBTSxLQUFBSixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBRixHQUdBRyxFQUFBRSxHQUFBLEVBR0FGLEVBQUFELFFBS0FGLEVBQUFRLEVBQUFGLEVBR0FOLEVBQUFTLEVBQUFWLEVBR0FDLEVBQUFVLEVBQUEsU0FBQVIsRUFBQVMsRUFBQUMsR0FDQVosRUFBQWEsRUFBQVgsRUFBQVMsSUFDQUcsT0FBQUMsZUFBQWIsRUFBQVMsR0FBMENLLFlBQUEsRUFBQUMsSUFBQUwsS0FLMUNaLEVBQUFrQixFQUFBLFNBQUFoQixHQUNBLG9CQUFBaUIs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Q2hCaEUsS0FBS21FLFdBQVdILElBQ2xCakYsS0FBS2lCLEtBQU1nRSxHQUFPLE9BRXhCaEUsS0FBS0csR0FBRyxrQkFBbUIsU0FBVTZELEVBQU10RCxHQUN2Q0QsRUFBSzJELFFBQVExRCxLQUVqQlYsS0FBS0csR0FBRyxRQUFRLFNBQVU2RCxFQUFLdEQsR0FDM0JSLEVBQUUsMEJBQTBCK0QsSUFBSSxPQUFRLFFBQVFBLElBQUksVUFBVSxJQUM5REMsV0FBVyxTQUFTRixHQUNoQmhFLEtBQUttRSxXQUFXSCxJQUNsQmpGLEtBQUtpQixLQUFNZ0UsR0FBTyxnREFRaEMsSUFBSXZELEVBQU9ULEtBQ1hFLEVBQUVxQixNQUNFQyxJQUFLQyxRQUFRQyxTQUFTLHdCQUF5QmpDLEtBQU1nQixFQUFLaEIsS0FBS21DLFVBQVVuQixFQUFLakIsUUFDOUVxQyxPQUFRLE9BQ1J3QyxTQUFVLE9BQ1ZDLFlBQWEsbUJBQ2J4QyxRQUFTLFNBQVVwQixHQUNmRCxFQUFLMkQsUUFBUTFELElBR2pCc0IsTUFBTyx3QkFNbkJlLE9BQU9HLGlCQUFpQkEiLCJmaWxlIjoiT1RVcGxvYWRNdWx0aXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2OTYpO1xuIiwiY2xhc3MgVXBsb2FkRmlsZSB7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZpZWxkLHV1aWQsaWQsIGZ1bmNEb3dubG9hZFJvdXRlLCBmdW5jRGVsZXRlUm91dGUsZnVuYyx0eXBlKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZmllbGQgPSBmaWVsZDtcclxuICAgICAgICB0aGlzLmlkPWlkO1xyXG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XHJcbiAgICAgICAgdGhpcy5mdW5jPWZ1bmM7XHJcbiAgICAgICAgdGhpcy50eXBlPXR5cGU7XHJcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VzID0gW107XHJcbiAgICAgICAgdGhpcy5mdW5jRG93bmxvYWRSb3V0ZSA9IGZ1bmNEb3dubG9hZFJvdXRlO1xyXG4gICAgICAgIHRoaXMuZnVuY0RlbGV0ZVJvdXRlID0gZnVuY0RlbGV0ZVJvdXRlO1xyXG4gICAgICAgICQoXCIjXCIrZmllbGQpLm9uKCdibHVyJyx0aGlzLl9zZWxlY3Rvci5hdHRhY2htZW50RHJvcFpvbmUpO1xyXG4gICAgICAgICQoXCIjXCIrZmllbGQpLm9uKCdjbGljaycsIHRoaXMuX3NlbGVjdG9yLmRlbGV0ZSwgdGhpcy5fZGVsZXRlRmlsZS5iaW5kKHRoaXMpKTtcclxuICAgICAgIC8qIGNvbnNvbGUubG9nKHRoaXMudHlwZSk7XHJcbiAgICAgICAgaWYodGhpcy50eXBlPT1cIm5ld1wiIHx8IHRoaXMudHlwZT09J2VkaXQnKXtcclxuICAgICAgICAgICAgJCgnYnV0dG9uLmpzLWRlbGV0ZScpLnByb3AoXCJkaXNhYmxlZFwiLGZhbHNlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnYnV0dG9uLmpzLWRlbGV0ZScpLnByb3AoXCJkaXNhYmxlZFwiLHRydWUpO1xyXG4gICAgICAgIH0qL1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBJRCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgX3NlbGVjdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1haW5MaXN0OiBcInVsLmpzLWF0dGFjaG1lbnQtbGlzdFwiLFxyXG4gICAgICAgICAgICBmaWxlbmFtZTogXCJsYWJlbC5qcy1hdHRhY2htZW50XCIsXHJcbiAgICAgICAgICAgIGRvd25sb2FkOiBcImJ1dHRvbiNqcy1kb3dubG9hZFwiLFxyXG4gICAgICAgICAgICBkZWxldGU6IFwiYnV0dG9uLmpzLWRlbGV0ZVwiLFxyXG4gICAgICAgICAgICBzYXZlOiBcImJ1dHRvbiNzYXZlXCIsXHJcbiAgICAgICAgICAgIG1haW5BdHRhY2htZW50TGlzdDogXCJ1bC5qcy1hdHRhY2htZW50LWxpc3RcIixcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfZGVsZXRlRmlsZShlKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICBkZWxldGU6IGUuY3VycmVudFRhcmdldFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGRlbGV0ZUJ0biA9ICQoZGF0YS5kZWxldGUpO1xyXG4gICAgICAgIGNvbnN0ICRsaSA9ICQoZS5jdXJyZW50VGFyZ2V0KS5jbG9zZXN0KCcubGlzdC1ncm91cC1pdGVtJyk7XHJcbiAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIueiuuWumuimgeWIqumZpOipsuethuizh+aWmeWXju+8n1wiLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ2xhc3M6ICdidG4gYnRuLWRhbmdlcicsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25DbGFzczogJ2J0biBidG4tcHJpbWFyeSBzYXZlJyxcclxuICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcblxyXG5cclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoc2VsZi5mdW5jRGVsZXRlUm91dGUsIHtpZDokbGkuYXR0cignZGF0YS1pZCcpICwgZmllbGROYW1lOnNlbGYuZmllbGR9KSxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdEZWxldGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwi6Kmy562G6LOH5paZ5bey5Yiq6ZmkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ2xhc3M6ICdidG4gYnRuLXByaW1hcnkgc2F2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fZGVsZXRlUm93KGRlbGV0ZUJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBfZGVsZXRlUm93KCRsaW5rKSB7XHJcblxyXG4gICAgICAgIGxldCAkcGFyZW50ID0gJGxpbmsuY2xvc2VzdChcInBcIik7XHJcbiAgICAgICAgJHBhcmVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBzaG93TXVsKGRhdGEpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsTmFtZSA9IGRhdGFbaV1bJ29yaWdpbmFsTmFtZSddO1xyXG4gICAgICAgICAgICB2YXIgdHlwZSA9IHRoaXMudHlwZTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjYW5jbGVCdXR0b24gPSAnJztcclxuICAgICAgICAgICAgaWYgKHR5cGUgIT0gJ25ldycgJiYgdHlwZSAhPSAnZWRpdCcpIHtcclxuICAgICAgICAgICAgICAgIGNhbmNsZUJ1dHRvbiA9ICdkaXNhYmxlZCc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBodG1sID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbGljaG5hZ2VcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHVuc2V0O2JvcmRlcjogdW5zZXRcIiBkYXRhLWlkPVwiJHtkYXRhW2ldWydpZCddfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCAgc3R5bGU9XCJ3aWR0aDogYXV0bztcIj4ke29yaWdpbmFsTmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJHtSb3V0aW5nLmdlbmVyYXRlKHRoaXMuZnVuY0Rvd25sb2FkUm91dGUsIHsnaWQnOiBkYXRhW2ldWydpZCddfSl9XCIgY2xhc3M9XCJidG4gYnRuLWxpbmsgYnRuLXNtXCIgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtZG93bmxvYWRcIj48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwianMtZGVsZXRlIGJ0biBidG4tbGluayBidG4tc21cIiBgK2NhbmNsZUJ1dHRvbitgIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtdHJhc2gtb1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgIHZhciBodG1sMSA9ICQoXCIjXCIrdGhpcy5maWVsZCkuZmluZCh0aGlzLl9zZWxlY3Rvci5tYWluQXR0YWNobWVudExpc3QpLnByZXBlbmQoaHRtbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxud2luZG93LlVwbG9hZEZpbGUgPSBVcGxvYWRGaWxlO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICcuL1VwbG9hZEZpbGUnO1xyXG5cclxuRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2U7XHJcblxyXG5jbGFzcyBPVFVwbG9hZE11bHRpcGxlIGV4dGVuZHMgIFVwbG9hZEZpbGV7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZmllbGQsdXVpZCxpZCwgZnVuY0Rvd25sb2FkUm91dGUsIGZ1bmNEZWxldGVSb3V0ZSxmdW5jLHR5cGUpIHtcclxuICAgICAgICBzdXBlcihmaWVsZCx1dWlkLGlkLCBmdW5jRG93bmxvYWRSb3V0ZSwgZnVuY0RlbGV0ZVJvdXRlLGZ1bmMsdHlwZSk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdGlhbERyb3Bab25lKCk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoRGF0YSgpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGluaXRpYWxEcm9wWm9uZSgpe1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgYXR0YWNobWVudERyb3Bab25lID0gbmV3IERyb3B6b25lKFwiI1wiK3NlbGYuZmllbGQrXCIgZGl2LmpzLWF0dGFjaG1lbnQtZHJvcHpvbmVcIiwge1xyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ09UX3VwbG9hZF9tdWx0aXBsZUZpbGVzJywge3V1aWQ6IHNlbGYudXVpZCwgZmllbGROYW1lOiBzZWxmLmZpZWxkLGZ1bmM6c2VsZi5mdW5jfSksXHJcbiAgICAgICAgICAgIHBhcmFtTmFtZTogJ2ZpbGUnLFxyXG4gICAgICAgICAgICB1cGxvYWRNdWx0aXBsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZGljdEludmFsaWRGaWxlVHlwZTogJ+aqlOahiOagvOW8j+S4jeespu+8gScsXHJcbiAgICAgICAgICAgIGRpY3RGaWxlVG9vQmlnOiAn5qqU5qGI5a656YeP6LaF5Ye66ZmQ5Yi277yBJyxcclxuICAgICAgICAgICAgZGljdFJlc3BvbnNlRXJyb3I6J+WbnuaHiemMr+iqpO+8gScsXHJcbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6W1xyXG4gICAgICAgICAgICAgICAgJ2ltYWdlLyonLFxyXG4gICAgICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL3BkZicsXHJcbiAgICAgICAgICAgICAgICAnYXBwbGljYXRpb24vbXN3b3JkJyxcclxuICAgICAgICAgICAgICAgICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnLFxyXG4gICAgICAgICAgICAgICAgJ2RvY20nLFxyXG4gICAgICAgICAgICAgICAgJ2RvdG0nLFxyXG4gICAgICAgICAgICAgICAgJ3hsYW0nLFxyXG4gICAgICAgICAgICAgICAgJ3hsc2InLFxyXG4gICAgICAgICAgICAgICAgJ3hsc20nLFxyXG4gICAgICAgICAgICAgICAgJ3hsdG0nLFxyXG4gICAgICAgICAgICAgICAgJ29kdCcsXHJcbiAgICAgICAgICAgICAgICAnb2RzJyxcclxuICAgICAgICAgICAgICAgICd0eHQnLFxyXG4gICAgICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQudGV4dCcsXHJcbiAgICAgICAgICAgICAgICAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5zcHJlYWRzaGVldCcsXHJcbiAgICAgICAgICAgICAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0JyxcclxuICAgICAgICAgICAgICAgICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLFxyXG4gICAgICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuZm9ybXVsYScsXHJcbiAgICAgICAgICAgICAgICAnYXBwbGljYXRpb24veC16aXAtY29tcHJlc3NlZCcsXHJcbiAgICAgICAgICAgICAgICAnYXBwbGljYXRpb24vemlwJyxcclxuICAgICAgICAgICAgICAgICd0ZXh0L3BsYWluJ1xyXG4gICAgICAgICAgICBdLmpvaW4oXCIsXCIpLFxyXG5cclxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbignc3VjY2VzcycsIGZ1bmN0aW9uIChmaWxlLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5kei1zdWNjZXNzLW1hcmsgc3ZnXCIpLmNzcyhcImJhY2tncm91bmRcIiwgXCIjMzA5OTFiXCIpLmNzcyhcIm9wYWNpdHlcIiwwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZpbGUoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMsIGZpbGUpLCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbignc3VjY2Vzc211bHRpcGxlJywgZnVuY3Rpb24gKGZpbGUsIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dNdWwoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMub24oJ2Vycm9yJyxmdW5jdGlvbiAoZmlsZSxkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5kei1lcnJvci1tYXJrIHN2ZyBnIGdcIikuY3NzKFwiZmlsbFwiLCBcIiNjMDBcIikuY3NzKFwib3BhY2l0eVwiLDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbihmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRmlsZShmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcywgZmlsZSksIDMwMDApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoRGF0YSgpe1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoXCJPVF9yZWZyZXNoX2FsbF9maWxlc1wiLCB7dXVpZDogc2VsZi51dWlkLGZpZWxkTmFtZTpzZWxmLmZpZWxkfSksXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhdHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zaG93TXVsKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuT1RVcGxvYWRNdWx0aXBsZT1PVFVwbG9hZE11bHRpcGxlOyJdLCJzb3VyY2VSb290IjoiIn0=