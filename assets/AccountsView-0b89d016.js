import{z as i,E as h,_ as m,G as r,K as _,L as l,c as e,aF as p,S as t,H as c,R as f,O as V,P as b,X as s}from"./index-f1c517c6.js";import{V as k}from"./VContainer-aa298c94.js";import{a as u,V as w}from"./VRow-04a852f0.js";/* empty css              */const g=t("h1",{class:"text-center"},"會員管理",-1),x=t("thead",null,[t("tr",null,[t("th",null,"頭像"),t("th",null,"帳號"),t("th",null,"姓名"),t("th",null,"E-mail"),t("th",null,"電話"),t("th",null,"地址")])],-1),A={__name:"AccountsView",setup(y){const d=i(),o=h([]);return(async()=>{try{const{data:n}=await m.get("/users/all");return o.value.push(...n.result),o}catch(n){d({text:n.response.data.message,showCloseButton:!1,snackbarProps:{timeout:3e3,color:"red",location:"bottom"}})}})(),(n,B)=>(r(),_(k,null,{default:l(()=>[e(w,null,{default:l(()=>[e(u,{cols:"12"},{default:l(()=>[g]),_:1}),e(u,{cols:"12"},{default:l(()=>[e(p,{style:{border:"1px solid #d9d9cf",width:"80%",margin:"auto"}},{default:l(()=>[x,t("tbody",null,[(r(!0),c(V,null,f(o.value,a=>(r(),c("tr",{key:a.id},[t("td",null,[e(b,{src:a.avatar,cover:"",width:"50"},null,8,["src"])]),t("td",null,s(a.account),1),t("td",null,s(a.name),1),t("td",null,s(a.email),1),t("td",null,s(a.phone),1),t("td",null,s(a.address),1)]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{A as default};
