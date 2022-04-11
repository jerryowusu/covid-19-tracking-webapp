import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigator = () => (
  <header>
    <nav>
      <NavLink to="/">Home</NavLink>
      ;
      <NavLink to="/about">About</NavLink>
      ;
      <NavLink to="/contact">Contact</NavLink>
      ;
    </nav>
  </header>
);

export default Navigator;
