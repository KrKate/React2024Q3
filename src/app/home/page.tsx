'use client';

import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../../components/productList/ProductList';
import Search from '../../components/Search/Search';
import ThemeToggleButton from '../../components/ThemeButton/ThemeButton';
import { Product } from '../../models';
import {
  setIsDetailsOpen,
  setSelectedId,
} from '../../redux/store/homePageSlice';
import Footer from '../../components/Footer/Footer';
import Pagination from '../../components/Pagination/Pagination';
import styles from './home.module.css';
import useTheme from '../../context/contextHook';
import { AppRootState } from '../../redux/reducers';
import DetailsPage from '../../components/Details/Details';

interface HomePageProps {
  products: Product[];
  // total: number;
  currentPage: number;
}

function Home({ products, currentPage }: HomePageProps) {
  const { isDarkMode } = useTheme();
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

  return (
    <section
      className={`${isDarkMode ? styles.dark : styles.light} ${styles.appContainer}`}
    >
      <ThemeToggleButton />
      <section className={styles.searchContainer}>
        <Search />
      </section>
      <main className={styles.mainContainer}>
        <section className={styles.cardsContainer}>
          <ProductList
            products={products}
            currentPage={currentPage}
            onCardClick={handleCardClick}
          />
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

export default Home;
