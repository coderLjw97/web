(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{198:function(t,s,e){"use strict";e.d(s,"a",(function(){return a}));const a=(t,s,e)=>{if(t)if(t.startsWith("/"))e.path!==t&&s.push(t);else if(t.startsWith("http://")||t.startsWith("https://")||t.startsWith("mailto:"))window&&window.open(t);else{const a=e.path.slice(0,e.path.lastIndexOf("/"));s.push(`${a}/${encodeURI(t)}`)}}},292:function(t,s,e){},343:function(t,s,e){"use strict";e(292)},361:function(t,s,e){"use strict";e.r(s);var a=e(0),i=e(198),n=a.a.extend({name:"TagList",computed:{tagList(){return[{name:this.$themeLocaleConfig.blog.allText,path:"/tag/"},...this.$tag.list]}},methods:{isActive(t){return t===(this.$currentTag&&this.$currentTag.key||this.$themeLocaleConfig.blog.allText)},clickTag(t){Object(i.a)(t,this.$router,this.$route)}}}),c=(e(343),e(1)),l=Object(c.a)(n,(function(){var t=this,s=t._self._c;t._self._setupProxy;return s("ul",{staticClass:"tag-list-wrapper"},t._l(t.tagList,(function(e,a){return s("li",{key:e.path,staticClass:"tag",class:{active:t.isActive(e.name),["tag"+a%9]:!0},on:{click:function(s){return t.clickTag(e.path)}}},[s("div",{staticClass:"tag-name"},[t._v(t._s(e.name))])])})),0)}),[],!1,null,null,null);s.default=l.exports}}]);