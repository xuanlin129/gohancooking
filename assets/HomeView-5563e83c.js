import{F as me}from"./FooterView-88e998c1.js";import{p as ge,b as Ae,g as he,a0 as ve,a1 as ye,C as le,E as Ie,a2 as xe,a3 as Z,a4 as we,D as oe,a5 as Ee,u as be,c as A,P as z,a6 as ke,a7 as Be,a8 as ce,a9 as Te,aa as ie,ab as Ce,ac as ee,ad as K,ae as Le,F as ne,G as N,H as J,S as y,L as E,O as X,K as j,N as F,Q as re,R as te,W as G,V as Y}from"./index-fd1fd567.js";import{V}from"./VContainer-b6a280b8.js";import{V as W,a as R}from"./VRow-093eec57.js";import"./logo_lineImg_light-dd5d790e.js";import"./logo_word_light-deaadfda.js";/* empty css              */function He(x){return Math.floor(Math.abs(x))*Math.sign(x)}const De=ge({scale:{type:[Number,String],default:.5},...Ae()},"VParallax"),Se=he()({name:"VParallax",props:De(),setup(x,e){let{slots:p}=e;const{intersectionRef:l,isIntersecting:f}=ve(),{resizeRef:c,contentRect:I}=ye(),{height:h}=le(),i=Ie();xe(()=>{var w;l.value=c.value=(w=i.value)==null?void 0:w.$el});let n;Z(f,w=>{w?(n=ke(l.value),n=n===document.scrollingElement?document:n,n.addEventListener("scroll",v,{passive:!0}),v()):n.removeEventListener("scroll",v)}),we(()=>{n==null||n.removeEventListener("scroll",v)}),Z(h,v),Z(()=>{var w;return(w=I.value)==null?void 0:w.height},v);const d=oe(()=>1-Ee(+x.scale));let m=-1;function v(){f.value&&(cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var u;const w=((u=i.value)==null?void 0:u.$el).querySelector(".v-img__img");if(!w)return;const T=n instanceof Document?document.documentElement.clientHeight:n.clientHeight,o=n instanceof Document?window.scrollY:n.scrollTop,s=l.value.getBoundingClientRect().top+o,g=I.value.height,t=s+(g-T)/2,a=He((o-t)*d.value),r=Math.max(1,(d.value*(T-g)+g)/g);w.style.setProperty("transform",`translateY(${a}px) scale(${r})`)}))}return be(()=>A(z,{class:["v-parallax",{"v-parallax--active":f.value},x.class],style:x.style,ref:i,cover:!0,onLoadstart:v,onLoad:v},p)),{}}}),_e=""+new URL("logo_color_dark-018ec418.png",import.meta.url).href,Me=""+new URL("brunch-914cac80.png",import.meta.url).href,Ge=""+new URL("gohancooking_shop-acdfa11c.jpg",import.meta.url).href,Oe="data:image/png;base64,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",Re=""+new URL("section05-eccdaa09.svg",import.meta.url).href,Pe=""+new URL("restaurant-4ab34dd4.jpg",import.meta.url).href,ze=""+new URL("section05_bottom-24afce9a.svg",import.meta.url).href;function de(x,e,p,l){return x.params.createElements&&Object.keys(l).forEach(f=>{if(!p[f]&&p.auto===!0){let c=Be(x.el,`.${l[f]}`)[0];c||(c=ce("div",l[f]),c.className=l[f],x.el.append(c)),p[f]=c,e[f]=c}}),p}function Ue(x){let{swiper:e,extendParams:p,on:l,emit:f}=x;p({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const c=o=>(Array.isArray(o)?o:[o]).filter(s=>!!s);function I(o){let s;return o&&typeof o=="string"&&e.isElement&&(s=e.el.querySelector(o),s)?s:(o&&(typeof o=="string"&&(s=[...document.querySelectorAll(o)]),e.params.uniqueNavElements&&typeof o=="string"&&s.length>1&&e.el.querySelectorAll(o).length===1&&(s=e.el.querySelector(o))),o&&!s?o:s)}function h(o,s){const g=e.params.navigation;o=c(o),o.forEach(t=>{t&&(t.classList[s?"add":"remove"](...g.disabledClass.split(" ")),t.tagName==="BUTTON"&&(t.disabled=s),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](g.lockClass))})}function i(){const{nextEl:o,prevEl:s}=e.navigation;if(e.params.loop){h(s,!1),h(o,!1);return}h(s,e.isBeginning&&!e.params.rewind),h(o,e.isEnd&&!e.params.rewind)}function n(o){o.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),f("navigationPrev"))}function d(o){o.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),f("navigationNext"))}function m(){const o=e.params.navigation;if(e.params.navigation=de(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(o.nextEl||o.prevEl))return;let s=I(o.nextEl),g=I(o.prevEl);Object.assign(e.navigation,{nextEl:s,prevEl:g}),s=c(s),g=c(g);const t=(a,r)=>{a&&a.addEventListener("click",r==="next"?d:n),!e.enabled&&a&&a.classList.add(...o.lockClass.split(" "))};s.forEach(a=>t(a,"next")),g.forEach(a=>t(a,"prev"))}function v(){let{nextEl:o,prevEl:s}=e.navigation;o=c(o),s=c(s);const g=(t,a)=>{t.removeEventListener("click",a==="next"?d:n),t.classList.remove(...e.params.navigation.disabledClass.split(" "))};o.forEach(t=>g(t,"next")),s.forEach(t=>g(t,"prev"))}l("init",()=>{e.params.navigation.enabled===!1?T():(m(),i())}),l("toEdge fromEdge lock unlock",()=>{i()}),l("destroy",()=>{v()}),l("enable disable",()=>{let{nextEl:o,prevEl:s}=e.navigation;o=c(o),s=c(s),[...o,...s].filter(g=>!!g).forEach(g=>g.classList[e.enabled?"remove":"add"](e.params.navigation.lockClass))}),l("click",(o,s)=>{let{nextEl:g,prevEl:t}=e.navigation;g=c(g),t=c(t);const a=s.target;if(e.params.navigation.hideOnClick&&!t.includes(a)&&!g.includes(a)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===a||e.pagination.el.contains(a)))return;let r;g.length?r=g[0].classList.contains(e.params.navigation.hiddenClass):t.length&&(r=t[0].classList.contains(e.params.navigation.hiddenClass)),f(r===!0?"navigationShow":"navigationHide"),[...g,...t].filter(u=>!!u).forEach(u=>u.classList.toggle(e.params.navigation.hiddenClass))}});const w=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),m(),i()},T=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),v()};Object.assign(e.navigation,{enable:w,disable:T,update:i,init:m,destroy:v})}function q(x){return x===void 0&&(x=""),`.${x.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Ne(x){let{swiper:e,extendParams:p,on:l,emit:f}=x;const c="swiper-pagination";p({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:t=>t,formatFractionTotal:t=>t,bulletClass:`${c}-bullet`,bulletActiveClass:`${c}-bullet-active`,modifierClass:`${c}-`,currentClass:`${c}-current`,totalClass:`${c}-total`,hiddenClass:`${c}-hidden`,progressbarFillClass:`${c}-progressbar-fill`,progressbarOppositeClass:`${c}-progressbar-opposite`,clickableClass:`${c}-clickable`,lockClass:`${c}-lock`,horizontalClass:`${c}-horizontal`,verticalClass:`${c}-vertical`,paginationDisabledClass:`${c}-disabled`}}),e.pagination={el:null,bullets:[]};let I,h=0;const i=t=>(Array.isArray(t)?t:[t]).filter(a=>!!a);function n(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function d(t,a){const{bulletActiveClass:r}=e.params.pagination;t&&(t=t[`${a==="prev"?"previous":"next"}ElementSibling`],t&&(t.classList.add(`${r}-${a}`),t=t[`${a==="prev"?"previous":"next"}ElementSibling`],t&&t.classList.add(`${r}-${a}-${a}`)))}function m(t){const a=t.target.closest(q(e.params.pagination.bulletClass));if(!a)return;t.preventDefault();const r=ie(a)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===r)return;const u=e.getSlideIndexByData(r),C=e.getSlideIndexByData(e.realIndex);u>e.slides.length-e.loopedSlides&&e.loopFix({direction:u>C?"next":"prev",activeSlideIndex:u,slideTo:!1}),e.slideToLoop(r)}else e.slideTo(r)}function v(){const t=e.rtl,a=e.params.pagination;if(n())return;let r=e.pagination.el;r=i(r);let u,C;const S=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,M=e.params.loop?Math.ceil(S/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(C=e.previousRealIndex||0,u=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(u=e.snapIndex,C=e.previousSnapIndex):(C=e.previousIndex||0,u=e.activeIndex||0),a.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const b=e.pagination.bullets;let _,H,P;if(a.dynamicBullets&&(I=Te(b[0],e.isHorizontal()?"width":"height",!0),r.forEach(L=>{L.style[e.isHorizontal()?"width":"height"]=`${I*(a.dynamicMainBullets+4)}px`}),a.dynamicMainBullets>1&&C!==void 0&&(h+=u-(C||0),h>a.dynamicMainBullets-1?h=a.dynamicMainBullets-1:h<0&&(h=0)),_=Math.max(u-h,0),H=_+(Math.min(b.length,a.dynamicMainBullets)-1),P=(H+_)/2),b.forEach(L=>{const k=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(D=>`${a.bulletActiveClass}${D}`)].map(D=>typeof D=="string"&&D.includes(" ")?D.split(" "):D).flat();L.classList.remove(...k)}),r.length>1)b.forEach(L=>{const k=ie(L);k===u?L.classList.add(...a.bulletActiveClass.split(" ")):e.isElement&&L.setAttribute("part","bullet"),a.dynamicBullets&&(k>=_&&k<=H&&L.classList.add(...`${a.bulletActiveClass}-main`.split(" ")),k===_&&d(L,"prev"),k===H&&d(L,"next"))});else{const L=b[u];if(L&&L.classList.add(...a.bulletActiveClass.split(" ")),e.isElement&&b.forEach((k,D)=>{k.setAttribute("part",D===u?"bullet-active":"bullet")}),a.dynamicBullets){const k=b[_],D=b[H];for(let $=_;$<=H;$+=1)b[$]&&b[$].classList.add(...`${a.bulletActiveClass}-main`.split(" "));d(k,"prev"),d(D,"next")}}if(a.dynamicBullets){const L=Math.min(b.length,a.dynamicMainBullets+4),k=(I*L-I)/2-P*I,D=t?"right":"left";b.forEach($=>{$.style[e.isHorizontal()?D:"top"]=`${k}px`})}}r.forEach((b,_)=>{if(a.type==="fraction"&&(b.querySelectorAll(q(a.currentClass)).forEach(H=>{H.textContent=a.formatFractionCurrent(u+1)}),b.querySelectorAll(q(a.totalClass)).forEach(H=>{H.textContent=a.formatFractionTotal(M)})),a.type==="progressbar"){let H;a.progressbarOpposite?H=e.isHorizontal()?"vertical":"horizontal":H=e.isHorizontal()?"horizontal":"vertical";const P=(u+1)/M;let L=1,k=1;H==="horizontal"?L=P:k=P,b.querySelectorAll(q(a.progressbarFillClass)).forEach(D=>{D.style.transform=`translate3d(0,0,0) scaleX(${L}) scaleY(${k})`,D.style.transitionDuration=`${e.params.speed}ms`})}a.type==="custom"&&a.renderCustom?(b.innerHTML=a.renderCustom(e,u+1,M),_===0&&f("paginationRender",b)):(_===0&&f("paginationRender",b),f("paginationUpdate",b)),e.params.watchOverflow&&e.enabled&&b.classList[e.isLocked?"add":"remove"](a.lockClass)})}function w(){const t=e.params.pagination;if(n())return;const a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length;let r=e.pagination.el;r=i(r);let u="";if(t.type==="bullets"){let C=e.params.loop?Math.ceil(a/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&C>a&&(C=a);for(let S=0;S<C;S+=1)t.renderBullet?u+=t.renderBullet.call(e,S,t.bulletClass):u+=`<${t.bulletElement} ${e.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`}t.type==="fraction"&&(t.renderFraction?u=t.renderFraction.call(e,t.currentClass,t.totalClass):u=`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type==="progressbar"&&(t.renderProgressbar?u=t.renderProgressbar.call(e,t.progressbarFillClass):u=`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],r.forEach(C=>{t.type!=="custom"&&(C.innerHTML=u||""),t.type==="bullets"&&e.pagination.bullets.push(...C.querySelectorAll(q(t.bulletClass)))}),t.type!=="custom"&&f("paginationRender",r[0])}function T(){e.params.pagination=de(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let a;typeof t.el=="string"&&e.isElement&&(a=e.el.querySelector(t.el)),!a&&typeof t.el=="string"&&(a=[...document.querySelectorAll(t.el)]),a||(a=t.el),!(!a||a.length===0)&&(e.params.uniqueNavElements&&typeof t.el=="string"&&Array.isArray(a)&&a.length>1&&(a=[...e.el.querySelectorAll(t.el)],a.length>1&&(a=a.filter(r=>Ce(r,".swiper")[0]===e.el)[0])),Array.isArray(a)&&a.length===1&&(a=a[0]),Object.assign(e.pagination,{el:a}),a=i(a),a.forEach(r=>{t.type==="bullets"&&t.clickable&&r.classList.add(t.clickableClass),r.classList.add(t.modifierClass+t.type),r.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.type==="bullets"&&t.dynamicBullets&&(r.classList.add(`${t.modifierClass}${t.type}-dynamic`),h=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type==="progressbar"&&t.progressbarOpposite&&r.classList.add(t.progressbarOppositeClass),t.clickable&&r.addEventListener("click",m),e.enabled||r.classList.add(t.lockClass)}))}function o(){const t=e.params.pagination;if(n())return;let a=e.pagination.el;a&&(a=i(a),a.forEach(r=>{r.classList.remove(t.hiddenClass),r.classList.remove(t.modifierClass+t.type),r.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&r.removeEventListener("click",m)})),e.pagination.bullets&&e.pagination.bullets.forEach(r=>r.classList.remove(...t.bulletActiveClass.split(" ")))}l("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const t=e.params.pagination;let{el:a}=e.pagination;a=i(a),a.forEach(r=>{r.classList.remove(t.horizontalClass,t.verticalClass),r.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),l("init",()=>{e.params.pagination.enabled===!1?g():(T(),w(),v())}),l("activeIndexChange",()=>{typeof e.snapIndex>"u"&&v()}),l("snapIndexChange",()=>{v()}),l("snapGridLengthChange",()=>{w(),v()}),l("destroy",()=>{o()}),l("enable disable",()=>{let{el:t}=e.pagination;t&&(t=i(t),t.forEach(a=>a.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),l("lock unlock",()=>{v()}),l("click",(t,a)=>{const r=a.target,u=i(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&u&&u.length>0&&!r.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&r===e.navigation.nextEl||e.navigation.prevEl&&r===e.navigation.prevEl))return;const C=u[0].classList.contains(e.params.pagination.hiddenClass);f(C===!0?"paginationShow":"paginationHide"),u.forEach(S=>S.classList.toggle(e.params.pagination.hiddenClass))}});const s=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=i(t),t.forEach(a=>a.classList.remove(e.params.pagination.paginationDisabledClass))),T(),w(),v()},g=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=i(t),t.forEach(a=>a.classList.add(e.params.pagination.paginationDisabledClass))),o()};Object.assign(e.pagination,{enable:s,disable:g,render:w,update:v,init:T,destroy:o})}function $e(x){let{swiper:e,extendParams:p,on:l,emit:f,params:c}=x;e.autoplay={running:!1,paused:!1,timeLeft:0},p({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let I,h,i=c&&c.autoplay?c.autoplay.delay:3e3,n=c&&c.autoplay?c.autoplay.delay:3e3,d,m=new Date().getTime,v,w,T,o,s,g;function t(B){!e||e.destroyed||!e.wrapperEl||B.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",t),b())}const a=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?v=!0:v&&(n=d,v=!1);const B=e.autoplay.paused?d:m+n-new Date().getTime();e.autoplay.timeLeft=B,f("autoplayTimeLeft",B,B/i),h=requestAnimationFrame(()=>{a()})},r=()=>{let B;return e.virtual&&e.params.virtual.enabled?B=e.slides.filter(O=>O.classList.contains("swiper-slide-active"))[0]:B=e.slides[e.activeIndex],B?parseInt(B.getAttribute("data-swiper-autoplay"),10):void 0},u=B=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(h),a();let U=typeof B>"u"?e.params.autoplay.delay:B;i=e.params.autoplay.delay,n=e.params.autoplay.delay;const O=r();!Number.isNaN(O)&&O>0&&typeof B>"u"&&(U=O,i=O,n=O),d=U;const Q=e.params.speed,se=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(Q,!0,!0),f("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,Q,!0,!0),f("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(Q,!0,!0),f("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,Q,!0,!0),f("autoplay")),e.params.cssMode&&(m=new Date().getTime(),requestAnimationFrame(()=>{u()})))};return U>0?(clearTimeout(I),I=setTimeout(()=>{se()},U)):requestAnimationFrame(()=>{se()}),U},C=()=>{e.autoplay.running=!0,u(),f("autoplayStart")},S=()=>{e.autoplay.running=!1,clearTimeout(I),cancelAnimationFrame(h),f("autoplayStop")},M=(B,U)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(I),B||(g=!0);const O=()=>{f("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",t):b()};if(e.autoplay.paused=!0,U){s&&(d=e.params.autoplay.delay),s=!1,O();return}d=(d||e.params.autoplay.delay)-(new Date().getTime()-m),!(e.isEnd&&d<0&&!e.params.loop)&&(d<0&&(d=0),O())},b=()=>{e.isEnd&&d<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(m=new Date().getTime(),g?(g=!1,u(d)):u(),e.autoplay.paused=!1,f("autoplayResume"))},_=()=>{if(e.destroyed||!e.autoplay.running)return;const B=ee();B.visibilityState==="hidden"&&(g=!0,M(!0)),B.visibilityState==="visible"&&b()},H=B=>{B.pointerType==="mouse"&&(g=!0,M(!0))},P=B=>{B.pointerType==="mouse"&&e.autoplay.paused&&b()},L=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",H),e.el.addEventListener("pointerleave",P))},k=()=>{e.el.removeEventListener("pointerenter",H),e.el.removeEventListener("pointerleave",P)},D=()=>{ee().addEventListener("visibilitychange",_)},$=()=>{ee().removeEventListener("visibilitychange",_)};l("init",()=>{e.params.autoplay.enabled&&(L(),D(),m=new Date().getTime(),C())}),l("destroy",()=>{k(),$(),e.autoplay.running&&S()}),l("beforeTransitionStart",(B,U,O)=>{e.destroyed||!e.autoplay.running||(O||!e.params.autoplay.disableOnInteraction?M(!0,!0):S())}),l("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){S();return}w=!0,T=!1,g=!1,o=setTimeout(()=>{g=!0,T=!0,M(!0)},200)}}),l("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!w)){if(clearTimeout(o),clearTimeout(I),e.params.autoplay.disableOnInteraction){T=!1,w=!1;return}T&&e.params.cssMode&&b(),T=!1,w=!1}}),l("slideChange",()=>{e.destroyed||!e.autoplay.running||(s=!0)}),Object.assign(e.autoplay,{start:C,stop:S,pause:M,resume:b})}function pe(x){const{effect:e,swiper:p,on:l,setTranslate:f,setTransition:c,overwriteParams:I,perspective:h,recreateShadows:i,getEffectParams:n}=x;l("beforeInit",()=>{if(p.params.effect!==e)return;p.classNames.push(`${p.params.containerModifierClass}${e}`),h&&h()&&p.classNames.push(`${p.params.containerModifierClass}3d`);const m=I?I():{};Object.assign(p.params,m),Object.assign(p.originalParams,m)}),l("setTranslate",()=>{p.params.effect===e&&f()}),l("setTransition",(m,v)=>{p.params.effect===e&&c(v)}),l("transitionEnd",()=>{if(p.params.effect===e&&i){if(!n||!n().slideShadows)return;p.slides.forEach(m=>{m.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(v=>v.remove())}),i()}});let d;l("virtualUpdate",()=>{p.params.effect===e&&(p.slides.length||(d=!0),requestAnimationFrame(()=>{d&&p.slides&&p.slides.length&&(f(),d=!1)}))})}function fe(x,e){const p=K(e);return p!==e&&(p.style.backfaceVisibility="hidden",p.style["-webkit-backface-visibility"]="hidden"),p}function ue(x){let{swiper:e,duration:p,transformElements:l,allSlides:f}=x;const{activeIndex:c}=e,I=h=>h.parentElement?h.parentElement:e.slides.filter(n=>n.shadowRoot&&n.shadowRoot===h.parentNode)[0];if(e.params.virtualTranslate&&p!==0){let h=!1,i;f?i=l:i=l.filter(n=>{const d=n.classList.contains("swiper-slide-transform")?I(n):n;return e.getSlideIndex(d)===c}),i.forEach(n=>{Le(n,()=>{if(h||!e||e.destroyed)return;h=!0,e.animating=!1;const d=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(d)})})}}function ae(x,e,p){const l=`swiper-slide-shadow${p?`-${p}`:""}${x?` swiper-slide-shadow-${x}`:""}`,f=K(e);let c=f.querySelector(`.${l.split(" ").join(".")}`);return c||(c=ce("div",l.split(" ")),f.append(c)),c}function Qe(x){let{swiper:e,extendParams:p,on:l}=x;p({flipEffect:{slideShadows:!0,limitRotation:!0}});const f=(i,n)=>{let d=e.isHorizontal()?i.querySelector(".swiper-slide-shadow-left"):i.querySelector(".swiper-slide-shadow-top"),m=e.isHorizontal()?i.querySelector(".swiper-slide-shadow-right"):i.querySelector(".swiper-slide-shadow-bottom");d||(d=ae("flip",i,e.isHorizontal()?"left":"top")),m||(m=ae("flip",i,e.isHorizontal()?"right":"bottom")),d&&(d.style.opacity=Math.max(-n,0)),m&&(m.style.opacity=Math.max(n,0))};pe({effect:"flip",swiper:e,on:l,setTranslate:()=>{const{slides:i,rtlTranslate:n}=e,d=e.params.flipEffect;for(let m=0;m<i.length;m+=1){const v=i[m];let w=v.progress;e.params.flipEffect.limitRotation&&(w=Math.max(Math.min(v.progress,1),-1));const T=v.swiperSlideOffset;let s=-180*w,g=0,t=e.params.cssMode?-T-e.translate:-T,a=0;e.isHorizontal()?n&&(s=-s):(a=t,t=0,g=-s,s=0),v.style.zIndex=-Math.abs(Math.round(w))+i.length,d.slideShadows&&f(v,w);const r=`translate3d(${t}px, ${a}px, 0px) rotateX(${g}deg) rotateY(${s}deg)`,u=fe(d,v);u.style.transform=r}},setTransition:i=>{const n=e.slides.map(d=>K(d));n.forEach(d=>{d.style.transitionDuration=`${i}ms`,d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(m=>{m.style.transitionDuration=`${i}ms`})}),ue({swiper:e,duration:i,transformElements:n})},recreateShadows:()=>{e.params.flipEffect,e.slides.forEach(i=>{let n=i.progress;e.params.flipEffect.limitRotation&&(n=Math.max(Math.min(i.progress,1),-1)),f(i,n)})},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function je(x){let{swiper:e,extendParams:p,on:l}=x;p({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),pe({effect:"cards",swiper:e,on:l,setTranslate:()=>{const{slides:I,activeIndex:h,rtlTranslate:i}=e,n=e.params.cardsEffect,{startTranslate:d,isTouched:m}=e.touchEventsData,v=i?-e.translate:e.translate;for(let w=0;w<I.length;w+=1){const T=I[w],o=T.progress,s=Math.min(Math.max(o,-4),4);let g=T.swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&(e.wrapperEl.style.transform=`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(g-=I[0].swiperSlideOffset);let t=e.params.cssMode?-g-e.translate:-g,a=0;const r=-100*Math.abs(s);let u=1,C=-n.perSlideRotate*s,S=n.perSlideOffset-Math.abs(s)*.75;const M=e.virtual&&e.params.virtual.enabled?e.virtual.from+w:w,b=(M===h||M===h-1)&&s>0&&s<1&&(m||e.params.cssMode)&&v<d,_=(M===h||M===h+1)&&s<0&&s>-1&&(m||e.params.cssMode)&&v>d;if(b||_){const k=(1-Math.abs((Math.abs(s)-.5)/.5))**.5;C+=-28*s*k,u+=-.5*k,S+=96*k,a=`${-25*k*Math.abs(s)}%`}if(s<0?t=`calc(${t}px ${i?"-":"+"} (${S*Math.abs(s)}%))`:s>0?t=`calc(${t}px ${i?"-":"+"} (-${S*Math.abs(s)}%))`:t=`${t}px`,!e.isHorizontal()){const k=a;a=t,t=k}const H=s<0?`${1+(1-u)*s}`:`${1-(1-u)*s}`,P=`
        translate3d(${t}, ${a}, ${r}px)
        rotateZ(${n.rotate?i?-C:C:0}deg)
        scale(${H})
      `;if(n.slideShadows){let k=T.querySelector(".swiper-slide-shadow");k||(k=ae("cards",T)),k&&(k.style.opacity=Math.min(Math.max((Math.abs(s)-.5)/.5,0),1))}T.style.zIndex=-Math.abs(Math.round(o))+I.length;const L=fe(n,T);L.style.transform=P}},setTransition:I=>{const h=e.slides.map(i=>K(i));h.forEach(i=>{i.style.transitionDuration=`${I}ms`,i.querySelectorAll(".swiper-slide-shadow").forEach(n=>{n.style.transitionDuration=`${I}ms`})}),ue({swiper:e,duration:I,transformElements:h})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}const Fe={id:"section01"},Ve=y("span",{id:"span-1"},"GOHAN",-1),qe=y("span",{id:"span-2"},"一個與料理",-1),Je=y("span",{id:"span-3"},"緊密連結的空間",-1),Xe={id:"section02"},Ye=y("h1",{class:"h1-title text-center mb-3"},"由喜歡美食與烹飪的我們而發想出來的小空間",-1),We=y("div",{class:"under-line mx-auto"},null,-1),Ke={id:"section03"},Ze=y("div",{class:"d-flex justify-center align-center text-center"},[y("p",null,[G(" 位於萬華小巷弄內"),y("br"),G(" 我們結合多樣化與食物接觸的形式"),y("br"),G(" 早午餐 / 廚藝教室 / 客製晚餐 / 一日主廚 ")])],-1),et={class:"d-flex justify-center align-center text-center flex-column"},tt=y("p",null,[G(" 我們一次只有賣一種早午餐，"),y("br"),G(" 為了讓大家為了讓大家不會吃膩，"),y("br"),G(" 菜單是十天更換一次喔。"),y("br"),y("br"),G(" 每個月 1/11/21 推出新菜單！ ")],-1),at={id:"section04"},st=y("h1",{class:"h1-title text-center mb-3"},"廚藝教室",-1),it=y("div",{class:"under-line mx-auto"},null,-1),nt=y("p",{class:"text-center"},[G(" 我們會在每個週六的下午開放廚藝教室課程，"),y("br"),G(" 時間為 15:30 ~ 18:00 並且採取小班制教學，"),y("br"),G(" 每堂課上限 8 人。 ")],-1),rt=y("div",{id:"egg",class:"d-flex justify-center align-center mx-auto"},[y("p",null," 以示範品嚐的方式從食材、工具、到烹調方式，讓你領會食材以及料理之中的奧妙和秘訣，並且每人享有一份完整的餐點，讓你在品嚐美食的過程中，又可以學習到料理的技巧。 ")],-1),lt={id:"tray"},ot={id:"top"},ct={id:"section05"},dt=y("div",{class:"d-flex flex-column fill-height justify-center align-center text-white"},[y("h1",{class:"font-weight-bolder"},"ゴハンゲンキュウシツ"),y("h4",{class:"subheading"}," Gohan Today! ")],-1),pt={id:"section06"},ft={id:"bottom"},ut=y("h1",{class:"text-center h1-title"},"Foodie",-1),mt={id:"footer",style:{background:"#dae0e0"}},wt={__name:"HomeView",setup(x){const{xs:e}=le(),p=[$e,je,Qe,Ne,Ue],l=oe(()=>e.value),f=[{src:new URL(""+new URL("swiper_01-0f4cbf6f.jpeg",import.meta.url).href,self.location).href},{src:new URL(""+new URL("swiper_02-7a33e41b.jpeg",import.meta.url).href,self.location).href},{src:new URL(""+new URL("swiper_03-402a03df.jpeg",import.meta.url).href,self.location).href}],c=[{src:new URL(""+new URL("course_1-5133d148.jpg",import.meta.url).href,self.location).href},{src:new URL(""+new URL("course_2-e5e085a9.jpg",import.meta.url).href,self.location).href},{src:new URL(""+new URL("course_3-da33e56d.jpg",import.meta.url).href,self.location).href},{src:new URL(""+new URL("course_4-b3b380e4.jpg",import.meta.url).href,self.location).href}],I=[{src:new URL(""+new URL("swiper6-1-87c62594.jpg",import.meta.url).href,self.location).href},{src:new URL(""+new URL("swiper6-2-1b58c143.jpg",import.meta.url).href,self.location).href},{src:new URL(""+new URL("swiper6-3-0e8a4ca7.jpg",import.meta.url).href,self.location).href},{src:new URL(""+new URL("swiper6-4-92de053f.jpg",import.meta.url).href,self.location).href},{src:new URL(""+new URL("swiper6-5-f0a53a70.jpg",import.meta.url).href,self.location).href},{src:new URL(""+new URL("swiper6-6-3186f371.jpg",import.meta.url).href,self.location).href}];return(h,i)=>{const n=ne("swiper-slide"),d=ne("swiper");return N(),J(X,null,[y("section",Fe,[A(V,{fluid:"true",class:"mx-0"},{default:E(()=>[A(W,null,{default:E(()=>[l.value?F("",!0):(N(),j(R,{key:0,cols:"3"},{default:E(()=>[Ve,qe,Je,A(z,{class:"mx-auto",src:_e,cover:"",id:"logoView"})]),_:1})),A(re),A(R,{cols:"12",sm:"9"},{default:E(()=>[A(d,{class:"mySwiper",id:"swiper1",modules:p,autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,style:{"box-shadow":"0 0 10px #514742"}},{default:E(()=>[(N(),J(X,null,te(f,m=>A(n,{key:m.src},{default:E(()=>[A(z,{src:m.src,"aspect-ratio":"1",cover:""},null,8,["src"])]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1})]),y("section",Xe,[A(V,null,{default:E(()=>[Ye,We]),_:1})]),y("section",Ke,[A(V,null,{default:E(()=>[A(W,null,{default:E(()=>[A(R,{cols:"12",sm:"5"},{default:E(()=>[A(z,{src:Me})]),_:1}),A(R,{cols:"12",sm:"8",class:"ms-auto"},{default:E(()=>[Ze]),_:1}),A(R,{class:"order-sm-1 ms-auto",cols:"12",sm:"6"},{default:E(()=>[A(z,{src:Ge})]),_:1}),A(R,{cols:"12",sm:"5",class:"text-center"},{default:E(()=>[y("div",et,[tt,l.value?(N(),j(Y,{key:0,class:"btn-primary mt-5 btn-hover",variant:"text",to:"/menu"},{default:E(()=>[G("MENU")]),_:1})):F("",!0)]),l.value?F("",!0):(N(),j(Y,{key:0,class:"btn-primary mt-5 btn-hover",variant:"text",to:"/menu"},{default:E(()=>[G("MENU")]),_:1}))]),_:1})]),_:1})]),_:1})]),y("section",at,[A(V,null,{default:E(()=>[A(W,null,{default:E(()=>[A(R,{cols:"12"},{default:E(()=>[st,it]),_:1}),A(R,{cols:"12",class:"my-5"},{default:E(()=>[nt]),_:1}),A(R,{cols:"12",sm:"5",class:"text-center",style:{overflow:"hidden"}},{default:E(()=>[A(d,{effect:"cards",grabCursor:!0,loop:!0,modules:p,pagination:!l.value,navigation:!l.value,class:"mySwiper",id:"swiper2"},{default:E(()=>[(N(),J(X,null,te(c,m=>A(n,{key:m.src},{default:E(()=>[A(z,{src:m.src,"aspect-ratio":"4/3",cover:""},null,8,["src"])]),_:2},1024)),64))]),_:1},8,["pagination","navigation"]),l.value?F("",!0):(N(),j(Y,{key:0,class:"btn-primary btn-hover",variant:"text",to:"/course",style:{"margin-top":"70px"}},{default:E(()=>[G("READ MORE")]),_:1}))]),_:1}),A(re),A(R,{cols:"12",sm:"6"},{default:E(()=>[rt,l.value?(N(),j(Y,{key:0,class:"mx-auto btn-hover",to:"/course"},{default:E(()=>[G("READ MORE")]),_:1})):F("",!0),y("div",lt,[A(z,{src:Oe,cover:""})])]),_:1})]),_:1})]),_:1}),y("div",ot,[A(z,{src:Re,cover:""})])]),y("section",ct,[A(Se,{src:Pe,style:{"font-family":"hanzi"}},{default:E(()=>[dt]),_:1})]),y("section",pt,[y("div",ft,[A(z,{src:ze,cover:""})]),A(V,null,{default:E(()=>[A(W,null,{default:E(()=>[A(R,{cols:"12"},{default:E(()=>[ut]),_:1}),A(R,{cols:"12"},{default:E(()=>[A(d,{slidesPerView:1,spaceBetween:10,breakpoints:{1:{slidesPerView:2,spaceBetween:30},768:{slidesPerView:3,spaceBetween:40},1024:{slidesPerView:3,spaceBetween:50}},modules:p,loop:!0,speed:3e3,autoplay:{delay:0,disableOnInteraction:!1},class:"mySwiper"},{default:E(()=>[(N(),J(X,null,te(I,m=>A(n,{key:m.src},{default:E(()=>[A(z,{src:m.src,cover:""},null,8,["src"])]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1})]),y("section",mt,[A(me)])],64)}}};export{wt as default};
