import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Pagination.module.css';
import { AppRootState } from '../../reducers';
import { setCurrentPage } from '../../store/paginationSlice';

function Pagination() {
  const currentPage = useSelector(
    (state: AppRootState) => state.pagination.currentPage
  );
  const totalPages = useSelector(
    (state: AppRootState) => state.pagination.totalPages
  );
  const dispatch = useDispatch();

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      {pages.map((page) => (
        <Link
          to={`/page=${page}`}
          key={page}
          className={currentPage === page ? styles.active : ''}
          onClick={() => dispatch(setCurrentPage(page))}
        >
          <button type="button">{page}</button>
        </Link>
      ))}
    </div>
  );
}

export default Pagination;
