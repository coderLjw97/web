(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{350:function(e,t,n){},491:function(e,t,n){"use strict";n(350)},522:function(e,t,n){"use strict";n.r(t);function o(e){e.display="block",e.opacity=1}var a={name:"LinkStart",components:{},props:{},data:()=>({}),computed:{},watch:{$route(){const[e,t,n,a,i]=[".navbar",".global-ui",".reco-bgm-panel",".reco-bgm-box",".live2d-widget-container"].map(e=>document.querySelector(e));"none"!==a.style.display&&o(a.style),[e,t,n,i].map(e=>o(e.style))}},created(){try{window.addEventListener("load",this.init)}catch{}},mounted(){},methods:{init(){const[e,t,n,a,i]=[".navbar",".global-ui",".reco-bgm-panel",".reco-bgm-box",".live2d-widget-container"].map(e=>document.querySelector(e));["/","/web/"].includes(this.$route.path)?window.addEventListener("click",()=>{[t,n].map(e=>o(e.style)),[e,a,i].map(e=>e.classList.add("emerge")),setTimeout(()=>[e,a,i].map(e=>(o(e.style),e.classList.remove("emerge"))),1e3)},{once:!0}):[e,t,n,a,i].map(e=>o(e.style))}}},i=(n(491),n(1)),c=Object(i.a)(a,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);t.default=c.exports}}]);