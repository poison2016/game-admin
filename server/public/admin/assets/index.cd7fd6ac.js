import{w as j,D as I,F as W,W as Y,P as q,Q as M,R as O}from"./element-plus.6aa9c204.js";import{_ as Q}from"./index.vue_vue_type_script_setup_true_lang.3bb706de.js";import{f as U,b as z}from"./index.8605d8fd.js";import{u as G}from"./usePaging.d25ebf19.js";import{u as H}from"./useDictOptions.6b81b264.js";import{_ as J,a as K,b as X}from"./edit.vue_vue_type_script_setup_true_name_yyVipFdEdit_lang.c3078854.js";import"./lodash.ee5ac4a7.js";import{d as g,s as Z,r as k,a0 as ee,am as te,o as l,c as oe,W as e,O as t,u as o,T as r,P as c,M as m,a as w,j as ae,S as ie,n as F}from"./@vue.c3e77981.js";import"./@vueuse.a48d0173.js";import"./@element-plus.12c58ce2.js";import"./lodash-es.2b4cc642.js";import"./dayjs.09633948.js";import"./axios.123b7ec2.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./vue-router.995b143f.js";import"./pinia.b5130627.js";import"./css-color-function.122f16eb.js";import"./color.d7340c07.js";import"./clone.8365abc8.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.27b17978.js";import"./vue-clipboard3.dbaed9f6.js";import"./clipboard.993b4d28.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.b8b719e9.js";import"./index.ed24e874.js";import"./user_vip_set.2f91f1e0.js";const ne={class:"mt-4"},le={class:"flex mt-4 justify-end"},se=g({name:"yyVipFdLists"}),ze=g({...se,setup(re){const u=Z(),_=k(!1),C=ee({}),y=k([]),D=i=>{y.value=i.map(({id:a})=>a)},{dictData:E}=H(""),{pager:p,getLists:f,resetParams:B,resetPage:V}=G({fetchFun:X,params:C}),x=async()=>{var i;_.value=!0,await F(),(i=u.value)==null||i.open("add")},P=async i=>{var a,n;_.value=!0,await F(),(a=u.value)==null||a.open("edit"),(n=u.value)==null||n.setFormData(i)},b=async i=>{await U.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await K({id:i}),f()};return f(),(i,a)=>{const n=j,$=I,R=W,h=Y,S=z,d=q,T=M,A=Q,v=te("perms"),L=O;return l(),oe("div",null,[e(h,{class:"!border-none mb-4",shadow:"never"},{default:t(()=>[e(R,{class:"mb-[-16px]",model:o(C),inline:""},{default:t(()=>[e($,null,{default:t(()=>[e(n,{type:"primary",onClick:o(V)},{default:t(()=>[r("\u67E5\u8BE2")]),_:1},8,["onClick"]),e(n,{onClick:o(B)},{default:t(()=>[r("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),c((l(),m(h,{class:"!border-none",shadow:"never"},{default:t(()=>[c((l(),m(n,{type:"primary",onClick:x},{icon:t(()=>[e(S,{name:"el-icon-Plus"})]),default:t(()=>[r(" \u65B0\u589E ")]),_:1})),[[v,["yy_vip_fd/add"]]]),c((l(),m(n,{disabled:!o(y).length,onClick:a[0]||(a[0]=s=>b(o(y)))},{default:t(()=>[r(" \u5220\u9664 ")]),_:1},8,["disabled"])),[[v,["yy_vip_fd/delete"]]]),w("div",ne,[e(T,{data:o(p).lists,onSelectionChange:D},{default:t(()=>[e(d,{type:"selection",width:"55"}),e(d,{label:"ID",prop:"id","show-overflow-tooltip":""}),e(d,{label:"\u4F1A\u5458\u7B49\u7EA7",prop:"vip_name","show-overflow-tooltip":""}),e(d,{label:"\u8FD4\u5229\u6BD4\u4F8B",prop:"fl_bl","show-overflow-tooltip":""}),e(d,{label:"\u64CD\u4F5C",width:"120",fixed:"right"},{default:t(({row:s})=>[c((l(),m(n,{type:"primary",link:"",onClick:N=>P(s)},{default:t(()=>[r(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[v,["yy_vip_fd/edit"]]]),c((l(),m(n,{type:"danger",link:"",onClick:N=>b(s.id)},{default:t(()=>[r(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[v,["yy_vip_fd/delete"]]])]),_:1})]),_:1},8,["data"])]),w("div",le,[e(A,{modelValue:o(p),"onUpdate:modelValue":a[1]||(a[1]=s=>ae(p)?p.value=s:null),onChange:o(f)},null,8,["modelValue","onChange"])])]),_:1})),[[L,o(p).loading]]),o(_)?(l(),m(J,{key:0,ref_key:"editRef",ref:u,"dict-data":o(E),onSuccess:o(f),onClose:a[2]||(a[2]=s=>_.value=!1)},null,8,["dict-data","onSuccess"])):ie("",!0)])}}});export{ze as default};
