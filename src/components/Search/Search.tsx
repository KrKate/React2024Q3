import React, { ChangeEvent, useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import styles from './Search.module.css';
import { fetchProducts, URL } from '../../helpers/api';
import { Product } from '../../models';

function Search({
  updateProducts,
}: {
  updateProducts: (updatedProducts: Product[], newTotal: number) => void;
}) {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [total] = useState(194);
  const [limit] = useState(10);
  const [, setTotalPages] = useState(total / limit);
  const [, setSearchTotal] = useState(0);

  useEffect(() => {
    const savedValue = localStorage.getItem('searchValue');
    if (savedValue) {
      setSearchValue(savedValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('searchValue', searchValue);
  }, [searchValue]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    localStorage.setItem('searchValue', searchValue);
    setIsLoading(true);
    fetchProducts(`${URL.base}${URL.search}${searchValue}`)
      .then((products) => {
        updateProducts(products, products.length);
        setSearchTotal(products.length);
        setTotalPages(Math.ceil(products.length / limit));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchComponent}>
      <input
        placeholder="Enter character name"
        type="text"
        className={styles.searchInput}
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button
        type="button"
        onClick={handleSearch}
        className={styles.searchButton}
      >
        Search
      </button>
      {isLoading && <Loader />}
    </div>
  );
}

export default Search;
