import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import initialState from './initialState';
import reducer from './reducer';

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;