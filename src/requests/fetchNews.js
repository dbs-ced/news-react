import axios from 'axios';

import { fetchNews } from '../redux/actions';

export default () => {
  return dispatch => {
    let url = `http://newsapi.org/v2/top-headlines?country=fr`;

    axios.get(url)
      .then(response => {
        dispatch(fetchNews(response.data.articles));
      }).catch(error => {
        console.error(error)
      });
  }
}