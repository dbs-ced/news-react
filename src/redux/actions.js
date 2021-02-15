export const CLICK = 'CLICK';
export const FETCH_NEWS = 'FETCH_NEWS';

export const fetchNews = newsList => ({
  type: FETCH_NEWS,
  newsList
});