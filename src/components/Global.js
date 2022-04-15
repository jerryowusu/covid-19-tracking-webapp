import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { getData } from '../redux/covidData';
import getDataFromAPI from '../redux/getCovidData';
import worldMap from '../img/worldmap.png';
import './Global.css';

const Global = () => {
  const covidData = useSelector((store) => store.covidReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (covidData.length === 0) {
      getDataFromAPI()
        .then((response) => dispatch(getData(response)));
    }
  }, []);

  const [findCountry, setFindCountry] = useState('');

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
      <header className="header">
        <img className="img" src={worldMap} alt="world-map" width="60%" height="60%" />
        <div className="wrapper">
          <h1 className="header-title">World</h1>
          <h3 className="header-number">444,638,071</h3>
        </div>
      </header>
      <form className="search-form">
        <span className="form-span">Infections by Country</span>
        <input className="search-input" name="search" type="text" placeholder="country" onChange={selectCountry} />
      </form>

      <ul className="all-cards">
        {
      filteredCountries && filteredCountries.map((country) => (
        <Link className="country-lists" key={country.country} to={{ pathname: `/country/${country.country}` }}>
          <div className="country-card">
            <div className="country-images">
              <img src={country.country_flag} alt="flag" className="flag" />
              <BsArrowRightCircle className="infos-circle" />
            </div>
            <h1 className="text">{country.country}</h1>
            <p className="text">{country.total_cases}</p>
          </div>
        </Link>
      ))
    }
        {
      filteredCountries.length === 0 && covidData.map((country) => (
        <Link className="country-lists" key={country.country} to={{ pathname: `/country/${country.country}` }}>
          <div className="country-card">
            <div className="country-images">
              <img src={country.country_flag} alt="flag" className="flag" />
              <BsArrowRightCircle className="infos-circle" />
            </div>
            <h1 className="text">{country.country}</h1>
            <p className="text">{country.total_cases}</p>
          </div>
        </Link>
      ))
    }
      </ul>
    </section>
  );
};

export default Global;
