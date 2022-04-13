const GET_DATA = 'GET_DATA';

const initialState = [];

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return [...state, ...action.payload];

    default: {
      return state;
    }
  }
};

export default covidReducer;
