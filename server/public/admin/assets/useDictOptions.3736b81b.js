import{h as l}from"./index.005e8005.js";import{a0 as u,t as D}from"./@vue.c3e77981.js";function y(s){const a=u({}),e=Object.keys(s),c=e.map(n=>{const t=s[n];return a[n]=[],()=>t.api(D(t.params)||{})}),o=async()=>{(await Promise.allSettled(c.map(t=>t()))).forEach((t,f)=>{const r=e[f];if(t.status=="fulfilled"){const{transformData:i}=s[r],p=i?i(t.value):t.value;a[r]=p}})};return o(),{optionsData:a,refresh:o}}function h(s){const a=u({}),e=async()=>{const c=await l({type:s});Object.assign(a,c)};return e(),{dictData:a,refresh:e}}export{h as a,y as u};