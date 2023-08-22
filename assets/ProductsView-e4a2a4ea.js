import{p as te,aP as le,au as xe,bd as he,g as oe,ay as Z,be as ne,aR as pe,D as z,u as se,aS as re,aT as q,bf as ie,c as t,a as E,aN as we,bg as ke,aO as de,E as v,bh as Ce,bi as Pe,bj as Se,bk as Fe,aq as Be,a2 as _e,aX as Ue,a3 as j,a4 as Ie,bl as Ae,bm as Me,O as Y,w as ce,bn as Re,bo as De,bp as Te,bq as $e,bc as ee,br as Ne,aB as ze,a5 as Ee,z as He,_ as X,F as ve,G as Ge,H as qe,L as c,aC as Le,am as J,bs as Oe,Q as me,V as Q,W,P as je,J as u,al as Ke,ah as Xe,af as Je,X as Qe,ag as We,bt as Ye,aG as Ze,S as ea}from"./index-e9e116a4.js";import{c as aa,a as ae,e as fe,f as ta,u as la,b as G,V as oa}from"./index.esm-195318ce.js";import{V as na}from"./VContainer-2f68d83a.js";import{V as sa,a as ge}from"./VRow-94f7dc0e.js";import{b as ra}from"./VToolbar-5fda57bb.js";import"./_commonjsHelpers-39b5b250.js";/* empty css              */const ua=te({...le(),...xe(he(),["inline"])},"VCheckbox"),ia=oe()({name:"VCheckbox",inheritAttrs:!1,props:ua(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,F){let{attrs:k,slots:f}=F;const s=Z(e,"modelValue"),{isFocused:i,focus:C,blur:B}=ne(e),M=pe(),S=z(()=>e.id||`checkbox-${M}`);return se(()=>{const[R,h]=re(k),[D,_]=q.filterProps(e),[w,m]=ie.filterProps(e);return t(q,E({class:["v-checkbox",e.class]},R,D,{modelValue:s.value,"onUpdate:modelValue":U=>s.value=U,id:S.value,focused:i.value,style:e.style}),{...f,default:U=>{let{id:I,messagesId:T,isDisabled:H,isReadonly:$}=U;return t(ie,E(w,{id:I.value,"aria-describedby":T.value,disabled:H.value,readonly:$.value},h,{modelValue:s.value,"onUpdate:modelValue":A=>s.value=A,onFocus:C,onBlur:B}),f)}})}),{}}});const da=te({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...le(),...we()},"VSwitch"),ca=oe()({name:"VSwitch",inheritAttrs:!1,props:da(),emits:{"update:focused":e=>!0,"update:modelValue":()=>!0,"update:indeterminate":e=>!0},setup(e,F){let{attrs:k,slots:f}=F;const s=Z(e,"indeterminate"),i=Z(e,"modelValue"),{loaderClasses:C}=ke(e),{isFocused:B,focus:M,blur:S}=ne(e),R=z(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),h=pe(),D=z(()=>e.id||`switch-${h}`);function _(){s.value&&(s.value=!1)}return se(()=>{const[w,m]=re(k),[U,I]=q.filterProps(e),[T,H]=de.filterProps(e),$=v();function A(V){var p,y;V.stopPropagation(),V.preventDefault(),(y=(p=$.value)==null?void 0:p.input)==null||y.click()}return t(q,E({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":s.value},C.value,e.class],style:e.style},w,U,{id:D.value,focused:B.value}),{...f,default:V=>{let{id:p,messagesId:y,isDisabled:x,isReadonly:g,isValid:o}=V;return t(de,E({ref:$},T,{modelValue:i.value,"onUpdate:modelValue":[d=>i.value=d,_],id:p.value,"aria-describedby":y.value,type:"checkbox","aria-checked":s.value?"mixed":void 0,disabled:x.value,readonly:g.value,onFocus:M,onBlur:S},m),{...f,default:()=>t("div",{class:"v-switch__track",onClick:A},null),input:d=>{let{textColorClasses:r,textColorStyles:b}=d;return t("div",{class:["v-switch__thumb",r.value],style:b.value},[e.loading&&t(Ce,{name:"v-switch",active:!0,color:o.value===!1?void 0:R.value},{default:P=>f.loader?f.loader(P):t(Pe,{active:P.isActive,color:P.color,indeterminate:!0,size:"16",width:"2"},null)})])}})}})}),{}}});const va=te({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...le(),...Se()},"VTextarea"),ma=oe()({name:"VTextarea",directives:{Intersect:Fe},inheritAttrs:!1,props:va(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,F){let{attrs:k,emit:f,slots:s}=F;const i=Z(e,"modelValue"),{isFocused:C,focus:B,blur:M}=ne(e),S=z(()=>typeof e.counterValue=="function"?e.counterValue(i.value):(i.value||"").toString().length),R=z(()=>{if(k.maxlength)return k.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function h(o,d){var r,b;!e.autofocus||!o||(b=(r=d[0].target)==null?void 0:r.focus)==null||b.call(r)}const D=v(),_=v(),w=Be(""),m=v(),U=z(()=>e.persistentPlaceholder||C.value||e.active);function I(){var o;m.value!==document.activeElement&&((o=m.value)==null||o.focus()),C.value||B()}function T(o){I(),f("click:control",o)}function H(o){f("mousedown:control",o)}function $(o){o.stopPropagation(),I(),ee(()=>{i.value="",Ne(e["onClick:clear"],o)})}function A(o){var r;const d=o.target;if(i.value=d.value,(r=e.modelModifiers)!=null&&r.trim){const b=[d.selectionStart,d.selectionEnd];ee(()=>{d.selectionStart=b[0],d.selectionEnd=b[1]})}}const V=v(),p=v(+e.rows),y=z(()=>["plain","underlined"].includes(e.variant));_e(()=>{e.autoGrow||(p.value=+e.rows)});function x(){e.autoGrow&&ee(()=>{if(!V.value||!_.value)return;const o=getComputedStyle(V.value),d=getComputedStyle(_.value.$el),r=parseFloat(o.getPropertyValue("--v-field-padding-top"))+parseFloat(o.getPropertyValue("--v-input-padding-top"))+parseFloat(o.getPropertyValue("--v-field-padding-bottom")),b=V.value.scrollHeight,P=parseFloat(o.lineHeight),L=Math.max(parseFloat(e.rows)*P+r,parseFloat(d.getPropertyValue("--v-input-control-height"))),n=parseFloat(e.maxRows)*P+r||1/0,a=Ee(b??0,L,n);p.value=Math.floor((a-r)/P),w.value=ze(a)})}Ue(x),j(i,x),j(()=>e.rows,x),j(()=>e.maxRows,x),j(()=>e.density,x);let g;return j(V,o=>{o?(g=new ResizeObserver(x),g.observe(V.value)):g==null||g.disconnect()}),Ie(()=>{g==null||g.disconnect()}),se(()=>{const o=!!(s.counter||e.counter||e.counterValue),d=!!(o||s.details),[r,b]=re(k),[{modelValue:P,...L}]=q.filterProps(e),[n]=Ae(e);return t(q,E({ref:D,modelValue:i.value,"onUpdate:modelValue":a=>i.value=a,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--plain-underlined":y.value},e.class],style:e.style},r,L,{centerAffix:p.value===1&&!y.value,focused:C.value}),{...s,default:a=>{let{isDisabled:N,isDirty:K,isReadonly:l,isValid:O}=a;return t(Me,E({ref:_,style:{"--v-textarea-control-height":w.value},onClick:T,onMousedown:H,"onClick:clear":$,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},n,{active:U.value||K.value,centerAffix:p.value===1&&!y.value,dirty:K.value||e.dirty,disabled:N.value,focused:C.value,error:O.value===!1}),{...s,default:be=>{let{props:{class:ue,...Ve}}=be;return t(Y,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),ce(t("textarea",E({ref:m,class:ue,value:i.value,onInput:A,autofocus:e.autofocus,readonly:l.value,disabled:N.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:I,onBlur:M},Ve,b),null),[[Re("intersect"),{handler:h},null,{once:!0}]]),e.autoGrow&&ce(t("textarea",{class:[ue,"v-textarea__sizer"],"onUpdate:modelValue":ye=>i.value=ye,ref:V,readonly:!0,"aria-hidden":"true"},null),[[De,i.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:d?a=>{var N;return t(Y,null,[(N=s.details)==null?void 0:N.call(s,a),o&&t(Y,null,[t("span",null,null),t(Te,{active:e.persistentCounter||C.value,value:S.value,max:R.value},s.counter)])])}:void 0})}),$e({},D,_,m)}}),fa=ea("h1",{class:"text-center"},"商品管理",-1),wa={__name:"ProductsView",setup(e){const F=He(),k=v(5),f=v([{key:"name",order:"asc"}]),s=v(1),i=v([]),C=[{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"名稱",align:"center",sortable:!0,key:"name"},{title:"價格",align:"center",sortable:!0,key:"price"},{title:"分類",align:"center",sortable:!0,key:"category"},{title:"數量",align:"center",sortable:!0,key:"inventory"},{title:"上架",align:"center",sortable:!0,key:"sell"},{title:"編輯",align:"center",sortable:!1,key:"edit"}],B=v(!1),M=v(0),S=v(""),R=()=>{s.value=1,h()},h=async()=>{B.value=!0;try{const{data:n}=await X.get("/products/all",{params:{page:s.value,itemsPerPage:k.value,sortBy:f.value[0].key,sortOrder:f.value[0].order,search:S.value}});i.value.splice(0,i.value.length,...n.result.data),M.value=n.result.count}catch(n){F({text:n.response.data.message,showCloseButton:!1,snackbarProps:{timeout:3e3,color:"red",location:"bottom"}})}B.value=!1};h();const D=n=>{m.value=n._id,p.value.value=n.name,y.value.value=n.price,x.value.value=n.description,g.value.value=n.category,o.value.value=n.inventory,d.value.value=n.sell,w.value=!0},_=async n=>{m.value=n._id;const a=new FormData;a.append("sell",!n.sell),await X.patch("/products/"+m.value,a)},w=v(!1),m=v(""),U=()=>{m.value="",w.value=!0},I=()=>{w.value=!1,V(),P.value.deleteFileRecord()},T=["窯烤麵包","料理包","其他"],H=aa({name:ae().required("缺少名稱"),price:fe().required("缺少價格").min(0,"價格錯誤").typeError("缺少價格"),description:ae().required("缺少說明"),category:ae().required("缺少分類").test("isCategory",n=>T.includes(n)),inventory:fe().required("缺少庫存").min(0,"數量錯誤").typeError("缺少價格"),sell:ta()}),{handleSubmit:$,isSubmitting:A,resetForm:V}=la({validationSchema:H,initialValues:{name:"",price:0,description:"",category:"",inventory:0,sell:!1}}),p=G("name"),y=G("price"),x=G("description"),g=G("category"),o=G("inventory"),d=G("sell"),r=v([]),b=v([]),P=v(null),L=$(async n=>{if(!(m.value.length===0&&r.value.length===0))try{const a=new FormData;a.append("name",n.name),a.append("price",n.price),a.append("description",n.description),a.append("category",n.category),a.append("inventory",n.inventory),a.append("sell",n.sell),r.value.length>0&&a.append("image",r.value[0].file),m.value.length>0?await X.patch("/products/"+m.value,a):await X.post("/products",a),F({text:"新增成功",showCloseButton:!1,snackbarProps:{timeout:3e3,color:"green",location:"bottom"}}),I(),h()}catch(a){F({text:a.response.data.message,showCloseButton:!1,snackbarProps:{timeout:3e3,color:"red",location:"bottom"}})}});return(n,a)=>{const N=ve("v-data-table-server"),K=ve("vue-file-agent");return Ge(),qe(Y,null,[t(na,null,{default:c(()=>[t(sa,null,{default:c(()=>[t(ge,{cols:"12"},{default:c(()=>[fa]),_:1}),t(ge,{cols:"12"},{default:c(()=>[t(N,{"items-per-page":k.value,"onUpdate:itemsPerPage":[a[1]||(a[1]=l=>k.value=l),h],"sort-by":f.value,"onUpdate:sortBy":[a[2]||(a[2]=l=>f.value=l),h],page:s.value,"onUpdate:page":[a[3]||(a[3]=l=>s.value=l),h],items:i.value,headers:C,loading:B.value,"items-length":M.value,search:S.value,hover:"",style:{border:"1px solid #d9d9cf",margin:"auto","border-radius":"1.1rem"}},{top:c(()=>[t(ra,{style:{background:"#d9d9cf",padding:"5px","border-radius":"1rem 1rem 0 0"}},{default:c(()=>[t(J,{label:"商品搜尋",modelValue:S.value,"onUpdate:modelValue":a[0]||(a[0]=l=>S.value=l),"append-inner-icon":"mdi-magnify",variant:"solo","onClick:appendInner":R,onKeydown:Oe(R,["enter"]),"hide-details":"",style:{opacity:"0.5"}},null,8,["modelValue","onKeydown"]),t(me),t(Q,{style:{background:"#43808F",color:"#ffffff"},onClick:U},{default:c(()=>[W("新增商品")]),_:1})]),_:1})]),"item.image":c(({item:l})=>[t(je,{src:l.raw.image,width:"100px",cover:"","aspect-ratio":1,class:"mx-auto"},null,8,["src"])]),"item.sell":c(({item:l})=>[t(ca,{class:"d-flex justify-center",color:"#43808F",modelValue:l.raw.sell,"onUpdate:modelValue":O=>l.raw.sell=O,onClick:O=>_(l.raw)},null,8,["modelValue","onUpdate:modelValue","onClick"])]),"item.edit":c(({item:l})=>[t(Q,{icon:"mdi-pencil",onClick:O=>D(l.raw),variant:"text",color:"#514742"},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1})]),_:1}),t(Le,{persistent:"",modelValue:w.value,"onUpdate:modelValue":a[12]||(a[12]=l=>w.value=l),width:"500px"},{default:c(()=>[t(oa,{disabled:u(A),onSubmit:Ke(u(L),["prevent"])},{default:c(()=>[t(Xe,null,{default:c(()=>[t(Je,{class:"text-center my-0 py-4",style:{background:"#43808F",color:"#ffffff"}},{default:c(()=>[W(Qe(m.value.length>0?"編輯商品":"新增商品"),1)]),_:1}),t(We,{class:"pt-5",style:{overflow:"scroll",height:"70vh"}},{default:c(()=>[t(J,{label:"名稱",variant:"outlined",modelValue:u(p).value.value,"onUpdate:modelValue":a[4]||(a[4]=l=>u(p).value.value=l),"error-messages":u(p).errorMessage.value},null,8,["modelValue","error-messages"]),t(J,{label:"價格",variant:"outlined",modelValue:u(y).value.value,"onUpdate:modelValue":a[5]||(a[5]=l=>u(y).value.value=l),modelModifiers:{number:!0},"error-messages":u(y).errorMessage.value,type:"number",min:"0"},null,8,["modelValue","error-messages"]),t(ma,{label:"說明",variant:"outlined",modelValue:u(x).value.value,"onUpdate:modelValue":a[6]||(a[6]=l=>u(x).value.value=l),"error-messages":u(x).errorMessage.value},null,8,["modelValue","error-messages"]),t(Ye,{label:"分類",variant:"outlined",modelValue:u(g).value.value,"onUpdate:modelValue":a[7]||(a[7]=l=>u(g).value.value=l),"error-messages":u(g).errorMessage.value,items:T},null,8,["modelValue","error-messages"]),t(J,{label:"數量",variant:"outlined",modelValue:u(o).value.value,"onUpdate:modelValue":a[8]||(a[8]=l=>u(o).value.value=l),modelModifiers:{number:!0},"error-messages":u(o).errorMessage.value,type:"number",min:"0"},null,8,["modelValue","error-messages"]),t(K,{modelValue:r.value,"onUpdate:modelValue":a[9]||(a[9]=l=>r.value=l),"raw-model-value":b.value,"onUpdate:rawModelValue":a[10]||(a[10]=l=>b.value=l),"max-files":1,"max-size":"1MB",accept:"image/jpg,image/jpeg,image/png",multiple:!1,"error-text":{type:"檔案格式錯誤",size:"檔案太大"},"help-text":"選擇檔案或拖放",deletable:"true",ref_key:"fileAgent",ref:P},null,8,["modelValue","raw-model-value"]),t(ia,{label:"上架",modelValue:u(d).value.value,"onUpdate:modelValue":a[11]||(a[11]=l=>u(d).value.value=l)},null,8,["modelValue"])]),_:1}),t(Ze,null,{default:c(()=>[t(me),t(Q,{color:"red",onClick:I,loading:u(A)},{default:c(()=>[W("取消")]),_:1},8,["loading"]),t(Q,{color:"green",type:"submit",loading:u(A)},{default:c(()=>[W("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64)}}};export{wa as default};