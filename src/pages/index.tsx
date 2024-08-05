import { GetServerSideProps } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import useTheme from '../context/contextHook';
import ProductList from './components/productList/ProductList';
import styles from '../styles/homePage.module.css';
import ThemeToggleButton from './components/ThemeButton/ThemeButton';
import { URL, Product } from '../models';
import { wrapper } from '../redux/store';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import { AppRootState } from '../redux/reducers';
import Pagination from './components/Pagination/Pagination';
import { setTotalPages } from '../redux/store/paginationSlice';
import DetailsPage from './components/details/[id]';

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(() => async (context) => {
    const currentPage = Number(context.query.page) || 1;
    const searchValue = context.query.search?.toString() || '';
    const limit = Number(context.query.limit) || 10;
    const skip = (currentPage - 1) * limit;
    const url = searchValue
      ? `${URL.base}${URL.products}/${URL.search}${searchValue}&${URL.limit}${limit}&${URL.skip}${skip}`
      : `${URL.base}${URL.products}?${URL.limit}${limit}&${URL.skip}${skip}`;

    const res = await fetch(url);

    if (!res.ok) {
      return {
        props: {
          products: [],
          currentPage,
          total: 0,
          limit,
        },
      };
    }

    const data: ProductsResponse = await res.json();

    return {
      props: {
        products: data.products || [],
        currentPage,
        total: data.total || 0,
        limit,
      },
    };
  });

interface HomePageProps {
  products: Product[];
  currentPage: number;
  total: number;
}

function HomePage({ products, currentPage, total }: HomePageProps) {
  const { isDarkMode } = useTheme();
  const chosenProducts = useSelector(
    (state: AppRootState) => state.choose.chosenProducts
  );
  const dispatch = useDispatch();
  const currentLimit = useSelector(
    (state: AppRootState) => state.homePage.limit
  );
  const selectedId = useSelector(
    (state: AppRootState) => state.homePage.selectedId
  );

  useEffect(() => {
    dispatch(setTotalPages(Math.ceil(total / currentLimit)));
  }, [total, dispatch, currentLimit]);

  const productDetails = products.find((product) => product.id === selectedId);

  return (
    <section className={`${isDarkMode ? 'dark' : 'light'} app-container`}>
      <ThemeToggleButton />
      <section className={styles.searchContainer}>
        <Search />
      </section>
      <main className={styles.mainContainer}>
        <section className={styles.cardsContainer}>
          <ProductList products={products} currentPage={currentPage} />
        </section>
        {selectedId && productDetails && (
          <DetailsPage product={productDetails} />
        )}
      </main>
      <Pagination />
      {chosenProducts.length > 0 && <Footer />}
    </section>
  );
}

export default HomePage;
