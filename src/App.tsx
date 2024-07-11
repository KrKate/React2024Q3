/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import Loader from './components/Loader/Loader';
import styles from './App.module.css';
import ErrorButton from './components/ErrorButton/ErrorButton';
import { fetchProducts, URL } from './helpers/api';
import ProductList from './components/productList/ProductList';
import { Product } from './models';
import LimitPage from './components/LimitPage/LimitPage';
import Pagination from './components/Pagination/Pagination';

function App() {
  const total = 194;
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState(total / limit);

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
      setIsLoading(false);
    } else {
      setIsLoading(true);
      fetchProducts(
        `${URL.base}${URL.limit}${limit}${URL.skip}${(currentPage - 1) * limit}`
      ).then((commodity) => {
        setProducts(commodity);
        setIsLoading(false);
      });
    }
  }, [currentPage, limit]);

  const updateProducts = (updatedProducts: Product[]) => {
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setTotalPages(Math.ceil(total / newLimit));
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className={styles.errorContainer}>
        <ErrorButton />
      </div>
      <div className={styles.searchContainer}>
        <Search updateProducts={updateProducts} />
      </div>
      <div className={styles.cardsContainer}>
        {isLoading && !products.length ? (
          <Loader />
        ) : (
          <ProductList products={products} />
        )}
      </div>
      <LimitPage handleLimitChange={handleLimitChange} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
