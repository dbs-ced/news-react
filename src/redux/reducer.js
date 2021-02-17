import initialState from './initialState';
import { SELECT_COUNTRY, FETCH_NEWS } from './actions';

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
    default:
      return state;
  }
};

export default reducer;