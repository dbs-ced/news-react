import axios from 'axios';

import { fetchSources } from '../redux/actions';

export default (country) => {
  return dispatch => {
    let url = `http://newsapi.org/v2/sources?country=${country}`;

    axios.get(url)
      .then(response => {
        dispatch(fetchSources(response.data.sources));
      }).catch(error => {
        console.error(error)
      });
  }
}