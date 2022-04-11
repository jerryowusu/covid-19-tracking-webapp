import PropTypes from 'prop-types';
// import { BsArrowRightCircle } from 'react-icons/bs';
// import './countryDetails.css';

const Country = ({ covid }) => {
  const {
    todayConfirmed,
    todayDeaths,
    todayNewConfirmed,
  } = covid;

  console.log(covid);
  console.log('country', covid.todayConfirmed);
  console.log('country', covid.todayDeaths);
  console.log('country', todayConfirmed);

  return (

    <ul className="details-wrapper">
      <li className="country-detail">
        <span>Total Confirmed</span>
        <small>
          {covid.todayConfirmed}
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
  covid: PropTypes.arrayOf(PropTypes.shape({
    todayConfirmed: PropTypes.number.isRequired,
    todayDeaths: PropTypes.number.isRequired,
    todayNewConfirmed: PropTypes.number.isRequired,
  })).isRequired,
};

export default Country;
