import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import { getCovidData } from '../redux/covidData';
import Country from './Country';

const Home = () => {
  const country = useSelector((state) => state.country);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCovidData());
  }, []);

  return (
    <div className="main">
      <nav className="header">
        <h1 className="title">Covid Tracking data</h1>
        <ul className="menu-items">
          <li id="covid">
            <NavLink to="/" className="link">Covid Data</NavLink>
          </li>
          {/* <li id="about">
            <NavLink to="/about" className="link">About</NavLink>
          </li>
          <li>
            <div className="vertical-line" />
          </li>
          <li id="contact">
            <NavLink to="/contact" className="link">My Contacts</NavLink>
          </li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Country country={country} />} />
      </Routes>
    </div>
  );
};

export default Home;
