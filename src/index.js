
import './css/input.css'
import lightFormat from 'date-fns/lightFormat';
// import { getArticles} from './getArticles';
import { fetchNews } from './fetchNews';
import { load, save } from './storage';
import { renderCard } from './renderCard';

 
const NEWS_KEY = "newsObject";
const FAVORITE_KEY = "favoriteNews";
const READ_KEY = "readNews";

const cardNews = document.querySelector(".card-news__list");

fetchNews();


if (!load(FAVORITE_KEY)) {
  save(FAVORITE_KEY, []);
}
if (!load(READ_KEY)) {
  save(READ_KEY, []);
}

const parsedNews = load(NEWS_KEY);
renderCard(parsedNews, "Add to favorite");
  

 cardNews.addEventListener("click", handleClickFavoriteBtn);
 cardNews.addEventListener("click", handleClickRead);

 function handleClickFavoriteBtn(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  const favoritNewsId = event.target.dataset.id;
  
  const parsedNews = load(NEWS_KEY);
  const parsedeFavoriteNews = load(FAVORITE_KEY);

  const favoriteNews = parsedNews.find(option => option.id === favoritNewsId);
  parsedeFavoriteNews.push(favoriteNews);
  save(FAVORITE_KEY, parsedeFavoriteNews);

  
  const newsAfterRemove = parsedNews.filter(value => value.id !== favoritNewsId);
  renderCard(newsAfterRemove, "Add to favorite");
  save(NEWS_KEY, newsAfterRemove);
  
 }


 function handleClickRead(event) {
  if (event.target.nodeName !== "A") {
    return;
  }
  console.log(event.target);
  const readCardUrl = event.target.dataset.url;
 
  const parsedNews = load(NEWS_KEY);
  console.log(parsedNews)
  const parsedReadNews = load(READ_KEY);
  console.log(parsedReadNews)
  
  const readNews = parsedNews.find(option => option.url === readCardUrl);
  parsedReadNews.push(readNews);
  save(READ_KEY, parsedReadNews);
 }






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