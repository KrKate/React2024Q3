'use client';

// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import DetailsPage from '../../components/details/[id]';
import ProductList from '../../components/productList/ProductList';
// import Search from '../../components/Search/Search';
import ThemeToggleButton from '../../components/ThemeButton/ThemeButton';
import { Product } from '../../models';
// import { AppRootState } from '../../redux/reducers';
import {
  setIsDetailsOpen,
  setSelectedId,
} from '../../redux/store/homePageSlice';
// import { setTotalPages } from '../../redux/store/paginationSlice';
// import Footer from '../../components/Footer/Footer';
// import Pagination from '../../components/Pagination/Pagination';
// import { AppRootState } from '../../redux/reducers';
import styles from './home.module.css';
import useTheme from '../../context/contextHook';

interface HomePageProps {
  products: Product[];
  //   total: number;
  currentPage: number;
}

function Home({ products, currentPage }: HomePageProps) {
  const { isDarkMode } = useTheme();
  const dispatch = useDispatch();
  //   const chosenProducts = useSelector(
  //     (state: AppRootState) => state.choose.chosenProducts
  //   );
  //   const currentLimit = useSelector(
  //     (state: AppRootState) => state.homePage.limit
  //   );
  // const selectedId = useSelector(
  //   (state: AppRootState) => state.homePage.selectedId
  // );

  //   useEffect(() => {
  //     dispatch(setTotalPages(Math.ceil(total / currentLimit)));
  //   }, [total, dispatch, currentLimit]);

  //  const productDetails = products.find((product) => product.id === selectedId);

  const handleCardClick = (id: number) => {
    dispatch(setSelectedId(id));
    dispatch(setIsDetailsOpen(true));
  };

  return (
    <section
      className={`${isDarkMode ? styles.dark : styles.light} ${styles.appContainer}`}
    >
      <ThemeToggleButton />
      <section>{/* <Search /> */}</section>
      <main className={styles.mainContainer}>
        <section className={styles.cardsContainer}>
          <ProductList
            products={products}
            currentPage={currentPage}
            onCardClick={handleCardClick}
          />
        </section>

        {/* {selectedId && productDetails && (
          <DetailsPage product={productDetails} />
        )} */}
      </main>
      {/* <Pagination /> */}
      {/* {chosenProducts.length > 0 && <Footer />} */}
    </section>
  );
}

export default Home;
