import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import covidReducer from './covidData';

const reducer = combineReducers({
  covidReducer,
});

const store = createStore(
  reducer,
  (applyMiddleware(logger, thunk)),
);

export default store;
