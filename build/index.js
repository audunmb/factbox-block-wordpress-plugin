(()=>{"use strict";var e,t={250:()=>{const e=window.wp.blocks,t=window.React,o=(window.wp.i18n,window.wp.blockEditor),r=JSON.parse('{"u2":"create-block/factbox"}');(0,e.registerBlockType)(r.u2,{edit:()=>{const e=(0,o.useBlockProps)(),r=(0,t.createElement)("svg",{viewBox:"-40 -40 180 180"},(0,t.createElement)("path",{d:"M100 19.8L50 86.4 0 19.8"}));return(0,t.createElement)("aside",{...e},(0,t.createElement)("div",{class:"fact-body"},(0,t.createElement)(o.InnerBlocks,null)),(0,t.createElement)("button",{onclick:"this.previousElementSibling.classList.toggle('expanded');this.classList.toggle('expanded')",class:"fact-expand"}," ",r," "))},save:()=>{const e=o.useBlockProps.save(),r=(0,t.createElement)("svg",{viewBox:"-40 -40 180 180"},(0,t.createElement)("path",{d:"M100 19.8L50 86.4 0 19.8"}));return(0,t.createElement)("aside",{...e},(0,t.createElement)("div",{class:"fact-body"},(0,t.createElement)(o.InnerBlocks.Content,null)),(0,t.createElement)("button",{onclick:"this.previousElementSibling.classList.toggle('expanded');this.classList.toggle('expanded')",class:"fact-expand"}," ",r," "))},transforms:{from:[{type:"block",blocks:["core/group"],transform:(t,o)=>(0,e.createBlock)("create-block/factbox",t,o)}],to:[{type:"block",blocks:["core/group"],transform:(t,o)=>(0,e.createBlock)("core/group",t,o)}]}})}},o={};function r(e){var a=o[e];if(void 0!==a)return a.exports;var c=o[e]={exports:{}};return t[e](c,c.exports,r),c.exports}r.m=t,e=[],r.O=(t,o,a,c)=>{if(!o){var n=1/0;for(p=0;p<e.length;p++){for(var[o,a,c]=e[p],l=!0,s=0;s<o.length;s++)(!1&c||n>=c)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(l=!1,c<n&&(n=c));if(l){e.splice(p--,1);var i=a();void 0!==i&&(t=i)}}return t}c=c||0;for(var p=e.length;p>0&&e[p-1][2]>c;p--)e[p]=e[p-1];e[p]=[o,a,c]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var a,c,[n,l,s]=o,i=0;if(n.some((t=>0!==e[t]))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(s)var p=s(r)}for(t&&t(o);i<n.length;i++)c=n[i],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(p)},o=globalThis.webpackChunkfactbox=globalThis.webpackChunkfactbox||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var a=r.O(void 0,[431],(()=>r(250)));a=r.O(a)})();