/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';

import search from 'src/middlewares/search';
import userProfile from 'src/middlewares/userProfile';

import authMiddleware from 'src/middlewares/auth';
import rootReducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    userProfile,
    search,
    authMiddleware,
  ),
);

const store = createStore(rootReducer, enhancers);

export default store;
