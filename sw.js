if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const l=e=>i(e,r),d={module:{uri:r},exports:o,require:l};s[r]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(t(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-ATtw2SsB.js",revision:null},{url:"assets/index-BaiMXBtA.css",revision:null},{url:"index.html",revision:"9f7ffd61a1ec9721047174ca3ae713bd"},{url:"registerSW.js",revision:"eabf7dfd019d5174a5e29012c36ebf47"},{url:"manifest.webmanifest",revision:"1b7349d15c681eafaa32c6ce00498751"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
