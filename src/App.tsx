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

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
      setIsLoading(false);
    } else {
      setIsLoading(true);
      fetchProducts(`${URL.base}${URL.limit}${limit}`).then((commodity) => {
        setProducts(commodity);
        setIsLoading(false);
      });
    }
  }, [limit]);

  const updateProducts = (updatedProducts: Product[]) => {
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
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
    </div>
  );
}

export default App;
