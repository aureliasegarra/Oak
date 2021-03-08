/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';

import authMiddleware from 'src/middlewares/auth';
import rootReducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    authMiddleware,
  ),
);

const store = createStore(rootReducer, enhancers);

export default store;
