import{F as _}from"./FooterView-a468ff03.js";import{G as o,K as f,L as t,c as e,P as g,ag as y,W as c,X as d,ah as x,ai as h,z as V,E as b,aj as w,H as u,S as l,O as p,R as C,ak as S,al as k}from"./index-f9fad9c0.js";import{V as B}from"./VContainer-5c701b0e.js";import{V as v,a as m}from"./VRow-1ddb72e3.js";import"./logo_lineImg_light-dd5d790e.js";import"./logo_word_light-deaadfda.js";/* empty css              */const N={__name:"ProductCard",props:{_id:{type:String,default:()=>""},category:{type:String,default:()=>""},description:{type:String,default:()=>""},image:{type:String,default:()=>""},inventory:{type:Number,default:()=>0},name:{type:String,default:()=>""},price:{type:Number,default:()=>0},sell:{type:Boolean,default:()=>!0}},setup(a){return(n,s)=>(o(),f(h,{to:"/products/"+a._id,class:"text-center mx-auto foodCard",style:{"max-width":"220px",color:"#023B4F","box-shadow":"none","border-radius":"0"}},{default:t(()=>[e(g,{src:a.image,"aspect-ratio":"1",cover:""},null,8,["src"]),e(y,null,{default:t(()=>[c(d(a.name),1)]),_:1}),e(x,{style:{"font-size":"18px"}},{default:t(()=>[c("NT $ "+d(a.price),1)]),_:1})]),_:1},8,["to"]))}},F=l("h1",{class:"text-center h1-title mb-1"},"美味專區",-1),P=l("div",{class:"h1-border"},null,-1),T={id:"footer"},H={__name:"FoodiesView",setup(a){const n=V(),s=b([]);return(async()=>{try{const{data:r}=await w.get("/products");s.value.push(...r.result)}catch(r){n({text:r.response.data.message,showCloseButton:!1,snackbarProps:{timeout:3e3,color:"red",location:"bottom"}})}})(),(r,z)=>(o(),u(p,null,[e(B,{style:{"padding-bottom":"150px"},id:"foodiesView"},{default:t(()=>[e(v,null,{default:t(()=>[e(m,{cols:"12",style:{margin:"20px 0"}},{default:t(()=>[F,P]),_:1}),(o(!0),u(p,null,C(s.value,i=>(o(),f(m,{cols:"6",sm:"6",md:"4",lg:"3",key:i._id,style:{"margin-top":"15px"}},{default:t(()=>[e(N,S(k(i)),null,16)]),_:2},1024))),128))]),_:1})]),_:1}),l("section",T,[e(_)])],64))}};export{H as default};