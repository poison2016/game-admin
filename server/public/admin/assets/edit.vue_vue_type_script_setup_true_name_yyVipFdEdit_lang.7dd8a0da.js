import{H as I,I as O,D as S,C as U,F as P}from"./element-plus.0f699047.js";import{P as j}from"./index.313412b7.js";import{r as n}from"./index.cc5a0859.js";import"./lodash.ee5ac4a7.js";import{a as z}from"./user_vip_set.f2829ed5.js";import{d as E,s as v,r as B,b as H,a0 as b,o as c,c as D,W as s,O as i,u as l,V as M,a7 as N,M as T}from"./@vue.c3e77981.js";function oe(u){return n.get({url:"/yy_vip_fd/lists",params:u})}function W(u){return n.post({url:"/yy_vip_fd/add",params:u})}function G(u){return n.post({url:"/yy_vip_fd/edit",params:u})}function le(u){return n.post({url:"/yy_vip_fd/delete",params:u})}function J(u){return n.get({url:"/yy_vip_fd/detail",params:u})}const K={class:"edit-popup"},Q=E({name:"yyVipFdEdit"}),ae=E({...Q,props:{dictData:{type:Object,default:()=>({})}},emits:["success","close"],setup(u,{expose:V,emit:g}){const _=g,f=v(),p=v(),d=B("add"),w=H(()=>d.value=="edit"?"\u7F16\u8F91\u4F1A\u5458\u4E8F\u635F\u8FD4\u70B9\u914D\u7F6E":"\u65B0\u589E\u4F1A\u5458\u4E8F\u635F\u8FD4\u70B9\u914D\u7F6E"),o=b({id:"",vip_id:"",fl_bl:""}),m=B([]);async function A(){const t=await z({page_no:1,page_size:200});m.value=t.lists}A();const k=b({vip_id:[{required:!0,message:"\u8BF7\u8F93\u5165\u4F1A\u5458\u7B49\u7EA7",trigger:["blur"]}],fl_bl:[{required:!0,message:"\u8BF7\u8F93\u5165\u8FD4\u5229\u6BD4\u4F8B",trigger:["blur"]}]}),F=async t=>{for(const e in o)t[e]!=null&&t[e]!=null&&(o[e]=t[e])},C=async t=>{const e=await J({id:t.id});F(e)},h=async()=>{var e,r;await((e=f.value)==null?void 0:e.validate());const t={...o};d.value=="edit"?await G(t):await W(t),(r=p.value)==null||r.close(),_("success")},x=(t="add")=>{var e;d.value=t,(e=p.value)==null||e.open()},R=()=>{_("close")};return V({open:x,setFormData:F,getDetail:C}),(t,e)=>{const r=I,Y=O,y=S,L=U,q=P;return c(),D("div",K,[s(j,{ref_key:"popupRef",ref:p,title:l(w),async:!0,width:"550px",onConfirm:h,onClose:R},{default:i(()=>[s(q,{ref_key:"formRef",ref:f,model:l(o),"label-width":"90px",rules:l(k)},{default:i(()=>[s(y,{label:"\u4F1A\u5458\u7B49\u7EA7",prop:"vip_id"},{default:i(()=>[s(Y,{modelValue:l(o).vip_id,"onUpdate:modelValue":e[0]||(e[0]=a=>l(o).vip_id=a),placeholder:"\u8BF7\u9009\u62E9\u4F1A\u5458\u7B49\u7EA7"},{default:i(()=>[(c(!0),D(M,null,N(l(m),a=>(c(),T(r,{key:a.id,label:a.vip_name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(y,{label:"\u8FD4\u5229\u6BD4\u4F8B",prop:"fl_bl"},{default:i(()=>[s(L,{modelValue:l(o).fl_bl,"onUpdate:modelValue":e[1]||(e[1]=a=>l(o).fl_bl=a),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u8FD4\u5229\u6BD4\u4F8B"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title"])])}}});export{ae as _,le as a,oe as b};
