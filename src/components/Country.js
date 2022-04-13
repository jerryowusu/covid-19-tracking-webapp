import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import getDataFromAPI from '../redux/getCovidData';
import { getData } from '../redux/covidData';

const Country = () => {
  const covidData = useSelector((store) => store.covidReducer);
  const dispatch = useDispatch();
  const { name } = useParams();

  const locateCountry = covidData.find((country) => country.country === name);

  useEffect(() => {
    if (covidData.length === 0) {
      getDataFromAPI()
        .then((response) => dispatch(getData(response)));
    }
  });

  return (
    <div className="dataContainer">
      <ul className="today">
        <h3>Today&apos;s update:</h3>
        <li>
          New cases:
          {' '}
          {locateCountry.todays_cases}
        </li>
        <li>
          Confirmed deaths:
          {' '}
          {locateCountry.todays_deaths}
        </li>
        <li>
          New Recoveries:
          {' '}
          {locateCountry.todays_recovered}
        </li>
      </ul>
      <ul className="total">
        <h3>Total:</h3>
        <li>
          Confirmed cases:
          {' '}
          {locateCountry.total_cases}
        </li>
        <li>
          Recovered:
          {' '}
          {locateCountry.total_recovered}
        </li>
        <li>
          Active Cases:
          {' '}
          {locateCountry.total_active}
        </li>
        <li>
          Total Tests:
          {' '}
          {locateCountry.total_tests}
        </li>
        <li>
          Deaths:
          {' '}
          {locateCountry.total_deaths}
        </li>
      </ul>
    </div>
  );
};

export default Country;
