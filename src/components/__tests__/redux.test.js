import covidReducer, { getData } from '../../redux/covidData';

const initialState = [];
describe('test redux', () => {
  it('if is empty array', () => {
    expect(covidReducer(initialState, [])).toEqual([]);
  });

  it('if it is 3 items array', () => {
    expect(covidReducer(initialState, getData(['Nigeria', 'Ghana', 'Togo']))).toEqual(['Nigeria', 'Ghana', 'Togo']);
  });

  it('if return single item', () => {
    expect(covidReducer(initialState, getData(['Ghana']))).toEqual(['Ghana']);
  });
});
