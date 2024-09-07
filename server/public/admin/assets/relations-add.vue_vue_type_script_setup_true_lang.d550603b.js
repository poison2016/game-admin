import{H as h,I,D as O,C as M,F as P}from"./element-plus.0f699047.js";import{P as S}from"./index.313412b7.js";import{a as $}from"./useDictOptions.75d0980d.js";import{a as H}from"./code.abb5ef67.js";import{d as L,s as v,r as N,b as T,a0 as W,o as r,c as d,W as a,O as t,u as o,V as i,a7 as _,M as y}from"./@vue.c3e77981.js";const j={class:"edit-popup"},X=L({__name:"relations-add",props:{column:{type:Array,default:()=>[]},types:{type:Array,default:()=>[]}},emits:["add","close","edit"],setup(F,{expose:V,emit:b}){const B=b,k=v(),m=v(),p=N("add"),g=T(()=>p.value=="edit"?"\u7F16\u8F91\u5173\u8054":"\u65B0\u589E\u5173\u8054"),l=W({name:"",model:"",type:"",local_key:"",foreign_key:""}),x={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5173\u8054\u540D\u79F0"}],type:[{required:!0,message:"\u8BF7\u9009\u62E9\u5173\u8054\u7C7B\u578B"}],model:[{required:!0,message:"\u8BF7\u9009\u62E9\u5173\u8054\u6A21\u578B"}],local_key:[{required:!0,message:"\u8BF7\u9009\u62E9\u5173\u8054\u5065"}],foreign_key:[{required:!0,message:"\u8BF7\u8F93\u5165\u5916\u952E"}]},{optionsData:C}=$({models:{api:H}}),D=async()=>{var n,e;await((n=k.value)==null?void 0:n.validate()),(e=m.value)==null||e.close(),B(p.value,l)},A=(n="add")=>{var e;p.value=n,(e=m.value)==null||e.open()},R=n=>{for(const e in l)n[e]!=null&&n[e]!=null&&(l[e]=n[e])},q=()=>{B("close")};return V({open:A,setFormData:R}),(n,e)=>{const c=h,f=I,s=O,E=M,w=P;return r(),d("div",j,[a(S,{ref_key:"popupRef",ref:m,title:o(g),async:!0,width:"550px",onConfirm:D,onClose:q},{default:t(()=>[a(w,{ref_key:"formRef",ref:k,model:o(l),"label-width":"84px",rules:x},{default:t(()=>[a(s,{label:"\u5173\u8054\u7C7B\u578B",prop:"type"},{default:t(()=>[a(f,{class:"flex-1",modelValue:o(l).type,"onUpdate:modelValue":e[0]||(e[0]=u=>o(l).type=u),placeholder:"\u8BF7\u9009\u62E9\u5173\u8054\u7C7B\u578B"},{default:t(()=>[(r(!0),d(i,null,_(F.types,(u,U)=>(r(),y(c,{key:U,label:u.name,value:u.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"\u5173\u8054\u540D\u79F0",prop:"name"},{default:t(()=>[a(E,{modelValue:o(l).name,"onUpdate:modelValue":e[1]||(e[1]=u=>o(l).name=u),placeholder:"\u8BF7\u8F93\u5165\u5173\u8054\u540D\u79F0"},null,8,["modelValue"])]),_:1}),a(s,{label:"\u5173\u8054\u6A21\u578B",prop:"model"},{default:t(()=>[a(f,{class:"flex-1",modelValue:o(l).model,"onUpdate:modelValue":e[2]||(e[2]=u=>o(l).model=u),placeholder:"\u8BF7\u9009\u62E9\u5173\u8054\u6A21\u578B"},{default:t(()=>[(r(!0),d(i,null,_(o(C).models,u=>(r(),y(c,{label:u,value:u,key:u},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"\u5173\u8054\u5065",prop:"local_key"},{default:t(()=>[a(f,{class:"flex-1",modelValue:o(l).local_key,"onUpdate:modelValue":e[3]||(e[3]=u=>o(l).local_key=u),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u5173\u8054\u5065"},{default:t(()=>[(r(!0),d(i,null,_(F.column,u=>(r(),y(c,{key:u.id,value:u.column_name,label:`${u.column_name}\uFF1A${u.column_comment}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"\u5916\u952E",prop:"foreign_key"},{default:t(()=>[a(E,{modelValue:o(l).foreign_key,"onUpdate:modelValue":e[4]||(e[4]=u=>o(l).foreign_key=u),placeholder:"\u5173\u8054\u8868\u5916\u952E\u6216\u4E2D\u95F4\u8868\u7684\u5916\u952E"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{X as _};
