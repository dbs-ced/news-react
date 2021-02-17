import axios from 'axios';

import { fetchNews } from '../redux/actions';

export default (country, source) => {
  return dispatch => {
    let url = 'http://newsapi.org/v2/';
    switch (source) {
      case 'everything':
        url += 'everything';
        break;
      case 'search': 
      url += `everything?q=${this.props.query}`;
        break;
      default: case 'top-headlines': 
      url += 'top-headlines';
        break;
    }

    url += `?country=${country}`;

    axios.get(url)
      .then(response => {
        dispatch(fetchNews(response.data.articles));
      }).catch(error => {
        console.error(error)
      });
  }
}