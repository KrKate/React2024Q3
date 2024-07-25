import searchSliceReducer, {
  initialState,
} from '../../redux/store/searchSlice';

describe('SearchSliceReducer', () => {
  it('check initial state', () => {
    const state = searchSliceReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });
});
