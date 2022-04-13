/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../redux/covidData';
import getDataFromAPI from '../redux/getCovidData';

const Global = () => {
  const covidData = useSelector((store) => store.covidReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (covidData.length === 0) {
      getDataFromAPI()
        .then((response) => dispatch(getData(response)));
    }
  }, []);

  // const [loading, setLoading] = useState(true);
  const [findCountry, setFindCountry] = useState('');

  // const filterCountries = covidData.filter((country) => {
  //   if (findCountry === '') {
  //     return country;
  //   } if (country.id.includes(findCountry)) {
  //     return country;
  //   }
  //   return '';
  // });

  const filteredCountries = [];

  if (covidData.length > 0 && findCountry) {
    covidData.filter((each) => {
      if (each.country.toLowerCase().includes(findCountry)) {
        filteredCountries.push(each);
      }
      return filteredCountries;
    });
  }

  const selectCountry = (element) => setFindCountry(element.target.value);

  return (
    <section>
      <form className="search-form">
        <span className="form-span">Infections by Country</span>
        <input className="search-input" name="search" type="text" placeholder="country" onChange={selectCountry} />
      </form>

      <ul className="dataUL">
        {
      filteredCountries && filteredCountries.map((country) => (
        <Link key={country.country} to={{ pathname: `/country/${country.country}` }}>
          <div>
            <h1>{country.country}</h1>
            <br />
            Population:
            {' '}
            <p>{country.population}</p>
          </div>
          <div>
            <img src={country.country_flag} alt="flag" className="flag" />
          </div>
        </Link>
      ))
    }
        {
      filteredCountries.length === 0 && covidData.map((country) => (
        <Link key={country.country} to={{ pathname: `/country/${country.country}` }}>
          <div>
            <h1>{country.country}</h1>
            <br />
            Population:
            {' '}
            <p>{country.population}</p>
          </div>
          <div>
            <img src={country.country_flag} alt="flag" className="flag" />
          </div>
        </Link>
      ))
    }
      </ul>
    </section>
  );
};

export default Global;
