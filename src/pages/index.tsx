import { GetServerSideProps } from 'next';
import { useSelector } from 'react-redux';
import useTheme from '../context/contextHook';
import ProductList from './components/productList/ProductList';
import styles from '../styles/homePage.module.css';
import ThemeToggleButton from './components/ThemeButton/ThemeButton';
import { Product } from '../models';
import { wrapper } from '../redux/store';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import { AppRootState } from '../redux/reducers';

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const URL = {
  base: 'https://dummyjson.com',
  products: '/products',
  search: 'search?q=',
  limit: 'limit=',
  skip: 'skip=',
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(() => async (context) => {
    console.log('getServerSideProps is called');
    const currentPage = Number(context.query.pageNumber) || 1;
    const searchValue = context.query.searchValue?.toString() || '';
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
        },
      };
    }

    const data: ProductsResponse = await res.json();

    return {
      props: {
        products: data.products || [],
        currentPage,
      },
    };
  });

interface HomePageProps {
  products: Product[];
  currentPage: number;
}

function HomePage({ products, currentPage }: HomePageProps) {
  const { isDarkMode } = useTheme();
  const chosenProducts = useSelector(
    (state: AppRootState) => state.choose.chosenProducts
  );
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
        {/* <DetailsPage /> */}
      </main>
      {/* <LimitPage />
       <Pagination /> */}
      {chosenProducts.length > 0 && <Footer />}
    </section>
  );
}

export default HomePage;
