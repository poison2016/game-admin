import{w as B,a as $}from"./element-plus.6aa9c204.js";import{e as E}from"./index.5963a65b.js";import{J as S,v as F,h as R}from"./@element-plus.12c58ce2.js";import{d as N,s as z,b as D,o as r,c as l,a as i,S as _,V as P,a7 as q,Q as y,u as e,$ as h,J as A,M as I,R as J,W as s,O as v}from"./@vue.c3e77981.js";import{d as W}from"./index.8605d8fd.js";import"./@vueuse.a48d0173.js";import"./lodash-es.2b4cc642.js";import"./dayjs.09633948.js";import"./axios.123b7ec2.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./attr.c8eaaf7d.js";import"./index.e7039524.js";import"./picker.b0902db9.js";import"./index.vue_vue_type_script_setup_true_lang.3bb706de.js";import"./usePaging.d25ebf19.js";import"./article.9aebdad5.js";import"./index.ed24e874.js";import"./picker.171c2488.js";import"./index.74382b93.js";import"./index.9bf2ca31.js";import"./index.vue_vue_type_script_setup_true_lang.615fffa4.js";import"./vue3-video-play.4813c60b.js";import"./vuedraggable.41043856.js";import"./vue.9e62d39e.js";import"./sortablejs.c8445ad4.js";import"./lodash.ee5ac4a7.js";import"./vue-router.995b143f.js";import"./pinia.b5130627.js";import"./css-color-function.122f16eb.js";import"./color.d7340c07.js";import"./clone.8365abc8.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.27b17978.js";import"./vue-clipboard3.dbaed9f6.js";import"./clipboard.993b4d28.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.b8b719e9.js";import"./content.vue_vue_type_script_setup_true_lang.34f42640.js";import"./decoration-img.8b0c801b.js";import"./attr.vue_vue_type_script_setup_true_lang.8c1dc200.js";import"./content.fd807b8f.js";import"./attr.vue_vue_type_script_setup_true_lang.c24d3758.js";import"./content.vue_vue_type_script_setup_true_lang.61bc379a.js";import"./attr.vue_vue_type_script_setup_true_lang.96dd8bee.js";import"./add-nav.vue_vue_type_script_setup_true_lang.f750178f.js";import"./content.b9251846.js";import"./attr.vue_vue_type_script_setup_true_lang.61d298ca.js";import"./content.vue_vue_type_script_setup_true_lang.559744b9.js";import"./attr.vue_vue_type_script_setup_true_lang.4f1b3bc4.js";import"./content.65005de9.js";import"./decoration.bb031100.js";import"./attr.vue_vue_type_script_setup_true_lang.990475e3.js";import"./index.vue_vue_type_script_setup_true_lang.85d450cc.js";import"./content.6113918e.js";import"./attr.f3ce3a17.js";import"./content.vue_vue_type_script_setup_true_lang.4b232f96.js";import"./attr.vue_vue_type_script_setup_true_lang.c1356dc8.js";import"./content.157dcfa4.js";import"./attr.vue_vue_type_script_setup_true_lang.4d7015b0.js";import"./content.vue_vue_type_script_setup_true_lang.fc88a8fa.js";import"./attr.vue_vue_type_script_setup_true_lang.3ed965a5.js";import"./content.2d32636c.js";const j={class:"pages-preview"},L={class:"relative flex justify-center h-full mt-5 mx-10"},M=["src"],O={class:"max-w-[1200px] w-full absolute"},Q=["onClick"],T=N({__name:"preview-pc",props:{pageData:{type:Array,default:()=>[]},modelValue:{type:Number,default:0}},emits:["update:modelValue"],setup(a,{emit:b}){const u=z(),C=b,c=D(()=>o=>(o==null?void 0:o.enabled)==0),k=o=>{var m;(m=u.value[o])==null||m.open()},V=o=>{o.enabled!==void 0&&(o.enabled=o.enabled?0:1)},x=(o,m)=>{o.disabled||C("update:modelValue",m)};return(o,m)=>{const f=B,d=$;return r(),l("div",j,[i("div",L,[o.$route.query.url?(r(),l("iframe",{key:0,ref:"previewIframeRef",class:"flex-1 h-full",width:"100%",height:"100%",scrolling:"no",src:o.$route.query.url},null,8,M)):_("",!0),i("div",O,[(r(!0),l(P,null,q(a.pageData,(t,n)=>(r(),l("div",{key:t.id,class:y(["absolute left-0 top-0",{"cursor-pointer":!(t!=null&&t.disabled)}]),onClick:p=>x(t,n)},[i("div",{class:y(["absolute w-full h-full z-[100] border-dashed",{select:n==a.modelValue,"border-[#dcdfe6] border-2":!(t!=null&&t.disabled),hide:e(c)(t.content)}]),style:h(t.styles)},null,6),A(o.$slots,"default",{},()=>{var p;return[(r(),I(J((p=e(E)[t==null?void 0:t.name])==null?void 0:p.content),{content:t.content,styles:t.styles,key:t.id,ref_for:!0,ref_key:"commonComponentRef",ref:u},null,8,["content","styles"]))]},!0),n==a.modelValue?(r(),l("div",{key:0,class:"widget-btns py-[5px]",style:h({top:t.styles.top,left:t.styles.width})},[i("div",null,[s(d,{effect:"dark",content:"\u7F16\u8F91\u7EC4\u4EF6\u5185\u5BB9",placement:"right"},{default:v(()=>[s(f,{class:"py-[5px]",type:"primary",icon:e(S),onClick:p=>k(n)},null,8,["icon","onClick"])]),_:2},1024)]),i("div",null,[s(d,{effect:"dark",content:e(c)(t.content)?"\u663E\u793A":"\u9690\u85CF",placement:"right"},{default:v(()=>[s(f,{class:"py-[5px]",type:"primary",icon:e(c)(t.content)?e(F):e(R),onClick:p=>V(t.content)},null,8,["icon","onClick"])]),_:2},1032,["content"])])],4)):_("",!0)],10,Q))),128))])])])}}});const ao=W(T,[["__scopeId","data-v-2b1de70f"]]);export{ao as default};