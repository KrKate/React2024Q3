import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './Pagination.module.css';
import { AppRootState } from '../../redux/reducers';
import {
  setCurrentPage,
  setTotalPages,
} from '../../redux/store/paginationSlice';
import { fetchProducts, URL } from '../../helpers/api';
import { setProducts } from '../../redux/store/homePageSlice';

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
  const searchValue = useSelector(
    (state: AppRootState) => state.search.searchValue
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTotalPages(Math.ceil(allProducts / limit)));
  }, [allProducts, limit, dispatch]);

  const handlePageChange = (pageNumber: number) => {
    console.log(`Search value:${searchValue}`);
    dispatch(setCurrentPage(pageNumber));
    fetchProducts(
      `${URL.base}${URL.search}${searchValue}&limit=${limit}&skip=${(pageNumber - 1) * limit}`
    ).then((products) => {
      dispatch(setProducts(products));
    });
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
          <button type="button">{page}</button>
        </Link>
      ))}
    </div>
  );
}

export default Pagination;
