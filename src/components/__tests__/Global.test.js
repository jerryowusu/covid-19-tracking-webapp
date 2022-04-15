import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';
import Global from '../Global';
import covidReducer from '../../redux/covidData';

const mockCovidData = [
  {
    country_flag: 'flag-1',
    country: 'country 1',
    population: '121321',
    total_cases: '45',
    total_recovered: '1',
    total_active: '54',
    total_deaths: '5',
  },
  {
    country_flag: 'flag-1',
    country: 'country 1',
    population: '121321',
    total_cases: '45',
    total_recovered: '1',
    total_active: '54',
    total_deaths: '5',
  },
  {
    country_flag: 'flag-1',
    country: 'country 1',
    population: '121321',
    total_cases: '45',
    total_recovered: '1',
    total_active: '54',
    total_deaths: '5',
  },
];

const rootReducer = combineReducers({
  covidReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

describe('Global component tests:', () => {
  it('Global component renders correctly', () => {
    const globalPage = renderer.create(
      <Provider store={store}>
        <Global country={mockCovidData} />
      </Provider>,
    ).toJSON();
    expect(globalPage).toMatchSnapshot();
  });

  it('Number of countries displayed should be none', () => {
    const { container } = render(
      <Provider store={store}>
        <Global country={mockCovidData} />
      </Provider>,
    );
    const page = container.querySelector('.all-cards');
    expect(page.childElementCount).toBe(0);
  });
});
