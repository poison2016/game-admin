import{C as j,D as A,w as M,F as Y,I as q,L as O,b as W,M as z,N as H}from"./element-plus.665b23f8.js";import{_ as J}from"./index.vue_vue_type_script_setup_true_lang.6a6d97c2.js";import{f as K,b as Q}from"./index.005e8005.js";import{u as X}from"./usePaging.d25ebf19.js";import{a as Z}from"./useDictOptions.3736b81b.js";import{_ as ee,a as te,b as oe}from"./edit.vue_vue_type_script_setup_true_name_ybGramListEdit_lang.67b8f5bc.js";import"./lodash.ee5ac4a7.js";import{d as D,s as ae,r as y,a0 as le,am as ie,o as r,c as ne,W as e,O as t,u as o,T as u,P as _,M as p,a as h,j as re,S as se,n as k}from"./@vue.c3e77981.js";import"./@vueuse.a48d0173.js";import"./@element-plus.12c58ce2.js";import"./lodash-es.2b4cc642.js";import"./dayjs.09633948.js";import"./axios.123b7ec2.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./vue-router.995b143f.js";import"./pinia.b5130627.js";import"./css-color-function.122f16eb.js";import"./color.d7340c07.js";import"./clone.8365abc8.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.27b17978.js";import"./vue-clipboard3.dbaed9f6.js";import"./clipboard.993b4d28.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.b8b719e9.js";import"./picker.2005d218.js";import"./index.8ab154aa.js";import"./index.a897d630.js";import"./index.9ca3b655.js";import"./index.39352d25.js";import"./index.vue_vue_type_script_setup_true_lang.81e4f76c.js";import"./vue3-video-play.4813c60b.js";import"./vuedraggable.41043856.js";import"./vue.9e62d39e.js";import"./sortablejs.c8445ad4.js";const me={class:"mt-4"},ue={class:"flex mt-4 justify-end"},pe=D({name:"ybGramListLists"}),it=D({...pe,setup(de){const f=ae(),g=y(!1),s=le({gram_coe:"",gram_name:""}),v=y([]),V=i=>{v.value=i.map(({id:a})=>a)},{dictData:x}=Z(""),{pager:d,getLists:F,resetParams:B,resetPage:L}=X({fetchFun:oe,params:s}),$=async()=>{var i;g.value=!0,await k(),(i=f.value)==null||i.open("add")},P=async i=>{var a,c;g.value=!0,await k(),(a=f.value)==null||a.open("edit"),(c=f.value)==null||c.setFormData(i)},C=async i=>{await K.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await te({id:i}),F()};return F(),(i,a)=>{const c=j,E=A,m=M,N=Y,w=q,S=Q,n=O,T=W,I=z,R=J,b=ie("perms"),G=H;return r(),ne("div",null,[e(w,{class:"!border-none mb-4",shadow:"never"},{default:t(()=>[e(N,{class:"mb-[-16px]",model:o(s),inline:""},{default:t(()=>[e(E,{label:"\u6E38\u620F\u7F16\u53F7",prop:"gram_coe"},{default:t(()=>[e(c,{class:"w-[280px]",modelValue:o(s).gram_coe,"onUpdate:modelValue":a[0]||(a[0]=l=>o(s).gram_coe=l),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u6E38\u620F\u7F16\u53F7"},null,8,["modelValue"])]),_:1}),e(E,{label:"\u6E38\u620F\u540D\u79F0",prop:"gram_name"},{default:t(()=>[e(c,{class:"w-[280px]",modelValue:o(s).gram_name,"onUpdate:modelValue":a[1]||(a[1]=l=>o(s).gram_name=l),clearable:"",placeholder:"\u8BF7\u8F93\u5165\u6E38\u620F\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(E,null,{default:t(()=>[e(m,{type:"primary",onClick:o(L)},{default:t(()=>[u("\u67E5\u8BE2")]),_:1},8,["onClick"]),e(m,{onClick:o(B)},{default:t(()=>[u("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),_((r(),p(w,{class:"!border-none",shadow:"never"},{default:t(()=>[_((r(),p(m,{type:"primary",onClick:$},{icon:t(()=>[e(S,{name:"el-icon-Plus"})]),default:t(()=>[u(" \u65B0\u589E ")]),_:1})),[[b,["yb_gram_list/add"]]]),_((r(),p(m,{disabled:!o(v).length,onClick:a[2]||(a[2]=l=>C(o(v)))},{default:t(()=>[u(" \u5220\u9664 ")]),_:1},8,["disabled"])),[[b,["yb_gram_list/delete"]]]),h("div",me,[e(I,{data:o(d).lists,onSelectionChange:V},{default:t(()=>[e(n,{type:"selection",width:"55"}),e(n,{label:"\u6E38\u620F\u5E73\u53F0id",prop:"plat_type_id","show-overflow-tooltip":""}),e(n,{label:"\u6E38\u620F\u7F16\u53F7",prop:"gram_coe","show-overflow-tooltip":""}),e(n,{label:"\u652F\u6301\u5E73\u53F0",prop:"ingress","show-overflow-tooltip":""}),e(n,{label:"\u6E38\u620F\u540D\u79F0",prop:"gram_name","show-overflow-tooltip":""}),e(n,{label:"",prop:"img_url"},{default:t(({row:l})=>[e(T,{style:{width:"50px",height:"50px"},src:l.img_url},null,8,["src"])]),_:1}),e(n,{label:"\u64CD\u4F5C",width:"120",fixed:"right"},{default:t(({row:l})=>[_((r(),p(m,{type:"primary",link:"",onClick:U=>P(l)},{default:t(()=>[u(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[b,["yb_gram_list/edit"]]]),_((r(),p(m,{type:"danger",link:"",onClick:U=>C(l.id)},{default:t(()=>[u(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[b,["yb_gram_list/delete"]]])]),_:1})]),_:1},8,["data"])]),h("div",ue,[e(R,{modelValue:o(d),"onUpdate:modelValue":a[3]||(a[3]=l=>re(d)?d.value=l:null),onChange:o(F)},null,8,["modelValue","onChange"])])]),_:1})),[[G,o(d).loading]]),o(g)?(r(),p(ee,{key:0,ref_key:"editRef",ref:f,"dict-data":o(x),onSuccess:o(F),onClose:a[4]||(a[4]=l=>g.value=!1)},null,8,["dict-data","onSuccess"])):se("",!0)])}}});export{it as default};
