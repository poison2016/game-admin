import{d as c,b as r,o as a,c as t,V as f,a7 as v,U as u,u as d}from"./@vue.c3e77981.js";const _=c({__name:"index",props:{options:{default:()=>[]},value:{},config:{default:()=>({label:"name",value:"value"})}},setup(s){const e=s,o=r(()=>e.value!==null&&typeof e.value<"u"?Array.isArray(e.value)?e.value:String(e.value).split(","):[]),i=r(()=>e.options.filter(n=>o.value.includes(n[e.config.value])));return(n,m)=>(a(),t("div",null,[(a(!0),t(f,null,v(d(i),(p,l)=>(a(),t("span",{key:l},u(l!=0?"\u3001":"")+u(p[n.config.label]),1))),128))]))}});export{_};
