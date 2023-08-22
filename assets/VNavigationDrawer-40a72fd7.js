import{a as se,b as j}from"./VToolbar-dff57611.js";import{p as L,E as _,aq as B,D as m,a5 as ce,a3 as P,aX as A,a4 as D,aY as Q,g as O,ay as ee,aZ as ve,a_ as W,a$ as te,t as I,u as $,c as k,a as Y,a2 as de,b as ae,f as le,b0 as me,aB as he,b1 as fe,b2 as ge,b3 as ye,e as be,h as we,ao as Se,b4 as pe,b5 as Te,j as G,b6 as ke,C as Be,k as Ee,b7 as Me,b8 as Ve,b9 as xe,ba as Pe,aA as Ce,bb as Re,O as He,bc as Ie}from"./index-f1c517c6.js";const Le=L({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Ne(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:n}=s;let u=0;const a=_(null),t=B(0),c=B(0),b=B(0),w=B(!1),g=B(!1),l=m(()=>Number(e.scrollThreshold)),h=m(()=>ce((l.value-t.value)/l.value||0)),i=()=>{const r=a.value;!r||n&&!n.value||(u=t.value,t.value="window"in r?r.pageYOffset:r.scrollTop,g.value=t.value<u,b.value=Math.abs(t.value-l.value))};return P(g,()=>{c.value=c.value||t.value}),P(w,()=>{c.value=0}),A(()=>{P(()=>e.scrollTarget,r=>{var E;const f=r?document.querySelector(r):window;f&&f!==a.value&&((E=a.value)==null||E.removeEventListener("scroll",i),a.value=f,a.value.addEventListener("scroll",i,{passive:!0}))},{immediate:!0})}),D(()=>{var r;(r=a.value)==null||r.removeEventListener("scroll",i)}),n&&P(n,i,{immediate:!0}),{scrollThreshold:l,currentScroll:t,currentThreshold:b,isScrollActive:w,scrollRatio:h,isScrollingUp:g,savedScroll:c}}const Ye=L({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...se(),...Q(),...Le(),height:{type:[Number,String],default:64}},"VAppBar"),Ze=O()({name:"VAppBar",props:Ye(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:n}=s;const u=_(),a=ee(e,"modelValue"),t=m(()=>{var p;const y=new Set(((p=e.scrollBehavior)==null?void 0:p.split(" "))??[]);return{hide:y.has("hide"),inverted:y.has("inverted"),collapse:y.has("collapse"),elevate:y.has("elevate"),fadeImage:y.has("fade-image")}}),c=m(()=>{const y=t.value;return y.hide||y.inverted||y.collapse||y.elevate||y.fadeImage||!a.value}),{currentScroll:b,scrollThreshold:w,isScrollingUp:g,scrollRatio:l}=Ne(e,{canScroll:c}),h=m(()=>e.collapse||t.value.collapse&&(t.value.inverted?l.value>0:l.value===0)),i=m(()=>e.flat||t.value.elevate&&(t.value.inverted?b.value>0:b.value===0)),r=m(()=>t.value.fadeImage?t.value.inverted?1-l.value:l.value:void 0),f=m(()=>{var M,V;if(t.value.hide&&t.value.inverted)return 0;const y=((M=u.value)==null?void 0:M.contentHeight)??0,p=((V=u.value)==null?void 0:V.extensionHeight)??0;return y+p});ve(m(()=>!!e.scrollBehavior),()=>{de(()=>{t.value.hide?t.value.inverted?a.value=b.value>w.value:a.value=g.value||b.value<w.value:a.value=!0})});const{ssrBootStyles:E}=W(),{layoutItemStyles:R}=te({id:e.name,order:m(()=>parseInt(e.order,10)),position:I(e,"location"),layoutSize:f,elementSize:B(void 0),active:a,absolute:I(e,"absolute")});return $(()=>{const[y]=j.filterProps(e);return k(j,Y({ref:u,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...R.value,"--v-toolbar-image-opacity":r.value,height:void 0,...E.value},e.style]},y,{collapse:h.value,flat:i.value}),n)}),{}}});const _e=L({scrollable:Boolean,...ae(),...le({tag:"main"})},"VMain"),je=O()({name:"VMain",props:_e(),setup(e,s){let{slots:n}=s;const{mainStyles:u}=me(),{ssrBootStyles:a}=W();return $(()=>k(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[u.value,a.value,e.style]},{default:()=>{var t,c;return[e.scrollable?k("div",{class:"v-main__scroller"},[(t=n.default)==null?void 0:t.call(n)]):(c=n.default)==null?void 0:c.call(n)]}})),{}}});function Ae(e){let{rootEl:s,isSticky:n,layoutItemStyles:u}=e;const a=B(!1),t=B(0),c=m(()=>{const g=typeof a.value=="boolean"?"top":a.value;return[n.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[g]:he(t.value)}:{top:u.value.top}]});A(()=>{P(n,g=>{g?window.addEventListener("scroll",w,{passive:!0}):window.removeEventListener("scroll",w)},{immediate:!0})}),D(()=>{window.removeEventListener("scroll",w)});let b=0;function w(){const g=b>window.scrollY?"up":"down",l=s.value.getBoundingClientRect(),h=parseFloat(u.value.top??0),i=window.scrollY-Math.max(0,t.value-h),r=l.height+Math.max(t.value,h)-window.scrollY-window.innerHeight,f=parseFloat(getComputedStyle(s.value).getPropertyValue("--v-body-scroll-y"))||0;l.height<window.innerHeight-h?(a.value="top",t.value=h):g==="up"&&a.value==="bottom"||g==="down"&&a.value==="top"?(t.value=window.scrollY+l.top-f,a.value=!0):g==="down"&&r<=0?(t.value=0,a.value="bottom"):g==="up"&&i<=0&&(f?a.value!=="top"&&(t.value=-i+f+h,a.value="top"):(t.value=l.top+i,a.value="top")),b=window.scrollY}return{isStuck:a,stickyStyles:c}}const De=100,Oe=20;function J(e){const s=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*s}function K(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let n=e.length-1;n>0;n--){if(e[n].t===e[n-1].t)continue;const u=J(s),a=(e[n].d-e[n-1].d)/(e[n].t-e[n-1].t);s+=(a-u)*Math.abs(a),n===e.length-1&&(s*=.5)}return J(s)*1e3}function We(){const e={};function s(a){Array.from(a.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new fe(Oe))).push([a.timeStamp,t])})}function n(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function u(a){var g;const t=(g=e[a])==null?void 0:g.values().reverse();if(!t)throw new Error(`No samples for touch id ${a}`);const c=t[0],b=[],w=[];for(const l of t){if(c[0]-l[0]>De)break;b.push({t:l[0],d:l[1].clientX}),w.push({t:l[0],d:l[1].clientY})}return{x:K(b),y:K(w),get direction(){const{x:l,y:h}=this,[i,r]=[Math.abs(l),Math.abs(h)];return i>r&&l>=0?"right":i>r&&l<=0?"left":r>i&&h>=0?"down":r>i&&h<=0?"up":$e()}}}return{addMovement:s,endTouch:n,getVelocity:u}}function $e(){throw new Error}function Xe(e){let{isActive:s,isTemporary:n,width:u,touchless:a,position:t}=e;A(()=>{window.addEventListener("touchstart",y,{passive:!0}),window.addEventListener("touchmove",p,{passive:!1}),window.addEventListener("touchend",M,{passive:!0})}),D(()=>{window.removeEventListener("touchstart",y),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",M)});const c=m(()=>["left","right"].includes(t.value)),{addMovement:b,endTouch:w,getVelocity:g}=We();let l=!1;const h=B(!1),i=B(0),r=B(0);let f;function E(o,d){return(t.value==="left"?o:t.value==="right"?document.documentElement.clientWidth-o:t.value==="top"?o:t.value==="bottom"?document.documentElement.clientHeight-o:H())-(d?u.value:0)}function R(o){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const v=t.value==="left"?(o-r.value)/u.value:t.value==="right"?(document.documentElement.clientWidth-o-r.value)/u.value:t.value==="top"?(o-r.value)/u.value:t.value==="bottom"?(document.documentElement.clientHeight-o-r.value)/u.value:H();return d?Math.max(0,Math.min(1,v)):v}function y(o){if(a.value)return;const d=o.changedTouches[0].clientX,v=o.changedTouches[0].clientY,S=25,x=t.value==="left"?d<S:t.value==="right"?d>document.documentElement.clientWidth-S:t.value==="top"?v<S:t.value==="bottom"?v>document.documentElement.clientHeight-S:H(),C=s.value&&(t.value==="left"?d<u.value:t.value==="right"?d>document.documentElement.clientWidth-u.value:t.value==="top"?v<u.value:t.value==="bottom"?v>document.documentElement.clientHeight-u.value:H());(x||C||s.value&&n.value)&&(l=!0,f=[d,v],r.value=E(c.value?d:v,s.value),i.value=R(c.value?d:v),w(o),b(o))}function p(o){const d=o.changedTouches[0].clientX,v=o.changedTouches[0].clientY;if(l){if(!o.cancelable){l=!1;return}const x=Math.abs(d-f[0]),C=Math.abs(v-f[1]);(c.value?x>C&&x>3:C>x&&C>3)?(h.value=!0,l=!1):(c.value?C:x)>3&&(l=!1)}if(!h.value)return;o.preventDefault(),b(o);const S=R(c.value?d:v,!1);i.value=Math.max(0,Math.min(1,S)),S>1?r.value=E(c.value?d:v,!0):S<0&&(r.value=E(c.value?d:v,!1))}function M(o){if(l=!1,!h.value)return;b(o),h.value=!1;const d=g(o.changedTouches[0].identifier),v=Math.abs(d.x),S=Math.abs(d.y);(c.value?v>S&&v>400:S>v&&S>3)?s.value=d.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||H()):s.value=i.value>.5}const V=m(()=>h.value?{transform:t.value==="left"?`translateX(calc(-100% + ${i.value*u.value}px))`:t.value==="right"?`translateX(calc(100% - ${i.value*u.value}px))`:t.value==="top"?`translateY(calc(-100% + ${i.value*u.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${i.value*u.value}px))`:H(),transition:"none"}:void 0);return{isDragging:h,dragProgress:i,dragStyles:V}}function H(){throw new Error}const ze=["start","end","left","right","top","bottom"],Fe=L({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>ze.includes(e)},sticky:Boolean,...ge(),...ae(),...ye(),...Q(),...be(),...le({tag:"nav"}),...we()},"VNavigationDrawer"),Ge=O()({name:"VNavigationDrawer",props:Fe(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,s){let{attrs:n,emit:u,slots:a}=s;const{isRtl:t}=Se(),{themeClasses:c}=pe(e),{borderClasses:b}=Te(e),{backgroundColorClasses:w,backgroundColorStyles:g}=G(I(e,"color")),{elevationClasses:l}=ke(e),{mobile:h}=Be(),{roundedClasses:i}=Ee(e),r=Me(),f=ee(e,"modelValue",null,T=>!!T),{ssrBootStyles:E}=W(),{scopeId:R}=Ve(),y=_(),p=B(!1),M=m(()=>e.rail&&e.expandOnHover&&p.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),V=m(()=>xe(e.location,t.value)),o=m(()=>!e.permanent&&(h.value||e.temporary)),d=m(()=>e.sticky&&!o.value&&V.value!=="bottom");e.expandOnHover&&e.rail!=null&&P(p,T=>u("update:rail",!T)),e.disableResizeWatcher||P(o,T=>!e.permanent&&Ie(()=>f.value=!T)),!e.disableRouteWatcher&&r&&P(r.currentRoute,()=>o.value&&(f.value=!1)),P(()=>e.permanent,T=>{T&&(f.value=!0)}),Pe(()=>{e.modelValue!=null||o.value||(f.value=e.permanent||!h.value)});const{isDragging:v,dragProgress:S,dragStyles:x}=Xe({isActive:f,isTemporary:o,width:M,touchless:I(e,"touchless"),position:V}),C=m(()=>{const T=o.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):M.value;return v.value?T*S.value:T}),{layoutItemStyles:N,layoutItemScrimStyles:ne}=te({id:e.name,order:m(()=>parseInt(e.order,10)),position:V,layoutSize:C,elementSize:M,active:m(()=>f.value||v.value),disableTransitions:m(()=>v.value),absolute:m(()=>e.absolute||d.value&&typeof X.value!="string")}),{isStuck:X,stickyStyles:oe}=Ae({rootEl:y,isSticky:d,layoutItemStyles:N}),z=G(m(()=>typeof e.scrim=="string"?e.scrim:null)),ue=m(()=>({...v.value?{opacity:S.value*.2,transition:"none"}:void 0,...ne.value}));Ce({VList:{bgColor:"transparent"}});function re(){p.value=!0}function ie(){p.value=!1}return $(()=>{const T=a.image||e.image;return k(He,null,[k(e.tag,Y({ref:y,onMouseenter:re,onMouseleave:ie,class:["v-navigation-drawer",`v-navigation-drawer--${V.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":p.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":o.value,"v-navigation-drawer--active":f.value,"v-navigation-drawer--sticky":d.value},c.value,w.value,b.value,l.value,i.value,e.class],style:[g.value,N.value,x.value,E.value,oe.value,e.style]},R,n),{default:()=>{var F,q,U,Z;return[T&&k("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(F=a.image)==null?void 0:F.call(a,{image:e.image}):k("img",{src:e.image,alt:""},null)]),a.prepend&&k("div",{class:"v-navigation-drawer__prepend"},[(q=a.prepend)==null?void 0:q.call(a)]),k("div",{class:"v-navigation-drawer__content"},[(U=a.default)==null?void 0:U.call(a)]),a.append&&k("div",{class:"v-navigation-drawer__append"},[(Z=a.append)==null?void 0:Z.call(a)])]}}),k(Re,{name:"fade-transition"},{default:()=>[o.value&&(v.value||f.value)&&!!e.scrim&&k("div",Y({class:["v-navigation-drawer__scrim",z.backgroundColorClasses.value],style:[ue.value,z.backgroundColorStyles.value],onClick:()=>f.value=!1},R),null)]})])}),{isStuck:X}}});export{Ze as V,Ge as a,je as b};
