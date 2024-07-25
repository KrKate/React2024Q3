import chooseSliceReducer, {
  initialState,
} from '../../redux/store/chooseSlice';

describe('ChooswSliceReducer', () => {
  it('check initial state', () => {
    const state = chooseSliceReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });
});
