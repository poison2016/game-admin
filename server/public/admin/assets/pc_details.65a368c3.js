import{w as x,W as E}from"./element-plus.0f699047.js";import{a as b}from"./vue-router.995b143f.js";import k from"./preview-pc.4aada4e7.js";import"./index.d488c364.js";import{s as h,a as C}from"./decoration.a92cc9b4.js";import"./lodash.ee5ac4a7.js";import{m as P}from"./@element-plus.12c58ce2.js";import{f as V,d as N}from"./index.09fadf67.js";import{d as v,a0 as A,r as d,b as I,w as O,am as M,o as l,c as S,W as p,O as m,a as _,u as s,j as T,T as f,P as W,M as j}from"./@vue.c3e77981.js";import"./@vueuse.a48d0173.js";import"./lodash-es.2b4cc642.js";import"./dayjs.09633948.js";import"./axios.123b7ec2.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./attr.db2762bb.js";import"./index.3738690e.js";import"./picker.49907ec8.js";import"./index.vue_vue_type_script_setup_true_lang.20d6cd13.js";import"./usePaging.d25ebf19.js";import"./article.54c421d0.js";import"./index.843862c8.js";import"./picker.47452789.js";import"./index.106b640f.js";import"./index.fe90d03f.js";import"./index.vue_vue_type_script_setup_true_lang.27b2b5ee.js";import"./vue3-video-play.4813c60b.js";import"./vuedraggable.41043856.js";import"./vue.9e62d39e.js";import"./sortablejs.c8445ad4.js";import"./pinia.b5130627.js";import"./css-color-function.122f16eb.js";import"./color.d7340c07.js";import"./clone.8365abc8.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.27b17978.js";import"./vue-clipboard3.dbaed9f6.js";import"./clipboard.993b4d28.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.b8b719e9.js";import"./content.vue_vue_type_script_setup_true_lang.ea0232f9.js";import"./decoration-img.55c40cf1.js";import"./attr.vue_vue_type_script_setup_true_lang.80252633.js";import"./content.7e86685b.js";import"./attr.vue_vue_type_script_setup_true_lang.7a02a5c0.js";import"./content.vue_vue_type_script_setup_true_lang.35264ff2.js";import"./attr.vue_vue_type_script_setup_true_lang.a097825c.js";import"./add-nav.vue_vue_type_script_setup_true_lang.404d0469.js";import"./content.b102c14e.js";import"./attr.vue_vue_type_script_setup_true_lang.48680724.js";import"./content.vue_vue_type_script_setup_true_lang.d57121e5.js";import"./attr.vue_vue_type_script_setup_true_lang.4f1b3bc4.js";import"./content.05273280.js";import"./attr.vue_vue_type_script_setup_true_lang.0a182b1c.js";import"./index.vue_vue_type_script_setup_true_lang.c2bbfdf6.js";import"./content.57b79d55.js";import"./attr.efd2d954.js";import"./content.vue_vue_type_script_setup_true_lang.a5ef33f5.js";import"./attr.vue_vue_type_script_setup_true_lang.c1356dc8.js";import"./content.cef12acd.js";import"./attr.vue_vue_type_script_setup_true_lang.49ec3d3a.js";import"./content.vue_vue_type_script_setup_true_lang.ecec4a87.js";import"./attr.vue_vue_type_script_setup_true_lang.3ed965a5.js";import"./content.7d65d7ce.js";const J={class:"decoration-pages min-w-[1100px]"},R={class:"flex justify-between w-full"},H={class:"flex-1 h-full"},U=v({name:"decorationPc"}),q=v({...U,setup(z){const D=b();let u;(t=>{t.HOME="4"})(u||(u={}));const r=A({[4]:{id:4,type:4,name:"\u9996\u9875\u88C5\u4FEE",pageData:[]}}),e=d("4"),a=d(0),i=I(()=>{var t,o;return(o=(t=r[e.value])==null?void 0:t.pageData)!=null?o:[]}),g=async()=>{await V.confirm("\u786E\u5B9A\u79BB\u5F00\u6B64\u9875\u9762\uFF1F\u7CFB\u7EDF\u53EF\u80FD\u4E0D\u4F1A\u4FDD\u5B58\u60A8\u6240\u505A\u7684\u66F4\u6539\u3002"),D.back()},n=async()=>{const t=await C({id:e.value});r[String(t.id)].pageData=JSON.parse(t.data),a.value=i.value.findIndex(o=>!o.disabled)},w=async()=>{await h({...r[e.value],data:JSON.stringify(r[e.value].pageData)}),n()};return O(e,()=>{a.value=i.value.findIndex(t=>!t.disabled),n()},{immediate:!0}),(t,o)=>{const c=x,F=E,y=M("perms");return l(),S("div",J,[p(F,{shadow:"never",class:"!border-none !rounded-none !bg-primary"},{default:m(()=>[_("div",R,[p(c,{link:"",type:"primary",icon:s(P),style:{color:"#fff"},onClick:g},{default:m(()=>[f(" \u8FD4\u56DE ")]),_:1},8,["icon"]),W((l(),j(c,{onClick:w},{default:m(()=>[f(" \u4FDD\u5B58 ")]),_:1})),[[y,["decorate:pages:save"]]])])]),_:1}),_("div",H,[p(k,{modelValue:s(a),"onUpdate:modelValue":o[0]||(o[0]=B=>T(a)?a.value=B:null),pageData:s(i)},null,8,["modelValue","pageData"])])])}}});const lo=N(q,[["__scopeId","data-v-5523c9d2"]]);export{lo as default};