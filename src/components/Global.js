import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { getCovidData } from '../redux/covidData';

const Global = () => {
  const data = useSelector((store) => store.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCovidData());
  }, []);

  return (
    <div className="container">
      <h2>
        kwame
        {data}
      </h2>
    </div>
  );
};

export default Global;
