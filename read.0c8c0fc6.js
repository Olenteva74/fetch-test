!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequireb426;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequireb426=a);var r=a("ddpnB"),i=a("2XKMM"),s=a("fnuNu");function c(e,t){(0,s.default)(2,arguments);var n=(0,i.default)(e),a=(0,i.default)(t),r=n.getTime()-a.getTime();return r>0?-1:r<0?1:r}i=a("2XKMM"),s=a("fnuNu");function o(e,t){var n;(0,s.default)(1,arguments);var a=e||{},r=(0,i.default)(a.start),c=(0,i.default)(a.end),o=c.getTime();if(!(r.getTime()<=o))throw new RangeError("Invalid interval");var d=[],l=r;l.setHours(0,0,0,0);var u=Number(null!==(n=null==t?void 0:t.step)&&void 0!==n?n:1);if(u<1||isNaN(u))throw new RangeError("`options.step` must be a number greater than 1");for(;l.getTime()<=o;)d.push((0,i.default)(l)),l.setDate(l.getDate()+u),l.setHours(0,0,0,0);return d}i=a("2XKMM"),s=a("fnuNu");function d(e){(0,s.default)(1,arguments);var t=(0,i.default)(e);return t.setHours(0,0,0,0),t}s=a("fnuNu");function l(e,t){(0,s.default)(2,arguments);var n=d(e),a=d(t);return n.getTime()===a.getTime()}var u=a("2uy17"),f="readNews",v="favoriteNews",g=document.querySelector(".date__wrapper");function m(){if((0,u.load)(f).length){var e=(0,u.load)(f).filter((function(e){return e})),t=function(e){var t=e.map((function(e){return new Date(e.data)}));console.log(t);var n=t.sort(c);return o({start:new Date(n[n.length-1]),end:new Date(n[0])}).sort(c)}(e);console.log(t),function(e){var t=Object.keys(e).map((function(t,n){return'  <li class="date__item" data-index='.concat(n,'>\n        <div class="date__card"><h3 class="date__text">').concat((0,r.default)(new Date(t),"dd/MM/yyyy"),'</h3></div>\n      </li><ul class="card-news__box">').concat(e[t].map((function(e){var t=e.id,n=e.title,a=e.paragraph,i=e.img,s=e.data,c=e.url,o=e.category;return e.multimedia,'<li class="card-news__item read">\n        <div class="card-news__ovarlay">\n        <picture>\n         \n          <img\n          src='.concat(i,'\n          alt= "news image"\n          width="395"\n          height="290"\n        />\n        </picture>\n      <p class="card-news__category">').concat(o,"</p>\n      <button data-id=").concat(t,' class="card-news__button" type="button">\n      Add to favirite\n      <svg class="card-news__icon" width="16" height="16">\n        <use href="./svg/symbol-defs.svg#icon-heart-not-action"></use>\n      </svg>\n    </button>\n  </div>\n  <h2 class="card-news__title">\n       ').concat(n,'\n      </h2>\n      <p class="card-news__text">\n        ').concat(a,'\n      </p>\n      <time class="card-news__time">').concat((0,r.default)(new Date(s),"dd/MM/yyyy"),"</time>\n      <a data-url=").concat(c,' class="card-news__element" href=').concat(c,' target="_blank" rel="noreferrer noopener">Read more</a>\n    </li>')})).join(""),"</ul>")})).join("");g.innerHTML=t}(t.reduce((function(t,n){return t[n]=e.filter((function(e){return l(new Date(n),new Date(e.data))})),t}),{}))}}m(),g.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;var t=e.target.dataset.id,n=(0,u.load)(f),a=(0,u.load)(v),r=n.find((function(e){return e.id===t}));a.push(r),(0,u.save)(v,a);var i=n.filter((function(e){return e.id!==t}));(0,u.save)(f,i),m()})),g.addEventListener("click",(function(e){if(e.target.classList.contains("date__item")){var t=e.target.dataset.index;e.target.classList.contains("active")?e.target.classList.remove("active"):e.target.classList.add("active");var n=document.getElementsByClassName("date__item")[t].nextElementSibling;n.classList.contains("active")?n.classList.remove("active"):n.classList.add("active")}}))}();
//# sourceMappingURL=read.0c8c0fc6.js.map
