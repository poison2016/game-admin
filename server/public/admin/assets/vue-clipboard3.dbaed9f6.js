import{C as a}from"./clipboard.993b4d28.js";const l=o=>{const r=(o==null?void 0:o.appendToBody)===void 0?!0:o.appendToBody;return{toClipboard(c,t){return new Promise((i,u)=>{const e=document.createElement("button"),d=new a(e,{text:()=>c,action:()=>"copy",container:t!==void 0?t:document.body});d.on("success",n=>{d.destroy(),i(n)}),d.on("error",n=>{d.destroy(),u(n)}),r&&document.body.appendChild(e),e.click(),r&&document.body.removeChild(e)})}}};export{l as u};
