import { useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import Loader from '../../components/Loader/Loader';
import styles from './HomePage.module.css';
import ErrorButton from '../../components/ErrorButton/ErrorButton';
import { fetchProducts, URL } from '../../helpers/api';
import ProductList from '../../components/productList/ProductList';
import { Product } from '../../models';
import LimitPage from '../../components/LimitPage/LimitPage';
import Pagination from '../../components/Pagination/Pagination';
import DetailsPage from '../details/DetailsPage';

function HomePage() {
  const [total] = useState(194);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState(total / limit);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

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

  const updateProducts = (updatedProducts: Product[], newTotal: number) => {
    setProducts(updatedProducts);
    setTotalPages(Math.ceil(newTotal / limit));
    setCurrentPage(1);
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

  const toggleDetails = (id: number) => {
    if (selectedId === id) {
      setIsDetailsOpen(false);
      setSelectedId(null);
    } else {
      setIsDetailsOpen(true);
      setSelectedId(id);
    }
  };

  return (
    <div>
      <div className={styles.errorContainer}>
        <ErrorButton />
      </div>
      <div className={styles.searchContainer}>
        <Search updateProducts={updateProducts} />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.cardsContainer}>
          {isLoading && !products.length ? (
            <Loader />
          ) : (
            <ProductList products={products} toggleDetails={toggleDetails} />
          )}
        </div>
        {isDetailsOpen && <DetailsPage id={selectedId} />}
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

export default HomePage;
