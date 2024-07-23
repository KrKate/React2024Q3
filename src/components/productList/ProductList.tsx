import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Card from '../Card/Card';
import { Product } from '../../models';
import styles from './ProductList.module.css';
import { AppRootState } from '../../redux/reducers';
import { setIsLoading, setProducts } from '../../redux/store/homePageSlice';
import { fetchProducts, URL } from '../../helpers/api';

function ProductList(): JSX.Element {
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: AppRootState) => state.pagination.currentPage
  );
  const products = useSelector(
    (state: AppRootState) => state.homePage.products
  );
  const limit = useSelector((state: AppRootState) => state.homePage.limit);
  const searchValue = useSelector(
    (state: AppRootState) => state.search.searchValue
  );

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      dispatch(setProducts(JSON.parse(savedProducts)));
      dispatch(setIsLoading(false));
    } else {
      dispatch(setIsLoading(true));
      fetchProducts(
        `${URL.base}${URL.limit}${limit}${URL.skip}${(currentPage - 1) * limit}&search=${searchValue}`
      ).then((commodity) => {
        dispatch(setProducts(commodity));
        dispatch(setIsLoading(false));
      });
    }
  }, [currentPage, dispatch, limit, searchValue]);

  if (products.length === 0) {
    return <p>Product not found</p>;
  }
  if (!Array.isArray(products)) {
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
