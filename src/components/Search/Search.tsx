import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Search.module.css';
import { setSearchValue } from '../../redux/store/searchSlice';
import { setCurrentPage } from '../../redux/store/paginationSlice';

function Search() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    dispatch(setSearchValue(inputValue));
    dispatch(setCurrentPage(1));
  };

  return (
    <form
      className={styles.searchComponent}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        placeholder="Enter product"
        type="text"
        className={styles.searchInput}
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        type="button"
        onClick={handleSearchClick}
        className={styles.searchButton}
      >
        Search
      </button>
    </form>
  );
}

export default Search;
