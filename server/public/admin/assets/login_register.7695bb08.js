import{_ as w}from"./index.e161ac83.js";import{B as y,$ as V,D as k,t as x,W as q,w as U,F as W}from"./element-plus.0f699047.js";import{g as P,s as R}from"./user.a3d1697b.js";import{d as C,r as N,a0 as f,am as S,o as g,c as L,W as t,O as l,a as u,u as a,T as r,U as d,P as T,M as j}from"./@vue.c3e77981.js";import"./index.09fadf67.js";import"./@vueuse.a48d0173.js";import"./lodash.ee5ac4a7.js";import"./axios.123b7ec2.js";import"./vue-router.995b143f.js";import"./pinia.b5130627.js";import"./css-color-function.122f16eb.js";import"./color.d7340c07.js";import"./clone.8365abc8.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./@element-plus.12c58ce2.js";import"./nprogress.27b17978.js";import"./vue-clipboard3.dbaed9f6.js";import"./clipboard.993b4d28.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.b8b719e9.js";import"./lodash-es.2b4cc642.js";import"./dayjs.09633948.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";const G={class:"login-register"},I=u("div",{class:"font-medium mb-7"},"\u901A\u7528\u8BBE\u7F6E",-1),M=u("div",{class:"form-tips"},"\u7CFB\u7EDF\u901A\u7528\u767B\u5F55\u65B9\u5F0F\uFF0C\u81F3\u5C11\u9009\u62E9\u4E00\u9879",-1),O={class:"mt-1 ml-2"},$=u("div",{class:"form-tips"},[r(" 1\u3001\u5982\u679C\u5F00\u542F\uFF0C\u5219\u65B0\u7528\u6237\u5728\u6CE8\u518C\u5B8C\u6210\u4E4B\u540E\u8981\u5F3A\u5236\u7ED1\u5B9A\u624B\u673A\u53F7"),u("br"),r(" 2\u3001\u8001\u7528\u6237\u767B\u5F55\u65F6\u5982\u679C\u68C0\u6D4B\u5230\u6CA1\u6709\u7ED1\u5B9A\u624B\u673A\uFF0C\u5219\u8981\u91CD\u65B0\u7ED1\u5B9A\u624B\u673A\u53F7 ")],-1),z={class:"mt-1 ml-2"},H=u("div",{class:"form-tips"},"\u767B\u5F55/\u6CE8\u518C\u4F1A\u5458\u65F6\uFF0C\u662F\u5426\u663E\u793A\u670D\u52A1\u534F\u8BAE\u548C\u9690\u79C1\u653F\u7B56",-1),J=u("div",{class:"font-medium mb-7"},"\u7B2C\u4E09\u65B9\u8BBE\u7F6E",-1),K={class:"mt-1 ml-2"},Q=u("div",{class:"form-tips"},"\u767B\u5F55\u65F6\u652F\u6301\u7B2C\u4E09\u65B9\u767B\u5F55\uFF0C\u65B0\u7528\u6237\u6388\u6743\u5373\u81EA\u52A8\u6CE8\u518C\u8D26\u53F7",-1),X={href:"https://open.weixin.qq.com/",target:"_blank"},Y=u("div",{class:"form-tips"},[r(" 1\u3001\u5728\u5404\u6E20\u9053\u4F7F\u7528\u5FAE\u4FE1\u6388\u6743\u767B\u5F55\u65F6\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u914D\u7F6E\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0"),u("br"),r(" 2\u3001\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0\u5173\u8054\u516C\u4F17\u53F7\u3001\u5C0F\u7A0B\u5E8F\u548CAPP\u540E\uFF0C\u53EF\u5B9E\u73B0\u5404\u7AEF\u7528\u6237\u8D26\u53F7\u7EDF\u4E00\uFF0C\u8BC6\u522B\u4E70\u5BB6\u552F\u4E00\u5FAE\u4FE1\u8EAB\u4EFD"),u("br"),r(" 3\u3001\u6CA1\u6709\u914D\u7F6E\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0\uFF0C\u540C\u4E00\u5FAE\u4FE1\u53F7\u4F1A\u751F\u6210\u591A\u4E2A\u7528\u6237\uFF0C\u914D\u7F6E\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0\u540E\u5DF2\u751F\u6210\u7684\u7528\u6237\u8D26\u53F7\u65E0\u6CD5\u5408\u5E76 ")],-1),Z=C({name:"loginRegister"}),Ru=C({...Z,setup(uu){const m=N(),e=f({login_way:[],coerce_mobile:0,login_agreement:0,third_auth:0,wechat_auth:0,qq_auth:0}),A=f({loginWay:[{required:!0,validator:(n,o,s)=>{if(e.login_way.join("").length===0)s(new Error("\u767B\u5F55\u65B9\u5F0F\u81F3\u5C11\u9009\u62E9\u4E00\u9879\uFF01"));else{if(e.login_way!==""){if(!m.value)return;m.value.validateField("checkPass",()=>null)}s()}},trigger:"change"}],coerce_mobile:[{required:!0,trigger:"blur"}],login_agreement:[{required:!0,trigger:"blur"}],third_auth:[{required:!0,trigger:"blur"}]}),c=async()=>{try{const n=await P();for(const o in e)e[o]=n[o]}catch(n){console.log("\u83B7\u53D6=>",n)}},h=async()=>{var n;await((n=m.value)==null?void 0:n.validate());try{await R(e),c()}catch(o){console.log("\u4FDD\u5B58=>",o)}};return c(),(n,o)=>{const s=y,E=V,F=k,_=x,p=q,B=U,v=W,D=w,b=S("perms");return g(),L("div",G,[t(v,{ref_key:"formRef",ref:m,rules:a(A),model:a(e),"label-width":"120px"},{default:l(()=>[t(p,{shadow:"never",class:"!border-none"},{default:l(()=>[I,t(F,{label:"\u767B\u5F55\u65B9\u5F0F",prop:"loginWay"},{default:l(()=>[u("div",null,[t(E,{modelValue:a(e).login_way,"onUpdate:modelValue":o[0]||(o[0]=i=>a(e).login_way=i)},{default:l(()=>[t(s,{label:"1"},{default:l(()=>[r("\u8D26\u53F7\u5BC6\u7801\u767B\u5F55")]),_:1}),t(s,{label:"2"},{default:l(()=>[r("\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55")]),_:1})]),_:1},8,["modelValue"]),M])]),_:1}),t(F,{label:"\u5F3A\u5236\u7ED1\u5B9A\u624B\u673A",prop:"coerce_mobile"},{default:l(()=>[u("div",null,[t(_,{modelValue:a(e).coerce_mobile,"onUpdate:modelValue":o[1]||(o[1]=i=>a(e).coerce_mobile=i),"active-value":1,"inactive-value":0},null,8,["modelValue"]),u("span",O,d(a(e).coerce_mobile?"\u5F00\u542F":"\u5173\u95ED"),1),$])]),_:1}),t(F,{label:"\u653F\u7B56\u534F\u8BAE",prop:"login_agreement"},{default:l(()=>[u("div",null,[t(_,{modelValue:a(e).login_agreement,"onUpdate:modelValue":o[2]||(o[2]=i=>a(e).login_agreement=i),"active-value":1,"inactive-value":0},null,8,["modelValue"]),u("span",z,d(a(e).login_agreement?"\u5F00\u542F":"\u5173\u95ED"),1),H])]),_:1})]),_:1}),t(p,{shadow:"never",class:"!border-none mt-4"},{default:l(()=>[J,t(F,{label:"\u7B2C\u4E09\u65B9\u767B\u5F55",prop:"third_auth"},{default:l(()=>[u("div",null,[t(_,{modelValue:a(e).third_auth,"onUpdate:modelValue":o[3]||(o[3]=i=>a(e).third_auth=i),"active-value":1,"inactive-value":0},null,8,["modelValue"]),u("span",K,d(a(e).third_auth?"\u5F00\u542F":"\u5173\u95ED"),1),Q,u("div",null,[t(s,{modelValue:a(e).wechat_auth,"onUpdate:modelValue":o[4]||(o[4]=i=>a(e).wechat_auth=i),"true-label":1,"false-label":0},{default:l(()=>[r(" \u5FAE\u4FE1\u767B\u5F55 ")]),_:1},8,["modelValue"])])])]),_:1}),t(F,{label:"\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0"},{default:l(()=>[u("div",null,[u("a",X,[t(B,{type:"primary",link:"",class:"underline"},{default:l(()=>[r(" \u524D\u5F80\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0 ")]),_:1})]),Y])]),_:1})]),_:1})]),_:1},8,["rules","model"]),T((g(),j(D,null,{default:l(()=>[t(B,{type:"primary",onClick:h},{default:l(()=>[r("\u4FDD\u5B58")]),_:1})]),_:1})),[[b,["setting.user.user/setRegisterConfig"]]])])}}});export{Ru as default};