(()=>{"use strict";var e,v={},m={};function r(e){var o=m[e];if(void 0!==o)return o.exports;var t=m[e]={exports:{}};return v[e](t,t.exports,r),t.exports}r.m=v,e=[],r.O=(o,t,f,i)=>{if(!t){var a=1/0;for(n=0;n<e.length;n++){for(var[t,f,i]=e[n],c=!0,u=0;u<t.length;u++)(!1&i||a>=i)&&Object.keys(r.O).every(b=>r.O[b](t[u]))?t.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(n--,1);var l=f();void 0!==l&&(o=l)}}return o}i=i||0;for(var n=e.length;n>0&&e[n-1][2]>i;n--)e[n]=e[n-1];e[n]=[t,f,i]},r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((o,t)=>(r.f[t](e,o),o),[])),r.u=e=>e+"."+{285:"3030bcfa3db1c628",503:"d678c04f95777f9d",605:"611ab14c8fb87174",899:"36b47b008658ee6b"}[e]+".js",r.miniCssF=e=>{},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={},o="scaffold-app:";r.l=(t,f,i,n)=>{if(e[t])e[t].push(f);else{var a,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==o+i){a=d;break}}a||(c=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",o+i),a.src=r.tu(t)),e[t]=[f];var s=(g,b)=>{a.onerror=a.onload=null,clearTimeout(p);var _=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),_&&_.forEach(h=>h(b)),g)return g(b)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),c&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:o=>o},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={121:0};r.f.j=(f,i)=>{var n=r.o(e,f)?e[f]:void 0;if(0!==n)if(n)i.push(n[2]);else if(121!=f){var a=new Promise((d,s)=>n=e[f]=[d,s]);i.push(n[2]=a);var c=r.p+r.u(f),u=new Error;r.l(c,d=>{if(r.o(e,f)&&(0!==(n=e[f])&&(e[f]=void 0),n)){var s=d&&("load"===d.type?"missing":d.type),p=d&&d.target&&d.target.src;u.message="Loading chunk "+f+" failed.\n("+s+": "+p+")",u.name="ChunkLoadError",u.type=s,u.request=p,n[1](u)}},"chunk-"+f,f)}else e[f]=0},r.O.j=f=>0===e[f];var o=(f,i)=>{var u,l,[n,a,c]=i,d=0;if(n.some(p=>0!==e[p])){for(u in a)r.o(a,u)&&(r.m[u]=a[u]);if(c)var s=c(r)}for(f&&f(i);d<n.length;d++)r.o(e,l=n[d])&&e[l]&&e[l][0](),e[l]=0;return r.O(s)},t=self.webpackChunkscaffold_app=self.webpackChunkscaffold_app||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})()})();