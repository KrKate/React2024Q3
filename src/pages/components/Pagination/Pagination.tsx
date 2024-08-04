import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './Pagination.module.css';
import { AppRootState } from '../../../redux/reducers';
import {
  setCurrentPage,
  setTotalPages,
} from '../../../redux/store/paginationSlice';

function Pagination() {
  const allProducts = useSelector(
    (state: AppRootState) => state.homePage.total
  );
  const limit = useSelector((state: AppRootState) => state.homePage.limit);
  const totalPages = useSelector(
    (state: AppRootState) => state.pagination.totalPages
  );
  const currentPage = useSelector(
    (state: AppRootState) => state.pagination.currentPage
  );
  const dispatch = useDispatch();
  // const {
  //   data: products,
  //   isLoading,
  //   isError,
  // } = useFetchPaginationQuery({ searchValue, limit, pageNumber: currentPage });

  useEffect(() => {
    dispatch(setTotalPages(Math.ceil(allProducts / limit)));
  }, [allProducts, limit, dispatch]);

  // useEffect(() => {
  //   if (products) {
  //     dispatch(setProducts(products));
  //   }
  // }, [products, dispatch]);

  const handlePageChange = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      {pages.map((page) => (
        <Link
          to={`/page=${page}`}
          key={page}
          className={currentPage === page ? styles.active : ''}
          onClick={() => handlePageChange(page)}
        >
          <button
            type="button"
            className={currentPage === page ? styles.active : ''}
          >
            {page}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default Pagination;
