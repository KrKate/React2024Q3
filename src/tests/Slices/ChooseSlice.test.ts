import chooseSliceReducer, {
  initialState,
  toggleProduct,
  unselectAllProducts,
} from '../../redux/store/chooseSlice';

describe('ChooseSliceReducer', () => {
  it('check initial state', () => {
    const state = chooseSliceReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });

  it('check toggleProductReducer', () => {
    const productID = 7;
    const action = toggleProduct(productID);
    let state = initialState;
    state = chooseSliceReducer(state, action);
    expect(state.chosenProducts).toEqual([productID]);

    const removeAction = toggleProduct(productID);
    state = chooseSliceReducer(state, removeAction);
    expect(state.chosenProducts).toEqual([]);
  });

  it('check unselectAllProductsReducer', () => {
    const state = { ...initialState, chosenProducts: [1, 5, 7] };
    const action = unselectAllProducts();
    const newState = chooseSliceReducer(state, action);
    expect(newState.chosenProducts).toEqual(initialState.chosenProducts);
  });
});
