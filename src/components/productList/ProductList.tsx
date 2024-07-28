import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Card from '../Card/Card';
import { Product } from '../../models';
import styles from './ProductList.module.css';
import { AppRootState } from '../../redux/reducers';

import { useFetchProductsQuery } from '../../redux/store/apiSlice';

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

function ProductList() {
  const currentPage = useSelector(
    (state: AppRootState) => state.pagination.currentPage
  );
  const searchValue = useSelector(
    (state: AppRootState) => state.search.searchValue
  );
  const limit = useSelector((state: AppRootState) => state.homePage.limit);

  const { data: { products = [] } = {}, refetch } = useFetchProductsQuery({
    limit,
    skip: (currentPage - 1) * limit,
    searchValue,
  }) as { data: ProductsResponse | undefined; refetch: () => void };

  useEffect(() => {
    refetch();
  }, [refetch, searchValue]);

  if (!Array.isArray(products) || products.length === 0) {
    return <p>Product not found</p>;
  }

  return (
    <>
      {products.map((product: Product) => (
        <Link
          to={`/page=${currentPage}/details=${product.id}`}
          data-testid="card"
          key={product.id}
          className={styles.link}
        >
          <Card product={product} />
        </Link>
      ))}
    </>
  );
}

export default ProductList;
