import{_ as V}from"./index.68c6678e.js";import{W as b,w as S}from"./element-plus.6aa9c204.js";import N from"./menu.22a829d4.js";import P from"./preview.c91f0da6.js";import{_ as C}from"./attr-setting.vue_vue_type_script_setup_true_lang.4ea93e59.js";import{e as h}from"./index.5963a65b.js";import{a as O,s as I}from"./decoration.bb031100.js";import{n as W,d as k}from"./index.8605d8fd.js";import{d as w,a0 as F,r as f,b as u,w as J,am as A,o as v,c as R,a as U,W as n,O as c,u as p,j as D,P as j,M as H,T}from"./@vue.c3e77981.js";import"./@vueuse.a48d0173.js";import"./@element-plus.12c58ce2.js";import"./lodash-es.2b4cc642.js";import"./dayjs.09633948.js";import"./axios.123b7ec2.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.ee5ac4a7.js";import"./vue-router.995b143f.js";import"./pinia.b5130627.js";import"./css-color-function.122f16eb.js";import"./color.d7340c07.js";import"./clone.8365abc8.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.27b17978.js";import"./vue-clipboard3.dbaed9f6.js";import"./clipboard.993b4d28.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.b8b719e9.js";import"./attr.c8eaaf7d.js";import"./index.e7039524.js";import"./picker.b0902db9.js";import"./index.vue_vue_type_script_setup_true_lang.3bb706de.js";import"./usePaging.d25ebf19.js";import"./article.9aebdad5.js";import"./index.ed24e874.js";import"./picker.171c2488.js";import"./index.74382b93.js";import"./index.9bf2ca31.js";import"./index.vue_vue_type_script_setup_true_lang.615fffa4.js";import"./vue3-video-play.4813c60b.js";import"./vuedraggable.41043856.js";import"./vue.9e62d39e.js";import"./sortablejs.c8445ad4.js";import"./content.vue_vue_type_script_setup_true_lang.34f42640.js";import"./decoration-img.8b0c801b.js";import"./attr.vue_vue_type_script_setup_true_lang.8c1dc200.js";import"./content.fd807b8f.js";import"./attr.vue_vue_type_script_setup_true_lang.c24d3758.js";import"./content.vue_vue_type_script_setup_true_lang.61bc379a.js";import"./attr.vue_vue_type_script_setup_true_lang.96dd8bee.js";import"./add-nav.vue_vue_type_script_setup_true_lang.f750178f.js";import"./content.b9251846.js";import"./attr.vue_vue_type_script_setup_true_lang.61d298ca.js";import"./content.vue_vue_type_script_setup_true_lang.559744b9.js";import"./attr.vue_vue_type_script_setup_true_lang.4f1b3bc4.js";import"./content.65005de9.js";import"./attr.vue_vue_type_script_setup_true_lang.990475e3.js";import"./index.vue_vue_type_script_setup_true_lang.85d450cc.js";import"./content.6113918e.js";import"./attr.f3ce3a17.js";import"./content.vue_vue_type_script_setup_true_lang.4b232f96.js";import"./attr.vue_vue_type_script_setup_true_lang.c1356dc8.js";import"./content.157dcfa4.js";import"./attr.vue_vue_type_script_setup_true_lang.4d7015b0.js";import"./content.vue_vue_type_script_setup_true_lang.fc88a8fa.js";import"./attr.vue_vue_type_script_setup_true_lang.3ed965a5.js";import"./content.2d32636c.js";const $={class:"decoration-pages min-w-[1100px]"},q={class:"flex flex-1 h-full justify-between"},z=w({name:"decorationPages"}),G=w({...z,setup(K){let d;(e=>{e.HOME="1",e.USER="2",e.SERVICE="3"})(d||(d={}));const m=e=>e.map(t=>{var r;return{id:W(),...((r=h[t])==null?void 0:r.options())||{}}}),a=F({[1]:{id:1,type:1,name:"\u9996\u9875\u88C5\u4FEE",pageMeta:m(["page-meta"]),pageData:m(["search","banner","nav","news"])},[2]:{id:2,type:2,name:"\u4E2A\u4EBA\u4E2D\u5FC3",pageMeta:m(["page-meta"]),pageData:m(["user-info","my-service","user-banner"])},[3]:{id:3,type:3,name:"\u5BA2\u670D\u8BBE\u7F6E",pageMeta:null,pageData:m(["customer-service"])}}),o=f("1"),i=f(-1),g=u(()=>{var e,t;return(t=(e=a[o.value])==null?void 0:e.pageData)!=null?t:[]}),x=u(()=>{var e,t;return(t=(e=a[o.value])==null?void 0:e.pageMeta)!=null?t:null}),M=u(()=>{var e,t,s,r;return i.value===-1?(t=(e=a[o.value])==null?void 0:e.pageMeta[0])!=null?t:"":(r=(s=a[o.value])==null?void 0:s.pageData[i.value])!=null?r:""}),_=async()=>{const e=await O({id:o.value});a[String(e.id)].pageData=JSON.parse(e.data),a[String(e.id)].pageMeta=e!=null&&e.meta?JSON.parse(e==null?void 0:e.meta):null},y=async()=>{const e=a[o.value];await I({...e,data:JSON.stringify(e.pageData),meta:e!=null&&e.pageMeta?JSON.stringify(e==null?void 0:e.pageMeta):null}),_()};return J(o,()=>{i.value=g.value.findIndex(e=>!e.disabled),_()},{immediate:!0}),(e,t)=>{const s=b,r=S,E=V,B=A("perms");return v(),R("div",$,[U("div",q,[n(s,{shadow:"never",class:"!border-none flex scroll-view-content","body-style":{"padding-right":0}},{default:c(()=>[n(N,{modelValue:p(o),"onUpdate:modelValue":t[0]||(t[0]=l=>D(o)?o.value=l:null),menus:p(a)},null,8,["modelValue","menus"])]),_:1}),n(P,{class:"flex-1 scroll-view-content",modelValue:p(i),"onUpdate:modelValue":t[1]||(t[1]=l=>D(i)?i.value=l:null),pageData:p(g),pageMeta:p(x)},null,8,["modelValue","pageData","pageMeta"]),n(C,{class:"w-[560px] scroll-view-content",widget:p(M)},null,8,["widget"])]),j((v(),H(E,{class:"mt-4",fixed:!1},{default:c(()=>[n(r,{type:"primary",onClick:y},{default:c(()=>[T("\u4FDD\u5B58")]),_:1})]),_:1})),[[B,["decorate:pages:save"]]])])}}});const Dt=k(G,[["__scopeId","data-v-007a7a27"]]);export{Dt as default};