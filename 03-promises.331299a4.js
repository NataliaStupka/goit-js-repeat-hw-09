!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var c={id:e,exports:{}};return o[e]=c,t.call(c.exports,c,c.exports),c.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var c=t("h6c0i"),l=document.querySelector(".form"),i=null,r=null,a=null,s=null;l.addEventListener("submit",(function(e){e.preventDefault();var o=e.target;i=o.elements.delay.value,r=o.elements.step.value,a=o.elements.amount.value;var n=Number(i);setTimeout((function(){var e=setInterval((function(){if((s+=1)>a)return clearInterval(e),c.Notify.warning("Припиняємо інтервал"),s=0,void console.log("ОБНУЛЯЄМО count");var o,t;console.log("Викликаємо функцію createPromise: '".concat(s,"'")),o=s,t=n,Math.random()>.3?(c.Notify.success("✅ Fulfilled promise ".concat(o," in  ").concat(t,"ms")),console.log("✅ Fulfilled promise '".concat(o,"' in - ").concat(t,"ms"))):(c.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms")),console.log("❌ Rejected promise '".concat(o,"' in - ").concat(t,"ms"))),n+=Number(r)}),n)}),i)})),new Promise((function(e,o){var n=Math.random()>.3;setTimeout((function(){console.log("ТУТ ПРОМІС"),n?e("Success!"):o("Error!")}),5e3)})).then((function(e){var o=e.position,n=e.delay;console.log("✅ '2'Fulfilled promise '".concat(o,"' in '").concat(n,"'ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ '2'Rejected promise ".concat(o," in ").concat(n,"ms"))}))}();
//# sourceMappingURL=03-promises.331299a4.js.map
