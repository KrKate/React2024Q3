'use client';

import Link from 'next/link';
import styles from './Pagination.module.css';
import usePaginationClient from '../../hooks/usePaginationClient';

function Pagination() {
  const { pages, currentPage, handlePageChange } = usePaginationClient();

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
