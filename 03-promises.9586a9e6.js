var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var l={id:e,exports:{}};return n[e]=l,o.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var l=o("iQIUW");const i=document.querySelector(".form");let r=null,s=null,u=null;function a(e,n){return new Promise(((t,o)=>{const l=Math.random()>.3;setTimeout((()=>{l?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}i.addEventListener("submit",(function(e){e.preventDefault();const n=e.target;r=n.elements.delay.value,s=n.elements.step.value,u=n.elements.amount.value;let t=Number(r);console.log("CLICK handleSubmit");for(let e=1;e<=u;e+=1){a(e,t).then((({position:e,delay:n})=>{l.Notify.success(`✅ Fulfilled promise '${e}' in - ${n}ms`)})).catch((({position:e,delay:n})=>l.Notify.failure(`❌ Rejected promise '${e}' in - ${n}ms`))),t+=Number(s)}}));
//# sourceMappingURL=03-promises.9586a9e6.js.map
