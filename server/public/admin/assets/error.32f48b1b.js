import{w as l}from"./element-plus.0f699047.js";import{a as u}from"./vue-router.995b143f.js";import{d,r as _,G as v,o as n,c as f,a as r,J as B,U as i,M as x,O as y,T as g,u as E,S as h}from"./@vue.c3e77981.js";import{d as k}from"./index.cc5a0859.js";import"./@vueuse.a48d0173.js";import"./@element-plus.12c58ce2.js";import"./lodash-es.2b4cc642.js";import"./dayjs.09633948.js";import"./axios.123b7ec2.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.ee5ac4a7.js";import"./pinia.b5130627.js";import"./css-color-function.122f16eb.js";import"./color.d7340c07.js";import"./clone.8365abc8.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.27b17978.js";import"./vue-clipboard3.dbaed9f6.js";import"./clipboard.993b4d28.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.b8b719e9.js";const w={class:"error"},S={class:"error-code"},C={class:"text-lg text-tx-secondary mt-7 mb-7"},D=d({__name:"error",props:{code:String,title:String,showBtn:{type:Boolean,default:!0}},setup(t){const m=t;let o=null;const e=_(5),s=u();return m.showBtn&&(o=setInterval(()=>{e.value===0?(clearInterval(o),s.go(-1)):e.value--},1e3)),v(()=>{o&&clearInterval(o)}),(p,a)=>{const c=l;return n(),f("div",w,[r("div",null,[B(p.$slots,"content",{},()=>[r("div",S,i(t.code),1)],!0),r("div",C,i(t.title),1),t.showBtn?(n(),x(c,{key:0,type:"primary",onClick:a[0]||(a[0]=I=>E(s).go(-1))},{default:y(()=>[g(i(e.value)+" \u79D2\u540E\u8FD4\u56DE\u4E0A\u4E00\u9875 ",1)]),_:1})):h("",!0)])])}}});const nt=k(D,[["__scopeId","data-v-a47523cc"]]);export{nt as default};
