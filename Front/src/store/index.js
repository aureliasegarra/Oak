/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';

import exampleMiddleware from 'src/middlewares/example';
import rootReducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    exampleMiddleware,
  ),
);

const store = createStore(rootReducer, enhancers);

export default store;
