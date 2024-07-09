import React, { ChangeEvent } from 'react';
import { SearchProps, SearchState } from '../../models';
import Loader from '../Loader/Loader';
import styles from './Search.module.css';
import { fetchProducts, URL } from '../../helpers/api';

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchValue: '',
      isLoading: false,
    };
  }

  componentDidMount() {
    const savedValue = localStorage.getItem('searchValue');
    if (savedValue) {
      this.setState({ searchValue: savedValue });
    }
  }

  componentDidUpdate() {
    const { searchValue } = this.state;
    localStorage.setItem('searchValue', searchValue);
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    const { searchValue } = this.state;
    const { updateProducts } = this.props;
    localStorage.setItem('searchValue', searchValue);
    this.setState({ isLoading: true });

    fetchProducts(`${URL.base}${URL.search}${searchValue}`)
      .then((products) => {
        updateProducts(products);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  };

  render() {
    const { searchValue, isLoading } = this.state;
    return (
      <div className={styles.searchComponent}>
        <input
          placeholder="Enter character name"
          type="text"
          className={styles.searchInput}
          value={searchValue}
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyPress}
        />
        <button
          type="button"
          onClick={this.handleSearch}
          className={styles.searchButton}
        >
          Search
        </button>
        {isLoading && <Loader />}
      </div>
    );
  }
}

export default Search;
