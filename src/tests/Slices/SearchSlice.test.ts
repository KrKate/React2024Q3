import searchSliceReducer, {
  initialState,
  setSearchTotal,
  setSearchValue,
} from '../../redux/store/searchSlice';

describe('SearchSliceReducer', () => {
  it('check initial state', () => {
    const state = searchSliceReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });

  it('check setSearchValueReducer', () => {
    const testValue = 'apple';
    const action = setSearchValue(testValue);
    const state = searchSliceReducer(initialState, action);
    expect(state.searchValue).toEqual(testValue);
  });

  it('check setSearchTotalReducer', () => {
    const testTotal = 10;
    const action = setSearchTotal(testTotal);
    const state = searchSliceReducer(initialState, action);
    expect(state.searchTotal).toEqual(testTotal);
  });
});
