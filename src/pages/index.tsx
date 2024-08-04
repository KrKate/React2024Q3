// import { GetServerSideProps } from 'next';
import useTheme from '../context/contextHook';
import ProductList from './components/productList/ProductList';
import styles from '../styles/homePage.module.css';
import ThemeToggleButton from './components/ThemeButton/ThemeButton';
import { Product } from '../models';
// import { wrapper } from '../redux/store';

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

// const URL = {
//   base: 'https://dummyjson.com',
//   products: '/products',
//   search: 'search?q=',
//   limit: 'limit=',
//   skip: 'skip=',
// };

// export const getServerSideProps: GetServerSideProps =
//   wrapper.getServerSideProps(() => async (context) => {
//     console.log('getServerSideProps is called');
//     const currentPage = Number(context.query.pageNumber) || 1;
//     // const searchValue =context.query.searchValue?.toString() || '';
//     const limit = Number(context.query.limit) || 10;
//     const skip = (currentPage - 1) * limit;
//     const url = `${URL.base}${URL.products}?${URL.limit}${limit}&${URL.skip}${skip}`;

//     console.log(`URL ${url}`);
//     const res = await fetch(url);

//     if (!res.ok) {
//       console.log('Error fetch');
//       return {
//         props: {
//           products: [],
//           currentPage,
//         },
//       };
//     }

//     const data: ProductsResponse = await res.json();
//     console.log(data);

//     return {
//       props: {
//         products: data.products || [],
//         currentPage,
//       },
//     };
//   });

interface HomePageProps {
  products: Product[];
  currentPage: number;
}

function HomePage({ products, currentPage }: HomePageProps) {
  const { isDarkMode } = useTheme();
  return (
    <section className={`${isDarkMode ? 'dark' : 'light'}`}>
      <ThemeToggleButton />
      <section className={styles.searchContainer}>{/* <Search /> */}</section>
      <main className={styles.mainContainer}>
        <section className={styles.cardsContainer}>
          <ProductList products={products} currentPage={currentPage} />
        </section>
        {/* <DetailsPage /> */}
      </main>
      {/* <LimitPage />
       <Pagination />
      <Footer />  */}
    </section>
  );
}

export default HomePage;
