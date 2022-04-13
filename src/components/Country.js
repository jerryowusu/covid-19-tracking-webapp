import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import getDataFromAPI from '../redux/getCovidData';
import { getData } from '../redux/covidData';
import './Country.css';

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
    <div className="data-container">
      <header className="header">
        <div className="flag">
          <img src={locateCountry.country_flag} alt="" />
        </div>
        <div className="wrapper">
          <h1 className="header-title">{locateCountry.country}</h1>
          <h3 className="header-number">{locateCountry.population}</h3>
        </div>
      </header>
      <ul className="list-info">
        <li>
          Confirmed cases:
          <div className="number">
            {locateCountry.total_cases}
            <BsArrowRightCircle className="infos-circle" />
          </div>
        </li>
        <li>
          Recovered:
          {' '}
          <div className="number">
            {locateCountry.total_recovered}
            <BsArrowRightCircle className="infos-circle" />
            {' '}
          </div>
        </li>
        <li>
          Active Cases:
          {' '}
          <div className="number">
            {locateCountry.total_active}
            <BsArrowRightCircle className="infos-circle" />
            {' '}
          </div>
        </li>
        <li>
          Total Tests:
          {' '}
          <div className="number">
            {locateCountry.total_tests}
            <BsArrowRightCircle className="infos-circle" />
            {' '}
          </div>
        </li>
        <li>
          Deaths:
          {' '}
          <div className="number">
            {locateCountry.total_deaths}
            <BsArrowRightCircle className="infos-circle" />
            {' '}
          </div>
        </li>
        <li>
          New cases:
          {' '}
          <div className="number">
            {locateCountry.todays_cases}
            <BsArrowRightCircle className="infos-circle" />
            {' '}
          </div>
        </li>
        <li>
          Confirmed deaths:
          {' '}
          <div className="number">
            {locateCountry.todays_deaths}
            <BsArrowRightCircle className="infos-circle" />
            {' '}
          </div>
        </li>
        <li>
          New Recoveries:
          {' '}
          <div className="number">
            {locateCountry.todays_recovered}
            <BsArrowRightCircle className="infos-circle" />
            {' '}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Country;
