import{s as f,C as _,w as x}from"./element-plus.b72845c4.js";import{k as V}from"./@vueuse.a48d0173.js";import{d as C,o as k,c as y,W as l,u as s,j as a,O as E,T as v}from"./@vue.c3e77981.js";const B={class:"color-select flex flex-1"},T=C({__name:"index",props:{modelValue:{type:String,default:""},resetColor:{type:String,default:""}},emits:["update:modelValue"],setup(r,{emit:u}){const n=r,e=V(n,"modelValue",u),d=["#FF2C3C","#f7971e","#fa444d","#e0a356","#2f80ed","#2ec840"],m=()=>{e.value=n.resetColor};return(g,o)=>{const p=f,c=_,i=x;return k(),y("div",B,[l(p,{modelValue:s(e),"onUpdate:modelValue":o[0]||(o[0]=t=>a(e)?e.value=t:null),predefine:d},null,8,["modelValue"]),l(c,{modelValue:s(e),"onUpdate:modelValue":o[1]||(o[1]=t=>a(e)?e.value=t:null),class:"mx-[10px] flex-1",type:"text",readonly:""},null,8,["modelValue"]),l(i,{type:"text",onClick:m},{default:E(()=>[v("\u91CD\u7F6E")]),_:1})])}}});export{T as _};