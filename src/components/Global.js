import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Country from './Country';

const Global = () => {
  const covidData = useSelector((state) => state.covidReducer);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  });

  const [findCountry, setFindCountry] = useState('');
  const filterCountries = covidData.filter((country) => {
    if (findCountry === '') {
      return country;
    } if (country.id.includes(findCountry)) {
      return country;
    }
    return '';
  });

  const selectCountry = (country) => setFindCountry(country.target.value);

  return (

    <section>
      <header className="header">
        {/* <img className="img" src={worldMap} alt="world-map" width="60%" height="60%" /> */}
        <div className="wrapper">
          <h1 className="header-title">World</h1>
          <h3 className="header-number">444,638,071</h3>
        </div>
      </header>
      <form className="search-form">
        <span className="form-span">Infections by Country</span>
        <input className="search-input" name="search" type="text" placeholder="country" onChange={selectCountry} />
      </form>
      {loading === false ? (

        <div className="countries">

          {filterCountries.map((country) => (

            <Country
              key={country.id}
              country={country}
              id={country.id}
              countryName={country.name}
              todayConfirmed={country.today_confirmed}
            />

          ))}

        </div>
      ) : (
        <h2>hello</h2>
        // <img className="spin" src={spinner} alt="virus" />
      )}
    </section>
  );
};

export default Global;
