!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=694)}({14:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},694:function(t,e,n){(function(t){function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n=t.jQuery,r=function(){function t(e,r,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var o=this;this.button=e,this.userID=r,this.caseOrgID=a,n(e).click(function(){o._userAidList(this)})}return function(t,n,r){n&&e(t.prototype,n),r&&e(t,r)}(t,[{key:"_userAidList",value:function(t){var e=this,r=n(this._selector.userIDField).val();n("#deathFinancialAidList tr").remove(),""!=n.trim(r)&&n.ajax({url:Routing.generate("DeathFinancialAid_list",{userID:r}),method:"POST",datatype:"json",contentType:"application/json",success:function(t){if(0===t.length){n(e._selector.userIDList).append('\n                            <tr>\n                                <td class="text-center red" colspan="7">查無資料</td>\n                            </tr>\n                        ')}else n.each(t,function(t,n){e._appendList(n)})},error:function(){n(e._selector.userIDList).append('\n                            <tr>\n                                <td class="text-center red" colspan="7">請重新整理</td>\n                            </tr>\n                        ')}})}},{key:"_appendList",value:function(t){var e=this.caseOrgID,r="";t.orgID!=e&&(r="label-pink");var a="label-info";1==t.workflowStatus?a="label-orange":2==t.workflowStatus?a="label-red":3==t.workflowStatus?a="purple":4==t.workflowStatus?a="label-default":5==t.workflowStatus?a="label-primary":8==t.workflowStatus?a="label-primary":7==t.workflowStatus?a="label-red":9==t.workflowStatus&&(a="label-green");var o='\n            <tr>\n                <td class="'+r+'">'+t.orgName+'</td>\n                <td class="'+r+'">'+t.caseNumber+'</td>\n                <td class="'+r+'">'+t.createdUserName+'</td>\n                <td class="'+r+'">'+t.name+'</td>\n                <td class="'+r+'">'+t.applyDate+'</td>\n                <td class="'+r+'">'+t.approvedDate+'</td>\n                <td class="'+r+'"><div class="colorBlockPosition"><label class="label statusStyle '+a+' colorBlock">'+t.workflow+"</label></div></td>\n            </tr>\n        ";n(this._selector.userIDList).append(o)}},{key:"_selector",get:function(){return{userIDList:"#deathFinancialAidList",userIDField:"#mf09_form_userID"}}}]),t}();window.UserIDDeathFinancialAid=r}).call(this,n(14))}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvVXNlcklERGVhdGhGaW5hbmNpYWxBaWQuanMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJnIiwidGhpcyIsIkZ1bmN0aW9uIiwiZXZhbCIsImUiLCJ3aW5kb3ciLCIkIiwiZ2xvYmFsIiwialF1ZXJ5IiwiVXNlcklERGVhdGhGaW5hbmNpYWxBaWQiLCJidXR0b24iLCJ1c2VySUQiLCJjYXNlT3JnSUQiLCJfY2xhc3NDYWxsQ2hlY2siLCJzZWxmIiwiY2xpY2siLCJfdXNlckFpZExpc3QiLCJfc2VsZWN0b3IiLCJ1c2VySURGaWVsZCIsInZhbCIsInJlbW92ZSIsInRyaW0iLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwibWV0aG9kIiwiZGF0YXR5cGUiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwibGVuZ3RoIiwidXNlcklETGlzdCIsImFwcGVuZCIsImVhY2giLCJfYXBwZW5kTGlzdCIsImVycm9yIiwiY29sb3IiLCJsYWJlbCIsImh0bWwiXSwibWFwcGluZ3MiOiJhQUNBLElBQUFBLEtBR0EsU0FBQUMsRUFB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USxHQUNSUCxFQUFJLE9BQWFsQixJQUNqQnlCLEVBQVEsY0FHWixJQUFJQyxFQUFRLGFBQ2tCLEdBQTFCUixFQUFJLGVBQ0pRLEVBQVEsZUFDeUIsR0FBMUJSLEVBQUksZUFDWFEsRUFBUSxZQUN5QixHQUExQlIsRUFBSSxlQUNYUSxFQUFRLFNBQ3lCLEdBQTFCUixFQUFJLGVBQ1hRLEVBQVEsZ0JBQ3lCLEdBQTFCUixFQUFJLGVBQ1hRLEVBQVEsZ0JBQ3lCLEdBQTFCUixFQUFJLGVBQ1hRLEVBQVEsZ0JBQ3lCLEdBQTFCUixFQUFJLGVBQ1hRLEVBQVEsWUFDeUIsR0FBMUJSLEVBQUksaUJBQ1hRLEVBQVEsZUFHWixJQUFJQyxFQUFPLGtEQUVVRixFQUZWLEtBRXFCUCxFQUFJLFFBRnpCLHFDQUdVTyxFQUhWLEtBR3FCUCxFQUFJLFdBSHpCLHFDQUlVTyxFQUpWLEtBSXFCUCxFQUFJLGdCQUp6QixxQ0FLVU8sRUFMVixLQUtxQlAsRUFBSSxLQUx6QixxQ0FNVU8sRUFOVixLQU1xQlAsRUFBSSxVQU56QixxQ0FPVU8sRUFQVixLQU9xQlAsRUFBSSxhQVB6QixxQ0FRVU8sRUFSVixxRUFRcUZDLEVBUnJGLGdCQVE2R1IsRUFBSSxTQVJqSCxtREFZWHhCLEVBQUVMLEtBQUtnQixVQUFVZSxZQUFZQyxPQUFPTSxxQ0FyRnBDLE9BQ0lQLFdBQVkseUJBQ1pkLFlBQWEsOEJBdUZ6QmIsT0FBT0ksd0JBQTBCQSIsImZpbGUiOiJVc2VySUREZWF0aEZpbmFuY2lhbEFpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2OTQpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImNvbnN0ICQgPSBnbG9iYWwualF1ZXJ5O1xyXG5cclxuY2xhc3MgVXNlcklERGVhdGhGaW5hbmNpYWxBaWQge1xyXG4gICAgY29uc3RydWN0b3IoYnV0dG9uLCB1c2VySUQsIGNhc2VPcmdJRCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IGJ1dHRvbjtcclxuICAgICAgICB0aGlzLnVzZXJJRCA9IHVzZXJJRDtcclxuICAgICAgICB0aGlzLmNhc2VPcmdJRCA9IGNhc2VPcmdJRDtcclxuXHJcbiAgICAgICAgJChidXR0b24pLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5fdXNlckFpZExpc3QodGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IF9zZWxlY3RvcigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZXJJRExpc3Q6IFwiI2RlYXRoRmluYW5jaWFsQWlkTGlzdFwiLFxyXG4gICAgICAgICAgICB1c2VySURGaWVsZDogXCIjbWYwOV9mb3JtX3VzZXJJRFwiLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfdXNlckFpZExpc3QgKGUpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHVzZXJJRCA9ICQodGhpcy5fc2VsZWN0b3IudXNlcklERmllbGQpLnZhbCgpO1xyXG4gICAgICAgICQoXCIjZGVhdGhGaW5hbmNpYWxBaWRMaXN0IHRyXCIpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICBpZiAoJC50cmltKHVzZXJJRCkgIT0gJycpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnRGVhdGhGaW5hbmNpYWxBaWRfbGlzdCcse3VzZXJJRDogdXNlcklEfSksXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGRhdGF0eXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXIgcmVkXCIgY29sc3Bhbj1cIjdcIj7mn6XnhKHos4fmlpk8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoc2VsZi5fc2VsZWN0b3IudXNlcklETGlzdCkuYXBwZW5kKGh0bWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaChkYXRhLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fYXBwZW5kTGlzdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBodG1sID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyIHJlZFwiIGNvbHNwYW49XCI3XCI+6KuL6YeN5paw5pW055CGPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoc2VsZi5fc2VsZWN0b3IudXNlcklETGlzdCkuYXBwZW5kKGh0bWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2FwcGVuZExpc3QoZGF0YSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgY2FzZU9yZ0lEID0gdGhpcy5jYXNlT3JnSUQ7XHJcblxyXG4gICAgICAgIHZhciBjb2xvciA9ICcnO1xyXG4gICAgICAgIGlmIChkYXRhWydvcmdJRCddICE9IGNhc2VPcmdJRCkge1xyXG4gICAgICAgICAgICBjb2xvciA9ICdsYWJlbC1waW5rJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBsYWJlbCA9ICdsYWJlbC1pbmZvJztcclxuICAgICAgICBpZiAoZGF0YVsnd29ya2Zsb3dTdGF0dXMnXSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxhYmVsID0gJ2xhYmVsLW9yYW5nZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhWyd3b3JrZmxvd1N0YXR1cyddID09IDIpIHtcclxuICAgICAgICAgICAgbGFiZWwgPSAnbGFiZWwtcmVkJztcclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGFbJ3dvcmtmbG93U3RhdHVzJ10gPT0gMykge1xyXG4gICAgICAgICAgICBsYWJlbCA9ICdwdXJwbGUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YVsnd29ya2Zsb3dTdGF0dXMnXSA9PSA0KSB7XHJcbiAgICAgICAgICAgIGxhYmVsID0gJ2xhYmVsLWRlZmF1bHQnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YVsnd29ya2Zsb3dTdGF0dXMnXSA9PSA1KXtcclxuICAgICAgICAgICAgbGFiZWwgPSAnbGFiZWwtcHJpbWFyeSc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhWyd3b3JrZmxvd1N0YXR1cyddID09IDgpe1xyXG4gICAgICAgICAgICBsYWJlbCA9ICdsYWJlbC1wcmltYXJ5JztcclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGFbJ3dvcmtmbG93U3RhdHVzJ10gPT0gNyl7XHJcbiAgICAgICAgICAgIGxhYmVsID0gJ2xhYmVsLXJlZCc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhWyd3b3JrZmxvd1N0YXR1cyddID09IDkpe1xyXG4gICAgICAgICAgICBsYWJlbCA9ICdsYWJlbC1ncmVlbic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaHRtbCA9IGBcclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYCtjb2xvcitgXCI+YCtkYXRhWydvcmdOYW1lJ10rYDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJgK2NvbG9yK2BcIj5gK2RhdGFbJ2Nhc2VOdW1iZXInXStgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImArY29sb3IrYFwiPmArZGF0YVsnY3JlYXRlZFVzZXJOYW1lJ10rYDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJgK2NvbG9yK2BcIj5gK2RhdGFbJ25hbWUnXStgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImArY29sb3IrYFwiPmArZGF0YVsnYXBwbHlEYXRlJ10rYDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJgK2NvbG9yK2BcIj5gK2RhdGFbJ2FwcHJvdmVkRGF0ZSddK2A8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYCtjb2xvcitgXCI+PGRpdiBjbGFzcz1cImNvbG9yQmxvY2tQb3NpdGlvblwiPjxsYWJlbCBjbGFzcz1cImxhYmVsIHN0YXR1c1N0eWxlIGArbGFiZWwrYCBjb2xvckJsb2NrXCI+YCArIGRhdGFbJ3dvcmtmbG93J10gKyBgPC9sYWJlbD48L2Rpdj48L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgICQodGhpcy5fc2VsZWN0b3IudXNlcklETGlzdCkuYXBwZW5kKGh0bWwpO1xyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuVXNlcklERGVhdGhGaW5hbmNpYWxBaWQgPSBVc2VySUREZWF0aEZpbmFuY2lhbEFpZDsiXSwic291cmNlUm9vdCI6IiJ9