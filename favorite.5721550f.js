!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=e.parcelRequireb426;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var a=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,a.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequireb426=a);var r=a("ddpnB"),o=document.querySelector(".card-news__list");function c(e,n){var t=e.map((function(e){var t=e.id,a=e.title,o=e.paragraph,c=(e.img,e.data),i=e.url,d=e.category,s=e.multimedia;return'<li class="card-news__item">\n          <div class="card-news__ovarlay">\n          <picture>\n         \n          <img\n          src='.concat(s?s[1].url:"","\n          alt=").concat(s?s[1].caption:"news image",'\n          width="395"\n          height="290"\n        />\n        </picture>\n        <p class="card-news__category">').concat(d,"</p>\n        <button data-id=").concat(t,' class="card-news__button" type="button">\n        ').concat(n,'\n        <svg class="card-news__icon" width="16" height="16">\n          <use href="./svg/symbol-defs.svg#icon-heart-not-action"></use>\n        </svg>\n      </button>\n    </div>\n    <h2 class="card-news__title">\n         ').concat(a,'\n        </h2>\n        <p class="card-news__text">\n          ').concat(o,'\n        </p>\n        <time class="card-news__time">').concat((0,r.default)(new Date(c),"dd/MM/yyyy"),"</time>\n        <a data-url=").concat(i,' class="card-news__element" href=').concat(i,' target="_blank" rel="noreferrer noopener">Read more</a>\n      </li>')})).join("");o.innerHTML=t,console.log(e)}var i=a("2uy17"),d="favoriteNews",s="readNews";(0,i.load)(d)&&c((0,i.load)(d),"Remove from favorite");var l=document.querySelector(".card-news__list");l.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;var n=e.target.dataset.id,t=(0,i.load)(d).filter((function(e){return e.id!==n}));c(t,"Remove from favorite"),(0,i.save)(d,t)})),l.addEventListener("click",(function(e){if("A"!==e.target.nodeName)return;var n=e.target.dataset.url,t=(0,i.load)(d),a=(0,i.load)(s),r=t.find((function(e){return e.url===n}));a.push(r),(0,i.save)(s,a)}))}();
//# sourceMappingURL=favorite.5721550f.js.map
