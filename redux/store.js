import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './reducers/rootReducer';

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = (preloadedState = {}) =>
  // createStore(RootReducer, preloadedState, composeEnhancer());
  createStore(RootReducer, preloadedState);

export default store;