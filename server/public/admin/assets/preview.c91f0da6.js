import{w as A,a as T,E as z}from"./element-plus.6aa9c204.js";import{d as L,r as O,b,o as i,M as k,O as s,c as _,W as l,T as P,S as C,a as c,V as W,a7 as j,Q as V,J,R as K,u,_ as B}from"./@vue.c3e77981.js";import{e as Q}from"./index.5963a65b.js";import{v as R,h as U,K as q,L as G}from"./@element-plus.12c58ce2.js";import{d as H}from"./index.8605d8fd.js";import"./@vueuse.a48d0173.js";import"./lodash-es.2b4cc642.js";import"./dayjs.09633948.js";import"./axios.123b7ec2.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./attr.c8eaaf7d.js";import"./index.e7039524.js";import"./picker.b0902db9.js";import"./index.vue_vue_type_script_setup_true_lang.3bb706de.js";import"./usePaging.d25ebf19.js";import"./article.9aebdad5.js";import"./index.ed24e874.js";import"./picker.171c2488.js";import"./index.74382b93.js";import"./index.9bf2ca31.js";import"./index.vue_vue_type_script_setup_true_lang.615fffa4.js";import"./vue3-video-play.4813c60b.js";import"./vuedraggable.41043856.js";import"./vue.9e62d39e.js";import"./sortablejs.c8445ad4.js";import"./lodash.ee5ac4a7.js";import"./vue-router.995b143f.js";import"./pinia.b5130627.js";import"./css-color-function.122f16eb.js";import"./color.d7340c07.js";import"./clone.8365abc8.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.27b17978.js";import"./vue-clipboard3.dbaed9f6.js";import"./clipboard.993b4d28.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.b8b719e9.js";import"./content.vue_vue_type_script_setup_true_lang.34f42640.js";import"./decoration-img.8b0c801b.js";import"./attr.vue_vue_type_script_setup_true_lang.8c1dc200.js";import"./content.fd807b8f.js";import"./attr.vue_vue_type_script_setup_true_lang.c24d3758.js";import"./content.vue_vue_type_script_setup_true_lang.61bc379a.js";import"./attr.vue_vue_type_script_setup_true_lang.96dd8bee.js";import"./add-nav.vue_vue_type_script_setup_true_lang.f750178f.js";import"./content.b9251846.js";import"./attr.vue_vue_type_script_setup_true_lang.61d298ca.js";import"./content.vue_vue_type_script_setup_true_lang.559744b9.js";import"./attr.vue_vue_type_script_setup_true_lang.4f1b3bc4.js";import"./content.65005de9.js";import"./decoration.bb031100.js";import"./attr.vue_vue_type_script_setup_true_lang.990475e3.js";import"./index.vue_vue_type_script_setup_true_lang.85d450cc.js";import"./content.6113918e.js";import"./attr.f3ce3a17.js";import"./content.vue_vue_type_script_setup_true_lang.4b232f96.js";import"./attr.vue_vue_type_script_setup_true_lang.c1356dc8.js";import"./content.157dcfa4.js";import"./attr.vue_vue_type_script_setup_true_lang.4d7015b0.js";import"./content.vue_vue_type_script_setup_true_lang.fc88a8fa.js";import"./attr.vue_vue_type_script_setup_true_lang.3ed965a5.js";import"./content.2d32636c.js";const X={class:"shadow mx-[30px] pages-preview"},Y=["onClick"],Z={key:0,class:"widget-btns py-[5px]"},g=L({__name:"preview",props:{pageMeta:{type:Object,default:()=>null},pageData:{type:Array,default:()=>[]},modelValue:{type:Number,default:0}},emits:["update:modelValue"],setup(m,{emit:E}){const a=m,d=E,y=O(-1),D=()=>{a.modelValue===-1?d("update:modelValue",y.value):(y.value=a.modelValue,d("update:modelValue",-1))},M=(e,o)=>{e.disabled||d("update:modelValue",o)},F=b(()=>e=>e===0),N=b(()=>e=>{var o;return((o=a.pageData)==null?void 0:o.length)===e+1}),f=b(()=>e=>(e==null?void 0:e.enabled)==0),S=e=>{e.enabled!==void 0&&(e.enabled=e.enabled?0:1)},h=(e,o)=>{if(e<0||e>=a.pageData.length||o<0||o>=a.pageData.length)return;const p=a.pageData.splice(e,1)[0];a.pageData.splice(o,0,p),d("update:modelValue",o)};return(e,o)=>{const p=A,v=T,$=z;return i(),k($,{class:"pages-preview-container"},{default:s(()=>[m.pageMeta!==null?(i(),_("div",{key:0,class:"absolute right-4 top-4",onClick:D},[l(p,null,{default:s(()=>[P("\u9875\u9762\u8BBE\u7F6E")]),_:1})])):C("",!0),c("div",X,[(i(!0),_(W,null,j(m.pageData,(t,r)=>(i(),_("div",{key:t.id,class:V(["relative",{"cursor-pointer":!(t!=null&&t.disabled)}]),onClick:n=>M(t,r)},[c("div",{class:V(["absolute w-full h-full z-[100] border-dashed",{select:r==m.modelValue,hide:f.value(t.content),"border-[#dcdfe6] border-2":!(t!=null&&t.disabled)}])},null,2),J(e.$slots,"default",{},()=>{var n;return[(i(),k(K((n=u(Q)[t==null?void 0:t.name])==null?void 0:n.content),{content:t.content,styles:t.styles,key:t.id},null,8,["content","styles"]))]},!0),r==m.modelValue?(i(),_("div",Z,[c("div",null,[l(v,{effect:"dark",content:f.value(t.content)?"\u663E\u793A":"\u9690\u85CF",placement:"right"},{default:s(()=>[l(p,{class:"py-[5px]",type:"primary",icon:f.value(t.content)?u(R):u(U),onClick:n=>S(t.content)},null,8,["icon","onClick"])]),_:2},1032,["content"])]),c("div",null,[l(v,{effect:"dark",content:"\u4E0A\u79FB",placement:"right"},{default:s(()=>[l(p,{class:"py-[5px]",type:"primary",icon:u(q),disabled:F.value(r),onClick:B(n=>h(r,r-1),["stop"])},null,8,["icon","disabled","onClick"])]),_:2},1024)]),c("div",null,[l(v,{effect:"dark",content:"\u4E0B\u79FB",placement:"right"},{default:s(()=>[l(p,{class:"py-[5px]",type:"primary",icon:u(G),disabled:N.value(r),onClick:B(n=>h(r,r+1),["stop"])},null,8,["icon","disabled","onClick"])]),_:2},1024)])])):C("",!0)],10,Y))),128))])]),_:3})}}});const vt=H(g,[["__scopeId","data-v-b64c4820"]]);export{vt as default};