import fetchData from '../services/fetchData';

const GET_DATA = 'GET_DATA';

const getCovidData = () => async (dispatch) => {
  try {
    const response = await fetchData();
    const covid = [];
    response.data.forEach((country) => {
      covid.push({
        todayConfirmed: country.today_confirmed,
        todayDeaths: country.today_deaths,
        todayNewConfirmed: country.today_new_confirmed,
        todayNewDeaths: country.today_new_deaths,
        todayNewOpenCases: country.today_new_open_cases,
        todayNewRecovered: country.today_new_recovered,
        todayOpenCases: country.today_open_cases,
        todayRecovered: country.today_recovered,
        yesterdayDeaths: country.yesterday_deaths,
        yesterdayOpenCases: country.yesterday_open_cases,
        yesterdayRecovered: country.yesterday_recovered,
      });
    });
    dispatch({
      type: GET_DATA,
      covid,
    });
    return Promise.resolve(covid);
  } catch (err) {
    return Promise.reject(err);
  }
};

const reducer = (covid = [], action) => {
  switch (action.type) {
    case GET_DATA: return action.covid;
    default: return covid;
  }
};

export { getCovidData };
export default reducer;
