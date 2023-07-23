function syntaxHighlight(json) {
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
      var cls = 'number';
      if (/^"/.test(match)) {
          if (/:$/.test(match)) {
              cls = 'key';
          } else {
              cls = 'string';
          }
      } else if (/true|false/.test(match)) {
          cls = 'boolean';
      } else if (/null/.test(match)) {
          cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
  });
}



function searchWorldNews(){
  const search = window.wn_search.value;
  if(search === ''){
    alert("enter search request");
    return false;
  }
  fetch(`https://api.worldnewsapi.com/search-news?api-key=${WN_API_KEY}&text=${search}`)
    .then(resp => resp.json())
    .then(resp => {
      window.wn_result.innerHTML = syntaxHighlight(JSON.stringify(resp, undefined, 4));
    })
}

function detailWorldNews(){
  const url = 'https://worldnewsera.com/news/finance/stock-market/tesla-a-history-of-innovation-and-headaches/';
  fetch(`https://api.worldnewsapi.com/extract-news?api-key=${WN_API_KEY}&url=${url}`)
    .then(resp => resp.json())
    .then(resp => {
      window.wn_result.innerHTML = syntaxHighlight(JSON.stringify(resp, undefined, 4));
    })
}

function searchNewsCatcher(){
  const search = window.nc_search.value;
  if(search === ''){
    alert("enter search request");
    return false;
  }
  fetch(`https://api.newscatcherapi.com/v2/search?q=${search}&lang=en`, {
    method: 'GET',
    headers: {
      'X-API-KEY': NC_API_KEY,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then(resp => resp.json())
    .then(resp => {
      window.nc_result.innerHTML = syntaxHighlight(JSON.stringify(resp, undefined, 4));
    })
}

function searchMediaSteck(){
  const search = window.ms_search.value;
  if(search === ''){
    alert("enter search request");
    return false;
  }
  fetch(`https://api.mediastack.com/v1/news?access_key=${MS_API_KEY}&keywords=${search}&languages=en`)
    .then(resp => resp.json())
    .then(resp => {
      window.ms_result.innerHTML = syntaxHighlight(JSON.stringify(resp, undefined, 4));
    })
}

function searchNewsData(){
  const search = window.nd_search.value;
  if(search === ''){
    alert("enter search request");
    return false;
  }
  fetch(`https://newsdata.io/api/1/news?apikey=${ND_API_KEY}&q=${search}&language=en`)
    .then(resp => resp.json())
    .then(resp => {
      window.nd_result.innerHTML = syntaxHighlight(JSON.stringify(resp, undefined, 4));
    })
}

function searchNewsAPI(){
  const search = window.napi_search.value;
  if(search === ''){
    alert("enter search request");
    return false;
  }
  fetch(`https://newsapi.org/v2/everything?q=${search}&from=2023-06-23&sortBy=publishedAt&apiKey=${NEWSAPI_KEY}`)
    .then(resp => resp.json())
    .then(resp => {
      window.napi_result.innerHTML = syntaxHighlight(JSON.stringify(resp, undefined, 4));
    })
}

function searchCurrentsAPI(){
  const search = window.curr_search.value;
  if(search === ''){
    alert("enter search request");
    return false;
  }
  fetch(`https://api.currentsapi.services/v1/search?apiKey=${CURRENTS_KEY}&language=us&keywords=${search}&type=1&page_size=10&limit=10`)
    .then(resp => resp.json())
    .then(resp => {
      window.curr_result.innerHTML = syntaxHighlight(JSON.stringify(resp, undefined, 4));
    })
}

function searchGNews(){
  const search = window.gn_search.value;
  if(search === ''){
    alert("enter search request");
    return false;
  }
  fetch(`https://gnews.io/api/v4/search?q=${search}&apikey=${GNEWS_KEY}&lang=en`)
    .then(resp => resp.json())
    .then(resp => {
      window.gn_result.innerHTML = syntaxHighlight(JSON.stringify(resp, undefined, 4));
    })
}

function searchMarketAux(){
  const search = window.ma_search.value;
  if(search === ''){
    alert("enter search request");
    return false;
  }
  fetch(`https://api.marketaux.com/v1/news/all?search=${search}&api_token=${MARKET_KEY}&language=en&limit=10`)
    .then(resp => resp.json())
    .then(resp => {
      window.ma_result.innerHTML = syntaxHighlight(JSON.stringify(resp, undefined, 4));
    })
}

function searchMarketAuxDetail(){
  const uuid = '180cbb2d-9f78-4db7-a412-c63302a1fd7a';
  fetch(`https://api.marketaux.com/v1/news/uuid/${uuid}?api_token=${MARKET_KEY}`)
    .then(resp => resp.json())
    .then(resp => {
      window.ma_result.innerHTML = syntaxHighlight(JSON.stringify(resp, undefined, 4));
    })
}

function searchGuardian(){
  const search = window.tg_search.value;
  if(search === ''){
    alert("enter search request");
    return false;
  }
  fetch(`https://content.guardianapis.com/search?q=${search}&api-key=${GUARDIAN_KEY}`)
    .then(resp => resp.json())
    .then(resp => {
      window.tg_result.innerHTML = syntaxHighlight(JSON.stringify(resp, undefined, 4));
    })
}

function searchGuardianDetail(){
  const id = 'technology/2023/jul/19/tesla-q2-2023-earnings-production-report-elon-musk';
  fetch(`https://content.guardianapis.com/${id}?api-key=${GUARDIAN_KEY}`)
    .then(resp => resp.json())
    .then(resp => {
      window.tg_result.innerHTML = syntaxHighlight(JSON.stringify(resp, undefined, 4));
    })
}

function searchTheNews(){
  const search = window.tn_search.value;
  if(search === ''){
    alert("enter search request");
    return false;
  }
  fetch(`https://api.thenewsapi.com/v1/news/top?search=${search}&api_token=${THE_NEWS_KEY}&language=en&limit=10`)
    .then(resp => resp.json())
    .then(resp => {
      window.tn_result.innerHTML = syntaxHighlight(JSON.stringify(resp, undefined, 4));
    })
}

function searchTheNewsDetail(){
  const uuid = '0f730908-eb1c-4ac9-98ba-2fa6bbc2e33a';
  fetch(`https://api.thenewsapi.com/v1/news/uuid/${uuid}?api_token=${THE_NEWS_KEY}`)
    .then(resp => resp.json())
    .then(resp => {
      window.tn_result.innerHTML = syntaxHighlight(JSON.stringify(resp, undefined, 4));
    })
}