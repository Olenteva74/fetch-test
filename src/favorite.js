import './css/input.css'
import { renderCard } from "./renderCard";
import { save, load } from "./storage";

const FAVORITE_KEY = "favoriteNews";
const READ_KEY = "readNews";

if (load(FAVORITE_KEY)) {
    const favoriteNews = load(FAVORITE_KEY);
    renderCard(favoriteNews, "Remove from favorite");
}


const cardNews = document.querySelector(".card-news__list");
cardNews.addEventListener("click", handleClickFavoriteBtn);

function handleClickFavoriteBtn(event) {
    if (event.target.nodeName !== "BUTTON") {
        return;
      }

 const favoritNewsId = event.target.dataset.id;
 const parsedeFavoriteNews = load(FAVORITE_KEY);
 const newsAfterRemove = parsedeFavoriteNews.filter(value => value.id !== favoritNewsId);
 renderCard(newsAfterRemove, "Remove from favorite");
 save(FAVORITE_KEY, newsAfterRemove);
 
}
cardNews.addEventListener("click", handleClickRead);
function handleClickRead(event) {
    if (event.target.nodeName !== "A") {
      return;
    }
    const readCardUrl = event.target.dataset.url;
   
    const parsedNews = load(FAVORITE_KEY);
    const parsedReadNews = load(READ_KEY);
    
    const readNews = parsedNews.find(option => option.url === readCardUrl);
    parsedReadNews.push(readNews);
    save(READ_KEY, parsedReadNews);
   }