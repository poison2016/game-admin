import{t as E,C as A,D as B,w as U}from"./element-plus.0f699047.js";import{_ as y}from"./index.3738690e.js";import{_ as C}from"./picker.49907ec8.js";import{_ as N}from"./picker.47452789.js";import{f as i,b as $}from"./index.09fadf67.js";import{D as z}from"./vuedraggable.41043856.js";import{d as I,b as R,o as _,c as T,a as e,W as o,O as m,M as j,u as p,j as L,T as M}from"./@vue.c3e77981.js";const O={class:"bg-fill-light flex items-center w-full p-4 mb-4"},P={class:"upload-btn w-[60px] h-[60px]"},S={class:"ml-3 flex-1"},W={class:"flex"},q=e("span",{class:"text-tx-regular flex-none mr-3"},"\u540D\u79F0",-1),G={class:"flex mt-[18px]"},H=e("span",{class:"text-tx-regular flex-none mr-3"},"\u94FE\u63A5",-1),J={class:"flex-1 flex items-center"},K={class:"drag-move cursor-move ml-auto"},ae=I({__name:"add-nav",props:{modelValue:{type:Array,default:()=>[]},max:{type:Number,default:100},min:{type:Number,default:1}},emits:["update:modelValue"],setup(r,{emit:f}){const n=r,V=f,s=R({get(){return n.modelValue},set(t){V("update:modelValue",t)}}),x=()=>{var t;((t=n.modelValue)==null?void 0:t.length)<n.max?s.value.push({image:"",name:"\u5BFC\u822A\u540D\u79F0",link:{},is_show:"1"}):i.msgError(`\u6700\u591A\u6DFB\u52A0${n.max}\u4E2A`)},h=t=>{var u;if(((u=n.modelValue)==null?void 0:u.length)<=n.min)return i.msgError(`\u6700\u5C11\u4FDD\u7559${n.min}\u4E2A`);s.value.splice(t,1)};return(t,u)=>{const d=$,v=N,g=A,b=C,k=E,F=B,w=y,D=U;return _(),T("div",null,[e("div",null,[o(p(z),{class:"draggable",modelValue:p(s),"onUpdate:modelValue":u[0]||(u[0]=l=>L(s)?s.value=l:null),animation:"300",handle:".drag-move"},{item:m(({element:l,index:c})=>[(_(),j(w,{class:"w-[467px]",key:c,onClose:a=>h(c)},{default:m(()=>[e("div",O,[o(v,{modelValue:l.image,"onUpdate:modelValue":a=>l.image=a,"upload-class":"bg-body",size:"60px","exclude-domain":""},{upload:m(()=>[e("div",P,[o(d,{name:"el-icon-Plus",size:20})])]),_:2},1032,["modelValue","onUpdate:modelValue"]),e("div",S,[e("div",W,[q,o(g,{modelValue:l.name,"onUpdate:modelValue":a=>l.name=a,placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue","onUpdate:modelValue"])]),e("div",G,[H,o(b,{modelValue:l.link,"onUpdate:modelValue":a=>l.link=a},null,8,["modelValue","onUpdate:modelValue"])]),o(F,{label:"\u662F\u5426\u663E\u793A",class:"mt-[18px]"},{default:m(()=>[e("div",J,[o(k,{modelValue:l.is_show,"onUpdate:modelValue":a=>l.is_show=a,"active-value":"1","inactive-value":"0"},null,8,["modelValue","onUpdate:modelValue"]),e("div",K,[o(d,{name:"el-icon-Rank",size:"18"})])])]),_:2},1024)])])]),_:2},1032,["onClose"]))]),_:1},8,["modelValue"])]),e("div",null,[o(D,{type:"primary",onClick:x},{default:m(()=>[M("\u6DFB\u52A0")]),_:1})])])}}});export{ae as _};