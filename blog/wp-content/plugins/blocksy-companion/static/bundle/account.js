!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=window.ctEvents},function(e,t){e.exports=window.ctFrontend},function(e,t,r){"use strict";r.r(t);var o=r(0),n=r.n(o),c=r(1),a=function(e,t){var r=t.screen,o=void 0===r?"login":r;e.querySelector(".ct-".concat(o,"-form"))||(o="login"),e.querySelector("ul")&&e.querySelector("ul .ct-".concat(o))&&(e.querySelector("ul .active").classList.remove("active"),e.querySelector("ul .ct-".concat(o)).classList.add("active")),e.querySelector('[class*="-form"].active').classList.remove("active"),e.querySelector(".ct-".concat(o,"-form")).classList.add("active"),e.querySelector(".ct-".concat(o,"-form form"))&&e.querySelector(".ct-".concat(o,"-form form")).reset(),e.querySelector(".ct-account-form").classList.remove("ct-error");var n=e.querySelector(".ct-".concat(o,"-form")).querySelector(".ct-message");n&&n.remove();var c=e.querySelector(".ct-".concat(o,"-form")).querySelector(".ct-errors");c&&c.remove()},i=function(e,t){var r=(new DOMParser).parseFromString(t,"text/html"),o=e.querySelector(".ct-errors");o&&o.remove(),e.closest(".ct-account-form").classList.remove("ct-error");var n=r.querySelector("#login_error");return n&&(e.insertAdjacentHTML("afterbegin",'<div class="ct-errors">'.concat(n.innerHTML,"</div>")),requestAnimationFrame((function(){e.closest(".ct-account-form").classList.add("ct-error")}))),{hasError:!!n,doc:r}},s=function(e,t){var r=(new DOMParser).parseFromString(t,"text/html"),o=e.querySelector(".ct-message");o&&o.remove();var n=e.querySelector(".ct-errors");n&&n.remove();var c=r.querySelector(".message");return e.closest(".ct-account-form").classList.remove("ct-error"),c&&e.insertAdjacentHTML("afterbegin",'<div class="ct-message">'.concat(c.innerHTML,"</div>")),{doc:r}};Object(c.registerDynamicChunk)("blocksy_account",{mount:function(e,t){var r=t.event;r.preventDefault(),function(e){var t="#account-modal";try{document.querySelector(t)}catch(e){return}document.querySelector(t)?e(document.querySelector(t)):fetch("".concat(ct_localizations.ajax_url,"?action=blc_retrieve_account_modal"),{method:"POST",body:JSON.stringify({current_url:location.href})}).then((function(e){return e.json()})).then((function(r){var o=r.data.html;document.querySelector(".ct-drawer-canvas").insertAdjacentHTML("beforeend",o),setTimeout((function(){e(document.querySelector(t))}))}))}((function(t){!function(e){if(e&&!e.hasListeners){e.hasListeners=!0,e.addEventListener("click",(function(t){t.target.href&&t.target.href.indexOf("lostpassword")>-1&&(a(e,{screen:"forgot-password"}),t.preventDefault()),t.target.href&&t.target.href.indexOf("wp-login")>-1&&-1===t.target.href.indexOf("lostpassword")&&(a(e,{screen:"login"}),t.preventDefault())}),!0);var t=e.querySelector('[name="loginform"]'),r=e.querySelector('[name="registerform"]'),o=e.querySelector('[name="lostpasswordform"]');t&&t.addEventListener("submit",(function(e){e.preventDefault(),window.ct_customizer_localizations||fetch(t.action,{method:t.method,body:new FormData(t)}).then((function(e){return e.text()})).then((function(e){var r=i(t.closest(".ct-login-form"),e);r.doc;r.hasError||(location=t.querySelector('[name="redirect_to"]').value)}))})),r&&r.addEventListener("submit",(function(e){e.preventDefault(),window.ct_customizer_localizations||fetch("".concat(ct_localizations.ajax_url,"?action=blc_implement_user_registration"),{method:r.method,body:new FormData(r)}).then((function(e){return e.text()})).then((function(e){var t=i(r.closest(".ct-register-form"),e);t.doc;t.hasError||s(r.closest(".ct-register-form"),e)}))})),o&&o.addEventListener("submit",(function(e){e.preventDefault(),window.ct_customizer_localizations||fetch(o.action,{method:o.method,body:new FormData(o)}).then((function(e){return e.text()})).then((function(e){var t=i(o.closest(".ct-forgot-password-form"),e);t.doc;t.hasError||s(o.closest(".ct-forgot-password-form"),e)}))})),["login","register","forgot-password"].map((function(t){Array.from(e.querySelectorAll(".ct-".concat(t))).map((function(r){r.addEventListener("click",(function(r){r.preventDefault(),a(e,{screen:t})}))}))}))}}(t),a(t,{screen:e.dataset.view||"login"}),n.a.trigger("ct:overlay:handle-click",{e:r,href:"#account-modal",options:{isModal:!0}})}))}})}]);