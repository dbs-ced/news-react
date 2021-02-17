import axios from 'axios';

import { fetchNews } from '../redux/actions';

export default (country, source, searchQuery = null) => {
  return dispatch => {
    let url = 'http://newsapi.org/v2/';
    switch (source) {
      case 'everything':
        url += 'everything';
        break;
      case 'search': 
        url += `everything?q=${searchQuery}`;
        break;
      default: case 'top-headlines': 
      url += 'top-headlines';
        break;
    }

    if (source !== 'search') {
      url += (url.indexOf('?') >= 0 ? '&' : '?') + `country=${country}`;
    }

    axios.get(url)
      .then(response => {
        dispatch(fetchNews(response.data.articles));
      }).catch(error => {
        console.error(error)
      });
  }
}