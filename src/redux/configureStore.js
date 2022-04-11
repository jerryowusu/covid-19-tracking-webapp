import { combinedReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './covidData';

const rootReducer = combinedReducers({
  reducer,
});

const store = createStore(
  rootReducer, applyMiddleware(thunk, logger),
);

export default store;
