import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const date = new Date();
  const newDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`;

  return (
    <nav className="navbar">
      {(location.pathname !== '/') ? (
        <Link to="/" className="back">
          <b><FaAngleLeft /></b>
        </Link>
      ) : <span className="nav-date">{newDate}</span>}
      <span className="nav-title">
        covid 19
        {location.pathname}
      </span>
    </nav>
  );
};

export default Navbar;
