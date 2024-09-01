import{w as x,W as E}from"./element-plus.43890caf.js";import{a as b}from"./vue-router.995b143f.js";import k from"./preview-pc.13350289.js";import"./index.d6738977.js";import{s as h,a as C}from"./decoration.5c672d41.js";import"./lodash.978751a8.js";import{m as P}from"./@element-plus.12c58ce2.js";import{f as V,d as N}from"./index.b4d0ff0e.js";import{d as v,a0 as A,r as d,b as I,w as O,am as M,o as l,c as S,W as p,O as m,a as _,u as s,j as T,T as f,P as W,M as j}from"./@vue.c3e77981.js";import"./@vueuse.a48d0173.js";import"./lodash-es.2b4cc642.js";import"./dayjs.896f66e0.js";import"./axios.1cb58ff8.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./attr.f064226b.js";import"./index.e0d5f88b.js";import"./picker.0f9a8ab5.js";import"./index.vue_vue_type_script_setup_true_lang.de7af750.js";import"./usePaging.d25ebf19.js";import"./article.cc4b7f41.js";import"./index.fbd359fe.js";import"./picker.449b1e84.js";import"./index.96393976.js";import"./index.2cc74eb3.js";import"./index.vue_vue_type_script_setup_true_lang.88a4e5cd.js";import"./vue3-video-play.4813c60b.js";import"./vuedraggable.6331cb8e.js";import"./vue.175847df.js";import"./sortablejs.422cefb3.js";import"./pinia.b5130627.js";import"./css-color-function.122f16eb.js";import"./color.d7340c07.js";import"./clone.8365abc8.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.aae31154.js";import"./vue-clipboard3.fe47f0bb.js";import"./clipboard.05fc5538.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.b8b719e9.js";import"./content.vue_vue_type_script_setup_true_lang.1412e6bf.js";import"./decoration-img.267f33ca.js";import"./attr.vue_vue_type_script_setup_true_lang.9f3fa334.js";import"./content.53e7297f.js";import"./attr.vue_vue_type_script_setup_true_lang.e09f5c3a.js";import"./content.vue_vue_type_script_setup_true_lang.c1b7316b.js";import"./attr.vue_vue_type_script_setup_true_lang.9268b9db.js";import"./add-nav.vue_vue_type_script_setup_true_lang.76ef314c.js";import"./content.3a567947.js";import"./attr.vue_vue_type_script_setup_true_lang.2d2bb8b6.js";import"./content.vue_vue_type_script_setup_true_lang.46de400a.js";import"./attr.vue_vue_type_script_setup_true_lang.4f1b3bc4.js";import"./content.a38dbb99.js";import"./attr.vue_vue_type_script_setup_true_lang.0c6af98c.js";import"./index.vue_vue_type_script_setup_true_lang.bb799264.js";import"./content.2b0a2b07.js";import"./attr.4baa5c70.js";import"./content.vue_vue_type_script_setup_true_lang.53cdf55d.js";import"./attr.vue_vue_type_script_setup_true_lang.c1356dc8.js";import"./content.e1528e1a.js";import"./attr.vue_vue_type_script_setup_true_lang.9a2b78be.js";import"./content.vue_vue_type_script_setup_true_lang.a482ae50.js";import"./attr.vue_vue_type_script_setup_true_lang.3ed965a5.js";import"./content.d708b643.js";const J={class:"decoration-pages min-w-[1100px]"},R={class:"flex justify-between w-full"},H={class:"flex-1 h-full"},U=v({name:"decorationPc"}),q=v({...U,setup(z){const D=b();let u;(t=>{t.HOME="4"})(u||(u={}));const r=A({[4]:{id:4,type:4,name:"\u9996\u9875\u88C5\u4FEE",pageData:[]}}),e=d("4"),a=d(0),i=I(()=>{var t,o;return(o=(t=r[e.value])==null?void 0:t.pageData)!=null?o:[]}),g=async()=>{await V.confirm("\u786E\u5B9A\u79BB\u5F00\u6B64\u9875\u9762\uFF1F\u7CFB\u7EDF\u53EF\u80FD\u4E0D\u4F1A\u4FDD\u5B58\u60A8\u6240\u505A\u7684\u66F4\u6539\u3002"),D.back()},n=async()=>{const t=await C({id:e.value});r[String(t.id)].pageData=JSON.parse(t.data),a.value=i.value.findIndex(o=>!o.disabled)},w=async()=>{await h({...r[e.value],data:JSON.stringify(r[e.value].pageData)}),n()};return O(e,()=>{a.value=i.value.findIndex(t=>!t.disabled),n()},{immediate:!0}),(t,o)=>{const c=x,F=E,y=M("perms");return l(),S("div",J,[p(F,{shadow:"never",class:"!border-none !rounded-none !bg-primary"},{default:m(()=>[_("div",R,[p(c,{link:"",type:"primary",icon:s(P),style:{color:"#fff"},onClick:g},{default:m(()=>[f(" \u8FD4\u56DE ")]),_:1},8,["icon"]),W((l(),j(c,{onClick:w},{default:m(()=>[f(" \u4FDD\u5B58 ")]),_:1})),[[y,["decorate:pages:save"]]])])]),_:1}),_("div",H,[p(k,{modelValue:s(a),"onUpdate:modelValue":o[0]||(o[0]=B=>T(a)?a.value=B:null),pageData:s(i)},null,8,["modelValue","pageData"])])])}}});const lo=N(q,[["__scopeId","data-v-5523c9d2"]]);export{lo as default};
