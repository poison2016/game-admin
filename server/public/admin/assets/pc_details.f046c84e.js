import{w as x,W as E}from"./element-plus.b72845c4.js";import{a as b}from"./vue-router.995b143f.js";import k from"./preview-pc.57fa8aa6.js";import"./index.63928ddc.js";import{s as h,a as C}from"./decoration.71c21d08.js";import"./lodash.ee5ac4a7.js";import{m as P}from"./@element-plus.12c58ce2.js";import{f as V,d as N}from"./index.d02a6d50.js";import{d as v,a0 as A,r as d,b as I,w as O,am as M,o as l,c as S,W as p,O as m,a as _,u as s,j as T,T as f,P as W,M as j}from"./@vue.c3e77981.js";import"./@vueuse.a48d0173.js";import"./lodash-es.2b4cc642.js";import"./dayjs.09633948.js";import"./axios.123b7ec2.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./attr.b6120a76.js";import"./index.99c05a8b.js";import"./picker.f6b4a3cb.js";import"./index.vue_vue_type_script_setup_true_lang.3be37db6.js";import"./usePaging.d25ebf19.js";import"./article.9d8b3c76.js";import"./index.3ac9bded.js";import"./picker.4064f84e.js";import"./index.58af948b.js";import"./index.781e3201.js";import"./index.vue_vue_type_script_setup_true_lang.55f04976.js";import"./vue3-video-play.4813c60b.js";import"./vuedraggable.41043856.js";import"./vue.9e62d39e.js";import"./sortablejs.c8445ad4.js";import"./pinia.b5130627.js";import"./css-color-function.122f16eb.js";import"./color.d7340c07.js";import"./clone.8365abc8.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.27b17978.js";import"./vue-clipboard3.dbaed9f6.js";import"./clipboard.993b4d28.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.b8b719e9.js";import"./content.vue_vue_type_script_setup_true_lang.6d50bd1c.js";import"./decoration-img.0be984c6.js";import"./attr.vue_vue_type_script_setup_true_lang.db0b58b2.js";import"./content.7e608035.js";import"./attr.vue_vue_type_script_setup_true_lang.e297604e.js";import"./content.vue_vue_type_script_setup_true_lang.929f5031.js";import"./attr.vue_vue_type_script_setup_true_lang.582bcd40.js";import"./add-nav.vue_vue_type_script_setup_true_lang.0eb16901.js";import"./content.1ca21c04.js";import"./attr.vue_vue_type_script_setup_true_lang.2732105c.js";import"./content.vue_vue_type_script_setup_true_lang.66b817e1.js";import"./attr.vue_vue_type_script_setup_true_lang.4f1b3bc4.js";import"./content.a83d8043.js";import"./attr.vue_vue_type_script_setup_true_lang.27e04fe1.js";import"./index.vue_vue_type_script_setup_true_lang.33b53e5d.js";import"./content.9b77cf8b.js";import"./attr.019abccd.js";import"./content.vue_vue_type_script_setup_true_lang.c39e09d0.js";import"./attr.vue_vue_type_script_setup_true_lang.c1356dc8.js";import"./content.3d042f08.js";import"./attr.vue_vue_type_script_setup_true_lang.aff0ebaf.js";import"./content.vue_vue_type_script_setup_true_lang.7ed6e4f4.js";import"./attr.vue_vue_type_script_setup_true_lang.3ed965a5.js";import"./content.4617ea6e.js";const J={class:"decoration-pages min-w-[1100px]"},R={class:"flex justify-between w-full"},H={class:"flex-1 h-full"},U=v({name:"decorationPc"}),q=v({...U,setup(z){const D=b();let u;(t=>{t.HOME="4"})(u||(u={}));const r=A({[4]:{id:4,type:4,name:"\u9996\u9875\u88C5\u4FEE",pageData:[]}}),e=d("4"),a=d(0),i=I(()=>{var t,o;return(o=(t=r[e.value])==null?void 0:t.pageData)!=null?o:[]}),g=async()=>{await V.confirm("\u786E\u5B9A\u79BB\u5F00\u6B64\u9875\u9762\uFF1F\u7CFB\u7EDF\u53EF\u80FD\u4E0D\u4F1A\u4FDD\u5B58\u60A8\u6240\u505A\u7684\u66F4\u6539\u3002"),D.back()},n=async()=>{const t=await C({id:e.value});r[String(t.id)].pageData=JSON.parse(t.data),a.value=i.value.findIndex(o=>!o.disabled)},w=async()=>{await h({...r[e.value],data:JSON.stringify(r[e.value].pageData)}),n()};return O(e,()=>{a.value=i.value.findIndex(t=>!t.disabled),n()},{immediate:!0}),(t,o)=>{const c=x,F=E,y=M("perms");return l(),S("div",J,[p(F,{shadow:"never",class:"!border-none !rounded-none !bg-primary"},{default:m(()=>[_("div",R,[p(c,{link:"",type:"primary",icon:s(P),style:{color:"#fff"},onClick:g},{default:m(()=>[f(" \u8FD4\u56DE ")]),_:1},8,["icon"]),W((l(),j(c,{onClick:w},{default:m(()=>[f(" \u4FDD\u5B58 ")]),_:1})),[[y,["decorate:pages:save"]]])])]),_:1}),_("div",H,[p(k,{modelValue:s(a),"onUpdate:modelValue":o[0]||(o[0]=B=>T(a)?a.value=B:null),pageData:s(i)},null,8,["modelValue","pageData"])])])}}});const lo=N(q,[["__scopeId","data-v-5523c9d2"]]);export{lo as default};
