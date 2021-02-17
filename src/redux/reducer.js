import initialState from './initialState';
import { SELECT_COUNTRY, FETCH_NEWS, FETCH_SOURCES, SEARCH } from './actions';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        newsList: action.newsList
      }
    case SELECT_COUNTRY:
      return {
        ...state,
        currentCountry: action.currentCountry
      }
    case FETCH_SOURCES:
      return {
        ...state,
        sources: action.sources
      }
    case SEARCH:
      return {
        ...state,
        searchQuery: action.searchQuery
      }
    default:
      return state;
  }
};

export default reducer;