import initialState from './initialState';
import { CLICK, FETCH_NEWS } from './actions';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        newsList: action.newsList
      }
    default:
      return state;
  }
};

export default reducer;