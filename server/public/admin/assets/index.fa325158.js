import{_ as V}from"./index.6ff94549.js";import{I as b,w as S}from"./element-plus.665b23f8.js";import N from"./menu.b099ade9.js";import P from"./preview.1b4c168b.js";import{_ as C}from"./attr-setting.vue_vue_type_script_setup_true_lang.e5c053e1.js";import{e as h}from"./index.720e06c4.js";import{a as I,s as O}from"./decoration.2c5abd25.js";import{m as k,d as F}from"./index.e19a469e.js";import{d as w,a0 as J,r as f,b as u,w as W,am as A,o as v,c as R,a as U,W as n,O as c,u as p,j as D,P as j,M as H,T}from"./@vue.c3e77981.js";import"./@vueuse.a48d0173.js";import"./@element-plus.12c58ce2.js";import"./lodash-es.2b4cc642.js";import"./dayjs.09633948.js";import"./axios.123b7ec2.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.ee5ac4a7.js";import"./vue-router.995b143f.js";import"./pinia.b5130627.js";import"./css-color-function.122f16eb.js";import"./color.d7340c07.js";import"./clone.8365abc8.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.27b17978.js";import"./vue-clipboard3.dbaed9f6.js";import"./clipboard.993b4d28.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.b8b719e9.js";import"./attr.f826aae1.js";import"./index.a70fc9d2.js";import"./picker.14c0f2b8.js";import"./index.vue_vue_type_script_setup_true_lang.6a6d97c2.js";import"./usePaging.d25ebf19.js";import"./article.bd575327.js";import"./index.708c2b71.js";import"./picker.a1fef497.js";import"./index.de253df2.js";import"./index.2c4d36d4.js";import"./index.vue_vue_type_script_setup_true_lang.81e4f76c.js";import"./vue3-video-play.4813c60b.js";import"./vuedraggable.41043856.js";import"./vue.9e62d39e.js";import"./sortablejs.c8445ad4.js";import"./content.vue_vue_type_script_setup_true_lang.a59a38a8.js";import"./decoration-img.5324cf57.js";import"./attr.vue_vue_type_script_setup_true_lang.33c44855.js";import"./content.7555cdb0.js";import"./attr.vue_vue_type_script_setup_true_lang.1cc07099.js";import"./content.vue_vue_type_script_setup_true_lang.4df381dd.js";import"./attr.vue_vue_type_script_setup_true_lang.fe9a5c28.js";import"./add-nav.vue_vue_type_script_setup_true_lang.bd8dc5f8.js";import"./content.80be4f47.js";import"./attr.vue_vue_type_script_setup_true_lang.d483ea4d.js";import"./content.vue_vue_type_script_setup_true_lang.7df86b65.js";import"./attr.vue_vue_type_script_setup_true_lang.4f1b3bc4.js";import"./content.1aaa25e9.js";import"./attr.vue_vue_type_script_setup_true_lang.0626d1ed.js";import"./index.vue_vue_type_script_setup_true_lang.bfead97f.js";import"./content.6c48de10.js";import"./attr.d346b625.js";import"./content.vue_vue_type_script_setup_true_lang.e332f83c.js";import"./attr.vue_vue_type_script_setup_true_lang.c1356dc8.js";import"./content.d369889b.js";import"./attr.vue_vue_type_script_setup_true_lang.bae39dfe.js";import"./content.vue_vue_type_script_setup_true_lang.a2948bcf.js";import"./attr.vue_vue_type_script_setup_true_lang.3ed965a5.js";import"./content.f84f6083.js";const $={class:"decoration-pages min-w-[1100px]"},q={class:"flex flex-1 h-full justify-between"},z=w({name:"decorationPages"}),G=w({...z,setup(K){let d;(e=>{e.HOME="1",e.USER="2",e.SERVICE="3"})(d||(d={}));const m=e=>e.map(t=>{var r;return{id:k(),...((r=h[t])==null?void 0:r.options())||{}}}),a=J({[1]:{id:1,type:1,name:"\u9996\u9875\u88C5\u4FEE",pageMeta:m(["page-meta"]),pageData:m(["search","banner","nav","news"])},[2]:{id:2,type:2,name:"\u4E2A\u4EBA\u4E2D\u5FC3",pageMeta:m(["page-meta"]),pageData:m(["user-info","my-service","user-banner"])},[3]:{id:3,type:3,name:"\u5BA2\u670D\u8BBE\u7F6E",pageMeta:null,pageData:m(["customer-service"])}}),o=f("1"),i=f(-1),g=u(()=>{var e,t;return(t=(e=a[o.value])==null?void 0:e.pageData)!=null?t:[]}),x=u(()=>{var e,t;return(t=(e=a[o.value])==null?void 0:e.pageMeta)!=null?t:null}),M=u(()=>{var e,t,s,r;return i.value===-1?(t=(e=a[o.value])==null?void 0:e.pageMeta[0])!=null?t:"":(r=(s=a[o.value])==null?void 0:s.pageData[i.value])!=null?r:""}),_=async()=>{const e=await I({id:o.value});a[String(e.id)].pageData=JSON.parse(e.data),a[String(e.id)].pageMeta=e!=null&&e.meta?JSON.parse(e==null?void 0:e.meta):null},y=async()=>{const e=a[o.value];await O({...e,data:JSON.stringify(e.pageData),meta:e!=null&&e.pageMeta?JSON.stringify(e==null?void 0:e.pageMeta):null}),_()};return W(o,()=>{i.value=g.value.findIndex(e=>!e.disabled),_()},{immediate:!0}),(e,t)=>{const s=b,r=S,E=V,B=A("perms");return v(),R("div",$,[U("div",q,[n(s,{shadow:"never",class:"!border-none flex scroll-view-content","body-style":{"padding-right":0}},{default:c(()=>[n(N,{modelValue:p(o),"onUpdate:modelValue":t[0]||(t[0]=l=>D(o)?o.value=l:null),menus:p(a)},null,8,["modelValue","menus"])]),_:1}),n(P,{class:"flex-1 scroll-view-content",modelValue:p(i),"onUpdate:modelValue":t[1]||(t[1]=l=>D(i)?i.value=l:null),pageData:p(g),pageMeta:p(x)},null,8,["modelValue","pageData","pageMeta"]),n(C,{class:"w-[560px] scroll-view-content",widget:p(M)},null,8,["widget"])]),j((v(),H(E,{class:"mt-4",fixed:!1},{default:c(()=>[n(r,{type:"primary",onClick:y},{default:c(()=>[T("\u4FDD\u5B58")]),_:1})]),_:1})),[[B,["decorate:pages:save"]]])])}}});const Dt=F(G,[["__scopeId","data-v-007a7a27"]]);export{Dt as default};
