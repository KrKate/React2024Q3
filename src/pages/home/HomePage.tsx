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
import { useFetchProductsQuery } from '../../redux/store/apiSlice';
import Footer from '../../components/Footer/Footer';

function HomePage() {
  const currentPage = useSelector(
    (state: AppRootState) => state.pagination.currentPage
  );
  const limit = useSelector((state: AppRootState) => state.homePage.limit);
  const isDetailsOpen = useSelector(
    (state: AppRootState) => state.homePage.isDetailsOpen
  );

  const {
    data: products = [],
    isError,
    isLoading,
  } = useFetchProductsQuery({
    limit,
    skip: (currentPage - 1) * limit,
  });

  if (isLoading && (!products || products.length === 0)) {
    return <Loader />;
  }

  if (isError) {
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
      <Footer />
    </>
  );
}

export default HomePage;
