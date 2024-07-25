import homePageSliceReducer, {
  initialState,
} from '../../redux/store/homePageSlice';

describe('HomePageSliceReducer', () => {
  it('check initial state', () => {
    const state = homePageSliceReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });
});
