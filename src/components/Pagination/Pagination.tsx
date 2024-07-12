import { useEffect, useState } from 'react';
import styles from './Pagination.module.css';

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  const [, setSelectedPage] = useState(currentPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  useEffect(() => {
    setSelectedPage(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setSelectedPage(page);
    onPageChange(page);
  };

  return (
    <div className={styles.pagination}>
      {pages.map((page) => (
        <button
          type="button"
          key={page}
          className={currentPage === page ? styles.active : ''}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
