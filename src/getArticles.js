import axios from 'axios';
import lightFormat from 'date-fns/lightFormat';

const API_KEY = "504jAhPgfYceC8nkznkR3u0PcVOkTNsF";
const API_KEY_NEWS = "gLbj8EoYwaKTA6NLapVd3srb4LTB589B"
// axios.defaults.baseURL = 'https://api.nytimes.com/svc/search/v2'; 



// const URL = "https://api.nytimes.com/svc/news/v3/content.json"
// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
// https://api.nytimes.com/svc/news/v3/content/section-list.json

// https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=eQ8t8FWqeAGnKDTtIFrHmgZCflFrUTcV

// export async function getNews() {
//   try {
//     const response = await axios.get("https://api.nytimes.com/svc/news/v3/content/all/all.json", {
//       params: {
//         "api-key": API_KEY_NEWS,
//       }
//     });
//     console.log(response.data.results);
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function getArticles(query) {
    try {
      const response = await axios.get('/articlesearch.json',{
        params: {
            fq: query,
            page: 0,
            // begin_date: 20230317,
            // sort: "newest",
            "api-key": API_KEY,
            
          }
      });
      console.log(response.data);
      // const {docs} = response.data.response;
      // renderArticle(docs);
      // return response;
    } catch (error) {
      console.error(error);
    }
  }
const articleList = document.querySelector(".article-list");
function renderArticle(articles) {
    const markup = articles.map(
        ({abstract, headline, lead_paragraph, pub_date, snippet, web_url, multimedia
        }) => {
        return `<h2>${headline.main}</h2>
        <img src= 
        "images/2023/03/19/pageoneplus/19a3_InTimesPast/19a3_InTimesPast-articleLarge.jpg">
        <p>${lead_paragraph}</p>
        <p>${abstract}</p>
        <p>${snippet}</p>
        <a href=${web_url}>Read more...</a>
        <span>${lightFormat(new Date(pub_date), 'dd/MM/yyyy')}</span>`
    }).join("");
    articleList.innerHTML = markup;
} 



// multimedia[0].legacy.url
// <img src=${multimedia[0].url}/>
// Timestamp (YYYY-MM-DD)
// <p>${multimedia[0].url}</p>
//  
// "https://www.nytimes.com/2023/03/17/world/europe/icc-us-relations.html"

// "images/2023/03/17/multimedia/17ukraine-briefing-ICC-history-01-jkvt/17ukraine-briefing-ICC-history-01-jkvt-articleLarge.jpg"
// https://www.nytimes.com/2023/03/18/opinion/letters/college-conservatives.html

// : 
// "https://www.nytimes.com/2023/03/17/world/europe/icc-us-relations.html"
// lightFormat(new Date(2014, 1, 11), 'yyyy-MM-dd')

// export async function getNews() {
//     try {
//       const response = await axios.get('https://api.nytimes.com/svc/news/v3/content/nyt/business.json?',{
//         params: {
//             // q: query,
//             // page: 1,
//             // begin_date: 20230317,
//             // sort: "newest",
//             "api-key": API_KEY,
            
//           }
//       });
//       console.log(response);
      
      
//       return response;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   /content/{source}/{section}.json