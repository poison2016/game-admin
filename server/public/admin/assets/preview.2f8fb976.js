import{w as A,a as T,E as z}from"./element-plus.0f699047.js";import{d as L,r as O,b,o as i,M as k,O as s,c as _,W as l,T as P,S as C,a as c,V as W,a7 as j,Q as V,J,R as K,u,_ as B}from"./@vue.c3e77981.js";import{e as Q}from"./index.2cf12394.js";import{v as R,h as U,K as q,L as G}from"./@element-plus.12c58ce2.js";import{d as H}from"./index.cc5a0859.js";import"./@vueuse.a48d0173.js";import"./lodash-es.2b4cc642.js";import"./dayjs.09633948.js";import"./axios.123b7ec2.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./attr.aafad165.js";import"./index.c18d0ea3.js";import"./picker.f05ed05d.js";import"./index.vue_vue_type_script_setup_true_lang.20d6cd13.js";import"./usePaging.d25ebf19.js";import"./article.b3e5d7b0.js";import"./index.313412b7.js";import"./picker.45d846a9.js";import"./index.4842c68e.js";import"./index.17c7e7ef.js";import"./index.vue_vue_type_script_setup_true_lang.27b2b5ee.js";import"./vue3-video-play.4813c60b.js";import"./vuedraggable.41043856.js";import"./vue.9e62d39e.js";import"./sortablejs.c8445ad4.js";import"./lodash.ee5ac4a7.js";import"./vue-router.995b143f.js";import"./pinia.b5130627.js";import"./css-color-function.122f16eb.js";import"./color.d7340c07.js";import"./clone.8365abc8.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.27b17978.js";import"./vue-clipboard3.dbaed9f6.js";import"./clipboard.993b4d28.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.b8b719e9.js";import"./content.vue_vue_type_script_setup_true_lang.e52658d0.js";import"./decoration-img.95d5362d.js";import"./attr.vue_vue_type_script_setup_true_lang.c59f9023.js";import"./content.4c1fa34a.js";import"./attr.vue_vue_type_script_setup_true_lang.5b42befa.js";import"./content.vue_vue_type_script_setup_true_lang.cea05f1e.js";import"./attr.vue_vue_type_script_setup_true_lang.96817ea9.js";import"./add-nav.vue_vue_type_script_setup_true_lang.b30b389d.js";import"./content.4372b0f9.js";import"./attr.vue_vue_type_script_setup_true_lang.b3329a3d.js";import"./content.vue_vue_type_script_setup_true_lang.bcfd40a2.js";import"./attr.vue_vue_type_script_setup_true_lang.4f1b3bc4.js";import"./content.071d33f1.js";import"./decoration.23c727cb.js";import"./attr.vue_vue_type_script_setup_true_lang.e00545dd.js";import"./index.vue_vue_type_script_setup_true_lang.c2bbfdf6.js";import"./content.b6ef89e8.js";import"./attr.bb190727.js";import"./content.vue_vue_type_script_setup_true_lang.1aaa309c.js";import"./attr.vue_vue_type_script_setup_true_lang.c1356dc8.js";import"./content.9caf9cf8.js";import"./attr.vue_vue_type_script_setup_true_lang.2a545db9.js";import"./content.vue_vue_type_script_setup_true_lang.60e051c1.js";import"./attr.vue_vue_type_script_setup_true_lang.3ed965a5.js";import"./content.3055f48a.js";const X={class:"shadow mx-[30px] pages-preview"},Y=["onClick"],Z={key:0,class:"widget-btns py-[5px]"},g=L({__name:"preview",props:{pageMeta:{type:Object,default:()=>null},pageData:{type:Array,default:()=>[]},modelValue:{type:Number,default:0}},emits:["update:modelValue"],setup(m,{emit:E}){const a=m,d=E,y=O(-1),D=()=>{a.modelValue===-1?d("update:modelValue",y.value):(y.value=a.modelValue,d("update:modelValue",-1))},M=(e,o)=>{e.disabled||d("update:modelValue",o)},F=b(()=>e=>e===0),N=b(()=>e=>{var o;return((o=a.pageData)==null?void 0:o.length)===e+1}),f=b(()=>e=>(e==null?void 0:e.enabled)==0),S=e=>{e.enabled!==void 0&&(e.enabled=e.enabled?0:1)},h=(e,o)=>{if(e<0||e>=a.pageData.length||o<0||o>=a.pageData.length)return;const p=a.pageData.splice(e,1)[0];a.pageData.splice(o,0,p),d("update:modelValue",o)};return(e,o)=>{const p=A,v=T,$=z;return i(),k($,{class:"pages-preview-container"},{default:s(()=>[m.pageMeta!==null?(i(),_("div",{key:0,class:"absolute right-4 top-4",onClick:D},[l(p,null,{default:s(()=>[P("\u9875\u9762\u8BBE\u7F6E")]),_:1})])):C("",!0),c("div",X,[(i(!0),_(W,null,j(m.pageData,(t,r)=>(i(),_("div",{key:t.id,class:V(["relative",{"cursor-pointer":!(t!=null&&t.disabled)}]),onClick:n=>M(t,r)},[c("div",{class:V(["absolute w-full h-full z-[100] border-dashed",{select:r==m.modelValue,hide:f.value(t.content),"border-[#dcdfe6] border-2":!(t!=null&&t.disabled)}])},null,2),J(e.$slots,"default",{},()=>{var n;return[(i(),k(K((n=u(Q)[t==null?void 0:t.name])==null?void 0:n.content),{content:t.content,styles:t.styles,key:t.id},null,8,["content","styles"]))]},!0),r==m.modelValue?(i(),_("div",Z,[c("div",null,[l(v,{effect:"dark",content:f.value(t.content)?"\u663E\u793A":"\u9690\u85CF",placement:"right"},{default:s(()=>[l(p,{class:"py-[5px]",type:"primary",icon:f.value(t.content)?u(R):u(U),onClick:n=>S(t.content)},null,8,["icon","onClick"])]),_:2},1032,["content"])]),c("div",null,[l(v,{effect:"dark",content:"\u4E0A\u79FB",placement:"right"},{default:s(()=>[l(p,{class:"py-[5px]",type:"primary",icon:u(q),disabled:F.value(r),onClick:B(n=>h(r,r-1),["stop"])},null,8,["icon","disabled","onClick"])]),_:2},1024)]),c("div",null,[l(v,{effect:"dark",content:"\u4E0B\u79FB",placement:"right"},{default:s(()=>[l(p,{class:"py-[5px]",type:"primary",icon:u(G),disabled:N.value(r),onClick:B(n=>h(r,r+1),["stop"])},null,8,["icon","disabled","onClick"])]),_:2},1024)])])):C("",!0)],10,Y))),128))])]),_:3})}}});const vt=H(g,[["__scopeId","data-v-b64c4820"]]);export{vt as default};
