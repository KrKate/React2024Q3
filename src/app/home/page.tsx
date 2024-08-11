'use client';

import ProductList from '../../components/productList/ProductList';
import Search from '../../components/Search/Search';
import ThemeToggleButton from '../../components/ThemeButton/ThemeButton';
import { Product } from '../../models';
import Footer from '../../components/Footer/Footer';
import Pagination from '../../components/Pagination/Pagination';
import styles from './home.module.css';
import useTheme from '../../context/contextHook';
import DetailsPage from '../../components/Details/Details';
import useHomeClients from '../../hooks/useHomeClients';

interface HomePageProps {
  products: Product[];
  currentPage: number;
}

function Home({ products, currentPage }: HomePageProps) {
  const { isDarkMode } = useTheme();
  const { chosenProducts, selectedId, productDetails, handleCardClick } =
    useHomeClients(products);

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
