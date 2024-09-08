import{w as j,D as G,F as U,W as q,P as W,Q as I,R as M}from"./element-plus.0f699047.js";import{_ as O}from"./index.vue_vue_type_script_setup_true_lang.20d6cd13.js";import{_ as Q}from"./index.vue_vue_type_script_setup_true_lang.da5afd45.js";import{f as H,b as J}from"./index.06b9f2eb.js";import{u as K}from"./usePaging.d25ebf19.js";import{u as X}from"./useDictOptions.bb338e6a.js";import{_ as Y,a as Z,b as ee}from"./edit.vue_vue_type_script_setup_true_name_userVipGameFsEdit_lang.f7f11fa7.js";import"./lodash.ee5ac4a7.js";import{d as k,s as oe,r as h,a0 as te,am as ae,o as n,c as le,W as e,O as t,u as a,T as p,P as _,M as r,a as y,j as se,S as ue,n as g}from"./@vue.c3e77981.js";import"./@vueuse.a48d0173.js";import"./@element-plus.12c58ce2.js";import"./lodash-es.2b4cc642.js";import"./dayjs.09633948.js";import"./axios.123b7ec2.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./vue-router.995b143f.js";import"./pinia.b5130627.js";import"./css-color-function.122f16eb.js";import"./color.d7340c07.js";import"./clone.8365abc8.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.27b17978.js";import"./vue-clipboard3.dbaed9f6.js";import"./clipboard.993b4d28.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.b8b719e9.js";import"./index.3c38b31f.js";import"./user_vip_set.880357da.js";const ie={class:"mt-4"},ne={class:"flex mt-4 justify-end"},pe=k({name:"userVipGameFsLists"}),Ke=k({...pe,setup(re){const d=oe(),c=h(!1),F=te({}),C=h([]),E=u=>{C.value=u.map(({id:l})=>l)},{dictData:w}=X("status,types"),{pager:m,getLists:f,resetParams:V,resetPage:A}=K({fetchFun:ee,params:F}),x=async()=>{var u;c.value=!0,await g(),(u=d.value)==null||u.open("add")},$=async u=>{var l,i;c.value=!0,await g(),(l=d.value)==null||l.open("edit"),(i=d.value)==null||i.setFormData(u)},D=async u=>{await H.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await Z({id:u}),f()};return f(),(u,l)=>{const i=j,P=G,R=U,b=q,S=J,o=W,B=Q,T=I,z=O,v=ae("perms"),L=M;return n(),le("div",null,[e(b,{class:"!border-none mb-4",shadow:"never"},{default:t(()=>[e(R,{class:"mb-[-16px]",model:a(F),inline:""},{default:t(()=>[e(P,null,{default:t(()=>[e(i,{type:"primary",onClick:a(A)},{default:t(()=>[p("\u67E5\u8BE2")]),_:1},8,["onClick"]),e(i,{onClick:a(V)},{default:t(()=>[p("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),_((n(),r(b,{class:"!border-none",shadow:"never"},{default:t(()=>[_((n(),r(i,{type:"primary",onClick:x},{icon:t(()=>[e(S,{name:"el-icon-Plus"})]),default:t(()=>[p(" \u65B0\u589E ")]),_:1})),[[v,["user_vip_game_fs/add"]]]),_((n(),r(i,{disabled:!a(C).length,onClick:l[0]||(l[0]=s=>D(a(C)))},{default:t(()=>[p(" \u5220\u9664 ")]),_:1},8,["disabled"])),[[v,["user_vip_game_fs/delete"]]]),y("div",ie,[e(T,{data:a(m).lists,onSelectionChange:E},{default:t(()=>[e(o,{type:"selection",width:"55"}),e(o,{label:"",prop:"id","show-overflow-tooltip":""}),e(o,{label:"\u4F1A\u5458\u7B49\u7EA7",prop:"vip_name","show-overflow-tooltip":""}),e(o,{label:"\u6BCF\u5929\u6700\u9AD8\u53CD\u6C34",prop:"day_top_ls","show-overflow-tooltip":""}),e(o,{label:"\u6700\u4F4E\u6D41\u6C34\u8981\u6C42",prop:"low_ls","show-overflow-tooltip":""}),e(o,{label:"\u72B6\u6001",prop:"status"},{default:t(({row:s})=>[e(B,{options:a(w).status,value:s.status},null,8,["options","value"])]),_:1}),e(o,{label:"\u81EA\u52A8\u53CD\u6C34",prop:"zd_fs"},{default:t(({row:s})=>[e(B,{options:a(w).types,value:s.zd_fs},null,8,["options","value"])]),_:1}),e(o,{label:"\u771F\u4EBA\u8FD4\u6C34\u6BD4\u4F8B",prop:"type_zr","show-overflow-tooltip":""}),e(o,{label:"\u7535\u5B50\u8FD4\u6C34\u6BD4\u4F8B",prop:"type_dz","show-overflow-tooltip":""}),e(o,{label:"\u5F69\u7968\u8FD4\u6C34\u6BD4\u4F8B",prop:"type_cp","show-overflow-tooltip":""}),e(o,{label:"\u4F53\u80B2\u8FD4\u6C34\u6BD4\u4F8B",prop:"type_ty","show-overflow-tooltip":""}),e(o,{label:"\u7535\u7ADE\u8FD4\u6C34\u6BD4\u4F8B",prop:"type_dj","show-overflow-tooltip":""}),e(o,{label:"\u6355\u9C7C\u8FD4\u6C34\u6BD4\u4F8B",prop:"type_by","show-overflow-tooltip":""}),e(o,{label:"\u68CB\u724C\u8FD4\u6C34\u6BD4\u4F8B",prop:"type_qp","show-overflow-tooltip":""}),e(o,{label:"\u64CD\u4F5C",width:"120",fixed:"right"},{default:t(({row:s})=>[_((n(),r(i,{type:"primary",link:"",onClick:N=>$(s)},{default:t(()=>[p(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[v,["user_vip_game_fs/edit"]]]),_((n(),r(i,{type:"danger",link:"",onClick:N=>D(s.id)},{default:t(()=>[p(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[v,["user_vip_game_fs/delete"]]])]),_:1})]),_:1},8,["data"])]),y("div",ne,[e(z,{modelValue:a(m),"onUpdate:modelValue":l[1]||(l[1]=s=>se(m)?m.value=s:null),onChange:a(f)},null,8,["modelValue","onChange"])])]),_:1})),[[L,a(m).loading]]),a(c)?(n(),r(Y,{key:0,ref_key:"editRef",ref:d,"dict-data":a(w),onSuccess:a(f),onClose:l[2]||(l[2]=s=>c.value=!1)},null,8,["dict-data","onSuccess"])):ue("",!0)])}}});export{Ke as default};