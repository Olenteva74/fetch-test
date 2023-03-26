import lightFormat from 'date-fns/lightFormat';

const articleList = document.querySelector(".card-news__list");
 export function renderCard(news, textcardBtn) {
    const markup = news.map(({id, title, paragraph, img, data, url, category, multimedia}) => {

          return `<li class="card-news__item">
          <div class="card-news__ovarlay">
          <picture>
         
          <img
          src=${img}
          alt= "news image"
          width="395"
          height="290"
        />
        </picture>
        <p class="card-news__category">${category}</p>
        <button data-id=${id} class="card-news__button" type="button">
        ${textcardBtn}
        <svg class="card-news__icon" width="16" height="16">
          <use href="./svg/symbol-defs.svg#icon-heart-not-action"></use>
        </svg>
      </button>
    </div>
    <h2 class="card-news__title">
         ${title}
        </h2>
        <p class="card-news__text">
          ${paragraph}
        </p>
        <time class="card-news__time">${lightFormat(new Date(data
            ), 'dd/MM/yyyy')}</time>
        <a data-url=${url} class="card-news__element" href=${url} target="_blank" rel="noreferrer noopener">Read more</a>
      </li>`  
    }).join("");
    articleList.innerHTML = markup;
    console.log(news)
} 


// function getImg(images) {
//   const markup = images.map(({height, width, url, caption, type}) => {
//     return `<source
//       srcset=${url}
//       type=${type}
//       width=${width}
//       height=${height}
//       alt=${caption}

//     />`
//   }).join("");
//   return markup;
// }

function getImg(images) {
  const markup = images.map(({height, width, url, caption, type}) => {
    return `<source
      srcset=${url}
      type=${type}
      width=${width}
      height=${height}
      alt=${caption}

    />`
  }).join("");
  return markup;
}

export function cleanCard() {
  articleList.innerHTML = '';
}