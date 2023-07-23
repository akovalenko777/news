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
      console.log(resp);
    })
}

function detailWorldNews(){
  const url = 'https://worldnewsera.com/news/finance/stock-market/tesla-a-history-of-innovation-and-headaches/';
  fetch(`https://api.worldnewsapi.com/extract-news?api-key=${WN_API_KEY}&url=${url}`)
    .then(resp => resp.json())
    .then(resp => {
      window.wn_result.innerHTML = syntaxHighlight(JSON.stringify(resp, undefined, 4));
      console.log(resp);
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
      console.log(resp);
    })
}