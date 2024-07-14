import { Link } from 'react-router-dom';
import styles from './Pagination.module.css';

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      {pages.map((page) => (
        <Link
          to={`/page=${page}`}
          key={page}
          className={currentPage === page ? styles.active : ''}
          onClick={() => onPageChange(page)}
        >
          <button type="button">{page}</button>
        </Link>
      ))}
    </div>
  );
}

export default Pagination;
