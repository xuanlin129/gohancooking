import{F as Te}from"./FooterView-a7aa6247.js";import{p as ne,I as de,b as ze,f as Se,an as Pe,g as se,ao as Be,C as Re,ap as $e,aq as U,D as P,a1 as ve,ar as De,a3 as Me,u as oe,c as s,as as fe,s as me,at as Ae,a5 as Fe,au as Ee,m as Ie,n as Oe,E as B,V as G,a as ae,av as Ue,aw as Ge,ax as He,ay as Le,az as Ne,j as qe,t as O,aA as We,aB as Xe,z as Ye,_ as Y,F as je,G as b,H as R,L as c,aC as Ke,S as v,O as ee,ah as ge,W as N,ag as Je,aD as Qe,aE as pe,P as Ze,K as E,N as w,X as z,am as j,aF as he,R as ye,aG as et}from"./index-f1c517c6.js";import{V as tt}from"./VContainer-aa298c94.js";import{V as te,a as $}from"./VRow-04a852f0.js";import"./logo_lineImg_light-70861258.js";import"./logo_word_light-c737bbc8.js";/* empty css              */function be(e){const r=Math.abs(e);return Math.sign(e)*(r/((1/.501-2)*(1-r)+1))}function xe(e){let{selectedElement:p,containerSize:r,contentSize:m,isRtl:_,currentScrollOffset:t,isHorizontal:a}=e;const l=a?p.clientWidth:p.clientHeight,g=a?p.offsetLeft:p.offsetTop,f=_&&a?m-g-l:g,h=r+t,V=l+f,x=l*.4;return f<=t?t=Math.max(f-x,0):h<=V&&(t=Math.min(t-(h-V-x),m-r)),t}function at(e){let{selectedElement:p,containerSize:r,contentSize:m,isRtl:_,isHorizontal:t}=e;const a=t?p.clientWidth:p.clientHeight,l=t?p.offsetLeft:p.offsetTop,g=_&&t?m-l-a/2-r/2:l+a/2-r/2;return Math.min(m-r,Math.max(0,g))}const lt=Symbol.for("vuetify:v-slide-group"),Ve=ne({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:lt},nextIcon:{type:de,default:"$next"},prevIcon:{type:de,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...ze(),...Se(),...Pe({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),_e=se()({name:"VSlideGroup",props:Ve(),emits:{"update:modelValue":e=>!0},setup(e,p){let{slots:r}=p;const{isRtl:m}=Be(),{mobile:_}=Re(),t=$e(e,e.symbol),a=U(!1),l=U(0),g=U(0),f=U(0),h=P(()=>e.direction==="horizontal"),{resizeRef:V,contentRect:x}=ve(),{resizeRef:y,contentRect:D}=ve(),M=P(()=>t.selected.value.length?t.items.value.findIndex(i=>i.id===t.selected.value[0]):-1),I=P(()=>t.selected.value.length?t.items.value.findIndex(i=>i.id===t.selected.value[t.selected.value.length-1]):-1);if(De){let i=-1;Me(()=>[t.selected.value,x.value,D.value,h.value],()=>{cancelAnimationFrame(i),i=requestAnimationFrame(()=>{if(x.value&&D.value){const d=h.value?"width":"height";g.value=x.value[d],f.value=D.value[d],a.value=g.value+1<f.value}if(M.value>=0&&y.value){const d=y.value.children[I.value];M.value===0||!a.value?l.value=0:e.centerActive?l.value=at({selectedElement:d,containerSize:g.value,contentSize:f.value,isRtl:m.value,isHorizontal:h.value}):a.value&&(l.value=xe({selectedElement:d,containerSize:g.value,contentSize:f.value,isRtl:m.value,currentScrollOffset:l.value,isHorizontal:h.value}))}})})}const o=U(!1);let n=0,S=0;function u(i){const d=h.value?"clientX":"clientY";S=(m.value&&h.value?-1:1)*l.value,n=i.touches[0][d],o.value=!0}function T(i){if(!a.value)return;const d=h.value?"clientX":"clientY",C=m.value&&h.value?-1:1;l.value=C*(S+n-i.touches[0][d])}function W(i){const d=f.value-g.value;l.value<0||!a.value?l.value=0:l.value>=d&&(l.value=d),o.value=!1}function A(){V.value&&(V.value[h.value?"scrollLeft":"scrollTop"]=0)}const H=U(!1);function K(i){if(H.value=!0,!(!a.value||!y.value)){for(const d of i.composedPath())for(const C of y.value.children)if(C===d){l.value=xe({selectedElement:C,containerSize:g.value,contentSize:f.value,isRtl:m.value,currentScrollOffset:l.value,isHorizontal:h.value});return}}}function F(i){H.value=!1}function J(i){var d;!H.value&&!(i.relatedTarget&&((d=y.value)!=null&&d.contains(i.relatedTarget)))&&k()}function ue(i){y.value&&(h.value?i.key==="ArrowRight"?k(m.value?"prev":"next"):i.key==="ArrowLeft"&&k(m.value?"next":"prev"):i.key==="ArrowDown"?k("next"):i.key==="ArrowUp"&&k("prev"),i.key==="Home"?k("first"):i.key==="End"&&k("last"))}function k(i){var d,C,ie,re,ce;if(y.value)if(!i)(d=Ae(y.value)[0])==null||d.focus();else if(i==="next"){const L=(C=y.value.querySelector(":focus"))==null?void 0:C.nextElementSibling;L?L.focus():k("first")}else if(i==="prev"){const L=(ie=y.value.querySelector(":focus"))==null?void 0:ie.previousElementSibling;L?L.focus():k("last")}else i==="first"?(re=y.value.firstElementChild)==null||re.focus():i==="last"&&((ce=y.value.lastElementChild)==null||ce.focus())}function q(i){const d=l.value+(i==="prev"?-1:1)*g.value;l.value=Fe(d,0,f.value-g.value)}const X=P(()=>{let i=l.value>f.value-g.value?-(f.value-g.value)+be(f.value-g.value-l.value):-l.value;l.value<=0&&(i=be(-l.value));const d=m.value&&h.value?-1:1;return{transform:`translate${h.value?"X":"Y"}(${d*i}px)`,transition:o.value?"none":"",willChange:o.value?"transform":""}}),Q=P(()=>({next:t.next,prev:t.prev,select:t.select,isSelected:t.isSelected})),Z=P(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!_.value;case!0:return a.value||Math.abs(l.value)>0;case"mobile":return _.value||a.value||Math.abs(l.value)>0;default:return!_.value&&(a.value||Math.abs(l.value)>0)}}),we=P(()=>Math.abs(l.value)>0),Ce=P(()=>f.value>Math.abs(l.value)+g.value);return oe(()=>s(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!h.value,"v-slide-group--has-affixes":Z.value,"v-slide-group--is-overflowing":a.value},e.class],style:e.style,tabindex:H.value||t.selected.value.length?-1:0,onFocus:J},{default:()=>{var i,d,C;return[Z.value&&s("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!we.value}],onClick:()=>q("prev")},[((i=r.prev)==null?void 0:i.call(r,Q.value))??s(fe,null,{default:()=>[s(me,{icon:m.value?e.nextIcon:e.prevIcon},null)]})]),s("div",{key:"container",ref:V,class:"v-slide-group__container",onScroll:A},[s("div",{ref:y,class:"v-slide-group__content",style:X.value,onTouchstartPassive:u,onTouchmovePassive:T,onTouchendPassive:W,onFocusin:K,onFocusout:F,onKeydown:ue},[(d=r.default)==null?void 0:d.call(r,Q.value)])]),Z.value&&s("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!Ce.value}],onClick:()=>q("next")},[((C=r.next)==null?void 0:C.call(r,Q.value))??s(fe,null,{default:()=>[s(me,{icon:m.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:t.selected,scrollTo:q,scrollOffset:l,focus:k}}});const ke=Symbol.for("vuetify:v-tabs"),nt=ne({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Ee(Ie({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),le=se()({name:"VTab",props:nt(),setup(e,p){let{slots:r,attrs:m}=p;const{textColorClasses:_,textColorStyles:t}=Oe(e,"sliderColor"),a=P(()=>e.direction==="horizontal"),l=U(!1),g=B(),f=B();function h(V){var y,D;let{value:x}=V;if(l.value=x,x){const M=(D=(y=g.value)==null?void 0:y.$el.parentElement)==null?void 0:D.querySelector(".v-tab--selected .v-tab__slider"),I=f.value;if(!M||!I)return;const o=getComputedStyle(M).color,n=M.getBoundingClientRect(),S=I.getBoundingClientRect(),u=a.value?"x":"y",T=a.value?"X":"Y",W=a.value?"right":"bottom",A=a.value?"width":"height",H=n[u],K=S[u],F=H>K?n[W]-S[W]:n[u]-S[u],J=Math.sign(F)>0?a.value?"right":"bottom":Math.sign(F)<0?a.value?"left":"top":"center",k=(Math.abs(F)+(Math.sign(F)<0?n[A]:S[A]))/Math.max(n[A],S[A]),q=n[A]/S[A],X=1.5;Ue(I,{backgroundColor:[o,"currentcolor"],transform:[`translate${T}(${F}px) scale${T}(${q})`,`translate${T}(${F/X}px) scale${T}(${(k-1)/X+1})`,"none"],transformOrigin:Array(3).fill(J)},{duration:225,easing:Ge})}}return oe(()=>{const[V]=G.filterProps(e);return s(G,ae({symbol:ke,ref:g,class:["v-tab",e.class],style:e.style,tabindex:l.value?0:-1,role:"tab","aria-selected":String(l.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,rounded:0},V,m,{"onGroup:selected":h}),{default:()=>{var x;return[((x=r.default)==null?void 0:x.call(r))??e.text,!e.hideSlider&&s("div",{ref:f,class:["v-tab__slider",_.value],style:t.value},null)]}})}),{}}});function st(e){return e?e.map(p=>typeof p=="string"?{title:p,value:p}:p):[]}const ot=ne({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Ve({mandatory:"force"}),...He(),...Se()},"VTabs"),ut=se()({name:"VTabs",props:ot(),emits:{"update:modelValue":e=>!0},setup(e,p){let{slots:r}=p;const m=Le(e,"modelValue"),_=P(()=>st(e.items)),{densityClasses:t}=Ne(e),{backgroundColorClasses:a,backgroundColorStyles:l}=qe(O(e,"bgColor"));return We({VTab:{color:O(e,"color"),direction:O(e,"direction"),stacked:O(e,"stacked"),fixed:O(e,"fixedTabs"),sliderColor:O(e,"sliderColor"),hideSlider:O(e,"hideSlider")}}),oe(()=>{const[g]=_e.filterProps(e);return s(_e,ae(g,{modelValue:m.value,"onUpdate:modelValue":f=>m.value=f,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},t.value,a.value,e.class],style:[{"--v-tabs-height":Xe(e.height)},l.value,e.style],role:"tablist",symbol:ke}),{default:()=>[r.default?r.default():_.value.map(f=>s(le,ae(f,{key:f.title}),null))]})}),{}}}),it=v("h1",{class:"text-center h1-title mb-1"},"會員資訊",-1),rt=v("div",{class:"h1-border"},null,-1),ct={id:"avatar",class:"d-flex align-center flex-column my-2 my-sm-0"},dt=v("h3",{class:"my-4"},"會員名稱",-1),vt={key:1,id:"userName"},ft={class:"d-flex align-center"},mt=v("span",{class:"me-10"},"帳號：",-1),gt={class:"d-flex align-center"},pt=v("span",{class:"me-7"},"E-mail：",-1),ht={key:0},yt={class:"d-flex align-center"},bt=v("span",{class:"me-10"},"地址：",-1),xt={key:0},_t={class:"d-flex align-center"},St=v("span",{class:"me-10"},"電話：",-1),Vt={key:0},kt=v("thead",null,[v("tr",null,[v("th",null,"編號"),v("th",null,"日期"),v("th",null,"金額"),v("th",null,"商品")])],-1),wt={style:{width:"60%"}},Ct={id:"footer"},Mt={__name:"AccountView",setup(e){const r=B(["one","two"][0]),m=Ye(),_=B([]),t=B([]),a=B(!1),l=B(!1),g=()=>{a.value=!a.value},f=o=>new Date(o.date).getMonth()<9?`0${(new Date(o.date).getMonth()+1).toString()}`:`${(new Date(o.date).getMonth()+1).toString()}`,h=o=>new Date(o.date).getDate()<9?`0${new Date(o.date).getDate().toString()}`:`${new Date(o.date).getDate().toString()}`,V=o=>o.split("").splice(11).join(""),x=B([]),y=B([]),D=B(null),M=async o=>{const n=new FormData;o.email=t.value.email,o.address=t.value.address,o.phone=t.value.phone,o.name=t.value.name,n.append("email",o.email),n.append("address",o.address),n.append("phone",o.phone),n.append("name",o.name),n.append("image",x.value[0].file),await Y.patch("/users/me",n),t.value.email=o.email,t.value.address=o.address,t.value.phone=o.phone,t.value.name=o.name,a.value=!1},I=async()=>{const{data:o}=await Y.get("/users/me");t.value=o.result,a.value=!1};return(async()=>{try{const{data:o}=await Y.get("/users/me");t.value=o.result}catch(o){m({text:o.response.data.message,showCloseButton:!1,snackbarProps:{timeout:3e3,color:"red",location:"bottom"}})}})(),(async()=>{try{const{data:o}=await Y.get("/orders");_.value.push(...o.result.map(n=>(n.total=n.cart.reduce((S,u)=>S+u.product.price*u.quantity,0),n)))}catch(o){m({text:o.response.data.message,showCloseButton:!1,snackbarProps:{timeout:3e3,color:"red",location:"bottom"}})}})(),(o,n)=>{const S=je("vue-file-agent");return b(),R(ee,null,[s(tt,{id:"account"},{default:c(()=>[s(te,null,{default:c(()=>[s($,{cols:"12",style:{margin:"20px 0"}},{default:c(()=>[it,rt]),_:1}),s($,{cols:"12"},{default:c(()=>[s(ge,null,{default:c(()=>[s(ut,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=u=>r.value=u),color:"#514742","bg-color":"#D9D9CF","fixed-tabs":""},{default:c(()=>[s(le,{value:"one"},{default:c(()=>[N("個人資訊")]),_:1}),s(le,{value:"two"},{default:c(()=>[N("訂單查詢")]),_:1})]),_:1},8,["modelValue"]),s(Je,null,{default:c(()=>[s(Qe,{modelValue:r.value,"onUpdate:modelValue":n[6]||(n[6]=u=>r.value=u)},{default:c(()=>[s(pe,{value:"one"},{default:c(()=>[s(te,{class:"align-center"},{default:c(()=>[s($,{cols:"12",sm:"6"},{default:c(()=>[v("div",ct,[s(Ze,{src:t.value.avatar,width:"120",style:{border:"1px solid rgba(0, 0, 0, 0.8)","border-radius":"50%"}},null,8,["src"]),a.value?(b(),E(G,{key:0,class:"btn-primary",density:"compact",variant:"text",icon:"mdi-pencil",onClick:n[1]||(n[1]=u=>l.value=!0)})):w("",!0),dt,a.value?w("",!0):(b(),R("p",vt,z(t.value.name),1)),a.value?(b(),E(j,{key:2,modelValue:t.value.name,"onUpdate:modelValue":n[2]||(n[2]=u=>t.value.name=u),density:"compact",variant:"outlined",style:{"min-width":"160px"}},null,8,["modelValue"])):w("",!0)])]),_:1}),s($,{cols:"12",sm:"6"},{default:c(()=>[s(te,{id:"accountInfo",class:"flex-column align-center"},{default:c(()=>[s($,null,{default:c(()=>[v("div",ft,[mt,v("span",null,z(t.value.account),1)])]),_:1}),s($,null,{default:c(()=>[v("div",gt,[pt,a.value?w("",!0):(b(),R("span",ht,z(t.value.email),1)),a.value?(b(),E(j,{key:1,modelValue:t.value.email,"onUpdate:modelValue":n[3]||(n[3]=u=>t.value.email=u),density:"compact",variant:"outlined"},null,8,["modelValue"])):w("",!0)])]),_:1}),s($,null,{default:c(()=>[v("div",yt,[bt,a.value?w("",!0):(b(),R("span",xt,z(t.value.address),1)),a.value?(b(),E(j,{key:1,modelValue:t.value.address,"onUpdate:modelValue":n[4]||(n[4]=u=>t.value.address=u),density:"compact",variant:"outlined"},null,8,["modelValue"])):w("",!0)])]),_:1}),s($,null,{default:c(()=>[v("div",_t,[St,a.value?w("",!0):(b(),R("span",Vt,z(t.value.phone),1)),a.value?(b(),E(j,{key:1,modelValue:t.value.phone,"onUpdate:modelValue":n[5]||(n[5]=u=>t.value.phone=u),density:"compact",variant:"outlined"},null,8,["modelValue"])):w("",!0)])]),_:1})]),_:1})]),_:1}),s($,{cols:"12",class:"text-center mt-4"},{default:c(()=>[a.value?w("",!0):(b(),E(G,{key:0,variant:"text",class:"btn-primary",onClick:g},{default:c(()=>[N("編輯")]),_:1})),a.value?(b(),E(G,{key:1,variant:"text",class:"btn-primary me-2",onClick:M},{default:c(()=>[N("變更")]),_:1})):w("",!0),a.value?(b(),E(G,{key:2,variant:"text",color:"red",onClick:I},{default:c(()=>[N("取消")]),_:1})):w("",!0)]),_:1})]),_:1})]),_:1}),s(pe,{value:"two"},{default:c(()=>[s(he,{class:"tableLayout"},{default:c(()=>[kt,v("tbody",null,[(b(!0),R(ee,null,ye(_.value,u=>(b(),R("tr",{key:u.id},[v("td",null,z(new Date(u.date).getFullYear().toString()+f(u)+h(u)+V(u._id)),1),v("td",null,z(new Date(u.date).toLocaleString()),1),v("td",null,z(u.total),1),v("td",null,[s(he,{class:"tableLayout"},{default:c(()=>[(b(!0),R(ee,null,ye(u.cart,T=>(b(),R("tr",{key:T._id},[v("td",wt,z(T.product.name)+"：",1),v("td",null,z(T.quantity)+" 個",1)]))),128))]),_:2},1024)])]))),128))])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(Ke,{persistent:"",modelValue:l.value,"onUpdate:modelValue":n[10]||(n[10]=u=>l.value=u),width:"500px"},{default:c(()=>[s(ge,null,{default:c(()=>[s(S,{modelValue:x.value,"onUpdate:modelValue":n[7]||(n[7]=u=>x.value=u),"raw-model-value":y.value,"onUpdate:rawModelValue":n[8]||(n[8]=u=>y.value=u),"max-files":1,"max-size":"1MB",accept:"image/jpg,image/jpeg,image/png",multiple:!1,"error-text":{type:"檔案格式錯誤",size:"檔案太大"},"help-text":"選擇檔案或拖放",deletable:"true",ref_key:"fileAgent",ref:D},null,8,["modelValue","raw-model-value"]),s(et,null,{default:c(()=>[s(G,{class:"btn-primary",block:"",onClick:n[9]||(n[9]=u=>l.value=!1)},{default:c(()=>[N("關閉視窗")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),v("section",Ct,[s(Te)])],64)}}};export{Mt as default};
