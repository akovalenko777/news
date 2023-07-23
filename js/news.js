import {WN_API_KEY} from './keys.js';

function searchWorldNews(){
  const search = window.wn_search.value;
  if(search === ''){
    alert("enter search request");
    return false;
  }
  fetch(`https://api.worldnewsapi.com/search-news?api-key=${WN_API_KEY}&text=${search}`)
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp);
    })
}