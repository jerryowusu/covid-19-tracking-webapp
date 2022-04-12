import getData from '../services/fetchData';

const GET_DATA = 'GET_DATA';

const initialState = [];

const getCovidData = () => async (dispatch) => {
  try {
    const response = await getData();
    dispatch({
      type: GET_DATA,
      payload: response.data,
    });
  } catch (err) {
    // return Promise.reject(err);
    console.log(err);
  }
};

const reducer = (data = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DATA:
      return payload;
    default: return data;
  }
};

export { getCovidData };
export default reducer;
