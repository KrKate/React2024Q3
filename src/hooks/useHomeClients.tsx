import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../models';
import { AppRootState } from '../redux/reducers';
import { setSelectedId, setIsDetailsOpen } from '../redux/store/homePageSlice';

const useHomeClients = (products: Product[]) => {
  const dispatch = useDispatch();
  const chosenProducts = useSelector(
    (state: AppRootState) => state.choose.chosenProducts
  );
  const selectedId = useSelector(
    (state: AppRootState) => state.homePage.selectedId
  );

  const productDetails = products.find((product) => product.id === selectedId);

  const handleCardClick = (id: number) => {
    dispatch(setSelectedId(id));
    dispatch(setIsDetailsOpen(true));
  };

  return {
    chosenProducts,
    selectedId,
    productDetails,
    handleCardClick,
  };
};

export default useHomeClients;
