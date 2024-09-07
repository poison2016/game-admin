import{C as h,D as I,H as O,I as L,F as P}from"./element-plus.0f699047.js";import{_ as S}from"./index.vue_vue_type_style_index_0_lang.11132f9e.js";import{_ as j}from"./picker.45d846a9.js";import{P as z}from"./index.313412b7.js";import{r as p}from"./index.cc5a0859.js";import"./lodash.ee5ac4a7.js";import{d as y,s as g,r as A,b as H,a0 as F,o as b,c as B,W as a,O as r,u as l,V as T,a7 as W}from"./@vue.c3e77981.js";function oe(s){return p.get({url:"/yb_game/lists",params:s})}function $(s){return p.post({url:"/yb_game/add",params:s})}function J(s){return p.post({url:"/yb_game/edit",params:s})}function se(s){return p.post({url:"/yb_game/delete",params:s})}function K(s){return p.get({url:"/yb_game/detail",params:s})}const M={class:"edit-popup"},Q=y({name:"ybGameEdit"}),re=y({...Q,props:{dictData:{type:Object,default:()=>({})}},emits:["success","close"],setup(s,{expose:E,emit:V}){const _=V,c=g(),i=g(),d=A("add"),C=H(()=>d.value=="edit"?"\u7F16\u8F91\u6240\u6709\u6E38\u620F\u5927\u7C7B":"\u65B0\u589E\u6240\u6709\u6E38\u620F\u5927\u7C7B"),u=F({id:"",game_type:"",game_type_name:"",sortNum:"",status:"",image_url:"",game_description:""}),v=[{value:1,label:"\u6B63\u5E38"},{value:2,label:"\u505C\u7528"}],D=F({game_type:[{required:!0,message:"\u8BF7\u8F93\u5165\u6E38\u620F\u7C7B\u578B",trigger:["blur"]}],game_type_name:[{required:!0,message:"\u8BF7\u8F93\u5165\u6E38\u620F\u5927\u7C7B\u540D\u79F0",trigger:["blur"]}],sortNum:[{required:!0,message:"\u8BF7\u8F93\u5165\u6392\u5E8F",trigger:["blur"]}],status:[{required:!0,message:"\u8BF7\u8F93\u5165\u72B6\u6001",trigger:["blur"]}]}),f=async o=>{for(const e in u)o[e]!=null&&o[e]!=null&&(u[e]=o[e])},w=async o=>{const e=await K({id:o.id});f(e)},k=async()=>{var e,n;await((e=c.value)==null?void 0:e.validate());const o={...u};d.value=="edit"?await J(o):await $(o),(n=i.value)==null||n.close(),_("success")},x=(o="add")=>{var e;d.value=o,(e=i.value)==null||e.open()},G=()=>{_("close")};return E({open:x,setFormData:f,getDetail:w}),(o,e)=>{const n=h,m=I,N=O,R=L,U=j,q=S,Y=P;return b(),B("div",M,[a(z,{ref_key:"popupRef",ref:i,title:l(C),async:!0,width:"60%",onConfirm:k,onClose:G},{default:r(()=>[a(Y,{ref_key:"formRef",ref:c,model:l(u),"label-width":"90px",rules:l(D)},{default:r(()=>[a(m,{label:"\u6E38\u620F\u7C7B\u578B",prop:"game_type"},{default:r(()=>[a(n,{modelValue:l(u).game_type,"onUpdate:modelValue":e[0]||(e[0]=t=>l(u).game_type=t),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u6E38\u620F\u7C7B\u578B"},null,8,["modelValue"])]),_:1}),a(m,{label:"\u6E38\u620F\u5927\u7C7B\u540D\u79F0",prop:"game_type_name"},{default:r(()=>[a(n,{modelValue:l(u).game_type_name,"onUpdate:modelValue":e[1]||(e[1]=t=>l(u).game_type_name=t),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u6E38\u620F\u5927\u7C7B\u540D\u79F0"},null,8,["modelValue"])]),_:1}),a(m,{label:"\u6392\u5E8F",prop:"sortNum"},{default:r(()=>[a(n,{modelValue:l(u).sortNum,"onUpdate:modelValue":e[2]||(e[2]=t=>l(u).sortNum=t),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F"},null,8,["modelValue"])]),_:1}),a(m,{label:"\u72B6\u6001",prop:"status"},{default:r(()=>[a(R,{modelValue:l(u).status,"onUpdate:modelValue":e[3]||(e[3]=t=>l(u).status=t),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",size:"large",style:{width:"240px"}},{default:r(()=>[(b(),B(T,null,W(v,t=>a(N,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"\u5927\u7C7B\u56FE\u6807",prop:"image_url"},{default:r(()=>[a(U,{modelValue:l(u).image_url,"onUpdate:modelValue":e[4]||(e[4]=t=>l(u).image_url=t)},null,8,["modelValue"])]),_:1}),a(m,{label:"\u63CF\u8FF0",prop:"game_description"},{default:r(()=>[a(q,{class:"flex-1",modelValue:l(u).game_description,"onUpdate:modelValue":e[5]||(e[5]=t=>l(u).game_description=t),height:500},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title"])])}}});export{re as _,se as a,oe as b};
