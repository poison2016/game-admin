import{c as E}from"./color.d7340c07.js";import{b as S}from"./balanced-match.d2a36341.js";import{r as N}from"./ms.564e106c.js";var k={},y={exports:{}};function _(t){r.debug=r,r.default=r,r.coerce=s,r.disable=i,r.enable=C,r.enabled=a,r.humanize=N(),Object.keys(t).forEach(function(o){r[o]=t[o]}),r.instances=[],r.names=[],r.skips=[],r.formatters={};function u(o){for(var e=0,n=0;n<o.length;n++)e=(e<<5)-e+o.charCodeAt(n),e|=0;return r.colors[Math.abs(e)%r.colors.length]}r.selectColor=u;function r(o){var e;function n(){if(!!n.enabled){for(var f=arguments.length,c=new Array(f),d=0;d<f;d++)c[d]=arguments[d];var h=n,p=Number(new Date),I=p-(e||p);h.diff=I,h.prev=e,h.curr=p,e=p,c[0]=r.coerce(c[0]),typeof c[0]!="string"&&c.unshift("%O");var F=0;c[0]=c[0].replace(/%([a-zA-Z%])/g,function(b,R){if(b==="%%")return b;F++;var g=r.formatters[R];if(typeof g=="function"){var z=c[F];b=g.call(h,z),c.splice(F,1),F--}return b}),r.formatArgs.call(h,c);var j=h.log||r.log;j.apply(h,c)}}return n.namespace=o,n.enabled=r.enabled(o),n.useColors=r.useColors(),n.color=u(o),n.destroy=l,n.extend=v,typeof r.init=="function"&&r.init(n),r.instances.push(n),n}function l(){var o=r.instances.indexOf(this);return o!==-1?(r.instances.splice(o,1),!0):!1}function v(o,e){return r(this.namespace+(typeof e>"u"?":":e)+o)}function C(o){r.save(o),r.names=[],r.skips=[];var e,n=(typeof o=="string"?o:"").split(/[\s,]+/),f=n.length;for(e=0;e<f;e++)!n[e]||(o=n[e].replace(/\*/g,".*?"),o[0]==="-"?r.skips.push(new RegExp("^"+o.substr(1)+"$")):r.names.push(new RegExp("^"+o+"$")));for(e=0;e<r.instances.length;e++){var c=r.instances[e];c.enabled=r.enabled(c.namespace)}}function i(){r.enable("")}function a(o){if(o[o.length-1]==="*")return!0;var e,n;for(e=0,n=r.skips.length;e<n;e++)if(r.skips[e].test(o))return!1;for(e=0,n=r.names.length;e<n;e++)if(r.names[e].test(o))return!0;return!1}function s(o){return o instanceof Error?o.stack||o.message:o}return r.enable(r.load()),r}var B=_;(function(t,u){function r(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?r=function(f){return typeof f}:r=function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},r(e)}u.log=C,u.formatArgs=v,u.save=i,u.load=a,u.useColors=l,u.storage=s(),u.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function l(){return typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function v(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),!!this.useColors){var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var f=0,c=0;e[0].replace(/%[a-zA-Z%]/g,function(d){d!=="%%"&&(f++,d==="%c"&&(c=f))}),e.splice(c,0,n)}}function C(){var e;return(typeof console>"u"?"undefined":r(console))==="object"&&console.log&&(e=console).log.apply(e,arguments)}function i(e){try{e?u.storage.setItem("debug",e):u.storage.removeItem("debug")}catch{}}function a(){var e;try{e=u.storage.getItem("debug")}catch{}return!e&&typeof process<"u"&&"env"in process&&(e={}.DEBUG),e}function s(){try{return localStorage}catch{}}t.exports=B(u);var o=t.exports.formatters;o.j=function(e){try{return JSON.stringify(e)}catch(n){return"[UnexpectedJSONParseError]: "+n.message}}})(y,y.exports);var D=S,m=y.exports("css-color-function:parse"),M=L;function L(t){typeof t!="string"&&(t=t.toString()),m("string %s",t);function u(e){var n=e.exec(t);if(!!n)return t=t.slice(n[0].length),n.slice(1)}function r(){u(/^\s+/)}function l(){var e=u(/^\)/);if(!!e)return m("rparen"),e}function v(){var e=u(/^([\+\-\*])/);if(!!e){var n={};return n.type="modifier",n.value=e[0],m("modifier %o",n),n}}function C(){var e=u(/^([^\)\s]+)/);if(!!e){var n={};return n.type="number",n.value=e[0],m("number %o",n),n}}function i(){for(var e=[],n;n=v()||o()||C();)e.push(n),r();return m("args %o",e),e}function a(){var e=u(/^(\w+)\(/);if(!!e){r();var n={};return n.type="function",n.name=e[0],n.arguments=i(),l(),m("adjuster %o",n),n}}function s(){var e={};e.type="color";var n=u(/([^\)\s]+)/)[0];if(n.indexOf("(")!=-1){var f=u(/([^\)]*?\))/)[0];n=n+f}return e.value=n,r(),e}function o(){if(!!t.match(/^color\(/)){var e=D("(",")",t);if(!e)throw new SyntaxError("Missing closing parenthese for '"+t+"'");if(e.body==="")throw new SyntaxError("color() function cannot be empty");t=e.body,r();var n={};n.type="function",n.name="color",n.arguments=[o()||s()],m("function arguments %o",n.arguments);for(var f;f=a();)n.arguments.push(f),r();return t=e.post,r(),m("function %o",n),n}}return o()}var O={};(function(t){var u=E;t.red=r("red"),t.blue=r("blue"),t.green=r("green"),t.alpha=t.a=r("alpha"),t.rgb=function(){},t.hue=t.h=l("hue"),t.saturation=t.s=l("saturation"),t.lightness=t.l=l("lightness"),t.whiteness=t.w=l("whiteness"),t.blackness=t.b=l("blackness"),t.blend=function(i,a){var s=i.alpha();i.alpha(1);var o=new u(a[0].value),e=1-parseInt(a[1].value,10)/100;i.mix(o,e).alpha(s)},t.tint=function(i,a){a.unshift({type:"argument",value:"white"}),t.blend(i,a)},t.shade=function(i,a){a.unshift({type:"argument",value:"black"}),t.blend(i,a)},t.contrast=function(i,a){a.length==0&&a.push({type:"argument",value:"100%"});var s=1-parseInt(a[0].value,10)/100,o=i.luminosity()<.5?new u({h:i.hue(),w:100,b:0}):new u({h:i.hue(),w:0,b:100}),e=o,n=4.5;if(i.contrast(o)>n){var e=C(n,i,o),f=e.alpha();e.alpha(1),e.mix(o,s).alpha(f)}i.hwb(e.hwb())};function r(i){return function(a,s){var o;s[0].type=="modifier"&&(o=s.shift().value);var e=s[0].value;e.indexOf("%")!=-1?(e=parseInt(e,10)/100,o?o!="*"&&(e=a[i]()*e):e=e*(i=="alpha"?1:255)):e=Number(e),a[i](v(a[i](),e,o))}}function l(i){return function(a,s){var o;s[0].type=="modifier"&&(o=s.shift().value);var e=parseFloat(s[0].value,10);a[i](v(a[i](),e,o))}}function v(i,a,s){switch(s){case"+":return i+a;case"-":return i-a;case"*":return i*a;default:return a}}function C(i,a,s){a.hue();for(var o=a.clone(),e=a.whiteness(),n=a.blackness(),f=s.whiteness(),c=s.blackness();Math.abs(e-f)>1||Math.abs(n-c)>1;){var d=Math.round((f+e)/2),h=Math.round((c+n)/2);o.whiteness(d),o.blackness(h),o.contrast(a)>i?(f=d,c=h):(e=d,n=h)}return o}})(O);var U=S,G=E,J=M,A=O,W=$;function $(t){var u=t.indexOf("color(");if(u==-1)return t;if(t=t.slice(u),t=U("(",")",t),!t)throw new SyntaxError("Missing closing parenthese for '"+t+"'");var r=J("color("+t.body+")");return w(r)+$(t.post)}function w(t){var u=new G(t.arguments[0].type=="function"?w(t.arguments[0]):t.arguments[0].value),r=t.arguments.slice(1);return r.forEach(function(l){var v=l.name;if(!A[v])throw new Error("Unknown <color-adjuster> '"+v+"'");l.arguments.forEach(function(C){C.type=="function"&&C.name=="color"&&(C.value=w(C),C.type="color",delete C.name)}),A[v](u,l.arguments)}),u.rgbString()}var Z=W,q=M;k.convert=Z;k.parse=q;export{k as l};
