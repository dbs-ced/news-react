export const SELECT_COUNTRY = 'SELECT_COUNTRY';
export const FETCH_NEWS = 'FETCH_NEWS';

export const fetchNews = newsList => ({
  type: FETCH_NEWS,
  newsList
});