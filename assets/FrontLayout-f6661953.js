import{p as U,m as Y,g as R,u as D,c as a,a as V,V as m,I as E,b as j,d as q,e as z,f as G,h as H,i as J,j as K,t as I,k as O,l as Q,n as W,o as Z,q as ee,r as te,M as ae,w as oe,v as ne,s as S,x as se,y as le,z as re,A as ie,B as ue,C as ce,D as M,E as de,F as me,G as n,H as v,J as x,K as r,L as o,N as c,O as h,P as pe,Q as fe,R as A,S as ge,T as ve,U as $,W as b,X as L,Y as F,Z as he,_ as be}from"./index-e9e116a4.js";import{V as Ve,a as ke,b as _e}from"./VNavigationDrawer-2b7e7f87.js";import{m as ye,V as Be}from"./VToolbar-5fda57bb.js";import{V as Ce}from"./VContainer-2f68d83a.js";/* empty css              */const we=U({...Y({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),xe=R()({name:"VAppBarNavIcon",props:we(),setup(e,l){let{slots:i}=l;return D(()=>a(m,V(e,{class:["v-app-bar-nav-icon"]}),i)),{}}}),Se=R()({name:"VAppBarTitle",props:ye(),setup(e,l){let{slots:i}=l;return D(()=>a(Be,V(e,{class:"v-app-bar-title"}),i)),{}}});const Ne=U({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:E,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...j(),...q({location:"top end"}),...z(),...G(),...H(),...J({transition:"scale-rotate-transition"})},"VBadge"),Te=R()({name:"VBadge",inheritAttrs:!1,props:Ne(),setup(e,l){const{backgroundColorClasses:i,backgroundColorStyles:k}=K(I(e,"color")),{roundedClasses:_}=O(e),{t:u}=Q(),{textColorClasses:N,textColorStyles:p}=W(I(e,"textColor")),{themeClasses:T}=Z(),{locationStyles:f}=ee(e,!0,s=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(s)?+(e.offsetY??0):["left","right"].includes(s)?+(e.offsetX??0):0));return D(()=>{const s=Number(e.content),y=!e.max||isNaN(s)?e.content:s<=+e.max?s:`${e.max}+`,[P,B]=te(l.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return a(e.tag,V({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},B,{style:e.style}),{default:()=>{var C,w;return[a("div",{class:"v-badge__wrapper"},[(w=(C=l.slots).default)==null?void 0:w.call(C),a(ae,{transition:e.transition},{default:()=>{var d,g;return[oe(a("span",V({class:["v-badge__badge",T.value,i.value,_.value,N.value],style:[k.value,p.value,e.inline?{}:f.value],"aria-atomic":"true","aria-label":u(e.label,s),"aria-live":"polite",role:"status"},P),[e.dot?void 0:l.slots.badge?(g=(d=l.slots).badge)==null?void 0:g.call(d):e.icon?a(S,{icon:e.icon},null):y]),[[ne,e.modelValue]])]}})])]}})}),{}}}),Pe=""+new URL("logo_navbar-7d8e7719.png",import.meta.url).href,Ae={class:"text-center"},$e={__name:"FrontLayout",setup(e){const l=se(),i=le(),k=re(),_=ie(),{isLogin:u,isAdmin:N,cart:p}=ue(_),{mobile:T}=ce(),f=M(()=>T.value),s=de(!1),y=()=>{i.push("/")},P=()=>{s.value===!1?s.value=!0:s.value=!1},B=[{name:"首頁",path:"/home",icon:"mdi-home"},{name:"菜單",path:"/menu",icon:"mdi-clipboard-text"},{name:"美味專區",path:"/products",icon:"mdi-shopping-outline"},{name:"廚藝教室",path:"/course",icon:"mdi-chef-hat"},{name:"關於我們",path:"/about",icon:"mdi-information"}],C=M(()=>[{name:"登入",path:"/login",icon:"mdi-login",show:!u.value},{name:"註冊",path:"/register",icon:"mdi-account-plus",show:!u.value},{name:"管理",path:"/admin",icon:"mdi-account-tie",show:u.value&&N.value},{name:"會員資訊",path:"/account",icon:"mdi-list-box",show:u.value},{name:"登出",path:"/home",icon:"mdi-logout",show:u.value}]),w=async()=>{try{await be.delete("/users/logout"),_.logout(),k({text:"登出成功",showCloseButton:!1,snackbarProps:{timeout:3e3,color:"green",location:"bottom"}})}catch(d){k({text:d.response.data.message,showCloseButton:!1,snackbarProps:{timeout:3e3,color:"red",location:"bottom"}})}};return(d,g)=>{const X=me("router-view");return n(),v(h,null,[x(l).path!=="/"?(n(),r(Ve,{key:0,id:"appBar",color:"#514742"},{default:o(()=>[a(Ce,{class:"d-flex align-center"},{default:o(()=>[a(Se,null,{default:o(()=>[a(pe,{src:Pe,width:"150",onClick:y,style:{cursor:"pointer"}})]),_:1}),a(fe),f.value?c("",!0):(n(),v(h,{key:0},A(B,t=>a(m,{key:t,variant:"text",to:t.path},{default:o(()=>[b(L(t.name),1)]),_:2},1032,["to"])),64)),ge("div",Ae,[a(ve,{transition:"fade-transition"},{activator:o(({props:t})=>[a(m,V({icon:"mdi-account"},t,{title:"會員"}),null,16)]),default:o(()=>[a($,null,{default:o(()=>[(n(!0),v(h,null,A(C.value,t=>(n(),v(h,{key:t},[t.show?(n(),r(F,{key:0},{default:o(()=>[a(he,null,{default:o(()=>[t.name!=="登出"?(n(),r(m,{key:0,variant:"text","prepend-icon":t.icon,to:t.path,active:!1,style:{color:"#514742"}},{default:o(()=>[b(L(t.name),1)]),_:2},1032,["prepend-icon","to"])):(n(),r(m,{key:1,variant:"text","prepend-icon":t.icon,active:!1,style:{color:"#514742"},onClick:w,to:t.path},{default:o(()=>[b(L(t.name),1)]),_:2},1032,["prepend-icon","to"]))]),_:2},1024)]),_:2},1024)):c("",!0)],64))),128))]),_:1})]),_:1})]),a(m,{icon:"",title:"購物車",to:"/cart"},{default:o(()=>[x(p)!==0?(n(),r(Te,{key:0,content:x(p).toString(),color:"orange"},{default:o(()=>[a(S,{color:"white"},{default:o(()=>[b("mdi-shopping")]),_:1})]),_:1},8,["content"])):c("",!0),x(p)===0?(n(),r(S,{key:1,color:"white"},{default:o(()=>[b("mdi-shopping")]),_:1})):c("",!0)]),_:1}),f.value?(n(),r(xe,{key:1,onClick:P})):c("",!0)]),_:1})]),_:1})):c("",!0),f.value?(n(),r(ke,{key:1,modelValue:s.value,"onUpdate:modelValue":g[0]||(g[0]=t=>s.value=t),location:"top",temporary:""},{default:o(()=>[a($,null,{default:o(()=>[(n(),v(h,null,A(B,t=>a(F,{key:t.path,value:t,rounded:"xl",to:t.path,active:!1,title:t.name},{prepend:o(()=>[a(S,{icon:t.icon},null,8,["icon"])]),_:2},1032,["value","to","title"])),64))]),_:1})]),_:1},8,["modelValue"])):c("",!0),a(_e,null,{default:o(()=>[(n(),r(X,{key:d.$route.path}))]),_:1})],64)}}};export{$e as default};
