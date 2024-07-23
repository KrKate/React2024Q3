import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import styles from './HomePage.module.css';
import ErrorButton from '../../components/ErrorButton/ErrorButton';
import ProductList from '../../components/productList/ProductList';
import LimitPage from '../../components/LimitPage/LimitPage';
import DetailsPage from '../details/DetailsPage';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';
import { AppRootState } from '../../redux/reducers';
// import { setIsLoading, setProducts } from '../../redux/store/homePageSlice';
import { useFetchProductsQuery } from '../../redux/store/apiSlice';

function HomePage() {
  // const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: AppRootState) => state.pagination.currentPage
  );
  // const products = useSelector(
  //   (state: AppRootState) => state.homePage.products
  // );
  // const isLoading = useSelector(
  //   (state: AppRootState) => state.homePage.isLoading
  // );
  const limit = useSelector((state: AppRootState) => state.homePage.limit);
  const searchValue = useSelector(
    (state: AppRootState) => state.search.searchValue
  );
  const isDetailsOpen = useSelector(
    (state: AppRootState) => state.homePage.isDetailsOpen
  );

  const {
    data: products = [],
    error,
    isLoading,
  } = useFetchProductsQuery({
    limit,
    skip: (currentPage - 1) * limit,
    search: searchValue,
  });

  // Если данные загружаются и нет продуктов, показываем Loader
  if (isLoading && (!products || products.length === 0)) {
    return <Loader />;
  }

  // Обработка ошибок
  if (error) {
    return <div>Error loading products</div>;
  }

  return (
    <>
      <aside className={styles.errorContainer}>
        <ErrorButton />
      </aside>
      <section className={styles.searchContainer}>
        <Search />
      </section>
      <main className={styles.mainContainer}>
        <section className={styles.cardsContainer}>
          {isLoading && !products.length ? <Loader /> : <ProductList />}
        </section>
        {isDetailsOpen && <DetailsPage />}
      </main>
      <LimitPage />
      <Pagination />
    </>
  );
}

export default HomePage;
