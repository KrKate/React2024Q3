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
    const product = {
      id: 7,
      title: 'Product',
      price: 100,
      description: 'The awesome product!',
    };
    const action = toggleProduct(product);

    let state = initialState;
    state = chooseSliceReducer(state, action);
    expect(state.chosenProducts).toEqual([product]);

    const removeAction = toggleProduct(product);
    state = chooseSliceReducer(state, removeAction);
    expect(state.chosenProducts).toEqual([]);
  });

  it('check unselectAllProductsReducer', () => {
    const state = {
      ...initialState,
      chosenProducts: [
        {
          id: 1,
          title: 'Apple',
          price: 50,
          description: 'Description 1',
        },
        {
          id: 5,
          title: 'Orange',
          price: 70,
          description: 'Description 5',
        },
        {
          id: 7,
          title: 'Test',
          price: 100,
          description: 'Testing makes me sad',
        },
      ],
    };
    const action = unselectAllProducts();
    const newState = chooseSliceReducer(state, action);
    expect(newState.chosenProducts).toEqual(initialState.chosenProducts);
  });
});
