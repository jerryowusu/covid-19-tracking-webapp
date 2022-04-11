import PropTypes from 'prop-types';
// import { BsArrowRightCircle } from 'react-icons/bs';
// import './countryDetails.css';

const Country = ({ country }) => {
  const {
    todayConfirmed,
    todayDeaths,
    todayNewConfirmed,
  } = country;

  //   console.log(todayDeaths);

  return (

    <ul className="details-wrapper">
      <li className="country-detail">
        <span>Total Confirmed</span>
        <small>
          {todayConfirmed}
          {/* <BsArrowRightCircle className="infos-circle" /> */}
        </small>
      </li>
      <li className="country-detail">
        <span>Total Deaths</span>
        <small>
          {todayDeaths}
          {/* <BsArrowRightCircle className="infos-circle" /> */}
        </small>
      </li>

      <li className="country-detail">
        <span>Today New Confirmed</span>
        <small>
          {todayNewConfirmed}
          {/* <BsArrowRightCircle className="infos-circle" /> */}
        </small>
      </li>

    </ul>

  );
};

Country.propTypes = {
  todayConfirmed: PropTypes.number.isRequired,
  todayDeaths: PropTypes.number.isRequired,
  todayNewConfirmed: PropTypes.number.isRequired,
  country: PropTypes.objectOf.isRequired,
};

export default Country;
