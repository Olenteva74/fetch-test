
import './css/input.css'
import "./search";
import lightFormat from 'date-fns/lightFormat';
import { getArticles} from './getArticles';
import { fetchNews } from './fetchNews';
import { load, save, remove } from './storage';
import { renderCard } from './renderCard';
import { normalizeObj } from './search';
import { renderPaginationBtn, getNewsByPage, getnewsPerPage} from './pagination';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

 
const NEWS_KEY = "newsObject";
const FAVORITE_KEY = "favoriteNews";
const READ_KEY = "readNews";
const DATE_KEY = "date";

let newsPerPage = 0;
let paginationIndex = 0;


const cardNews = document.querySelector(".card-news__list");
const searchInput = document.querySelector("#form-field");
const dateInput = document.querySelector("#datetime-picker");

const paginationBtn = document.querySelector(".pagination__list-button");
const paginationPrevBtn = document.querySelector("#prev");
const paginationNextBtn = document.querySelector("#next");
const arrayPaginationBtn = document.querySelectorAll(".pagination__item");

const options = {
 
 
  defaultDate:  new Date(),
  
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    save(DATE_KEY, selectedDates[0]);
  },
};

flatpickr(dateInput, options);
save(DATE_KEY, dateInput.value);

window.addEventListener('load', async (event) => {
  try {
    await fetchNews();
   updateNewsPage();
  } catch(error) {
    console.log(error.message);
  }
});

// updateNewsPage();
function updateNewsPage() {
  const parsedNews = load(NEWS_KEY);
   
  newsPerPage = getnewsPerPage();
  const totalCard = parsedNews.length;
  const totalPage = Math.ceil(totalCard / newsPerPage);
  // totalPage ? paginationWrapper.classList.remove("hidden") : paginationWrapper.classList.add("hidden")
  renderPaginationBtn(totalPage);
  getNewsByPage(newsPerPage, paginationIndex, parsedNews);
  

  paginationBtn.addEventListener("click", (event) => {
    paginationIndex = Number(event.target.dataset.id);
    getNewsByPage(newsPerPage, paginationIndex, parsedNews);
    const addActive = document.querySelector(`button [data-id="${paginationIndex}"]`);
    addActive.style.backgroundColor = "#4440F7";
    addActive.style.color = "#fff";

   });

   paginationPrevBtn.addEventListener("click", (event) => {
    if (paginationIndex === 0) {
      return;
    }
    paginationIndex -= 1;
    getNewsByPage(newsPerPage, paginationIndex, parsedNews);
   });

   paginationNextBtn.addEventListener("click", (event) => {
    if (paginationIndex === totalPage - 1) {
      return;
    }
    paginationIndex += 1;
    getNewsByPage(newsPerPage, paginationIndex, parsedNews);
   });
  
}





// window.addEventListener('load', async (event) => {

// try {
//   await fetchNews();
//    const parsedNews = load(NEWS_KEY);
   
//   newsPerPage = getnewsPerPage();
//   const totalCard = parsedNews.length;
//   const totalPage = Math.ceil(totalCard / newsPerPage);
//   getNewsByPage(newsPerPage, paginationIndex, parsedNews);
//   renderPaginationBtn(totalPage);

//    paginationBtn.addEventListener("click", (event) => {
//     paginationIndex = Number(event.target.dataset.id);
//     getNewsByPage(newsPerPage, paginationIndex, parsedNews);

//    })

//    paginationPrevBtn.addEventListener("click", (event) => {
//     if (paginationIndex === 0) {
//       return;
//     }
//     paginationIndex -= 1;
//     getNewsByPage(newsPerPage, paginationIndex, parsedNews);
//    })

//    paginationNextBtn.addEventListener("click", (event) => {
//     if (paginationIndex === totalPage - 1) {
//       return;
//     }
//     paginationIndex += 1;
//     getNewsByPage(newsPerPage, paginationIndex, parsedNews);
//    })

// } catch (error) {
//   console.log(error.message);
// }


// })


