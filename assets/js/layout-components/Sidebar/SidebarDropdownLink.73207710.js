(window.webpackJsonp=window.webpackJsonp||[]).push([[44,32,34,42],{192:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"j",(function(){return o})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return c})),n.d(e,"c",(function(){return h})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return p})),n.d(e,"k",(function(){return d}));const i=/#.*$/u,s=/\.(md|html)$/u,r=/\/$/u,o=/^[a-z]+:/iu,a=t=>decodeURI(t).replace(i,"").replace(s,""),u=t=>o.test(t),l=t=>t.startsWith("mailto:"),c=t=>t.startsWith("tel:"),h=t=>{if(u(t))return t;const e=i.exec(t),n=e?e[0]:"",s=a(t);return s.endsWith("/")?t:`${s}.html${n}`},f=t=>/(\.html|\/)$/u.test(t)?t:t+"/",p=(t,e)=>{const n=decodeURIComponent(t.hash),s=(t=>{const e=i.exec(t);return e?e[0]:""})(e);if(s&&n!==s)return!1;return a(t.path)===a(e)},d=(t,e,n)=>{if(u(t))return t;const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return`${e}${t}`;const s=e.split("/");n&&s[s.length-1]||s.pop();const r=t.replace(/^\//u,"").split("/");for(let t=0;t<r.length;t++){const e=r[t];".."===e?s.pop():"."!==e&&s.push(e)}return""!==s[0]&&s.unshift(""),s.join("/")}},193:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(192),r=i.a.extend({name:"NavLink",props:{item:{type:Object,required:!0}},computed:{link(){return Object(s.c)(this.item.link)},active(){return this.$site.locales&&Object.keys(this.$site.locales).some(t=>t===this.link)||"/"===this.link?this.$route.path===this.link:this.$route.path.startsWith(this.link)},isNonHttpURI(){return Object(s.g)(this.link)||Object(s.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(s.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(s.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}}),o=(n(204),n(1)),a=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.isInternal?e("RouterLink",{staticClass:"nav-link",class:{active:t.active},attrs:{to:t.link},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t.item.icon?e("i",{class:`iconfont ${t.$themeConfig.iconPrefix}${t.item.icon}`}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t.item.icon?e("i",{class:`iconfont ${t.$themeConfig.iconPrefix}${t.item.icon}`}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.default=a.exports},197:function(t,e,n){},201:function(t,e,n){},204:function(t,e,n){"use strict";n(197)},210:function(t,e,n){"use strict";n.r(e);var i=n(0).a.extend({name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}}),s=(n(228),n(1)),r=Object(s.a)(i,(function(){var t=this._self._c;this._self._setupProxy;return t("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=r.exports},214:function(t,e,n){},228:function(t,e,n){"use strict";n(201)},251:function(t,e,n){"use strict";n(214)},257:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(210),r=n(193),o=i.a.extend({name:"SidebarDropdownLink",components:{NavLink:r.default,DropdownTransition:s.default},props:{item:{type:Object,required:!0}},data:()=>({open:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},watch:{$route(){this.open=!1}},methods:{setOpen(t){this.open=t},isLastItemOfArray:(t,e)=>!!Array.isArray(e)&&t===e[e.length-1]}}),a=(n(251),n(1)),u=Object(a.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"mobile-dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[e("span",{staticClass:"title"},[t.item.icon?e("i",{class:`iconfont ${t.$themeConfig.iconPrefix}${t.item.icon}`}):t._e(),t._v("\n      "+t._s(t.item.text)+"\n    ")]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(n,i){return e("li",{key:n.link||i,staticClass:"dropdown-item"},["links"===n.type?e("h4",{staticClass:"dropdown-subtitle"},[n.link?e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,t.item.children)&&0===n.children.length&&t.setOpen(!1)}}}):e("span",[t._v(t._s(n.text))])],1):t._e(),t._v(" "),"links"===n.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(i){return e("li",{key:i.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:i},on:{focusout:function(e){t.isLastItemOfArray(i,n.items)&&t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0):e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=u.exports}}]);