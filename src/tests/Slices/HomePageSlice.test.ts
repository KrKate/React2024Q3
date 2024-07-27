import homePageSliceReducer, {
  initialState,
  setIsDetailsOpen,
  setIsLoading,
  setLimit,
  setProduct,
  setProducts,
  setSelectedId,
  setTotal,
} from '../../redux/store/homePageSlice';

describe('HomePageSliceReducer', () => {
  it('check initial state', () => {
    const state = homePageSliceReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });

  it('check setTotalReducer', () => {
    const action = setTotal(50);
    const state = homePageSliceReducer(initialState, action);
    expect(state.total).toEqual(244);
  });

  it('check setProductsReducer', () => {
    const products = [
      { id: 1, title: 'Apple' },
      { id: 2, title: 'Pear' },
    ];
    const action = setProducts(products);
    const state = homePageSliceReducer(initialState, action);
    expect(state.products).toEqual(products);
  });

  it('check setProductReducer', () => {
    const product = { id: 1, title: 'Apple' };
    const action = setProduct(product);
    const state = homePageSliceReducer(initialState, action);
    expect(state.product).toEqual(product);
  });

  it('check setIsLoadingReducer', () => {
    const action = setIsLoading(false);
    const state = homePageSliceReducer(initialState, action);
    expect(state.isLoading).toEqual(false);
  });

  it('check setLimitReducer', () => {
    const action = setLimit(10);
    const state = homePageSliceReducer(initialState, action);
    expect(state.limit).toEqual(10);
  });

  it('check setIsDetailsOpenReducer', () => {
    const action = setIsDetailsOpen(true);
    const state = homePageSliceReducer(initialState, action);
    expect(state.isDetailsOpen).toEqual(true);
  });

  it('check setSelectetdIdReducer', () => {
    const action = setSelectedId(5);
    const state = homePageSliceReducer(initialState, action);
    expect(state.selectedId).toEqual(5);
  });
});
