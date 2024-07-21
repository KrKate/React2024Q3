import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import styles from './HomePage.module.css';
import ErrorButton from '../../components/ErrorButton/ErrorButton';
import { fetchProducts, URL } from '../../helpers/api';
import ProductList from '../../components/productList/ProductList';
import LimitPage from '../../components/LimitPage/LimitPage';
import DetailsPage from '../details/DetailsPage';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';
import { AppRootState } from '../../reducers';
import { setCurrentPage, setTotalPages } from '../../store/paginationSlice';
import { setIsLoading, setLimit, setProducts } from '../../store/homePageSlice';

function HomePage() {
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: AppRootState) => state.pagination.currentPage
  );
  const total = useSelector((state: AppRootState) => state.homePage.total);
  const products = useSelector(
    (state: AppRootState) => state.homePage.products
  );
  const isLoading = useSelector(
    (state: AppRootState) => state.homePage.isLoading
  );
  const limit = useSelector((state: AppRootState) => state.homePage.limit);
  const searchValue = useSelector(
    (state: AppRootState) => state.search.searchValue
  );
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      dispatch(setProducts(JSON.parse(savedProducts)));
      dispatch(setIsLoading(false));
    } else {
      dispatch(setIsLoading(true));
      fetchProducts(
        `${URL.base}${URL.limit}${limit}${URL.skip}${(currentPage - 1) * limit}&search=${searchValue}`
      ).then((commodity) => {
        dispatch(setProducts(commodity));
        dispatch(setIsLoading(false));
      });
    }
  }, [currentPage, dispatch, limit, searchValue]);

  const handleLimitChange = (newLimit: number) => {
    dispatch(setLimit(newLimit));
    dispatch(setTotalPages(Math.ceil(total / limit)));
    dispatch(setCurrentPage(1));
  };

  const toggleDetails = (id: number) => {
    if (selectedId === id) {
      setIsDetailsOpen(false);
      setSelectedId(null);
    } else {
      setIsDetailsOpen(true);
      setSelectedId(id);
    }
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
    setSelectedId(null);
    navigate(`/page=${currentPage}`);
  };

  return (
    <div>
      <div className={styles.errorContainer}>
        <ErrorButton />
      </div>
      <div className={styles.searchContainer}>
        <Search />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.cardsContainer}>
          {isLoading && !products.length ? (
            <Loader />
          ) : (
            <ProductList
              products={products}
              toggleDetails={toggleDetails}
              page={currentPage}
            />
          )}
        </div>
        {isDetailsOpen && (
          <DetailsPage id={selectedId} onClose={handleCloseDetails} />
        )}
      </div>
      <LimitPage handleLimitChange={handleLimitChange} />
      <Pagination />
    </div>
  );
}

export default HomePage;
