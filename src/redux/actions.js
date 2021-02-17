export const SELECT_COUNTRY = 'SELECT_COUNTRY';
export const FETCH_NEWS = 'FETCH_NEWS';
export const FETCH_SOURCES = 'FETCH_SOURCES';
export const SEARCH = 'SEARCH';

export const fetchNews = newsList => ({
  type: FETCH_NEWS,
  newsList
});

export const fetchSources = sources => ({
  type: FETCH_SOURCES,
  sources
});

export const changeSearchQuery = searchQuery => ({
  type: SEARCH,
  searchQuery
});