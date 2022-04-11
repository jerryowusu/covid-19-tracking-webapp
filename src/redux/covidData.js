import fetchData from 'services/fetchData';

const GET_DATA = 'GET_DATA';

const getCovidData = () => async (dispatch) => {
  try {
    const response = await fetchData();
    const covid = [];
    response.data.forEach((data) => {
      covid.push({
        data,
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


export { getCovidData };
export default reducer;
