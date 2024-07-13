import { useNavigate } from 'react-router-dom';
import styles from './Pagination.module.css';

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const navigate = useNavigate();
  const navigatePageChange = (page: number) => {
    onPageChange(page);
    navigate(`/page=${page}`);
  };

  return (
    <div className={styles.pagination}>
      {pages.map((page) => (
        <button
          type="button"
          key={page}
          className={currentPage === page ? styles.active : ''}
          onClick={() => navigatePageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
