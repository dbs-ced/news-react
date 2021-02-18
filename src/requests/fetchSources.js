import axios from 'axios';

import { fetchSources } from '../redux/actions';

export default (country) => {
  return dispatch => {
    let url = `https://newsapi.org/v2/sources?country=${country}`;

    const config = {
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      //   'Content-Type': 'application/json',
      // }
    };

    axios.get(url, config)
      .then(response => {
        dispatch(fetchSources(response.data.sources));
      }).catch(error => {
        console.error(error)
      });
  }
}