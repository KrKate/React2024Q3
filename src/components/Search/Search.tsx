import * as React from 'react';
import { ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import styles from './Search.module.css';
import { AppRootState } from '../../redux/reducers';
import { setSearchValue } from '../../redux/store/searchSlice';
import { setIsLoading } from '../../redux/store/homePageSlice';

function Search() {
  const searchValue = useSelector(
    (state: AppRootState) => state.search.searchValue
  );
  const isLoading = useSelector(
    (state: AppRootState) => state.homePage.isLoading
  );
  // const limit = useSelector((state: AppRootState) => state.homePage.limit);
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
    // Здесь вы можете вызвать fetchProducts, но лучше использовать useFetchPaginationQuery
    // Это будет сделано в компоненте ProductList
    dispatch(setIsLoading(false));
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <form className={styles.searchComponent}>
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
    </form>
  );
}

export default Search;
