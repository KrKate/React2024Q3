import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './Pagination.module.css';
import { AppRootState } from '../../redux/reducers';
import {
  setCurrentPage,
  setTotalPages,
} from '../../redux/store/paginationSlice';

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

  useEffect(() => {
    dispatch(setTotalPages(Math.ceil(allProducts / limit)));
  }, [allProducts, limit, dispatch]);

  const handlePageChange = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      {pages.map((page) => (
        <Link
          href={`/?page=${page}`}
          key={page}
          onClick={() => handlePageChange(page)}
        >
          <button
            type="button"
            className={`${styles.paginationButton} ${currentPage === page ? styles.active : ''}`}
          >
            {page}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default Pagination;
