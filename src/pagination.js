import { renderCard } from "./renderCard";

const paginationWrapper = document.querySelector(".pagination");
const paginationBtn = document.querySelector(".pagination__list-button");

let newsPerPage = 0;


export function renderPaginationBtn(total, activeIndex) {
 

        paginationWrapper.classList.remove("hidden");
        const numberArray = Array.from({ length: total}, (v, k) => k);
        console.log(numberArray);

        const markup = numberArray.map((item) => {
            return `<li class="pagination__item" data-id=${item}>
             <button class="pagination__button" type="button" data-id=${item}>${item + 1}</button></li>`
        }).join("");
       
        paginationBtn.innerHTML = markup;
  
   getActiveBtn(activeIndex);
}

export function getNewsByPage(perPage, activeIndex, news) {
    const start = perPage * activeIndex;
    const end = start + perPage;

    const renderObj = news.slice(start, end);
    renderCard(renderObj);

}

export  function getnewsPerPage() {
    if (window.matchMedia("(max-width: 767px)").matches) {
        
        newsPerPage = 4;
    
      } else if (window.matchMedia("(min-width: 1280px)").matches) {
       
        newsPerPage = 8;
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        newsPerPage = 7;
      }
    
      return newsPerPage;
}


export function getActiveBtn(index) {
  const allBtn = document.getElementsByClassName("pagination__button");
  console.log(allBtn.length)
 Array.from({ length: allBtn.length}, (v, k) => k).forEach((element) => {
    allBtn[element].classList.remove("current");
 });

 allBtn[index].classList.add("current");
  
}
