import{_ as w}from"./index.e161ac83.js";import{x as B,y as T,W as D,w as h}from"./element-plus.0f699047.js";import{a as E,s as k}from"./decoration.a92cc9b4.js";import{_ as N}from"./mobile-style.vue_vue_type_script_setup_true_lang.0613c0de.js";import{d as F,r as p,b as O,i as P,o as n,c as d,W as m,O as e,a as U,u,j as A,V as c,a7 as I,M as _,R as J,T as L}from"./@vue.c3e77981.js";import"./index.09fadf67.js";import"./@vueuse.a48d0173.js";import"./lodash.ee5ac4a7.js";import"./axios.123b7ec2.js";import"./vue-router.995b143f.js";import"./pinia.b5130627.js";import"./css-color-function.122f16eb.js";import"./color.d7340c07.js";import"./clone.8365abc8.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./@element-plus.12c58ce2.js";import"./nprogress.27b17978.js";import"./vue-clipboard3.dbaed9f6.js";import"./clipboard.993b4d28.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.b8b719e9.js";import"./lodash-es.2b4cc642.js";import"./dayjs.09633948.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.vue_vue_type_script_setup_true_lang.c2bbfdf6.js";import"./theme-picker.788492b6.js";const M={class:"mt-[-10px]"},Bt=F({__name:"style",setup(R){const a=p(0),s=p([{name:"\u79FB\u52A8\u7AEF",id:5,component:N,data:{themeColorId:1,topTextColor:"white",navigationBarColor:"",themeColor1:"",themeColor2:"",buttonColor:"white"}}]),o=O(()=>s.value[a.value]||{}),l=async()=>{const i=await E({id:o.value.id});o.value.data=JSON.parse(i.data)},f=async()=>{await k({id:o.value.id,type:o.value.id,data:JSON.stringify(o.value.data)}),l()};return P(async()=>{await l()}),(i,r)=>{const b=B,v=T,C=D,y=h,V=w;return n(),d(c,null,[m(C,{shadow:"never",class:"!border-none"},{default:e(()=>[U("div",M,[m(v,{modelValue:u(a),"onUpdate:modelValue":r[0]||(r[0]=t=>A(a)?a.value=t:null),onTabChange:r[1]||(r[1]=()=>{})},{default:e(()=>[(n(!0),d(c,null,I(u(s),(t,g)=>(n(),_(b,{key:t.id,label:t.name,name:g},{default:e(()=>[(n(),_(J(t.component),{modelValue:t.data,"onUpdate:modelValue":x=>t.data=x},null,8,["modelValue","onUpdate:modelValue"]))]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])])]),_:1}),m(V,{class:"mt-4",fixed:!0},{default:e(()=>[m(y,{type:"primary",onClick:f},{default:e(()=>[L("\u4FDD\u5B58")]),_:1})]),_:1})],64)}}});export{Bt as default};