if (!load(FAVORITE_KEY)) {
  save(FAVORITE_KEY, []);
}
if (!load(READ_KEY)) {
  save(READ_KEY, []);
}


  

 cardNews.addEventListener("click", handleClickFavoriteBtn);
 cardNews.addEventListener("click", handleClickRead);

 function handleClickFavoriteBtn(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  const favoritNewsId = event.target.dataset.id;
  
  event.target.textContent = "Remove from favorite";
  


  
  const parsedNews = load(NEWS_KEY);
  const parsedeFavoriteNews = load(FAVORITE_KEY);

  const favoriteNews = parsedNews.find(option => option.id === favoritNewsId);
  parsedeFavoriteNews.push(favoriteNews);
  save(FAVORITE_KEY, parsedeFavoriteNews);

  
  // const newsAfterRemove = parsedNews.filter(value => value.id !== favoritNewsId);
  // renderCard(newsAfterRemove, "Add to favorite");
  // save(NEWS_KEY, newsAfterRemove);
  
 }


 function handleClickRead(event) {
  if (event.target.nodeName !== "A") {
    return;
  }
  const readCardUrl = event.target.dataset.url;
  const readEl = document.querySelector(`li[data-read="${readCardUrl}"]`);
  readEl.style.opacity="0.5";
  console.log(readEl);
 
 
  const parsedNews = load(NEWS_KEY);
  console.log(parsedNews)
  const parsedReadNews = load(READ_KEY);
  console.log(parsedReadNews)
  
  const readNews = parsedNews.find(option => option.url === readCardUrl);
  parsedReadNews.push(readNews);
  save(READ_KEY, parsedReadNews);
 }


//  const options = {
 
 
//   defaultDate: new Date(),
  
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };

// flatpickr(dateInput, options);
 
//  dateInput.addEventListener("change", handleChangeDate);
//  function handleChangeDate(event) {
//   console.log(event.target.value);
//    save(DATE_KEY, event.target.value);
//  }


 searchInput.addEventListener("change", async (event) => {
  event.preventDefault();
  console.log(event.currentTarget);
  const {
    elements: {search}
  } = event.currentTarget;
  console.log(search.value);
  // if (!load(DATE_KEY)) {
  //   return;
  // }
  // remove(NEWS_KEY);
  const date =  await load(DATE_KEY);
  await getArticles(event.target.value, lightFormat(new Date(date), 'yyyyMMdd'));
  updateNewsPage();
  // const parsedNews = await load(NEWS_KEY);
  // await renderCard(parsedNews, "Add to faforite");
  
 }
 )






// function handleInputSearch(event) {
//     getArticles(event.target.value).then(
//         ({data}) => console.log(data.response.docs)
//     );
  
// }
// const loadBtn = document.querySelector('[type="button"]');
// loadBtn.addEventListener("click", onClickLoadBtn);
// function onClickLoadBtn() {
//     getArticles();
// }
// const THEME_KEY = "theme";

// getTheme();

// document.querySelector(".themes").addEventListener("change", (event) => {
//     document.documentElement.classList.remove("dark", "light");
//     document.documentElement.classList.add(event.target.value);
//     localStorage.setItem(THEME_KEY, event.target.value);
// })

// function getTheme() {
//     const theme = localStorage.getItem(THEME_KEY);
//     if (theme) {
//         document.documentElement.classList.add(theme);
//     }
//     document.documentElement.classList.add("light");
// }

// const THEME_KEY = "theme";
// const themeToggle = document.querySelector('input[type="checkbox"]');
// getTheme();

// themeToggle.addEventListener('change', onThemeToggleClick);
// function onThemeToggleClick(e) {
//   if (e.target.checked) {
//     document.body.dataset.theme = 'dark';
//     localStorage.setItem(THEME_KEY, 'dark');
//   } else {
//     document.body.dataset.theme = 'light';
//     localStorage.removeItem(THEME_KEY, 'dark');
//     themeToggle.checked = false;
//   }
// }

// function getTheme() {
//     if (localStorage.getItem(THEME_KEY)) {
//         themeToggle.checked = true;
//         document.body.dataset.theme = 'dark';
//         return;
//     }
//     document.body.dataset.theme = 'light';
//     themeToggle.checked = false;
// }

const themeToggle = document.querySelector('input[type="checkbox"]');
themeToggle.addEventListener('change', onThemeToggleClick);
checkLocalStorage();
function onThemeToggleClick(e) {
  if (e.target.checked) {
    document.body.setAttribute('data-theme', 'dark');
    // document.querySelector('html').classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.setAttribute('data-theme', 'light');
    localStorage.removeItem('theme', 'dark');
  }
}
function checkLocalStorage() {
  try {
    if (
      localStorage.getItem('theme') !== null &&
      localStorage.getItem('theme') === 'dark'
    ) {
      themeToggle.checked = true;
      // document.querySelector('html').classList.add('dark');
      document.body.setAttribute('data-theme', 'dark');
    } else {
      themeToggle.checked = false;
      // document.querySelector('html').classList.remove('dark');
      document.body.setAttribute('data-theme', 'light');
    }
  } catch (error) {
    console.log(error);
  }
}