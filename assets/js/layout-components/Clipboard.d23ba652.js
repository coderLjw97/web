(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{599:function(t,n,i){"use strict";i.r(n);var o=i(0).a.extend({name:"Clipboard",props:{html:{type:String,default:""},lang:{type:String,default:"en-US"}},data:()=>({location:""}),computed:{copyright(){const{author:t}=this.$themeConfig;return{"zh-CN":`${this.html}\n-----\n${t?`著作权归${t}所有。\n`:""}链接: ${this.location}`,"en-US":`${this.html}\n-----\n${t?`Copyright by ${t}.\n`:""}Link: ${this.location}`,"vi-VN":`${this.html}\n-----\n${t?`bản quyền bởi ${t}.\n`:""}Liên kết: ${this.location}`}[this.lang]}},created(){"undefined"!=typeof window&&(this.location=window.location.toString())}}),e=i(1),s=Object(e.a)(o,(function(){var t=this._self._c;this._self._setupProxy;return t("div",{domProps:{innerHTML:this._s(this.copyright)}})}),[],!1,null,null,null);n.default=s.exports}}]);