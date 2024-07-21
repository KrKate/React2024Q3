import React, { ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import styles from './Search.module.css';
import { fetchProducts, URL } from '../../helpers/api';
import { AppRootState } from '../../reducers';
import { setSearchTotal, setSearchValue } from '../../store/searchSlice';
import { setIsLoading, setProducts } from '../../store/homePageSlice';
import { setTotalPages } from '../../store/paginationSlice';

function Search() {
  const searchValue = useSelector(
    (state: AppRootState) => state.search.searchValue
  );
  const isLoading = useSelector(
    (state: AppRootState) => state.homePage.isLoading
  );
  const limit = useSelector((state: AppRootState) => state.homePage.limit);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedValue = localStorage.getItem('searchValue');
    if (savedValue) {
      dispatch(setSearchValue(savedValue));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('searchValue', searchValue);
  }, [searchValue]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
  };

  const handleSearch = () => {
    dispatch(setIsLoading(true));
    fetchProducts(`${URL.base}${URL.search}${searchValue}`)
      .then((products) => {
        dispatch(setProducts(products));
        dispatch(setSearchTotal(products.length));
        dispatch(setTotalPages(Math.ceil(products.length / limit)));
      })
      .finally(() => {
        dispatch(setIsLoading(false));
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
        placeholder="Enter product"
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
