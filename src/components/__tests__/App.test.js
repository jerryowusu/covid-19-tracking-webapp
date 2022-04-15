import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import App from '../../App';
import covidReducer from '../../redux/covidData';

const reducer = combineReducers({
  covidReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

describe('Render App', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
